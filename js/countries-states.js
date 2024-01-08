
// const reader = require("xlsx");
// var http = require("http");
// // "xlsx": "^0.18.5"
// http.createServer((req, res) => {
//   console.log("Start....");
//   const file = reader.readFile("./Country-States.xlsx");
//   const file2 = reader.readFile("./regions.xlsx");

//   let State = [];
//   const sheets = file.SheetNames;

//   let Country = [];
//   const sheets2 = file2.SheetNames;

//   for (let i = 0; i < sheets.length; i++) {
//     const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
//     temp.forEach((res) => {
//       State.push(res);
//     });
//   }

//   for (let i = 0; i < sheets2.length; i++) {
//     const temp = reader.utils.sheet_to_json(file2.Sheets[file2.SheetNames[i]]);
//     temp.forEach((res) => {
//       Country.push(res);
//     });
//   }

//   // console.log(State);
//   // console.log(Country);

//   console.log("File Length " + State.length);
//   var mainCountry = new Object();

//   for (var i = 0; i < Country.length; i++) {
//     var mainState = new Object();
//     for (var j = 0; j < State.length; j++) {
//       if (Country[i].COUNTRYREGION == State[j].COUNTRYREGIONID) {
//         // console.log(State[j].COUNTRYREGIONID)
//         if (State[j].NAME) mainState[State[j].NAME] = State[j].STATE;
//       }
//     }
//     // console.log(Country[i].COUNTRYREGION)
//     if (Object.keys(mainState).length != 0) {
//       // console.log(mainState)
//       mainCountry[Country[i].COUNTRYREGION] = mainState;
//     }
//   }
//   console.log(mainCountry);
//   res.send("OK");
// });

var countries = {
  "United Arab Emirates": "ARE",
  Spain: "ESP",
  Iraq: "IRQ",
  Malaysia: "MYS",
  Poland: "POL",
  Sudan: "SDN",
  "United States of America": "USA",
};

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
  USA: {
    Alaska: "AK",
    Alabama: "AL",
    Arkansas: "AR",
    "American Samoa": "AS",
    Arizona: "AZ",
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

window.onload = function () {
  var countySel = document.querySelector(".zf-form-sBox"),
    stateSel = document.querySelector(".Address_Region");

  for (var country in countries) {
    countySel.options[countySel.options.length] = new Option(
      country,
      countries[country]
    );
    console.log(countySel.options[countySel.options.length]);
  }
  // countries["United State"];
  // console.log(countries);
  // for (var country in countries)
  //   console.log(country);
  //   console.log(countries[country]);
  // }

  countySel.onchange = function () {
    stateSel.length = 1;

    if (this.selectedIndex < 1) return;
    for (var state in States[this.value]) {
      console.log(States[this.value]);
      // console.log(state);
      // console.log(States[this.value][state]);
      stateSel.options[stateSel.options.length] = new Option(
        state,
        States[this.value][state]
      );
      // countySel.onchange();
    }
  };
};

// **************************************

// document.addEventListener("DOMContentLoaded", () => {
//   const selectDrop = document.querySelector(".zf-form-sBox");
//   // const selectDrop = document.getElementById('countries');

//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let output = "";
//       data.forEach((country) => {
//         console.log(country);
//         output += `
//         <option value="${country.altSpellings[0]}">${country.altSpellings[1]}</option>`;
//         // console.log(output);
//       });

//       selectDrop.innerHTML = output;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
