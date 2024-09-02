export class H1Sawayaka extends HTMLElement {
  constructor(fontSize = "200%") {
    super();
    this.style.backgroundImage = "linear-gradient(45deg, #3b56dc, #f768d3 30%, #f2bc5f)";
    this.style.backgroundClip = "text";
    this.style.color = "transparent";
    this.style.animation = "h1grad_always 3s ease-in-out infinite both";
    this.style.animationDirection = "alternate";
    this.style.backgroundSize = "300% 300%";
    this.style.fontSize = fontSize;
    this.style.display = "block";

    const style = document.createElement("style");
    style.textContent = `@keyframes h1grad_always {
      from {
        background-position: 0% 0%;
      }
      to {
        background-position: 100% 100%;
      }
    }`;
    this.appendChild(style);
  }
};

customElements.define("h1-sawayaka", H1Sawayaka);

export class H2Sawayaka extends H1Sawayaka {
  constructor(fontSize = "150%") {
    super(fontSize);
  }
};

customElements.define("h2-sawayaka", H2Sawayaka);
