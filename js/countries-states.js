const convert_ISO_3166_2_to_1 =
  { 'AF': 'AFG', 'AX': 'ALA', 'AL': 'ALB', 'DZ': 'DZA', 'AS': 'ASM', 'AD': 'AND', 'AO': 'AGO', 'AI': 'AIA', 'AQ': 'ATA', 'AG': 'ATG', 'AR': 'ARG', 'AM': 'ARM', 'AW': 'ABW', 'AU': 'AUS', 'AT': 'AUT', 'AZ': 'AZE', 'BS': 'BHS', 'BH': 'BHR', 'BD': 'BGD', 'BB': 'BRB', 'BY': 'BLR', 'BE': 'BEL', 'BZ': 'BLZ', 'BJ': 'BEN', 'BM': 'BMU', 'BT': 'BTN', 'BO': 'BOL', 'BA': 'BIH', 'BW': 'BWA', 'BV': 'BVT', 'BR': 'BRA', 'IO': 'IOT', 'BN': 'BRN', 'BG': 'BGR', 'BF': 'BFA', 'BI': 'BDI', 'KH': 'KHM', 'CM': 'CMR', 'CA': 'CAN', 'CV': 'CPV', 'KY': 'CYM', 'CF': 'CAF', 'TD': 'TCD', 'CL': 'CHL', 'CN': 'CHN', 'CX': 'CXR', 'CC': 'CCK', 'CO': 'COL', 'KM': 'COM', 'CG': 'COG', 'CD': 'COD', 'CK': 'COK', 'CR': 'CRI', 'CI': 'CIV', 'HR': 'HRV', 'CU': 'CUB', 'CY': 'CYP', 'CZ': 'CZE', 'DK': 'DNK', 'DJ': 'DJI', 'DM': 'DMA', 'DO': 'DOM', 'EC': 'ECU', 'EG': 'EGY', 'SV': 'SLV', 'GQ': 'GNQ', 'ER': 'ERI', 'EE': 'EST', 'ET': 'ETH', 'FK': 'FLK', 'FO': 'FRO', 'FJ': 'FJI', 'FI': 'FIN', 'FR': 'FRA', 'GF': 'GUF', 'PF': 'PYF', 'TF': 'ATF', 'GA': 'GAB', 'GM': 'GMB', 'GE': 'GEO', 'DE': 'DEU', 'GH': 'GHA', 'GI': 'GIB', 'GR': 'GRC', 'GL': 'GRL', 'GD': 'GRD', 'GP': 'GLP', 'GU': 'GUM', 'GT': 'GTM', 'GG': 'GGY', 'GN': 'GIN', 'GW': 'GNB', 'GY': 'GUY', 'HT': 'HTI', 'HM': 'HMD', 'VA': 'VAT', 'HN': 'HND', 'HK': 'HKG', 'HU': 'HUN', 'IS': 'ISL', 'IN': 'IND', 'ID': 'IDN', 'IR': 'IRN', 'IQ': 'IRQ', 'IE': 'IRL', 'IM': 'IMN', 'IL': 'ISR', 'IT': 'ITA', 'JM': 'JAM', 'JP': 'JPN', 'JE': 'JEY', 'JO': 'JOR', 'KZ': 'KAZ', 'KE': 'KEN', 'KI': 'KIR', 'KP': 'PRK', 'KR': 'KOR', 'KW': 'KWT', 'KG': 'KGZ', 'LA': 'LAO', 'LV': 'LVA', 'LB': 'LBN', 'LS': 'LSO', 'LR': 'LBR', 'LY': 'LBY', 'LI': 'LIE', 'LT': 'LTU', 'LU': 'LUX', 'MO': 'MAC', 'MK': 'MKD', 'MG': 'MDG', 'MW': 'MWI', 'MY': 'MYS', 'MV': 'MDV', 'ML': 'MLI', 'MT': 'MLT', 'MH': 'MHL', 'MQ': 'MTQ', 'MR': 'MRT', 'MU': 'MUS', 'YT': 'MYT', 'MX': 'MEX', 'FM': 'FSM', 'MD': 'MDA', 'MC': 'MCO', 'MN': 'MNG', 'ME': 'MNE', 'MS': 'MSR', 'MA': 'MAR', 'MZ': 'MOZ', 'MM': 'MMR', 'NA': 'NAM', 'NR': 'NRU', 'NP': 'NPL', 'NL': 'NLD', 'AN': 'ANT', 'NC': 'NCL', 'NZ': 'NZL', 'NI': 'NIC', 'NE': 'NER', 'NG': 'NGA', 'NU': 'NIU', 'NF': 'NFK', 'MP': 'MNP', 'NO': 'NOR', 'OM': 'OMN', 'PK': 'PAK', 'PW': 'PLW', 'PS': 'PSE', 'PA': 'PAN', 'PG': 'PNG', 'PY': 'PRY', 'PE': 'PER', 'PH': 'PHL', 'PN': 'PCN', 'PL': 'POL', 'PT': 'PRT', 'PR': 'PRI', 'QA': 'QAT', 'RE': 'REU', 'RO': 'ROU', 'RU': 'RUS', 'RW': 'RWA', 'BL': 'BLM', 'SH': 'SHN', 'KN': 'KNA', 'LC': 'LCA', 'MF': 'MAF', 'PM': 'SPM', 'VC': 'VCT', 'WS': 'WSM', 'SM': 'SMR', 'ST': 'STP', 'SA': 'SAU', 'SN': 'SEN', 'RS': 'SRB', 'SC': 'SYC', 'SL': 'SLE', 'SG': 'SGP', 'SK': 'SVK', 'SI': 'SVN', 'SB': 'SLB', 'SO': 'SOM', 'ZA': 'ZAF', 'GS': 'SGS', 'ES': 'ESP', 'LK': 'LKA', 'SD': 'SDN', 'SR': 'SUR', 'SJ': 'SJM', 'SZ': 'SWZ', 'SE': 'SWE', 'CH': 'CHE', 'SY': 'SYR', 'TW': 'TWN', 'TJ': 'TJK', 'TZ': 'TZA', 'TH': 'THA', 'TL': 'TLS', 'TG': 'TGO', 'TK': 'TKL', 'TO': 'TON', 'TT': 'TTO', 'TN': 'TUN', 'TR': 'TUR', 'TM': 'TKM', 'TC': 'TCA', 'TV': 'TUV', 'UG': 'UGA', 'UA': 'UKR', 'AE': 'ARE', 'GB': 'GBR', 'US': 'USA', 'UM': 'UMI', 'UY': 'URY', 'UZ': 'UZB', 'VU': 'VUT', 'VE': 'VEN', 'VN': 'VNM', 'VG': 'VGB', 'VI': 'VIR', 'WF': 'WLF', 'EH': 'ESH', 'YE': 'YEM', 'ZM': 'ZMB', 'ZW': 'ZWE' }


