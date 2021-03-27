const poseidon = require("./poseidon");
const bigInt = require("snarkjs").bigInt;

//const F = new ZqField(Scalar.fromString("21888242871839275222246405745257275088548364400416034343698204186575808495617"));

exports.hash0 = function (left, right) {
    return poseidon([left, right]);
};

exports.hash1 = function(key, value) {
    return poseidon([key, value, bigInt.one]);
};

//exports.F = poseidon.F;
