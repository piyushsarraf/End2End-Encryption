const crypto = require('crypto')

const alice = crypto.createECDH('secp256k1')
alice.generateKeys();

const bob = crypto.createECDH('secp256k1')
bob.generateKeys();

const alicePubicKeyBase64 = alice.getPublicKey().toString('base64')

const bobPubicKeyBase64 = bob.getPublicKey().toString('base64')

const aliceSharedKey = alice.computeSecret(bobPubicKeyBase64, 'base64', 'hex')
const bobSharedKey = bob.computeSecret(alicePubicKeyBase64, 'base64', 'hex')

console.log(aliceSharedKey === bobSharedKey)
console.log('Alice Shared Key: ', aliceSharedKey)
console.log('Bob Shared Key: ', bobSharedKey)
