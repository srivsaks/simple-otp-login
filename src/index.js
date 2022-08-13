import "./styles.css";

const codes = document.querySelectorAll(".code");

let indx = 0;

function focusInput() {
  if (indx < codes.length && indx >= 0) codes[indx].focus();
  else {
  }
}

codes.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      indx--;
      focusInput();
    } else if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        indx++;
        focusInput();
      }, 0);
    }
  });
});

focusInput();
