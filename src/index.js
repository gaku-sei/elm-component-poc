const Elm = require('./Main');

customElements.define('elm-counter', class extends HTMLElement {
  connectedCallback() {
    // Without Shadow DOM
    // const root = document.createElement('div');
    // this.app = Elm.Main.embed(root);
    // this.appendChild(root);

    const shadow = this.attachShadow({ mode: 'open' });
    this.app = Elm.Main.embed(shadow);

    this.app.ports.increment.subscribe(counter => {
      this.dispatchEvent(new CustomEvent('change', { detail: counter }));
    });

    this.app.ports.decrement.subscribe(counter => {
      this.dispatchEvent(new CustomEvent('change', { detail: counter }));
    });
  }
});
