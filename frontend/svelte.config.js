import {mdsvex} from "mdsvex";
import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {parse} from "@std/toml";
import {toKebabCase} from "@std/text";
import {visit} from 'unist-util-visit';
import {toString} from 'mdast-util-to-string';

const RE_SCRIPT_START =
    /<script(?:\s+?[a-zA-z]+(=(?:["']){0,1}[a-zA-Z0-9]+(?:["']){0,1}){0,1})*\s*?>/;
const RE_SRC = /src\s*=\s*"(.+?)"/;

function enhancedImage() {
    const globalComponents = ['Map']
    const globalComponentDirectory = '$lib/components/markdown';

    return function transformer(tree, file) {
        let scripts = "";
        let currentHeader;
        // Add Ids to Headlines
        visit(tree, 'heading', node => {
            const setNodeId = (node, id) => {
                if (!node.data) node.data = {}
                if (!node.data.hProperties) node.data.hProperties = {}
                node.data.id = node.data.hProperties.id = id
            }

            const getDefaultId = children => {
                let text = children
                    .map(child => toString(child).trim())
                    .join(' ')
                    .trim();

                return toKebabCase(text)
            }

            if (!file.data.fm) {
                file.data.fm = {}
            }

            if (!file.data.fm.toc) {
                file.data.fm.toc = []
            }
            const id = getDefaultId(node.children);

            if (node.depth === 2) {
                currentHeader = {
                    text: toString(node),
                    id: id,
                    depth: node.depth,
                    children: [], // Initialize an empty array for potential h3 children
                };

                file.data.fm.toc.push(currentHeader);
                setNodeId(node, id)
                return;
            }

            if (node.depth === 3 && currentHeader) { // Check if the heading is an h3 and there is a current header

                currentHeader.children.push({
                    text: toString(node),
                    id: id,
                    depth: node.depth,
                });

                setNodeId(node, id)
            }

            setNodeId(node, id)
        });

        // Enhance Images
        visit(tree, 'image', (node) => {
            if (!node.url.startsWith(".")) {
                return
            }

            // Generate a unique identifier for the import
            const importName = `_img${Math.random().toString(36).substr(2, 9)}`;

            // Create the import statement
            const importStatement = `import ${importName} from '${decodeURIComponent(node.url)}?enhanced';\n`;
            scripts += `${importStatement}`

            // Create the image component
            const imageComponent = `<span class="w-full flex justify-center"><enhanced:img class="max-w-sm" src={${importName}} title="${node.title}" alt="${node.alt || ''}"></enhanced:img></span>`;

            // Replace the node with the import and component
            node.type = 'html';
            node.value = imageComponent;
        });

        // Import Global Components
        visit(tree, 'html', (node) => {
            let usedComponents = globalComponents.filter((componentName) => {
                return node.value.includes('<' + componentName)
            })
            if (usedComponents.length <= 0) {
                return;
            }

            usedComponents.forEach((componentName) => {
                const importStatement = `import ${componentName} from '${globalComponentDirectory}/${componentName}.svelte';\n`;
                scripts += `${importStatement}`
            })
        });

        let is_script = false;
        visit(tree, "html", (node) => {
            if (RE_SCRIPT_START.test(node.value)) {
                is_script = true;
                node.value = node.value.replace(RE_SCRIPT_START, (script) => {
                    return `${script}\n${scripts}`;
                });
            }
        });

        if (!is_script) {
            tree.children.push({
                type: "html",
                value: `<script>\n${scripts}</script>`,
            });
        }


    }
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    layout: "./src/lib/components/markdown/layout.svelte",
    remarkPlugins: [
        enhancedImage
    ],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex(mdsvexOptions)
    ],

    kit: {
        alias: {
            // an alias ending /* will only match
            // the contents of a directory, not the directory itself
            '$content': 'src/content',
            '$tools': 'src/tools',
        },
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: adapter()
    },

    extensions: [".svelte", ".svx", ".md"]
};

export default config;
