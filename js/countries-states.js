var countries = {
  Aruba: "ABW",
  Afghanistan: "AFG",
  Angola: "AGO",
  Anguilla: "AIA",
  "Aland Islands !Åland Islands": "ALA",
  Albania: "ALB",
  Andorra: "AND",
  "Not Found": "ANT",
  "United Arab Emirates": "ARE",
  Argentina: "ARG",
  Armenia: "ARM",
  "American Samoa": "ASM",
  Antarctica: "ATA",
  "French Southern Territories": "ATF",
  "Antigua and Barbuda": "ATG",
  Australia: "AUS",
  Austria: "AUT",
  Azerbaijan: "AZE",
  Burundi: "BDI",
  Belgium: "BEL",
  Benin: "BEN",
  "Bonaire, Sint Eustatius and Saba": "BES",
  "Burkina Faso": "BFA",
  Bangladesh: "BGD",
  Bulgaria: "BGR",
  Bahrain: "BHR",
  Bahamas: "BHS",
  "Bosnia and Herzegovina": "BIH",
  "Saint Barthelemy !Saint Barthélemy": "BLM",
  Belarus: "BLR",
  Belize: "BLZ",
  Bermuda: "BMU",
  "Bolivia (Plurinational State of)": "BOL",
  Brazil: "BRA",
  Barbados: "BRB",
  "Brunei Darussalam": "BRN",
  Bhutan: "BTN",
  "Bouvet Island": "BVT",
  Botswana: "BWA",
  "Central African Republic": "CAF",
  Canada: "CAN",
  "Cocos (Keeling) Islands": "CCK",
  Switzerland: "CHE",
  Chile: "CHL",
  China: "CHN",
  "Cote d'Ivoire !Côte d'Ivoire": "CIV",
  Cameroon: "CMR",
  "Congo (Democratic Republic of the)": "COD",
  Congo: "COG",
  "Cook Islands": "COK",
  Colombia: "COL",
  Comoros: "COM",
  "Cabo Verde": "CPV",
  "Costa Rica": "CRI",
  Cuba: "CUB",
  "Curacao !Curaçao": "CUW",
  "Christmas Island": "CXR",
  "Cayman Islands": "CYM",
  Cyprus: "CYP",
  "Czech Republic": "CZE",
  Germany: "DEU",
  Djibouti: "DJI",
  Dominica: "DMA",
  Denmark: "DNK",
  "Dominican Republic": "DOM",
  Algeria: "DZA",
  Ecuador: "ECU",
  Egypt: "EGY",
  Eritrea: "ERI",
  Spain: "ESP",
  Estonia: "EST",
  Ethiopia: "ETH",
  Finland: "FIN",
  Fiji: "FJI",
  "Falkland Islands (Malvinas)": "FLK",
  France: "FRA",
  "Faroe Islands": "FRO",
  "Micronesia (Federated States of)": "FSM",
  Gabon: "GAB",
  "United Kingdom of Great Britain and Northern Ireland": "GBR",
  Georgia: "GEO",
  Guernsey: "GGY",
  Ghana: "GHA",
  Gibraltar: "GIB",
  Guinea: "GIN",
  Guadeloupe: "GLP",
  Gambia: "GMB",
  "Guinea-Bissau": "GNB",
  "Equatorial Guinea": "GNQ",
  Greece: "GRC",
  Grenada: "GRD",
  Greenland: "GRL",
  Guatemala: "GTM",
  "French Guiana": "GUF",
  Guam: "GUM",
  Guyana: "GUY",
  "Hong Kong": "HKG",
  "Heard Island and McDonald Islands": "HMD",
  Honduras: "HND",
  Croatia: "HRV",
  Haiti: "HTI",
  Hungary: "HUN",
  Indonesia: "IDN",
  "Isle of Man": "IMN",
  India: "IND",
  "British Indian Ocean Territory": "IOT",
  Ireland: "IRL",
  "Iran (Islamic Republic of)": "IRN",
  Iraq: "IRQ",
  Iceland: "ISL",
  Israel: "ISR",
  Italy: "ITA",
  Jamaica: "JAM",
  Jersey: "JEY",
  Jordan: "JOR",
  Japan: "JPN",
  Kazakhstan: "KAZ",
  Kenya: "KEN",
  Kyrgyzstan: "KGZ",
  Cambodia: "KHM",
  Kiribati: "KIR",
  "Saint Kitts and Nevis": "KNA",
  "Korea (Republic of)": "KOR",
  Kuwait: "KWT",
  "Lao People's Democratic Republic": "LAO",
  Lebanon: "LBN",
  Liberia: "LBR",
  Libya: "LBY",
  "Saint Lucia": "LCA",
  Liechtenstein: "LIE",
  "Sri Lanka": "LKA",
  Lesotho: "LSO",
  Lithuania: "LTU",
  Luxembourg: "LUX",
  Latvia: "LVA",
  Macao: "MAC",
  "Saint Martin (French part)": "MAF",
  Morocco: "MAR",
  Monaco: "MCO",
  "Moldova (Republic of)": "MDA",
  Madagascar: "MDG",
  Maldives: "MDV",
  Mexico: "MEX",
  "Marshall Islands": "MHL",
  "Macedonia (the former Yugoslav Republic of)": "MKD",
  Mali: "MLI",
  Malta: "MLT",
  Myanmar: "MMR",
  Montenegro: "MNE",
  Mongolia: "MNG",
  "Northern Mariana Islands": "MNP",
  Mozambique: "MOZ",
  Mauritania: "MRT",
  Montserrat: "MSR",
  Martinique: "MTQ",
  Mauritius: "MUS",
  Malawi: "MWI",
  Malaysia: "MYS",
  Mayotte: "MYT",
  Namibia: "NAM",
  "New Caledonia": "NCL",
  Niger: "NER",
  "Norfolk Island": "NFK",
  Nigeria: "NGA",
  Nicaragua: "NIC",
  Niue: "NIU",
  Netherlands: "NLD",
  Norway: "NOR",
  Nepal: "NPL",
  Nauru: "NRU",
  "New Zealand": "NZL",
  Oman: "OMN",
  Pakistan: "PAK",
  Panama: "PAN",
  Pitcairn: "PCN",
  Peru: "PER",
  Philippines: "PHL",
  Palau: "PLW",
  "Papua New Guinea": "PNG",
  Poland: "POL",
  "Puerto Rico": "PRI",
  "Korea (Democratic People's Republic of)": "PRK",
  Portugal: "PRT",
  Paraguay: "PRY",
  "Palestine, State of": "PSE",
  "French Polynesia": "PYF",
  Qatar: "QAT",
  "Reunion !Réunion": "REU",
  Romania: "ROU",
  "Russian Federation": "RUS",
  Rwanda: "RWA",
  "Saudi Arabia": "SAU",
  Sudan: "SDN",
  Senegal: "SEN",
  Singapore: "SGP",
  "South Georgia and the South Sandwich Islands": "SGS",
  "Saint Helena, Ascension and Tristan da Cunha": "SHN",
  "Svalbard and Jan Mayen": "SJM",
  "Solomon Islands": "SLB",
  "Sierra Leone": "SLE",
  "El Salvador": "SLV",
  "San Marino": "SMR",
  Somalia: "SOM",
  "Saint Pierre and Miquelon": "SPM",
  Serbia: "SRB",
  "South Sudan": "SSD",
  "Sao Tome and Principe": "STP",
  Suriname: "SUR",
  Slovakia: "SVK",
  Slovenia: "SVN",
  Sweden: "SWE",
  Swaziland: "SWZ",
  "Sint Maarten (Dutch part)": "SXM",
  Seychelles: "SYC",
  "Syrian Arab Republic": "SYR",
  "Turks and Caicos Islands": "TCA",
  Chad: "TCD",
  Togo: "TGO",
  Thailand: "THA",
  Tajikistan: "TJK",
  Tokelau: "TKL",
  Turkmenistan: "TKM",
  "Timor-Leste": "TLS",
  Tonga: "TON",
  "Trinidad and Tobago": "TTO",
  Tunisia: "TUN",
  Turkey: "TUR",
  Tuvalu: "TUV",
  "Taiwan, Province of China[a]": "TWN",
  "Tanzania, United Republic of": "TZA",
  Uganda: "UGA",
  Ukraine: "UKR",
  "United States Minor Outlying Islands": "UMI",
  Uruguay: "URY",
  "United States of America": "USA",
  Uzbekistan: "UZB",
  "Holy See": "VAT",
  "Saint Vincent and the Grenadines": "VCT",
  "Venezuela (Bolivarian Republic of)": "VEN",
  "Virgin Islands (British)": "VGB",
  "Virgin Islands (U.S.)": "VIR",
  "Viet Nam": "VNM",
  Vanuatu: "VUT",
  "Wallis and Futuna": "WLF",
  Samoa: "WSM",
  Kosovo: "XKS",
  Yemen: "YEM",
  "South Africa": "ZAF",
  Zambia: "ZMB",
  Zimbabwe: "ZWE",
};

var countryArray = Object.entries(countries);

countryArray.sort(function (a, b) {
  return a[0].localeCompare(b[0]);
});

var sortedCountries = Object.fromEntries(countryArray);

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
    "Colombie-Britannique": "CA-BC",
    Manitoba: "CA-MB",
    "New Brunswick": "CA-NB",
    "Newfoundland and Labrador": "CA-NL",
    "Northwest Territories": "CA-NT",
    "Nouveau-Brunswick": "CA-NB",
    "Nouvelle-Écosse": "CA-NS",
    "Nova Scotia": "CA-NS",
    Nunavut: "CA-NU",
    Ontario: "CA-ON",
    "Prince Edward Island": "CA-ON",
    Quebec: "CA-QC",
    Saskatchewan: "CA-SK",
    "Terre-Neuve-et-Labrador": "CA-SK",
    "Territoires du Nord-Ouest": "CA-NT",
    Yukon: "CA-YT",
    "Île-du-Prince-Édouard": "CA-PE"
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

var countriesWithState = ["ARE", "ESP", "IRQ", "POL", "SDN", "USA", "CAN"];

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
  for (var country in sortedCountries) {
    countySel.options[countySel.options.length] = new Option(
      country,
      sortedCountries[country]
    );
  }
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
