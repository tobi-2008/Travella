let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

const texts = ["Now you can earn money while travelling", "Pick up packages, deliver and earn", "Send packages faster and more affordably"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 80; 
const erasingDelay = 20; 
const newTextDelay = 200; 

function typeText() {
  const text = texts[textIndex];
  const currentText = text.substring(0, charIndex);
  document.getElementById("typewritter").textContent = currentText;
  charIndex++;

  if (charIndex <= text.length) {
    setTimeout(typeText, typingDelay);
  } else {
    isDeleting = true;
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  const text = texts[textIndex];
  const currentText = text.substring(0, charIndex - 1);
  document.getElementById("typewritter").textContent = currentText;
  charIndex--;

  if (currentText === "") {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 0); 
  } else {
    setTimeout(eraseText, erasingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeText, newTextDelay);
});