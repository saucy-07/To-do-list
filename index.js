let toDoListArray = []

function add() {
    let task = {
        id: (toDoListArray.length + 1),
        name: document.getElementById('toDoItem').value,
        createdDate: new Date(),
    };

    toDoListArray.push(task);

    let serializedArray = JSON.stringify(toDoListArray);

    localStorage.setItem("toDoListArray" , serializedArray);

    console.log(serializedArray);

}

let toDoListFr = document.getElementById("toDoItemList")

function print(){
    toDoListFr.innerHTML = '';
    toDoListArray.forEach((data) =>{
        toDoListFr.innerHTML += `
        <div><input type="checkbox" name="check" id="check">${data.name}<input onclick="deletus()" type="button" value="X"></div>
        `

    })
}

function deletus() {
    localStorage.removeItem();
}