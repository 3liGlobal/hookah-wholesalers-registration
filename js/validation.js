// $Id: $
async function zf_ValidateAndSubmit() {
  if (
    zf_CheckMandatory() &&
    zf_ValidCheck() &&
    doubleCheck() &&
    (await validate_Email()) &&
    (await phoneNumberValidation()) &&
    phoneFormat()
  ) {
    $(document).ready(function () {
      //console.log("docum");
      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;
      // debugger;
      setProgressBar(current);
      // $(".next").click(function () {

      current_fs = $(".next").parent();
      next_fs = $(".next").parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: "none",
              position: "relative",
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 500,
        }
      );
      setProgressBar(++current);
      // });

      $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
          .eq($("fieldset").index(current_fs))
          .removeClass("active");
        $("#progressbar li")
          .eq($("fieldset").index(previous_fs))
          .addClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              previous_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(--current);
      });

      function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
      }
      if (isSalesIQIntegrationEnabled) {
        zf_addDataToSalesIQ();
      }
      return true;
      // $(".submit").click(function () {
      //   return false;
      // });

      // if () {

      //   return true;
      // } else {
      //   return false;
      // }
    });
  } else {
    return false;
  }
}
function zf_CheckMandatory() {
  for (i = 0; i < zf_MandArray.length; i++) {
    var fieldObj = document.forms.form[zf_MandArray[i]];
    if (fieldObj) {
      if (fieldObj.nodeName != null) {
        if (fieldObj.nodeName == "OBJECT") {
          if (!zf_MandatoryCheckSignature(fieldObj)) {
            zf_ShowErrorMsg(zf_MandArray[i]);
            return false;
          }
        } else if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
          if (fieldObj.type == "file") {
            fieldObj.focus();
            zf_ShowErrorMsg(zf_MandArray[i]);
            return false;
          }
          fieldObj.focus();
          zf_ShowErrorMsg(zf_MandArray[i]);
          return false;
        } else if (fieldObj.nodeName == "SELECT") {
          // No I18N
          if (fieldObj.options[fieldObj.selectedIndex].value == "-Select-") {
            fieldObj.focus();
            zf_ShowErrorMsg(zf_MandArray[i]);
            return false;
          }
        } else if (fieldObj.type == "checkbox" || fieldObj.type == "radio") {
          if (fieldObj.checked == false) {
            fieldObj.focus();
            zf_ShowErrorMsg(zf_MandArray[i]);
            return false;
          }
        }
      } else {
        var checkedValsCount = 0;
        var inpChoiceElems = fieldObj;
        for (var ii = 0; ii < inpChoiceElems.length; ii++) {
          if (inpChoiceElems[ii].checked === true) {
            checkedValsCount++;
          }
        }
        if (checkedValsCount == 0) {
          inpChoiceElems[0].focus();
          zf_ShowErrorMsg(zf_MandArray[i]);
          return false;
        }
      }
    }
  }
  return true;
}

function doubleCheck() {
  var field1 = document.getElementById(
    "international_PhoneNumber_countrycode"
  ).value;
  var field2 = document.getElementById(
    "international_PhoneNumber1_countrycode"
  ).value;

  var focus = document.forms.form[arrayCode[0]];

  // var PhoneNumber_error = document.getElementById("PhoneNumber_error");
  // var PhoneNumber1_error = document.getElementById("PhoneNumber1_error");

  if (field1.length || field2.length) {
    PhoneNumber_error.style.display = "none";
    return true;
  } else {
    focus.focus();
    zf_ShowErrorMsg1(arrayCode[0]);
    // PhoneNumber_error.style.display = "block";
    return false;
  }
  // else if (
  //   !fieldObj.name === "PhoneNumber_countrycode".length ||
  //   !fieldObj.name === "PhoneNumber1_countrycode".length
  // ) {
  //   fieldObj.focus();
  //   zf_ShowErrorMsg(zf_MandArray[i]);
  //   return false;
  // }
}

function zf_ShowErrorMsg1(uniqName) {
  var fldLinkName;
  for (errInd = 0; errInd < zf_FieldArray.length; errInd++) {
    fldLinkName = zf_FieldArray[errInd].split("_")[0];
    document.getElementById(fldLinkName + "_error").style.display = "none";
  }
  var linkName = uniqName.split("_")[0];
  //console.log(linkName);
  document.getElementById(linkName + "_error").style.display = "block";
}

