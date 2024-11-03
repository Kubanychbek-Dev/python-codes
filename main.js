import { codeLists } from "./codes.js";

function screenCode() {
  const sortedWords = codeLists.sort((a, b) => {
    if(a.word > b.word) {
      return 1;
    } else if(a.word < b.word) {
        return -1;
    }
  })

  sortedWords.map((code) => {
    const menu = document.querySelector(".menu");
    const li = document.createElement("li");
    li.classList.add("item")
    li.innerText = code.codeName
    menu.append(li)
  
    li.addEventListener("click", () => {
      document.querySelector("code").innerHTML = code.codeSelf
      document.querySelector(".aside--show").classList.remove("aside--show")
    })
  })
}

screenCode();

document.querySelector(".aside-btn").addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("aside--show");
})