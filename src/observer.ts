interface Subject<T> {
    addObserver: (observer: Observer<T>) => void;
    removeObserver: (observer: Observer<T>) => void;
    notifyObserver: () => void;
}

interface Observer<T> {
    readonly viewName: string;
    update: (model: T) => void;
}


class ModelSubject<T> implements Subject<T> {

    private observers: Array<Observer<T>> = [];

    private model: T;

    public addObserver(observer: Observer<T>): void {
        this.observers = [observer, ...this.observers];
    }

    public notifyObserver(): void {
        for (let observer of this.observers) {
            observer.update(this.model);
        }
    }

    removeObserver(observer: Observer<T>): void {
        let observers = [];
        for (let obs of this.observers) {
            if (obs.viewName !== observer.viewName) {
                observers = [obs, ...observers]
            }
        }
        this.observers = observers;
    }

    public updateModel(model: T) {
        this.model = model;
        this.notifyObserver()
    }

}

class ViewObserver<T> implements Observer<T> {
    readonly viewName: string;

    public update(): void {
        // update the view template
    }
}

export {
    Subject,
    Observer,
    ModelSubject,
    ViewObserver,
}