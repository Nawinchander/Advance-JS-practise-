let item = {
    name: 'phone',
    prize: 25000,
    quantity: 1
}
console.log(item)

let item2 = new Object();

item2.name = 'charger',
item2.price = 700,
item2.quantity = 1

console.log(item2)

// accessing object
// dot notation
console.log(item.prize)
item.prize = 26000
console.log(item.prize)

// adding new property
item.returnable = true
console.log(item)

// square backet notation
console.log(item['price'])
item['returnable'] = false

let key = 'price'
item[key] = 27500
item.key = 28000
console.log(item)








