/**
 * Created by eduhg on 8/11/16.
 */

var mysql = require("mysql");
var settings = require('../../settings');


var Connection = function () {
    this.pool = null;

    this.init = function () {
        this.pool = mysql.createPool(settings.dbConfig);
    };

    this.acquire = function (callback) {
        this.pool.getConnection(function (err, connection) {
            callback(err, connection);
        })
    }
};

module.exports = new Connection();
