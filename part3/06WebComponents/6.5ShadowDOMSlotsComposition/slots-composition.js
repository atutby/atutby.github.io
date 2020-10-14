customElements.define('user-card', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <div>Имя:
            <slot name="username"></slot>
        </div>
        <div>Дата рждения:
            <slot name="birthday"></slot>
        </div>
        <fieldset>
            <legend>Другая информация</legend>
            <slot></slot>
        </fieldset>
        `;
    }
});