// var countryArray = Object.entries(countries);

// countryArray.sort(function (a, b) {
//   return a[0].localeCompare(b[0]);
// });

// var sortedCountries = Object.fromEntries(countryArray);

var States = {
  ARE: {
    Dubai: "Dubai",
    "Dubai Jabel Ali": "Dubai-JBL",
  },
  ESP: {
    "Calle Miguel Angel 16, 28010": "Madrid",
  },
  IRQ: {
    Baghdad: "Baghdad",
  },
  POL: {
    Koscierzyn: "Koscierzyn",
    MAZOWIECKI: "MAZOWIECKI",
  },
  SDN: {
    Khartoum: "Khartoum",
  },
  CAN: {
    Alberta: "CA-AB",
    "British Columbia": "CA-BC",
    Manitoba: "CA-MB",
    "Nouveau-Brunswick": "CA-NB",
    "Newfoundland and Labrador": "CA-NL",
    "Northwest Territories": "CA-NT",
    "Nova Scotia": "CA-NS",
    Nunavut: "CA-NU",
    Ontario: "CA-ON",
    "Prince Edward Island": "CA-PE",
    Quebec: "CA-QC",
    Saskatchewan: "CA-SK",
    "Yukon Territory": "CA-YT",
  },
  USA: {
    Alaska: "AK",
    Alabama: "AL",
    Arkansas: "AR",
    "American Samoa": "AS",
    Arizona: "AZ",
    "Armed Forces Africa": "AE",
    "Armed Forces Americas": "AA",
    "Armed Forces Canada": "AE",
    "Armed Forces Europe": "AE",
    "Armed Forces Middle East": "AE",
    "Armed Forces Pacific": "AP",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    "District of Columbia": "DC",
    Delaware: "DE",
    Florida: "FL",
    "Federated States of Micronesia": "FM",
    Georgia: "GA",
    Guam: "GU",
    Hawaii: "HI",
    Iowa: "IA",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Massachusetts: "MA",
    Maryland: "MD",
    Maine: "ME",
    "Marshall Islands": "MH",
    Michigan: "MI",
    Minnesota: "MN",
    Missouri: "MO",
    "Northern Mariana Islands": "MP",
    Mississippi: "MS",
    Montana: "MT",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Nebraska: "NE",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    Nevada: "NV",
    "New York": "NY",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Puerto Rico": "PR",
    Palau: "PW",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennesee: "TN",
    Texas: "TX",
    Utah: "UT",
    Virginia: "VA",
    "Virgin Islands": "VI",
    Vermont: "VT",
    Washington: "WA",
    Wisconsin: "WI",
    "West Virginia": "WV",
    Wyoming: "WY",
  },
};

