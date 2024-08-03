import './bootstrap';
import { createInertiaApp } from '@inertiajs/inertia-react';

export default function App() {
    createInertiaApp({
        resolve: name => require(`./Pages/${name}`),
        setup({ el, App, props }) {
            render(<App {...props} />, el);
        },
    });
}