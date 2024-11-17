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
if(btn){
    btn.onmouseover = function() {
    btn.innerText = "GREETINGS";
    };

// Revert the button label when the mouse leaves
    btn.onmouseout = function() {
    btn.innerText = "CLICK ME";
    };
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

