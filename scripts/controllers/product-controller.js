//Glue b/w view and model
//controller UI I/O
window.addEventListener('load',showProducts);
import readAllProduct from "../services/product-operations.js";
import payNow from "../services/payment.js";
let products;
async function showProducts(){
     products = await readAllProduct();
    console.log('Controller recieve ',products);
     products.map(obj=>printCards(obj));
     printBasket();
    
}
var index;
function addtoCart(id){
    // console.log('add to cart',this);
    // console.log('The id is', this.id);
    // console.log(products.map(ob=>this.id));
    // console.log(arr);
    console.log(id);
    index=products.findIndex(x=>x.id==id);
    console.log(index);   
    insertBasket(index);
  

}

// console.log(arr);
// function idShow(){
//     console.log('The id is', this);
// }
// html has elements and html is a document.
function printCards(obj){
    const column=document.querySelector('#column');
    const div = document.createElement('div');
    div.className='card';
    const img = document.createElement('img');
    img.className='card-img-top';
    img.src=`${obj.url}`;
    const div2 = document.createElement('div');
    div2.className='card-body';
    div.style="width: 15rem";
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=`${obj.name}`+ ' Rs '+ obj.price;
    const p = document.createElement('p');
    p.className='card-text';
    p.innerText=`${obj.description}`;
    const a=document.createElement('a');
    a.className='btn btn-primary';
    a.innerText='Customise your deal';
    // a.onclick = ()=>addtoCart(obj.id);
    a.addEventListener('click',()=>addtoCart(obj.id));
   
    column.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(a);
}

let sum=0;
function insertBasket(index){
        // col=document.querySelector('#column2');
        // column2.innerHTML='';
        // p.innerHtml='';
        divcard.innerHtml=''; 
        products[index].quantity+=1;
        p.innerText+=`${products[index].name} --> ${products[index].price * products[index].quantity} -->${products[index].quantity} \n`;
        
    // else{
    //     products[index].quantity+=1;
    //     // p.innerText=`${products[index].name} --> ${products[index].price * products[index].quantity} `;
    // }
    sum+=parseInt(products[index].price * products[index].quantity);
    sum+=parseInt(sum*0.18);
    button.style.display='block';
    button.innerText=`Payment ${sum}`;
    button.addEventListener('click',()=>payNow(sum+'00'));
    // button.addEventListener('click',sweep);
    
    // p.innerText='';
    
    console.log(sum);
}


let p; 
let button;
let divbody;
let divcard;
let col;
function printBasket(){
     col=document.querySelector('#column2');
    //  column2.innerHtml='';
     divcard=document.createElement('div');
    divcard.className='card';
    divcard.style="height: 36rem";
     divbody=document.createElement('div');
    divbody.className='card-body';
    p=document.createElement('p');
    // insertBasket(index,p);
    // p.innerText=`${products[index].name}`;
    p.innerText='Pizzas -->   Price --> Quantity\n';
    col.appendChild(divcard);
    divcard.appendChild(divbody);
    divbody.appendChild(p);
    button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    // button./
    button.className='btn btn-success';
    // button.className='';
    
    // button.addEventListener('click',payNow(sum));
    
    divcard.appendChild(button);
    
    // button.addEventListener('click',()=>payNow(sum));


}

