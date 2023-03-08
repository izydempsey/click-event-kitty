var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

button.addEventListener("click", function() {
   if (cat.classList.contains("show")) {
    //console.log("Yes");
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
   } else {
    //console.log("no");
    cat.classList.add("show");
    button.innerText = "Shoo, go away!"
    button.classList.remove("disappear");
   }
});