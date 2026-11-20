const product1={
    name:"laptop",
    price:30000,
    quantity:2
}
const product2 = {
  name: "mouse",
  price: 500,
  quantity: 3,
};
function addtocart(item)
 {
    console.log(item.name);
     console.log(item.price);
      console.log(item.quantity);
}
addtocart(product1)
addtocart(product2)

function calculatedata(item)
{
return item.quantity*item.price;
}

const total1=calculatedata(product1)
const total2=calculatedata(product2);

const granttotal=total1+total2;
console.log("laptop amt",total1);
console.log("mouse amt",total2)
console.log("total=:",granttotal)
