const style = `
  <style>
    button {
      position: relative;
      border: 2px solid black;
      padding: 4px 24px;
      background-color: #fff;
      color: #000;
      font-family: Krungthep;
      cursor: pointer;
    }

    button:active {
        background-color: #010101;
        color: white;
    }
  </style>
`;

const template = ` <button><slot></slot></button>`;

class WCButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = `${style} ${template}`;
  }
}

customElements.define("wc-button", WCButton);