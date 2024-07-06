let arr = [4,6,9,77,566,89];
let spliceBtnEl = document.getElementById("spliceBtn");
let startIndexEl = document.getElementById("startIndex");
let deleteIndexEl = document.getElementById("deleteIndex");
let itemToAddEl = document.getElementById("itemToAdd");
let arrayContainerEl = document.getElementById("arrayContainer");


function convertIntoStringy(){
    let stringifies = JSON.stringify(arr)
    arrayContainerEl.textContent = stringifies
}
convertIntoStringy();

spliceBtnEl.onclick =function spliceArray() {

    let startIndex = startIndexEl.value;
    let deleteIndex = deleteIndexEl.value;
    let itemToAdd = itemToAddEl.value;

   if(startIndex === ""){
    alert("Please Enter Start Value")
    return 
   }

   if(deleteIndex ===""){
    deleteIndex = 0;
   }

   if(itemToAdd === ""){
    arr.splice(parseInt(startIndex),parseInt(deleteIndex))
   }else{
   arr.splice(parseInt(startIndex),parseInt(deleteIndex),itemToAdd);
   }

   convertIntoStringy();
   
}