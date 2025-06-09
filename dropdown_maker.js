  /*
  @param name : String - Name of the button.
  @param options : An Object - key is the label of the option, value is the callback function.
  @param optionsClassName : String - A class to add to all options button for styling. 
  @param classes : Array of Strings - an array of any additional classes to be applied to the button. 
  */
const dropdown = function (name, options, optionsClassName = "", classes = []) {
  /*
  @description Creates a div container, which holds button and options div.
  @returns div : HTML element - returns the div container and the children. Sets the ID of div to `div-${@param name}`
  */
  const make = function () {
    const container = document.createElement("div");
    container.id = `div-${name}`;
  };

  /*
  Helper function for make();
  @description Creates a button with {@param name} which when hovered over reveals the options in a list format.
  @param action : Function - A callback function to do when button is clicked.
  @returns button : HTML element. 
  */
  const makeButton = function (action) {
    const button = document.createElement("button");
    button.textContent = name;

    //Set click event to trigger action callback function.
    button.addEventListener("mouseover", action);

    classes.forEach((additional_class) => {
      button.classList.add(additional_class);
    });

    return button;
  };

  /*
  Helper function for make();
  @description Creates a div holding all options.
  @param options : An Object - key is the label of the option, value is the callback function.
  @returns div : HTML element - containing all options.
  */
  const makeOptionsDiv = function () {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("hidden");
    
    for (let optionName in options) {
      const callbackFunction = options[optionName];

      const button = document.createElement("button");
      button.textContent = optionName;
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