function zf_ValidCheck() {
  var isValid = true;
  for (ind = 0; ind < zf_FieldArray.length; ind++) {
    var fieldObj = document.forms.form[zf_FieldArray[ind]];

    if (fieldObj) {
      if (fieldObj.nodeName != null) {
        var checkType = fieldObj.getAttribute("checktype");
        if (checkType == "c2") {
          // No I18N
          if (!zf_ValidateNumber(fieldObj)) {
            isValid = false;
            fieldObj.focus();
            zf_ShowErrorMsg(zf_FieldArray[ind]);
            return false;
          }
        } else if (checkType == "c3") {
          // No I18N
          if (
            !zf_ValidateCurrency(fieldObj) ||
            !zf_ValidateDecimalLength(fieldObj, 10)
          ) {
            isValid = false;
            fieldObj.focus();
            zf_ShowErrorMsg(zf_FieldArray[ind]);
            return false;
          }
        } else if (checkType == "c4") {
          // No I18N
          if (!zf_ValidateDateFormat(fieldObj)) {
            isValid = false;
            fieldObj.focus();
            zf_ShowErrorMsg(zf_FieldArray[ind]);
            return false;
          }
        } else if (checkType == "c5") {
          // No I18N
          if (!zf_ValidateEmailID(fieldObj)) {
            isValid = false;
            fieldObj.focus();
            zf_ShowErrorMsg(zf_FieldArray[ind]);
            return false;
          }
        } else if (checkType == "c6") {
          // No I18N
          if (!zf_ValidateLiveUrl(fieldObj)) {
            isValid = false;
            fieldObj.focus();
            zf_ShowErrorMsg(zf_FieldArray[ind]);
            return false;
          }
        } else if (checkType == "c7") {
          // if (
          //   !fieldObj.name === "PhoneNumber_countrycode".length ||
          //   !fieldObj.name === "PhoneNumber1_countrycode".length
          // ) {
          //   isValid = false;
          //   fieldObj.focus();
          //   zf_ShowErrorMsg(zf_FieldArray[ind]);
          //   return false;
          // }
          // No I18N
          if (!zf_ValidatePhone(fieldObj)) {
            isValid = false;
            fieldObj.focus();
            zf_ShowErrorMsg(zf_FieldArray[ind]);
            return false;
          }
        } else if (checkType == "c8") {
          // No I18N
          zf_ValidateSignature(fieldObj);
        }
      }
    }
  }
  return isValid;
}
function zf_ShowErrorMsg(uniqName) {
  var fldLinkName;
  for (errInd = 0; errInd < zf_FieldArray.length; errInd++) {
    fldLinkName = zf_FieldArray[errInd].split("_")[0];
    document.getElementById(fldLinkName + "_error").style.display = "none";
  }
  var linkName = uniqName.split("_")[0];
  //console.log(linkName);
  document.getElementById(linkName + "_error").style.display = "block";
}
function zf_ValidateNumber(elem) {
  var validChars = "-0123456789";
  var numValue = elem.value.replace(/^\s+|\s+$/g, "");
  if (numValue != null && !numValue == "") {
    var strChar;
    var result = true;
    if (numValue.charAt(0) == "-" && numValue.length == 1) {
      return false;
    }
    for (i = 0; i < numValue.length && result == true; i++) {
      strChar = numValue.charAt(i);
      if (strChar == "-" && i != 0) {
        return false;
      }
      if (validChars.indexOf(strChar) == -1) {
        result = false;
      }
    }
    return result;
  } else {
    return true;
  }
}
function zf_ValidateDateFormat(inpElem) {
  var dateValue = inpElem.value.replace(/^\s+|\s+$/g, "");
  if (dateValue == "") {
    return true;
  } else {
    return zf_DateRegex.test(dateValue);
  }
}
function zf_ValidateCurrency(elem) {
  var validChars = "0123456789.";
  var numValue = elem.value.replace(/^\s+|\s+$/g, "");
  if (numValue.charAt(0) == "-") {
    numValue = numValue.substring(1, numValue.length);
  }
  if (numValue != null && !numValue == "") {
    var strChar;
    var result = true;
    for (i = 0; i < numValue.length && result == true; i++) {
      strChar = numValue.charAt(i);
      if (validChars.indexOf(strChar) == -1) {
        result = false;
      }
    }
    return result;
  } else {
    return true;
  }
}
function zf_ValidateDecimalLength(elem, decimalLen) {
  var numValue = elem.value;
  if (numValue.indexOf(".") >= 0) {
    var decimalLength = numValue.substring(numValue.indexOf(".") + 1).length;
    if (decimalLength > decimalLen) {
      return false;
    } else {
      return true;
    }
  }
  return true;
}
function zf_ValidateEmailID(elem) {
  var check = 0;
  var emailValue = elem.value;
  if (emailValue != null && !emailValue == "") {
    var emailArray = emailValue.split(",");
    for (i = 0; i < emailArray.length; i++) {
      var emailExp =
        /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
      if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ""))) {
        check = 1;
      }
    }
    if (check == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
function zf_ValidateLiveUrl(elem) {
  var urlValue = elem.value;
  if (urlValue !== null && typeof urlValue !== "undefined") {
    urlValue = urlValue.replace(/^\s+|\s+$/g, "");
    if (urlValue !== "") {
      var urlregex = new RegExp(
        "^((((h|H)(t|T)|(f|F))(t|T)(p|P)((s|S)?)://[-.\\w]*)|(((w|W){3}\\.)[-.\\w]+)|((\\w+)([-\\w]*)(\\.([-\\w]+))+))(/?)([-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$"
      ); // Same regex as website_field_url in security-regex.xml. But single backslash is replaced with two backslashes.
      return urlregex.test(urlValue);
    }
  }
  return true;
}

function zf_ValidatePhone(inpElem) {
  var ZFPhoneRegex = {
    PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
    PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
    PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
    PHONE_USA_REG: /^[0-9]+$/,
    PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/,
  };
  var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
  var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, "");
  var toReturn = true;
  if (phoneFormat === 1) {
    if (inpElem.getAttribute("valType") == "code") {
      var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
      if (fieldInpVal != "" && !codeRexp.test(fieldInpVal)) {
        return false;
      }
    } else {
      var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
      if (inpElem.getAttribute("phoneFormatType") == "2") {
        IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
      }
      if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
        toReturn = false;
        return toReturn;
      }
    }
    return toReturn;
  } else if (phoneFormat === 2) {
    var InpMaxlength = inpElem.getAttribute("maxlength");
    var USARexp = ZFPhoneRegex.PHONE_USA_REG;
    if (
      fieldInpVal != "" &&
      USARexp.test(fieldInpVal) &&
      fieldInpVal.length == InpMaxlength
    ) {
      toReturn = true;
    } else if (fieldInpVal == "") {
      toReturn = true;
    } else {
      toReturn = false;
    }
    return toReturn;
  }
}

