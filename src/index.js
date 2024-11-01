import "./styles.css";

let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg)'
let title = document.title
mainEl.textContent = document.title
console.log(mainEl);