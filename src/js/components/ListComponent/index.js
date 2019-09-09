import BaseComponent from '../BaseComponent';

export default class ListComponent extends BaseComponent {
    constructor(items = []) {
        super();
        this.items = items;
    }

    createComponent() {
        if (!this.items.length) {
            return;
        }

        const list = document.createElement('ul');
        this.items.map((item) => {
            const li = document.createElement('li');
            li.innerText = item;
            list.appendChild(li);
        })

        this.component = list;
    }
}