function zf_ValidateSignature(objElem) {
  var linkName = objElem.getAttribute("compname");
  var canvasElem = document.getElementById("drawingCanvas-" + linkName);
  var isValidSign = zf_IsSignaturePresent(objElem, linkName, canvasElem);
  var hiddenSignInputElem = document.getElementById(
    "hiddenSignInput-" + linkName
  );
  if (isValidSign) {
    hiddenSignInputElem.value = canvasElem.toDataURL();
  } else {
    hiddenSignInputElem.value = ""; // No I18N
  }
  return isValidSign;
}

function zf_MandatoryCheckSignature(objElem) {
  var linkName = objElem.getAttribute("compname");
  var canvasElem = document.getElementById("drawingCanvas-" + linkName);
  var isValid = zf_IsSignaturePresent(objElem, linkName, canvasElem);
  return isValid;
}

function zf_IsSignaturePresent(objElem, linkName, canvasElem) {
  var context = canvasElem.getContext("2d"); // No I18N
  var canvasWidth = canvasElem.width;
  var canvasHeight = canvasElem.height;
  var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
  var signLen = canvasData.data.length;
  var flag = false;
  for (var index = 0; index < signLen; index++) {
    if (!canvasData.data[index]) {
      flag = false;
    } else if (canvasData.data[index]) {
      flag = true;
      break;
    }
  }
  return flag;
}

