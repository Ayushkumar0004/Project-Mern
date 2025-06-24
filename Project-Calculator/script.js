const display = document.getElementById("display");

function append(value) {
  if (value === '+/-') {
    toggleSign();
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
    }
  }
}

function percent() {
  if (display.value) {
    try {
      display.value = eval(display.value) / 100;
    } catch {
      display.value = "Error";
    }
  }
}

// ✅ Add this: Keyboard input handler
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault(); // prevent form submission if any
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '%') {
    percent();
  }
});
