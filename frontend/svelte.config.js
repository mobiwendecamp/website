import {mdsvex} from "mdsvex";
import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {parse} from "@std/toml";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    layout: "./src/lib/components/markdown/layout.svelte",
    frontmatter: {
        type: 'toml',
        marker: '+',
        parse(frontmatter, messages) {
            try {
                if (!frontmatter) {
                    return {};
                }

                return parse(frontmatter);
            } catch (e) {
                messages.push(
                    "Parsing error on line " +
                    e.line +
                    ", column " +
                    e.column +
                    ": " +
                    e.message
                );
            }
        }
    }
};


/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {
        alias: {
            // an alias ending /* will only match
            // the contents of a directory, not the directory itself
            '$content': 'src/content'
        },
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: adapter()
    },

    extensions: [".svelte", ".svx", ".md"]
};

export default config;
