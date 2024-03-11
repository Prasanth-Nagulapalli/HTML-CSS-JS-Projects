const FormEl = document.querySelector("form");
const Input = document.getElementById("text-input");
const showResult = document.getElementById("result");

FormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let InputValue = Input.value;
  let reverseValue = [];
  let reverseString = "";
  let result;
  Input.value = ""
  if (!InputValue) {
    alert("Enter Value");
    return;
  } else {
    let correctValue = InputValue.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    for (let i = 0; i < correctValue.length; i++) {
      reverseValue.unshift(correctValue[i]);
      console.log(reverseValue);
    }
    reverseString = reverseValue.join("");

    reverseString === correctValue
      ? (result = `${InputValue}<span>is Plaindrome</span> `)
      : (result = `${InputValue}<span>is not Plaindrome</span> `);
  }
  showResult.innerHTML = result;
  return result;
});
