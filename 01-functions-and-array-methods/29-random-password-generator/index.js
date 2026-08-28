// Random Password Generator

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected.)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
const passwordOutput = document.querySelector("#password-output");
const lengthInput = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");
const generateButton = document.querySelector("#generate-button");
const copyButton = document.querySelector("#copy-button");
const copyStatus = document.querySelector("#copy-status");
const strengthLabel = document.querySelector("#strength-label");

function updateStrength(length, selectedSets) {
  const score = length + selectedSets * 5;
  const strength =
    score >= 35
      ? "Excellent"
      : score >= 25
        ? "Strong"
        : score >= 15
          ? "Fair"
          : "Weak";
  strengthLabel.textContent = strength;
  document.querySelectorAll(".strength-bars i").forEach((bar, index) => {
    bar.classList.toggle(
      "active",
      index < (score >= 35 ? 4 : score >= 25 ? 3 : score >= 15 ? 2 : 1),
    );
  });
}

function renderPassword() {
  const options = {
    length: Number(lengthInput.value),
    lowercase: document.querySelector("#lowercase").checked,
    uppercase: document.querySelector("#uppercase").checked,
    numbers: document.querySelector("#numbers").checked,
    symbols: document.querySelector("#symbols").checked,
  };
  const selectedSets = Object.values(options).filter(Boolean).length - 1;
  passwordOutput.textContent = generatePassword(
    options.length,
    options.lowercase,
    options.uppercase,
    options.numbers,
    options.symbols,
  );
  lengthValue.textContent = options.length;
  updateStrength(options.length, selectedSets);
  copyStatus.textContent = "";
}

generateButton.addEventListener("click", renderPassword);
lengthInput.addEventListener("input", renderPassword);
document
  .querySelectorAll(".check-option input")
  .forEach((input) => input.addEventListener("change", renderPassword));

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(passwordOutput.textContent);
  copyStatus.textContent = "Copied to clipboard";
  setTimeout(() => (copyStatus.textContent = ""), 2000);
});

renderPassword();
