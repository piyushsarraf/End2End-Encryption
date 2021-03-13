const crypto = require('crypto')

const alice =  crypto.getDiffieHellman('modp15')
const bob =  crypto.getDiffieHellman('modp15')

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex')
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex')

console.log(aliceSecret === bobSecret)