const dropdown = function (name, options, classes = []) {
  /*
  @description Creates a div container, which holds button and options div.
  @param name : String - name of the button
  @param options : An Object - key is the label of the option, value is the callback function
  @param classes : Array of Strings - an array of any additional classes to be applied to the button. 
  @returns div : HTML element - returns the div container and the children. Sets the ID of div to `div-${@param name}`
  */
  const make = function () {
    const container = document.createElement("div");
    container.id = `div-${name}`;
  };

  /*
  @description Creates a button with {@param name} which when hovered over reveals the options in a list format.
  @param name : String - name of the button;
  @param action : Function - A callback function to do when button is clicked.
  @returns button : HTML element. 
  */
  const makeButton = function (name, action, classes) {
    const button = document.createElement("button");
    button.textContent = name;

    //Set click event to trigger action callback function.
    button.addEventListener("mouseover", () => action);
    
    classes.forEach(additional_class => {
      button.classList.add(additional_class);
    });

    return button;
  };
  return {
    make,
  };
};
