class WebStorageInfo extends HTMLElement {
  usedStorageElement: HTMLSpanElement;

  constructor() {
    super();
    this.usedStorageElement = <HTMLSpanElement>this.querySelector("#used-storage");
  }

  connectedCallback() {
    this.animateUsedStorage(this.usedStorageElement, 0, 815, 900);
  }

  animateUsedStorage(
    element: HTMLElement,
    start: number,
    end: number,
    duration: number
  ) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = String(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}

export default WebStorageInfo;