import {defineConfig} from "vitest/config";
import {paraglide} from "@inlang/paraglide-sveltekit/vite";
import {sveltekit} from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
export default defineConfig({
    plugins: [
        sveltekit(),
        enhancedImages(),
        paraglide({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide"
        })],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
