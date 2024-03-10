interface State {
    tags: {
        [k: string]: any,
        update: (name: string, value: string) => void,
    };
}

type Callback = (state: State) => void;

class Arobase {

    private views: {[k: string]: any} = {};
    public state: State = {
        tags: {
            update: (name, value) => {},
        },
    };

    constructor(appName: string, model: any) {
        const app = document.getElementById(appName);

    }

    public registerView(viewName: string, callback: Callback) {
        this.views = {
            [viewName]: {
                callback,
            },
            ...this.views,
        };
        this.state.tags = {
            [viewName]: {},
            ...this.state.tags,
        };
        this.updateViews(viewName);
    }

    private updateViews(viewName: string) {
        for (const [k, view] of Object.entries(this.views)) {
            if (k === viewName) {
                for (const [_, func] of Object.entries(view)){
                    const callback = func as Callback;
                    this.update(viewName, callback);
                }
            }
        }
    }

    private update(viewName: string, callback: Callback) {
        this.state.tags.update = (name: string, value: string) => {
            this.state.tags[viewName][name] = value;
        };
        callback(this.state);
        // update DOM
        this.updateDOMForView(viewName);
    }

    private updateDOMForView(viewName: string) {
        const views = document.querySelectorAll(`[ar-view=${viewName}]`);
        views.forEach((node) => {
            const tags = node.querySelectorAll("[ar-tag]");
            tags.forEach((tag) => {
                const tagName = tag.getAttribute("ar-tag");
                tag.innerHTML = this.state.tags[viewName][tagName];
            });
        });
    }
}

export {
    Arobase,
    Callback,
    State,
};