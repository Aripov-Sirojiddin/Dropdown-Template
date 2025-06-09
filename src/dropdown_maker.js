/*
  @param name : String - Name of the button.
  @param options : An Object - key is the label of the option, value is the callback function.
  @param optionsClassName : String - A class to add to all options button for styling. 
  @param classes : Array of Strings - an array of any additional classes to be applied to the button. 
  */
export const dropdown = function (name, options, optionsClassName = "", classes = []) {
  /*
  @description Creates a div container, which holds button and options div.
  @returns div : HTML element - returns the div container and the children. Sets the ID of div to `div-${@param name}`
  */
  const make = function () {
    const container = document.createElement("div");
    container.id = `div-${name}`;

    const optionsDiv = makeOptionsDiv();
    const button = makeButton(optionsDiv);

    container.appendChild(button);
    container.appendChild(optionsDiv);

    return container
  };

  /*
  Helper function for make();
  @description Creates a button with {@param name} which when hovered over reveals the options in a list format.
  @param optionsDiv : HTML element - A container holding all the options.
  @returns button : HTML element. 
  */
  const makeButton = function (optionsDiv) {
    const button = document.createElement("button");
    button.textContent = name;

    //Set click event to trigger action callback function.
    button.addEventListener("mouseover", () => optionsDiv.classList.remove("hidden"));
    button.addEventListener("mouseout", () => optionsDiv.classList.add("hidden"));

    classes.forEach((additional_class) => {
      button.classList.add(additional_class);
    });

    return button;
  };

  /*
  Helper function for make();
  @description Creates a div holding all options.
  @returns div : HTML element - containing all options.
  */
  const makeOptionsDiv = function () {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("hidden");

    for (let optionName in options) {
      const callbackFunction = options[optionName];

      const button = document.createElement("button");
      button.textContent = optionName;
      if(optionsClassName.length > 0)
        button.classList.add(optionsClassName);

      button.addEventListener("click", callbackFunction);
      optionsContainer.appendChild(button);
    }
    return optionsContainer;
  };

  return {
    make,
  };
};

