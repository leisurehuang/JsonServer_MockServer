let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = function () {
    var data = {
        users: []
    };

    for (var i = 0; i < 30; i++) {
        data.users.push({
            id: i,
            name: Random.cname,
            activeStatus: Random.integer(0, 1),
            age: Random.integer(0, 50),
            gender:Random.integer(0,3),
            status: Random.integer(0, 1),
            nickName: Random.first(),
            email: Random.email("xmail.com"),
            phone: Random.integer(13000000000, 13999999999).toString(),
            image: Random.image('70x70', Random.color(), ""),
            address: Random.county(true)
        })
    }

    return data
}