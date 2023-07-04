const submitForm = () => {

  sendButton.innerHTML = "";
  loadingIcon.style.display = "block";
  checkIcon.style.display = "none";

    const name = $("#name").val();
    const email = $("#email").val();
    const number = $("#number").val();
    const query = $("#query").val();

    const formData = {
      name: name,
      email: email,
      number: number,
      query: query,
    };

    $.ajax({
      url: "https://deep-tailor.el.r.appspot.com/api/contact-submit",
      type: "POST",
      data: JSON.stringify(formData),
      contentType: "application/json",

      success: (result) => {
          sendButton.innerHTML = "";
          loadingIcon.style.display = "none";
          crossIcon.style.display = "none";
          checkIcon.style.display = "inline";

          setTimeout(() => {
            sendButton.innerHTML = "Send";
            loadingIcon.style.display = "none";
            crossIcon.style.display = "none";
            checkIcon.style.display = "none";
        }, 1000);
        console.log(result);
      },

      error: (error) => {       
        sendButton.innerHTML = "";
        loadingIcon.style.display = "none";
        crossIcon.style.display = "inline";
        checkIcon.style.display = "none";

        setTimeout(() => {
        sendButton.innerHTML = "Re Send";
        loadingIcon.style.display = "none";
        crossIcon.style.display = "none";
        checkIcon.style.display = "none";
        }, 1000);

        alert("Invalid details entered, Please check for following details :- \n1. Fields can't be empty. \n2. Mobile number should be 10 digits.");
      }
    });
  };

$("#submit-form-button").on("click", submitForm);

let submitButtonContainer = document.getElementById("submit-form-button");
let loadingIcon = document.getElementById("loading");
let checkIcon = document.getElementById("check-icon");
let crossIcon = document.getElementById("cross");
let sendButton = document.getElementById("send-button");

let onUnsuccess = () => {
  sendButton.innerHTML = "";
  loadingIcon.style.display = "none";
  crossIcon.style.display = "inline";
  checkIcon.style.display = "none";

  setTimeout(() => {
  sendButton.innerHTML = "Re Send";
  loadingIcon.style.display = "none";
  crossIcon.style.display = "none";
  checkIcon.style.display = "none";
  }, 1000);
}


let formTabsLabel = document.getElementsByClassName("form-tabs-label");
let formTabsInput = document.getElementsByClassName("form-tabs-input");

for (let index = 0; index < formTabsInput.length; index++) {
  formTabsInput[index].addEventListener('active', () => {
    formTabsLabel[index].style.color = "#7ec3dd";
  });
}