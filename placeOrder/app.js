
'use strict';


let itemsArray = [

    { itemCode: "B1001", itemName: "Classic Burger (Large)", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 750, discount: 0, qtyOnHand: 50 },
    { itemCode: "B1002", itemName: "Classic Burger (Regular)", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 1500, discount: 15, qtyOnHand: 64 },
    { itemCode: "B1003", itemName: "Turkey Burger", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 1600, discount: 0, qtyOnHand: 70 },
    { itemCode: "B1004", itemName: "Chicken Burger (Large)", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 1400, discount: 0, qtyOnHand: 50 },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 800, discount: 20, qtyOnHand: 43 },
    { itemCode: "B1006", itemName: "Cheese Burger (Large)", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 1000, discount: 0, qtyOnHand: 80 },
    { itemCode: "B1007", itemName: "Cheese Burger (Regular)", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 600, discount: 0, qtyOnHand: 15 },
    { itemCode: "B1008", itemName: "Bacon Burger", imgSrc: "resources/download.jpg", price: 650, expireDate: "2023/12/19", discount: 15, qtyOnHand: 78 },
    { itemCode: "B1009", itemName: "Shawarma Burger", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 800, discount: 10, qtyOnHand: 58 },
    { itemCode: "B1010", itemName: "Olive Burger", imgSrc: "resources/download.jpg", expireDate: "2023/12/19", price: 1800, discount: 0, qtyOnHand: 58 }
];

function equalsIgnoreCase(str1, str2) {
    return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
}

function keyPressItemCode(event) {

    if (event.key === 'Enter') {

        let inputValue = document.getElementById('txtItemCode').value;
        for (let i = 0; i < itemsArray.length; i++) {
            if (equalsIgnoreCase(inputValue, itemsArray[i].itemCode)) {

                document.getElementById("txtItemName").value = itemsArray[i].itemName;
                document.getElementById("price").value = itemsArray[i].price;
                document.getElementById("discount").value = itemsArray[i].discount;
               
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

                document.getElementById("txtItemCode").value = itemsArray[i].itemCode;
                document.getElementById("price").value = itemsArray[i].price;
                document.getElementById("discount").value = itemsArray[i].discount;
                
                return;
            }

        }
        alert("Item Not Found");
    }


}

let cartDataArray = [];
function addToCart() {

    let itemCode = document.getElementById("txtItemCode").value;
    let itemName = document.getElementById("txtItemName").value;
    let price = parseInt(document.getElementById(`price`).value);
    let discount = parseInt(document.getElementById(`discount`).value);
    let buyingQty = parseInt(document.getElementById(`buyingQty`).value);
    let amount = parseInt((1 - discount / 100) * price * buyingQty);

    let content=`<tr>
    <th> Item Code</th>
    <th>Item Name</th>
    <th>Item</th>
    <th>Price</th>
    <th>Discount</th>
    <th style="width: 50px;">Buying Qty</th>
    <th>amount</th>
    <th>Option</th>
    </tr>`;

    let isExist = false;
    for (let i = 0; i < cartDataArray.length; i++) {
        
        if(equalsIgnoreCase(itemCode,cartDataArray[i].itemCode)){

            cartDataArray[i].buyingQty+=buyingQty;
            cartDataArray[i].amount+=amount;
                isExist=true;
            for (let j = 0; j < cartDataArray.length; j++) {
               
                content+=` <tr style="height: 20px;">
                <td>${cartDataArray[j].itemCode}</td>
                <td>${cartDataArray[j].itemName}</td>
                <td class="td-img"><img src="resources/download (1).jpg" alt=""></td>
                <td>${cartDataArray[j].price}</td>
                <td>${cartDataArray[j].discount}</td>
                <td>${cartDataArray[j].buyingQty}</td>
                <td>${cartDataArray[j].amount}</td>
                <td><button onclick="deleteItem(${j})">delete</button></td>
                
                </tr>`;
                
            }
            document.getElementById(`myTable`).innerHTML=content;
            
            break;
        }
        
    }

    if(!isExist){
        cartDataArray.push({
            itemCode: itemCode,
            itemName: itemName,
            price: price,
            discount: discount,
            buyingQty: buyingQty,
            amount: amount
        });

        var table = document.getElementById("myTable");

    var newRow = document.createElement("tr");


    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var cell7 = document.createElement("td");
    var cell8 = document.createElement("td");

    cell1.appendChild(document.createTextNode(cartDataArray[cartDataArray.length - 1].itemCode));
    cell2.appendChild(document.createTextNode(cartDataArray[cartDataArray.length - 1].itemName));
    cell3.appendChild(document.createTextNode(cartDataArray[cartDataArray.length - 1].price));
    cell4.appendChild(document.createTextNode(cartDataArray[cartDataArray.length - 1].discount));
    cell5.appendChild(document.createTextNode(cartDataArray[cartDataArray.length - 1].buyingQty));
    cell6.appendChild(document.createTextNode(cartDataArray[cartDataArray.length - 1].amount));
    
    let btn = document.createElement("button");
    btn.textContent = "delete";
    // btn.addEventListener("click", function() {

    //       deleteItem(cartDataArray.length - 1);
    //  });

    var img = document.createElement("img");
    img.src = "resources/download (1).jpg"; // Set the source path of your image
    img.alt = "Item Image";
    img.width = 50; // Set the desired width
    img.height = 50;
    
    cell7.appendChild(btn);
    cell8.appendChild(img);

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell8);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    newRow.appendChild(cell6);
    newRow.appendChild(cell7);
    


    table.appendChild(newRow);

    }

    

}