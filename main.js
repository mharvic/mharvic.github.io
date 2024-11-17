const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d);

const greeting = () => {
    if (d.getHours() <= 11) {
    alert("Good Morning");
    }
    else if(d.getHours() < 18){
    alert("Good Afternoon");
    }
    else{
    alert("Good Evening");
 }
}


const btn = document.getElementById('btn-alert');

if (btn){
    btn.addEventListener("click", () => {
    greeting();
console.log("Button Clicked");
});
}
const button = document.getElementById('btn-num');
if(button){
    button.onmouseover = function() {
    button.innerText = "306-514-8471";
    };

// Revert the button label when the mouse leaves
    button.onmouseout = function() {
    button.innerText = "CONTACT ME";
    };

    button.addEventListener("click", () => {
      // Navigate to the tel: link
      window.location.href = 'tel:(306)-514-8471'; // Replace with your phone number
    });

  }
const orderedList = document.getElementById("numbers");

if (orderedList) {
  for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
    orderedList.appendChild(listItem);
    listItem.style.textAlign = 'left'

  }
}

 console.log('For Loop');

