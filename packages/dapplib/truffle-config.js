require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note soccer method good arm boil squirrel'; 
let testAccounts = [
"0x3fd3c989205316a808fd77f254dd7a64d72173dd48e5f52caf4fc52ce569d045",
"0x428412173afdff4391286eb6bfe77fdc114355fcf2aa01297d3a0a981fbbb60f",
"0x6e598659707727a893739c0242bb4dab62dba645ff8079b8b31143fb30866feb",
"0x6fd453a65dd0d5e41e0a2d863a21499d2b584491dbd326208080f5d618064ac2",
"0x4c04ae4580bd56d72a9844dc7310de6d7a03b3cc95d42589fb42cf553ef02553",
"0xedf08e249ac0b9c88ad551d962a37c4adfc02012932fabf4e113a130ddcdc824",
"0x3b45276f1b6f5b7506c71fd537b248513b9c26847c3f230a421528122b384b30",
"0xa8a43888a8d13ee830a4a5320c98fc7711b33c3e1884a94257c895fd22c427ba",
"0xf981e5ac4d33a2591135f411a5ddf5fb88d8a53c3eb0a6acaf06e820252b7f43",
"0x2875f4151893e06c1d100fe79f5c10c1ce49678245af72af23d6913c1b32a0f7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

