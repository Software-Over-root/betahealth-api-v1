const CryptoJS = require("crypto-js");

exports.holaMundo = (req, res, next) => {
    res.send("<h1>Hola mundo por Betahealt</h1>");
}
