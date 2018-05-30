var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (burgerName, cb) {
        orm.insertOne("burgers", burgerName, function (res) {
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, function (res) {
            cb(res);
        });
    }

};

module.exports = burger;