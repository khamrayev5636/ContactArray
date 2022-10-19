const elForm = document.querySelector(".form");
const elName = elForm.querySelector(".input__name");
const elRela = elForm.querySelector(".form__datalist");
const elPhone = elForm.querySelector(".input__phone");
const elText = document.querySelector(".list-js");

const array = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    let preNumber = false;
    
    const obj = {
        elNameValue : elName.value,
        elRelaValue : elRela.value,
        elPhoneValue : elPhone.value,
    };
    
    array.push(obj);
    
    elForm.reset();
    elText.textContent = "";
     

    for(let i = 0; i < array.length; i++){
        
        const item = document.createElement("li");
        item.classList.add("item-js");
        
        
        const title = document.createElement("h3");
        title.textContent = array[i].elNameValue;
        item.appendChild(title);
        
        const text = document.createElement("p");
        text.classList.add("text-js")
        text.textContent = array[i].elRelaValue;
        item.appendChild(text);
        
        const telPhone = document.createElement("a");
        telPhone.classList.add("link-js");
        telPhone.setAttribute("href" ,  `tel:+${array[i].elPhoneValue}`)
        telPhone.textContent = "+" + array[i].elPhoneValue;
        item.appendChild(telPhone);
        
        const button = document.createElement("button");
        button.classList.add("button-js")
        button.textContent = "Delate";
        item.appendChild(button);
        
        elText.appendChild(item);
        
    }
    
})