var countriesWithState = ["USA", "CAN"];

var original_zf_MandArray = [
  "Name_First",
  "Name_Last",
  "Email",
  "Address_AddressLine1",
  "SingleLine",
  "Address_City",
  "Address_Region",
  "Address_ZipCode",
  "Address_Country",
];

var zf_MandArray = original_zf_MandArray.slice();

window.onload = function () {
  var countySel = document.querySelector(".zf-form-sBox"),
    stateDropdown = document.querySelector(".state-dropdown"),
    stateText = document.querySelector(".state-text"),
    cityDropdown = document.querySelector(".city-dropdown"),
    cityText = document.querySelector(".city-text"),
    star = document.querySelector(".star"),
    zipDropdown = document.querySelector(".zip-dropdown"),
    zipText = document.querySelector(".zip-text"),
    //zipcodeInput = document.getElementById("postalCode");
    countyInput = document.getElementById("county");
  stateLabel = document.getElementById("stateLabel");

  // Populate country dropdown on page load
  // for (var country in sortedCountries) {
  //   countySel.options[countySel.options.length] = new Option(
  //     country,
  //     sortedCountries[country]
  //   );
  // }
  countySel.value = "USA";
  // Handle change event on country dropdown
  countySel.onchange = function () {
    //cityDropdown.length = 1;
    //zipDropdown.length = 1;
    //zipDropdown.disabled = true;
    //cityDropdown.disabled = true;
    updateStateDropdown();
    // updateStateDropdown1();
    //updateArray();
    removeRequired();
  };

  function updateStateDropdown() {
    // Clear existing options
    stateDropdown.length = 1;

    const selectedCountryCode = countySel.value; // Replace with the actual reference to the country dropdown

    // Check if the selected country has states
    const hasStates = countriesWithState.includes(selectedCountryCode);

    // Show either state dropdown or state text input based on the selected country
    if (hasStates) {
      stateDropdown.style.display = "block";
      star.style.display = "inline-block";
      stateText.style.display = "none";
      // cityDropdown.style.display = "block";
      // cityText.style.display = "none";
      // zipDropdown.style.display = "block";
      // zipText.style.display = "none";
      // countyInput.readOnly = true;
      // zipText.readOnly = true;
      stateLabel.value = "";

      stateText.value = "";
      cityText.value = "";
      zipText.value = "";
      countyInput.value = "";

      for (var state in States[selectedCountryCode]) {
        stateDropdown.options[stateDropdown.options.length] = new Option(
          state,
          States[selectedCountryCode][state]
        );
      }
    } else {
      $(".dropdown-list").empty();
      stateDropdown.style.display = "none";
      //cityDropdown.style.display = "none";
      //zipDropdown.style.display = "none";
      //star.style.display = "none";
      stateText.style.display = "block";
      //cityText.style.display = "block";
      //zipText.style.display = "block";

      stateText.value = "";
      stateText.placeholder = "State/Region/Province";
      //cityText.value = "";
      //zipText.value = "";
      //countyInput.value = "";
      stateLabel.value = "";

      //zipText.readOnly = false;
      //zipDropdown.disabled = false;
      //countyInput.readOnly = false;

      //cityDropdown.length = 1;
      //cityDropdown.disabled = true;
    }
  }

  stateDropdown.onchange = function () {
    updateCityDropdown();
    const selectedState = document.querySelector(".state-dropdown").value;
    stateText.value = selectedState;
  };

  function updateCityDropdown() {
    //   const selectedCountry = countySel.value; // Replace with the actual reference to the country dropdown
    //   const selectedState = document.querySelector(".state-dropdown").value;
    //   stateText.value = selectedState;
    //   const cityDropdown = document.querySelector(".city-dropdown");
    //   const zipDropdown = document.querySelector(".zip-dropdown");
    //   const countyInput = document.getElementById("county");

    //   // Disable the city dropdown and zipcode input
    //   cityDropdown.disabled = true;
    //   zipDropdown.disabled = true;
    //   countyInput.readOnly = true;

    //   // Clear existing options
    //   cityDropdown.innerHTML = '<option value="">Select City</option>'; // Reset to default option
    //   zipDropdown.innerHTML = '<option value="">Select Zip code</option>'; // Reset to default option

    stateLabel.value = "";
    //   cityText.value = "";
    //   zipText.value = "";
    //   countyInput.value = "";

    if (countySel.value == "USA") {
      stateLabel.value = stateDropdown.selectedOptions[0].innerHTML;
    }
    //   // If a country is selected, proceed to update the city dropdown
    //   if (selectedCountry) {
    //     // Enable the city dropdown
    //     cityDropdown.disabled = false;

    //     // If a state is selected, proceed to update the city dropdown
    //     if (selectedState) {
    //       //console.log(selectedState);
    //       // Use a Set to keep track of unique cities
    //       const uniqueCities = new Set();

    //       // Filter cities based on the selected state and add to the Set
    //       zip_city_state
    //         .filter((entry) => entry.STATE === selectedState)
    //         .forEach((entry) => uniqueCities.add(entry.CITY));

    //       // Convert the Set to an array, sort alphabetically, and add new options to the city dropdown
    //       const sortedCities = Array.from(uniqueCities).sort();
    //       sortedCities.forEach((city) => {
    //         const option = document.createElement("option");
    //         option.value = city;
    //         option.text = city;
    //         cityDropdown.add(option);
    //       });
    //     }
    //   }
    // }

    // cityDropdown.onchange = function () {
    //   updateZipCodeDropdown();
    // };

    // function updateZipCodeDropdown() {
    //   const selectedCountry = countySel.value; // Replace with the actual reference to the country dropdown
    //   const selectedState = stateDropdown.value;
    //   const cityDropdown = document.querySelector(".city-dropdown").value;
    //   cityText.value = cityDropdown;
    //   const zipDropdown = document.querySelector(".zip-dropdown");
    //   const countyInput = document.getElementById("county");

    //   zipDropdown.disabled = true;
    //   countyInput.readOnly = true;

    //   zipText.value = "";
    //   countyInput.value = "";

    //   if (selectedCountry && selectedState && cityDropdown) {
    //     const uniqueZipCode = new Set();

    //     // Filter cities based on the selected state and add to the Set
    //     zip_city_state
    //       .filter(
    //         (entry) =>
    //           entry.STATE === selectedState && entry.CITY === cityDropdown
    //       )
    //       .forEach((entry) => uniqueZipCode.add(entry.ZIPCODE));

    //     zipDropdown.style.display = "block";
    //     zipText.style.display = "none";
    //     zipDropdown.innerHTML = '<option value="">Select Zip code</option>';
    //     zipDropdown.disabled = false;
    //     const sortedZipCode = Array.from(uniqueZipCode).sort();
    //     sortedZipCode.forEach((zipcode) => {
    //       const option = document.createElement("option");
    //       option.value = zipcode;
    //       option.text = zipcode;
    //       zipDropdown.add(option);
    //     });
    //     if (uniqueZipCode.size === 1) {
    //       zipDropdown.options[1].selected = true;
    //       zipDropdown.disabled = true;

    //       let selectedCity = document.querySelector(".city-dropdown").value;

    //       const selectedEntry = zip_city_state.find(
    //         (entry) =>
    //           entry.STATE === document.querySelector(".state-dropdown").value &&
    //           entry.CITY === selectedCity
    //       );

    //       if (selectedEntry && selectedEntry.ZIPCODE) {
    //         zipText.value = selectedEntry.ZIPCODE;
    //         countyInput.value = selectedEntry.COUNTY;
    //       }
    //     }
    //   }
  }

  // zipDropdown.onchange = function () {
  //   zipCodeDropdownChangeHandler();
  // };

  // function zipCodeDropdownChangeHandler() {
  //   const selectedZipCode = document.querySelector(".zip-dropdown").value;

  //   const uniqueZipCode = new Set();
  //   const sortedZipCode = Array.from(uniqueZipCode).sort();
  //   sortedZipCode.forEach((zipcode) => {
  //     const option = document.createElement("option");
  //     option.value = zipcode;
  //     option.text = zipcode;
  //     zipDropdown.add(option);
  //   });

  //   const selectedEntry = zip_city_state.find(
  //     (entry) =>
  //       entry.STATE === document.querySelector(".state-dropdown").value &&
  //       entry.CITY === document.querySelector(".city-dropdown").value &&
  //       entry.ZIPCODE === selectedZipCode
  //   );

  //   if (selectedEntry && selectedEntry.ZIPCODE) {
  //     zipText.value = selectedZipCode;
  //     countyInput.value = selectedEntry.COUNTY;
  //   }
  // }

  // function updateArray() {
  //   // setTimeout(function () {
  //   var isDropdownVisible = stateDropdown.style.display === "block";
  //   //var isDropdownCityVisible = cityDropdown.style.display === "block";
  //   //var isDropdownZCVisible = zipDropdown.style.display === "block";

  //   // Remove "Address_Region" if the dropdown is hidden
  //   zf_MandArray = original_zf_MandArray.filter(function (element) {
  //     return (
  //       (element !== "Address_Region" || isDropdownVisible) 
  //       // &&(element !== "Address_City" || isDropdownCityVisible) 
  //       // &&(element !== "Address_ZipCode" || isDropdownZCVisible)
  //     );
  //   });

  //   // console.log(zf_MandArray);
  //   // }, 100); // Adjust the delay as needed
  // }

  function removeRequired() {
    if (countySel.value == "USA" || countySel.value == "CAN") {
      zf_MandArray = addIfNotExist("Address_Region");
      document.getElementById("state_star").style.display ="inline-block";
    } else {
      zf_MandArray = removeIfExists("Address_Region");
      document.getElementById("state_star").style.display ="none";
    }
  }

  function addIfNotExist(value) {
    if (original_zf_MandArray.indexOf(value) === -1) {
      original_zf_MandArray.push(value);
    }
    return original_zf_MandArray;
  }

  function removeIfExists(value) {
    var index = original_zf_MandArray.indexOf(value);
    if (index !== -1) {
      original_zf_MandArray.splice(index, 1);
    }
    return original_zf_MandArray;
  }

  // Initial setup
  updateStateDropdown();
  //updateArray();

  stateText.addEventListener("input", myFunction);
  function myFunction() {
    stateLabel.value = stateText.value;
  }
};

// **************************************************

// window.onload = function () {
//   var countrySel = document.querySelector(".zf-form-sBox");
//   var stateSel = document.querySelector(".Address_Region");
//   let output = "";
//   for (var country in countries) {
//     output += `<option value="${countries[country]}">${country}</option>`;
//   }
//   countrySel.innerHTML = output;

//   countrySel.onchange = function () {
//     stateSel.length = 1;
//     if (this.selectedIndex < 1) {
//       stateSel.length = 1;
//     }
//     let outputState = "";

//     for (var state in States[this.value]) {
//       console.log(state);
//       outputState += `<option value="${
//         States[this.value][state]
//       }">${state}</option>`;
//     }
//     stateSel.innerHTML = outputState;
//   };
// };

// **************************************
