import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.jsx']),
        react(),
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },
});


// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';
// import path from 'path';

// export default defineConfig({
//     plugins: [
//         laravel(['resources/js/app.jsx']),
//         react(),
//     ],
//     css: {
//         postcss: {
//             plugins: [
//                 tailwindcss,
//                 autoprefixer,
//             ],
//         },
//     },
//     resolve: {
//         alias: {
//             '@shadcn/ui': path.resolve(__dirname, 'node_modules/@shadcn/ui/src'),
//         },
//     },
// });
