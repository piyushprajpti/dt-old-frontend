const submitForm = () => {
    const name = $("#name").val();
    const email = $("#email").val();
    const number = $("#number").val();

    const formData = {
      name: name,
      email: email,
      number: number,
    };

    $.ajax({
      url: "http://localhost:8080/api/contact-submit",
      type: "POST",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: (result) => {
        console.log(result);
      },
    });
  };

  $("#submit-form-button").on("click", submitForm);



let loadingIconContainer = document.getElementById("submit-form-button");
let checkIcon = document.getElementById("check-icon");
let sendButton = document.getElementById("send-button");

loadingIconContainer.addEventListener("click", () => {

    sendButton.innerHTML = "";
    checkIcon.style.display = "inline";

    setTimeout(() => {
        sendButton.innerHTML = "Send";
        checkIcon.style.display = "none";
    }, 1000);

});

let formTabsLabel = document.getElementsByClassName("form-tabs-label");
let formTabsInput = document.getElementsByClassName("form-tabs-input");

for (let index = 0; index < formTabsInput.length; index++) {
  formTabsInput[index].addEventListener('active', () => {
    formTabsLabel[index].style.color = "#7ec3dd";
  });
}
