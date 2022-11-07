function storeProvision (stocksArr, productArr){
    let obj = {};
    let stocksArrLength = stocksArr.length;
    let productArrLength = productArr.length;

    for (let i = 0; i <stocksArrLength; i+=2){
        let product = stocksArr[i];
        let quantity = Number(stocksArr[i+1]);
        obj[product] = quantity; 
    }
    for (let j = 0; j<productArrLength; j+=2){
        let product = productArr[j];
        let quantity = Number(productArr[j+1]);
        if (obj.hasOwnProperty(product)){
            obj[product] += quantity;
        }else{
            obj[product] = quantity;
        }
    }
    for (const product in obj) {
        console.log(`${product} -> ${obj[product]}`);
    }
}
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]    
    );