const EC       = require('elliptic').ec;
const {SHA256} = require('crypto-js');
const ec       = new EC('secp256k1');
const UUIDV1   = require('uuid/v1')

class ChainUtil{
static genKeyPair(){
    return ec.genKeyPair();
}

static id(){
    return UUIDV1();
}

static hash(data){
    return SHA256(JSON.stringify(data)).toString();
}

static verifySignature(publicKey,signature,dataHash){
    return ec.keyFromPublic(publicKey,'hex').verify(dataHash,signature);
}
}

module.exports = ChainUtil;