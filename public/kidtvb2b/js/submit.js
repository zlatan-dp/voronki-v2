// legal text

const legalText = document.querySelector(".legat-text");
const legalTextToggle = document.querySelector(".checkbox-container-icon");

legalTextToggle.addEventListener("click", () => {
  legalText.classList.toggle("expanded");
  legalTextToggle.classList.toggle("rotated");
});

// validate form

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const legalCheckbox = document.getElementById("legal");
const submitBtn = document.querySelector(".submit-btn");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function validateName(name) {
  return /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}(?: [A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,})*$/.test(
    name.trim()
  );
}

function validateEmail(email) {
  email = email.trim();

  const emailPattern =
    /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    emailPattern.test(email) &&
    !/\.\./.test(email) && // Заборона подвійних крапок
    !/@\./.test(email) && // Заборона "@."
    !/\.@/.test(email) && // Заборона ".@"
    !/^\.|\.$/.test(email) // Заборона крапки на початку або в кінці
  );
}

function validateMessage(message) {
  return message.trim().length >= 5;
}

function validateFieldOnBlur(
  inputElement,
  errorElement,
  validationFunction,
  errorMessage
) {
  inputElement.addEventListener("blur", function () {
    if (inputElement.value.trim() && !validationFunction(inputElement.value)) {
      errorElement.textContent = errorMessage;
    } else {
      errorElement.textContent = "";
    }
  });
}

validateFieldOnBlur(
  nameInput,
  nameError,
  validateName,
  "Invalid name (min. 2 letters)"
);
validateFieldOnBlur(emailInput, emailError, validateEmail, "Invalid email");
validateFieldOnBlur(
  messageInput,
  messageError,
  validateMessage,
  "The message must be at least 5 characters long"
);

function updateButtonState() {
  const isNameValid = validateName(nameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isMessageValid = validateMessage(messageInput.value);
  const isLegalChecked = legalCheckbox.checked;

  const isValid =
    isNameValid && isEmailValid && isMessageValid && isLegalChecked;

  submitBtn.disabled = !isValid;

  if (isValid) {
    submitBtn.classList.add("active");
  } else {
    submitBtn.classList.remove("active");
  }
}

nameInput.addEventListener("input", updateButtonState);
emailInput.addEventListener("input", updateButtonState);
messageInput.addEventListener("input", updateButtonState);
legalCheckbox.addEventListener("change", updateButtonState);

// Submit

const submitModal = document.querySelector(".backdrop-submit");
const closeModalBtn = document.querySelector(".submit-menu-close");
const submitModalMessage = document.querySelector(".submit-menu-message");

const okBtn = document.getElementById("ok-btn");
const whatsup = document.getElementById("whatsup");
const tvIcon = document.getElementById("tv-icon");

function closeModal() {
  submitModal.classList.add("is-hidden");
  whatsup.classList.add("display-none");
  okBtn.classList.add("display-none");
  submitModalMessage.textContent = "";
  tvIcon.src = "";
}

closeModalBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
