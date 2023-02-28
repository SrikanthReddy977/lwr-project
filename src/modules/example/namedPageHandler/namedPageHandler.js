// src/modules/example/namedPageHandler/namedPageHandler.js

export default class NamedPageHandler {
    callback;

    constructor(callback) {
        this.callback = callback;
    }

    dispose(){
        /* noop */
    }

    update({ attributes }) {
        let viewGetter;

        // Get the "pageName" from the incoming page reference
        switch (attributes.pageName) {
            case 'about':
                viewGetter = () => import('example/about');
                break;
            case 'contact':
                viewGetter = () => import('example/contact');
                break;
            default:
                return;
        }

        this.callback({
            viewset: {
                default: viewGetter,
            },
        });
    }
}