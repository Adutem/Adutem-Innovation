export default class Animator {
  private elementsToAnimate: NodeListOf<Element>;
  constructor() {
    this.elementsToAnimate = document.querySelectorAll("[class*='maa-']");
    this.init();
  }

  private init() {
    const styleElement = document.createElement("style");

    this.elementsToAnimate.forEach((el: Element) => {
      const classList = el.classList;
      Array.from(classList).forEach((className) => {
        if (className.startsWith("maa-")) {
          //   const [property, value] = className.split("-").slice(2); // Split className into property and value
          const [propertyWithBracket, valueWithBracket] = className
            .split("-")
            .slice(1);
          const property = propertyWithBracket.split("-")[0]; // Extract property (e.g., translateX)
          if (property === "transition") {
            // Handle transition property separately
            const transitionValue = valueWithBracket.slice(1, -1); // Remove the leading '[' and trailing ']' to get the value (e.g., 0.5s ease)
            // this.applyTransition(el, transitionValue);

            this.injectRule(
              styleElement,
              className,
              `transition: ${transitionValue};`
            );
          } else {
            const propertyMap: Record<string, string> = {
              translate: "translate",
              translateX: "translateX",
              translateY: "translateY",
              rotate: "rotate",
              rotateX: "rotateX",
              rotateY: "rotateY",
              // Add more properties as needed
            };
            const value = valueWithBracket.slice(1, -1); // Remove the leading '[' and trailing ']' to get the value (e.g., 300px)
            // this.applyTransformation(el, property, value);
            if (propertyMap[property]) {
              // Apply the transformation to the element style
              let transformValue = `${propertyMap[property]}(${value})`;
              this.injectRule(
                styleElement,
                className,
                `transform: ${transformValue};`
              );
            }
          }
        }
      });
    });

    // Append the style element to the document head
    document.head.appendChild(styleElement);
  }

  private applyTransformation(
    element: Element,
    property: string,
    value: string
  ) {
    // Map the property to the corresponding CSS property
    const propertyMap: Record<string, string> = {
      translate: "translate",
      translateX: "translateX",
      translateY: "translateY",
      rotate: "rotate",
      rotateX: "rotateX",
      rotateY: "rotateY",
      // Add more properties as needed
    };

    // Check if the property is in the map
    if (propertyMap[property]) {
      // Apply the transformation to the element style
      const transformValue = `${propertyMap[property]}(${value})`;
      if (element instanceof HTMLElement) {
        if (element.style.transform) {
          element.style.transform += ` ${transformValue}`;
        } else {
          element.style.transform = transformValue;
        }
      }
    }
  }

  private applyTransition(element: Element, transitionValue: string) {
    if (element instanceof HTMLElement) {
      element.style.transition = transitionValue;
    }
  }

  //   private injectRule(className: string, rule: string) {
  //     const styleSheet = document.styleSheets[0];
  //     if (styleSheet) {
  //       const selector = `.${className}`;
  //       const cssRule = `${selector} { ${rule} }`;
  //       styleSheet.insertRule(cssRule, styleSheet.cssRules.length);
  //     }
  //   }

  private escapeSpecialCharacters(className: string) {
    // Use the replace method with regular expressions
    // to replace '[' with '\[' and ']' with '\]'
    const escapedClassName = className
      .replace(/\[/g, "\\[")
      .replace(/\]/g, "\\]")
      .replace(/\./g, "\\.");
    return escapedClassName;
  }

  private injectRule(
    styleElement: HTMLStyleElement,
    className: string,
    rule: string
  ) {
    styleElement.appendChild(
      document.createTextNode(
        `.${this.escapeSpecialCharacters(className)} { ${rule} }`
      )
    );
  }
}