function zf_FocusNext(elem, event) {
  if (event.keyCode == 9 || event.keyCode == 16) {
    return;
  }
  if (event.keyCode >= 37 && event.keyCode <= 40) {
    return;
  }
  var compname = elem.getAttribute("compname");
  var inpElemName = elem.getAttribute("name");
  if (inpElemName == compname + "_countrycode") {
    if (elem.value.length == 3) {
      document.getElementsByName(compname + "_first")[0].focus();
    }
  } else if (inpElemName == compname + "_first") {
    if (elem.value.length == 3) {
      document.getElementsByName(compname + "_second")[0].focus();
    }
  }
}

function validate_Email() {
  return new Promise(async function (myResolve, myReject) {
    let email = $("#Email").val();
    if (email) {
      const apiUrl =
        "https://middlewares.azurewebsites.net/api/EmailCheckerZoho?environment=Production&email=" +
        email;

      // Make the API call using fetch
      await fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.flag) {
            document.getElementById("Email_error").innerText =
              "Email Already Exist";
            document.getElementById("Email_error").style.display = "block";
            myResolve(false);
          } else {
            myResolve(true);
          }
        })
        .catch((error) => {
          // Handle any errors that occur during the fetch
          console.error("There was a problem with the fetch operation:", error);
        });
    } else {
      myResolve(false);
    }
  });
}

function phoneNumberValidation() {
  const phoneNumber = parseInt(
    document
      .getElementById("international_PhoneNumber_countrycode")
      .value.trim()
  );
  const mobileNumber = parseInt(
    document
      .getElementById("international_PhoneNumber1_countrycode")
      .value.trim()
  );

  return new Promise(function (resolve) {
    const isValidPhoneNumber = validatePhoneNumber(
      phoneNumber,
      "PhoneNumber_error",
      "Business Phone Should be more than 5"
    );
    const isValidMobileNumber = validatePhoneNumber(
      mobileNumber,
      "PhoneNumber1_error",
      "Mobile Phone Should be more than 5"
    );

    resolve(isValidPhoneNumber && isValidMobileNumber);
  });
}

function validatePhoneNumber(number, errorId, errorMessage) {
  const isValid = !isNaN(number) && number > 5;
  const errorElement = document.getElementById(errorId);

  if (isValid) {
    errorElement.style.display = "none";
  } else {
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
  }

  return isValid;
}

function phoneFormat() {
  let valid = false;
  // Get the intlTelInput instances for phone number fields
  var iti = window.intlTelInputGlobals.getInstance(
    document.getElementById("international_PhoneNumber_countrycode")
  );
  var iti1 = window.intlTelInputGlobals.getInstance(
    document.getElementById("international_PhoneNumber1_countrycode")
  );

  // Get the values of phone numbers
  const phoneNumber = document
    .getElementById("international_PhoneNumber_countrycode")
    .value.trim();
  const mobileNumber = document
    .getElementById("international_PhoneNumber1_countrycode")
    .value.trim();

  // Get the selected country codes
  var countryCode = iti.getSelectedCountryData().iso2;
  var countryCode1 = iti1.getSelectedCountryData().iso2;

  // Parse the phone numbers
  const PhoneNumber = window.libphonenumber.PhoneNumberUtil.getInstance();
  const number = PhoneNumber.parse(phoneNumber, countryCode);
  const number1 = PhoneNumber.parse(mobileNumber, countryCode1);

  // Validate the parsed phone numbers
  if (!PhoneNumber.isValidNumber(number)) {
    document.getElementById("PhoneNumber_error").textContent =
      "Please insert the correct phone number";
    document.getElementById("PhoneNumber_error").style.display = "block";
    valid = false;
  } else {
    document.getElementById("PhoneNumber_error").style.display = "none";
    valid = true;
  }

  if (!PhoneNumber.isValidNumber(number1)) {
    document.getElementById("PhoneNumber1_error").textContent =
      "Please insert the correct phone number";
    document.getElementById("PhoneNumber1_error").style.display = "block";
    valid = false;
  } else {
    document.getElementById("PhoneNumber1_error").style.display = "none";
    valid = true;
  }
  return valid;
}
