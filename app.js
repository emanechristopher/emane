const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const  userInput = document.getElementById("userInput");

pencil.addEventListener("click",()=>{
    allItems.innerHTML="";
})

userInput.addEventListener("keydown",(e)=>{
    if (e.key == "Enter") {
        addItem();
    }
})

function addItem() {
    let h2 = document.createElement("h4");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click",()=>{
        h2.style.textDecoration = "line-through";
    })

  h2.addEventListener("dblclick",()=>{
allItems.removeChild(h2);
  })

    allItems.insertAdjacentElement("beforeend",h2);

    userInput.value =""; 
}

