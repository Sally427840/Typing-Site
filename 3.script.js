let inputField = null;
let textToType = "";
let startTime = null;

function startTypingExercise(fieldId, text="Type this sentence as fast and accurately as you can.") {
  inputField = document.getElementById(fieldId);
  textToType = text;
  startTime = new Date();
  inputField.value = "";
  inputField.focus();
  inputField.addEventListener('input', checkTyping);
}

function checkTyping() {
  const typed = inputField.value;
  if (typed === textToType) {
    const timeTaken = (new Date() - startTime) / 1000;
    const words = textToType.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);
    alert(`Well done! Your WPM: ${wpm}`);
    inputField.removeEventListener('input', checkTyping);
  }
}