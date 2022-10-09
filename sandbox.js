const exchanges = {
    euro:[{buy:10,sell:5},{buy:10,sell:8}],
    dolar:[{buy:18,sell:5},{buy:8,sell:5}]
}

exchanges.euro.map(({buy,sell}) => console.log(buy,sell))