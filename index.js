let title = document.getElementById("title").innerHTML = "Today we manipulate with DOM";
let question = confirm("Do you like frontend");
let answer = document.getElementById("answer-frontend");
if(question == true){
    answer.innerHTML = "Yes";
}else{
    answer.innerHTML = "NO";
}
let newProduct = prompt("enter new product");
let newElement = document.createElement("li");
let shoppingL = document.getElementById("shop");
shoppingL.appendChild(newElement).innerHTML = newProduct;

let item = document.getElementById("Bread");
item.parentNode.removeChild(item);


let selectedProduct = prompt("select your procuct");
let price = prompt("enter price");
let totalPrice = document.getElementById("your-total-price")
//.innerHTML = price;



let products = [{name:"banana", priceP:4}, {name:"apple", priceP:5}];

let fProduct = prompt("enter product witch you want");
if(fProduct == products[0].name){
    let quantity = prompt("enter quantity");
    totalPrice.innerHTML = quantity * products[0].priceP;
}else if(fProduct == products[1].name){
    let quantity2 = prompt("enter quantity");
    totalPrice.innerHTML = quantity2 * products[1].priceP;

}else{
    alert("Sorry the item you are searching is not found")
};


