const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const viewBtn = document.getElementById("viewBtn")
const div = document.getElementsByClassName("container");
// const body = document.body.appendChild(div);
const list = document.getElementById("para");
const listItems = document.createElement("li");



console.log("hello")

todoArray = [];

addBtn.addEventListener("click", () => {
    const newInput = document.getElementById("input").value;

    if (newInput == ''){
        alert("Cannot add an empty Todo");
    }
    else{
        const newArr = JSON.parse(localStorage.getItem("todoArray"));
        console.log(typeof retrievedArray);
        const newObj = Object.values(newArr);
        
        const inputvalue = input.value;
    // console.log(inputvalue);
    newObj.push (inputvalue);
    todoArray = newObj;
    console.log(todoArray);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    // inputvalue.value = '';
    const newInput = document.getElementById("input").value = '';
    // list.textContent = "ADDED SUCCESFULLY";
    // list.textContent(listItems)
    viewAll()
    }
    

})

deleteBtn.addEventListener("click", () => {
    const newArr = JSON.parse(localStorage.getItem("todoArray"));
    const newObj = Object.values(newArr);
    newObj.pop();
    console.log(newObj);
    todoArray = newObj;
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    para.textContent =  '';
    const newInput = document.getElementById("input").value = '';
    viewAll()


}
)

function viewAll(){

    const retrievedArray = JSON.parse(localStorage.getItem('todoArray'));
   
    listItems.textContent = retrievedArray;
     list.innerHTML = '';

   
    retrievedArray.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    
    

}


