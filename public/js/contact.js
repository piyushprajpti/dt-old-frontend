const submitForm = () => {

  loadingIcon.style.display = "inline-block";

    const name = $("#name").val();
    const email = $("#email").val();
    const number = $("#number").val();
    const query = $("#query").val();

    // start-----------------------------------
    
    // end-------------------------------------

    const formData = {
      name: name,
      email: email,
      number: number,
      query: query,
    };

    $.ajax({
      // http://localhost:8080
      // https://deep-tailor.el.r.appspot.com
      url: "https://deep-tailor.el.r.appspot.com/api/contact-submit",
      type: "POST",
      data: JSON.stringify(formData),
      contentType: "application/json",

      success: (result) => {

        hideAllError();
        loadingIcon.style.display = "none";

        document.getElementById("result-messege").style.display = "block";
        document.getElementById("result-messege").style.backgroundColor = "#00ff0059";
        document.getElementById("result-messege").innerHTML = result.message;

        setTimeout(() => {
        document.getElementById("result-messege").style.display = "none";
        document.getElementById("result-messege").innerHTML = "";
        }, 3000);

        document.getElementsByClassName("form-tabs-input")[0].value = "";
        document.getElementsByClassName("form-tabs-input")[1].value = "";
        document.getElementsByClassName("form-tabs-input")[2].value = "";
        document.getElementsByClassName("form-tabs-input")[3].value = "";

      },
      
      error: (error) => {
        loadingIcon.style.display = "none";

        const errorObject = error.responseJSON;

        hideAllError();

        if (errorObject.ERR_NAME_EMPTY) {
          showError("name-error", errorObject.ERR_NAME_EMPTY);
        }
        if (errorObject.ERR_EMAIL_EMPTY) {
          showError("email-error", errorObject.ERR_EMAIL_EMPTY);
        }
        if (errorObject.ERR_EMAIL_INVALID) {
          showError("email-error", errorObject.ERR_EMAIL_INVALID);
        }
        if (errorObject.ERR_NUMBER_EMPTY) {
          showError("number-error", errorObject.ERR_NUMBER_EMPTY);
        }
        if (errorObject.ERR_NUMBER_INVALID) {
          showError("number-error", errorObject.ERR_NUMBER_INVALID);
        }
        if (errorObject.ERR_QUERY_EMPTY) {
          showError("query-error", errorObject.ERR_QUERY_EMPTY);
        }

        document.getElementById("result-messege").style.display = "block";
        document.getElementById("result-messege").style.backgroundColor = "#ff000040";
        document.getElementById("result-messege").style.border = "2px solid #ff0000cc";
        document.getElementById("result-messege").innerHTML = "Unable to submit form, Please try again!";

        setTimeout(() => {
        document.getElementById("result-messege").style.display = "none";
        document.getElementById("result-messege").style.backgroundColor = "";
        document.getElementById("result-messege").style.border = "";
        document.getElementById("result-messege").innerHTML = "";
        }, 3000);
      }
    });
  };

$("#submit-form-button").on("click", submitForm);

let submitButtonContainer = document.getElementById("submit-form-button");
let loadingIcon = document.getElementById("loading");
let sendButton = document.getElementById("send-button");

let formTabsLabel = document.getElementsByClassName("form-tabs-label");
let formTabsInput = document.getElementsByClassName("form-tabs-input");

for (let index = 0; index < formTabsInput.length; index++) {
  formTabsInput[index].addEventListener('active', () => {
    formTabsLabel[index].style.color = "#7ec3dd";
  });
}

let number = document.getElementById("number");

number.addEventListener("input", () => {
  number.value = number.value.slice(0, 10);
});

function showError(errorElement, errorMessege) {
  document.querySelector("#" + errorElement).style.display = "block";
  document.querySelector("#" + errorElement).classList.add("error");
  document.querySelector("#" + errorElement).textContent = errorMessege;
}

function hideAllError() {
  const formInputError = document.getElementsByClassName("form-input-error");
  for (const error of formInputError) {
    error.classList.remove("error");
    error.style.display = "none";
  }
}