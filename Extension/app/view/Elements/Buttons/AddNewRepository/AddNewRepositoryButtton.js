import BaseElement from "../../BaseElement/BaseElement.js";

export default class AddNewRepositoryButton extends BaseElement {
    constructor(node) {
        super(node);

        this.#init();
    }

    #init() {
        this.#initEventListeners();
    }

    #initEventListeners() {
        this._root.addEventListener("click", this.#click.bind(this));
    }

    #click() {
        const event = new CustomEvent("addNewRepositoryButtonClick", {
            bubbles: true,
        });

        this._root.dispatchEvent(event);
    }
}
