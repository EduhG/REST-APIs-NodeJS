/**
 * Created by eduhg on 8/11/16.
 */
var mysql = require("mysql");
var settings = require('../../settings');

//Function to execute sql commands
exports.executeSql = function (sql, callback) {
    var connection = mysql.createConnection(settings.dbConfig);

    connection.connect().then(function () {
        var req = new sqlDb.Request(conn);
        req.query(sql).then(function (recordset) {
            callback(recordset)
        }).catch(function (err) {
            console.log(err);
            callback(null, err);
        });
    }).catch(function (err) {
        console.log(err);
        callback(null, err);
    });
};