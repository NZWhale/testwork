const itemInfo = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

const getItemValue = (itemInfo) =>  itemInfo.displayedName.displayedName.value

const getStocksWhereAvailable = (itemInfo) => {
    const region = "34"
    const arrayOfStocks = Object.entries(itemInfo.stock.stocks[region])
    let arrayOfAvailableStocks = []
    arrayOfStocks.forEach(stock => {
        if(stock[1] > 0) arrayOfAvailableStocks.push(stock[0])
    })
    return arrayOfAvailableStocks
}

const getStockWithMaxItemValue = (itemInfo) => {
    const region = "34"
    const stocks = Object.entries(itemInfo.stock.stocks[region])
    const itemValueInStocks = Object.values(itemInfo.stock.stocks[region])
    const maxValueOfItem = Math.max.apply(null, itemValueInStocks)
    let foundStock
    stocks.forEach(stock => {
        if(stock.includes(JSON.stringify(maxValueOfItem)) == true) foundStock = stock
    })
    return foundStock
}

console.log(getItemValue(itemInfo))
console.log(getStocksWhereAvailable(itemInfo))
console.log(getStockWithMaxItemValue(itemInfo))