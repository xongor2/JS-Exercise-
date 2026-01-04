const list =document.querySelector("#list")

function addItem(){
    const newItem = document.createElement('li')
    newItem.textContent = "waa Item cusub"
    console.log(newItem);
    
    list.appendChild(newItem)
}

function removeItem(){
    if (list.lastChild){
        list.removeChild(list.lastChild)
} else{
    alert("waan ebar meeshu")
}

}
   