class BlendedButton extends HTMLElement {
     constructor() {
          super();
          this.attachShadow({ mode: "open" });

          this.shadowRoot.innerHTML = `
        <style>
       /*variables*/
          :host {
               --bb-color1: black;
               --bb-color2: beige;
               --bb-height: fit-content;
               --bb-width: fit-content;
               --bb-blend: difference;
               --bb-font-size: max(calc(0.5 * var(--bb-height)), 1em);
          }

          #button-container {
          margin: 5px;
               position: relative;
                width: var(--bb-width);
               height: var(--bb-height);
               border-radius: var(--bb-height);
               overflow: hidden;
              
          }

          #button {
               width: var(--bb-width);
               height: var(--bb-height);
               margin: 0;
               padding: 0 5px;
               background: var(--bb-color1);
               color: var(--bb-color2);
               border: 3px solid var(--bb-color2);
               border-radius: var(--bb-height);
               position: relative;
               z-index: 2;
               transition: mix-blend-mode;
               font-size: var(--bb-font-size);
          }

          #button-overlay {
               position: absolute;
               background-color: var(--bb-color2);
               border-radius: var(--bb-height);
               width: 100%;
               height: 100%;
               transform: translate(0, 0) scale(1);
               transition: transform 0.5s ease-in-out;


               z-index: 1;
          }

          #button-container:hover #button {
               mix-blend-mode: var(--bb-blend);
          }
      </style>
      
      <div id="button-container">
          <button id="button">Hover me!</button>
     <div id="button-overlay"></div>
     </div>
      `;
     }

     static get observedAttributes() {
          return ["button-text"];
     }

     attributeChangedCallback(name, oldValue, newValue) {
          if (name === "button-text" && this.buttonElement) {
               this.buttonElement.innerText = newValue;
          }
     }

     connectedCallback() {
          this.buttonContainer = this.shadowRoot.getElementById(
               "button-container"
          );
          this.buttonOverlay = this.shadowRoot.getElementById("button-overlay");
          this.buttonElement = this.shadowRoot.getElementById("button");

          // Set initial value from the attribute
          this.buttonElement.innerText =
               this.getAttribute("button-text") || "Hover me!";

          this.buttonContainer.addEventListener(
               "mouseenter",
               this.animateBlending.bind(this)
          );
          this.addEventListener("mouseleave", () => {
               this.buttonOverlay.style.cssText =
                    "transform: translate(0, 0) scale(0); transition: transform 0s ease-in;";
          });
     }

     animateBlending(event) {
          const containerRect = this.buttonContainer.getBoundingClientRect();
          const { top, left, width, height } = containerRect;

          const mouseX = event.clientX - left;
          const mouseY = event.clientY - top;

          const rangeWidth = { start: width * 0.2, end: width * 0.8 };
          // todo. create a style object here instead of using template strings
          function generateStyle() {
               switch (true) {
                    case mouseX < rangeWidth.start:
                         return `left: -100%; top: 0px; transform: translate(100%,0) `;
                    case mouseX > rangeWidth.end:
                         return `right: -100%; top: 0px; transform: translate(-100%,0) `;

                    case mouseY < height / 2:
                         return `top: -100%; transform: translate(0,100%) ; transition: transform .6s ease-in-out;`;

                    default:
                         return `top: 100%; transform: translate(0,-100%) ; transition: transform .6s ease-in-out;`;
               }
          }

          this.buttonOverlay.style.cssText = generateStyle();
     }
}

customElements.define("blended-button", BlendedButton);

let testButton = document.getElementById("test-button");
testButton.setAttribute("button-text", "Hi there!");