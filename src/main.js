import { dropdown } from "./dropdown_maker";

(() => {
  const priorityDropdown = dropdown("Priority", {
    Highest: () => alert("This is high priority."),
    Medium: () => alert("This is medium priority."),
    Low: () => alert("This is low priority."),
  }).make();

  document.body.appendChild(priorityDropdown);
})();
