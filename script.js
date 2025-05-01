document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#animatedButton");
    const clickCountDisplay = document.querySelector("#clickCount");
  
    // Retrieve click count from localStorage
    let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
    clickCountDisplay.textContent = `Click Count: ${clickCount}`;
  
    button.addEventListener("click", () => {
      // Trigger animation
      button.classList.add("animate");
  
      // Remove animation class after it ends
      button.addEventListener("animationend", () => {
        button.classList.remove("animate");
      });
  
      // Update and store click count
      clickCount++;
      localStorage.setItem("clickCount", clickCount);
      clickCountDisplay.textContent = `Click Count: ${clickCount}`;
    });
  });