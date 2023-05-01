// 2 dənə input verilir. 1cisinə ekranda çıxmasını istədiyimiz sözü yazırıq 2cisində isə yazının rəngini seçirik. Düyməyə kliklənən zaman həmin rəngdə o yazı HTML-da görünsün
const ul = document.getElementById("list");
const inp = document.getElementById("text");
const input = document.getElementById("color");
const btn = document.getElementById("btn");
let stdns = [];

function fillList() {     
    ul.innerHTML = stdns.reduce((total, text)=> total + `<li class="list-group-item">${text}</li>`,'');    
}
btn.onclick = e=>{
    e.preventDefault();   
   stdns.push(inp.value.trim());
    changeFontColor();
    fillList();

}
function changeFontColor() {
    // var metn = document.getElementById("text").value;
    // ...
    var textColor = input.value;
    inp.style.color = textColor;
  }
