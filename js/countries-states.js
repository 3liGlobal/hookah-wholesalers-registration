var countriesWithState = ["ARE", "ESP", "IRQ", "POL", "SDN", "USA"];

var original_zf_MandArray = [
  "Name_Last",
  "Email",
  "SingleLine",
  "Address_AddressLine1",
  "Address_City",
  "Address_Region",
  "Address_ZipCode",
  "Address_Country",
];
var zf_MandArray = original_zf_MandArray.slice();

window.onload = function () {
  var countySel = document.querySelector(".zf-form-sBox"),
    stateDropdown = document.querySelector(".state-dropdown"),
    stateText = document.querySelector(".state-text");

  // Populate country dropdown on page load
  for (var country in countries) {
    countySel.options[countySel.options.length] = new Option(
      country,
      countries[country]
    );
  }

  // Handle change event on country dropdown
  countySel.onchange = function () {
    updateStateDropdown();
    updateArray();
  };

  function updateStateDropdown() {
    // Clear existing options
    stateDropdown.length = 1;

    if (countySel.selectedIndex < 1) {
      // Hide both state dropdown and state text input if no country is selected
      stateDropdown.style.display = "none";
      stateText.style.display = "block";
      return;
    }

    // Show either state dropdown or state text input based on the selected country
    if (countriesWithState.includes(countySel.value)) {
      stateDropdown.style.display = "block";
      stateText.style.display = "none";
      for (var state in States[countySel.value]) {
        stateDropdown.options[stateDropdown.options.length] = new Option(
          state,
          States[countySel.value][state]
        );
      }
    } else {
      stateDropdown.style.display = "none";
      stateText.style.display = "block";
    }
  }

  function updateArray() {
    // setTimeout(function () {
    var isDropdownVisible = stateDropdown.style.display === "block";

    // Remove "Address_Region" if the dropdown is hidden
    zf_MandArray = original_zf_MandArray.filter(function (element) {
      return element !== "Address_Region" || isDropdownVisible;
    });

    console.log(zf_MandArray);
    // }, 100); // Adjust the delay as needed
  }

  // Initial setup
  updateStateDropdown();
  updateArray();
};
