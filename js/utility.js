// random bg color generator function using rgba value.
function randomBackground(id) {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let a = Math.random().toFixed(1);
    let bgColor = `rgb(${x}, ${y}, ${z}, ${a})`
    document.getElementById(id).style.background = bgColor;
}




// returns input area value in string format.
function getInputValueString(id) {
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    // const inputNumber = parseFloat(inputString);

    return inputString;

}



// this function checks if any input area is missing/ negative values/empty values/strings 
function validate(id) {
    let inputValue = getInputValueString(id);
    if(inputValue.length === 0){
      alert("Input can't be empty");
      return false;
    }
    let array = inputValue.split('');
    for (element of array) {
      if (isNaN(parseFloat(element)) && element !== ".") {
        alert("Please enter valid number");
        return false;
      }
    }
  
  }





  // array of areas
let arryOfAreas = [];






// table function
function createTable(){
    let table = document.getElementById('area-table');
    let tr = document.createElement("tr");
  
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
  
   
  
    td1.innerHTML = arryOfAreas.length + '.';
  
    td2.innerText = arryOfAreas[arryOfAreas.length-1].name;
    td3.innerHTML = `<span class="area-span">${arryOfAreas[arryOfAreas.length-1].area}</span><span>cm</span><sup>2</sup>`;
    ;
    td4.innerHTML = `<button class= "btn-convert my-btn-convert">Convert to m<sup>2</sup></button>`;
    td5.innerHTML = `<button class= "btn-delete my-btn-delete">Del</button>`;
  
    td1.style.fontSize = "14px";
    td2.style.fontSize = "14px";
    td3.style.fontSize = "14px";
    td4.style.fontSize = "14px";
    td5.style.fontSize = "14px";
  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
  
    table.appendChild(tr);
  
    // delete btn
    const deleteBtns = document.querySelectorAll(".btn-delete");
    for(const deleteBtn of deleteBtns){
      deleteBtn.addEventListener('click', function(event){
        event.target.parentNode.parentNode.style.display= "none";
  
      })
  
    }
  
  
    // convert btn
    const convertBtns =document.querySelectorAll(".btn-convert");
    for(const convertBtn of convertBtns){
      convertBtn.addEventListener("click", function(event){
        const areaText = event.target.parentNode.parentNode.children[2].children[0].innerText;
        console.log(areaText);
  
        const toMeterSq = parseFloat(areaText/10000).toFixed(6);
        event.target.parentNode.parentNode.children[2].children[0].innerText = toMeterSq;
        event.target.parentNode.parentNode.children[2].children[1].innerHTML = "m";
        convertBtn.classList.add("disabled");

        console.log(convertBtn.classList);
  
      })
    }
  }
  
