customElements.define(
    "user-card",
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(
          document.getElementById("tmpl").content.cloneNode(true)
        );
      }
    }
  );
