

productName = prompt("Enter product name");

numberOfItems = prompt("Enter quantity");

valueOfItems = prompt(" Enter price");


priceBeforetax = numberOfItems * valueOfItems;

taxAdded = priceBeforetax * .16;

totalPice = taxAdded + priceBeforetax;

console.log("Item:", productName, "Total Items:", numberOfItems, "Total Price + Sales Tax @ 16% ","$",totalPice);

