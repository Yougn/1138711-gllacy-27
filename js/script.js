var feedback = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".btn-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var comment = popup.querySelector("[name=fieldback-comment]");

feedback.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("feedback-show");
login.focus();
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("feedback-show");
popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
if (!login.value || !email.value|| !comment.value) {
 evt.preventDefault();
 popup.classList.remove("feedback-error");
 popup.offsetWidth = popup.offsetWidth;
 popup.classList.add("feedback-error");
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
 evt.preventDefault();
 if (popup.classList.contains("feedback-show")) {
   popup.classList.remove("feedback-show");
   popup.classList.remove("modal-error");
 }
}
});