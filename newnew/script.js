let nameArray =[];



const addButton = document.getElementById('add');


let nameInput = document.getElementById('nameInput');


function addFunction(){

        let inputValue = document.getElementById('nameInput').value;
    if(inputValue !==''){
            nameArray.push(inputValue);
    }
        console.log(nameArray);
}


function removeFunction(){

    let inputValue = document.getElementById('nameInput').value;
    if(nameArray.includes(inputValue)){
        alert("removed")
    }

    else {alert("Already doesn't exist")}

    nameArray = nameArray.filter(name => name !== inputValue);

    console.log(nameArray);

    
}


function Validate(){
    console.log(nameArray);
    let inputValue = document.getElementById('nameInput').value;
    if(nameArray.includes(inputValue) ){
        alert("exists")
} else{alert("doesn't exist")}

}