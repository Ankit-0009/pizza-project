//Products CRUD operations performed
// C - Create, R - Read, U - Update, D - Delete

import Product from '../models/product.js';
import doNetworkCall from './api-client.js';
export default async function readAllProduct(){
    try{
        const obj=await doNetworkCall(); 
        const pizzas=obj['Vegetarian']; //pizzas are pizza array.
        const pizzaArray=pizzas.map(pizza=>{
            const pizzaObject=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
                return pizzaObject; //yaha return ku kara.
        });
        return pizzaArray ; 
    }
    catch(err){
        throw err;
    }
}  