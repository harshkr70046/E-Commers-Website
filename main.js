import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// Define a function named `showProductContainer` that takes an array of products as input.

const menu = document.querySelector(".nav-bar-iteam")
const menucontent = document.querySelector(".menu-content");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");

let number = 1;
const hendlemenu = (event)=>{
    if(number==1){
        
        menucontent.style.display = "block";
        right.style.display = "none";
        wrong.style.display = "block";
        number = 0;
    }
    else {
        menucontent.style.display = "none";
        right.style.display = "block";
        wrong.style.display = "none";
        number = 1;
    }
    
}
menucontent.style.display = "none";
wrong.style.display = "none"
menu.addEventListener('click',(event)=>{
    hendlemenu(event);
})


showProductContainer(products);