let myForm = document.querySelector('#my-form');
let personName = document.querySelector('#name');
let msgError = document.querySelector('#error');
let showDialog = document.querySelectorAll('#show');
let names = document.querySelector('#list');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();

    if(personName.value === ''){
        msgError.innerHTML = `Please input a name`;
    }
    else if(personName.value.length < 3){
        msgError.innerHTML = `The inputed charcters was less than 3`;
    }
    else if(personName.value.length > 60){
        msgError.innerHTML = `The inputed charcters was greater than 60`;
    }
    else{
        let listName = document.createElement('li');
        listName.append(document.createTextNode(personName.value));
        names.append(listName);

        $(showDialog).fadeIn();

        myForm.reset();
    }
}

function snap(){
    $("#snap-header").fadeOut(1000); 
    $("#snap-card").fadeOut(2000); 
    $("#snap-footer").fadeOut(3000); 
    $("#dance").fadeIn("slow"); 
}