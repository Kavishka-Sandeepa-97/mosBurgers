
'use strict'


function Item(itemCode, itemName, imgSrc, discount, qtyOnHand,price) {
    this.itemCode = itemCode;
    this.itemName = itemName;
    this.imgSrc = imgSrc;
    this.price=price;
    this.discount = discount;
    this.qtyOnHand = qtyOnHand;
}

let itemsArray = [
    { itemCode: "B1001", itemName: "Classic Burger (Large)", imgSrc: "resources/download.jpg", price: 750, discount: 0, qtyOnHand:50 },
    { itemCode: "B1002", itemName: "Classic Burger (Regular)", imgSrc: "resources/download.jpg", price: 1500, discount: 15, qtyOnHand: 64 },
    { itemCode: "B1003", itemName: "Turkey Burger", imgSrc: "resources/download.jpg", price: 1600, discount: 0, qtyOnHand: 70 },
    { itemCode: "B1004", itemName: "Chicken Burger (Large)", imgSrc: "resources/download.jpg", price: 1400, discount: 0, qtyOnHand: 50 },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", imgSrc: "resources/download.jpg", price: 800, discount: 20, qtyOnHand: 43 },
    { itemCode: "B1006", itemName: "Cheese Burger (Large)", imgSrc: "resources/download.jpg", price: 1000, discount: 0, qtyOnHand: 80 },
    { itemCode: "B1007", itemName: "Cheese Burger (Regular)", imgSrc: "resources/download.jpg", price: 600, discount: 0, qtyOnHand: 15 },
    { itemCode: "B1008", itemName: "Bacon Burger", imgSrc: "resources/download.jpg", price: 650, discount: 15, qtyOnHand: 78 },
    { itemCode: "B1009", itemName: "Shawarma Burger", imgSrc: "resources/download.jpg", price: 800, discount: 10, qtyOnHand: 58},
    { itemCode: "B1010", itemName: "Olive Burger", imgSrc: "resources/download.jpg", price: 1800, discount: 0, qtyOnHand: 58}
];

function tblLoad() {
  let content=`<tr>
    <th> Item Code</th>
    <th>Item Name</th>
    <th>Item</th>
    <th>Price</th>
    <th>Discount</th>
    <th style="width: 50px;">Quantity On Hand</th>
    </tr>`;

    for (let i = 0; i < itemsArray.length; i++) {
        

       content+=` <tr style="height: 20px;">
                <td>${itemsArray[i].itemCode}</td>
                <td>${itemsArray[i].itemName}</td>
                <td class="td-img"><img src="resources/download.jpg" alt=""></td>
                <td>${itemsArray[i].price}</td>
                <td>${itemsArray[i].discount}</td>
                <td>${itemsArray[i].qtyOnHand}</td>
                </tr>`;
       
    }
    document.getElementById(`table`).innerHTML=content;
}
window.onload = function () {
    tblLoad(); 

}
function equalsIgnoreCase(str1, str2) {
    return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
}

function keyPressItemCode(event) {
   
    if (event.key === 'Enter') {
       
        let inputValue = document.getElementById('txtItemCode').value;
        for (let i = 0; i < itemsArray.length; i++) {
            if (equalsIgnoreCase(inputValue, itemsArray[i].itemCode)) {

                document.getElementById("txtName").value=itemsArray[i].itemName;
                document.getElementById("price").value=itemsArray[i].price;
                document.getElementById("discount").value=itemsArray[i].discount;
                document.getElementById("qtyOnHand").value=itemsArray[i].qtyOnHand;
                return;
                
            }
            
        }
        alert("Item Not Found");
    }
   
}

function keyPressItemName(event) {

    if (event.key === 'Enter') {
       
        let inputValue = document.getElementById('txtItemName').value;
        for (let i = 0; i < itemsArray.length; i++) {
            if (equalsIgnoreCase(inputValue, itemsArray[i].itemName)) {

                document.getElementById("txtItemCode").value=itemsArray[i].itemCode;
                document.getElementById("price").value=itemsArray[i].price;
                document.getElementById("discount").value=itemsArray[i].discount;
                document.getElementById("qtyOnHand").value=itemsArray[i].qtyOnHand;
                return;
                
            }
            
        }
        alert("Item Not Found");
    }
   

}
