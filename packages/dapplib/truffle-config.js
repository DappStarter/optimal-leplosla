require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth ranch puppy hockey knee swallow seminar'; 
let testAccounts = [
"0x6934d3faef22e6b4b1518c6e02520eab0c2fb7932f8fa9b90455283fcc853ed6",
"0x406ac4ca9a30108d1a35c9c1f4e2e274e79fb54d6e164914b1e45847bbfe7631",
"0x353a007dcea7e00a7b86485652a941790f86b77b9307700af04010f7b498907e",
"0xef8a6eba33ca947fd47615a58df692ab7a8fba3c810216cf212b9e152d9a2f79",
"0x14e913e183dc2c15ce8aaf65f454daa504f69ee04d20c043df6fd1f913af413f",
"0x155579a921743cc9a5b9ef8c6a3e6e547dc15c8e0661bff863dfe74ed2989e8d",
"0x6b1e85f860eb6ea8d5f0c672bda58d0aa9d500ad6d18cb6d2bc2544bc347dd73",
"0x8b50c3815dcdf74c8b2e41fe05355ad637e0af03c55f3997a0a93c6567e02385",
"0xf4aff3a27bbac3836b8f1967ce2ce33a37645892737eb9a9bd28cc2ebfd02564",
"0xd7c901acd0e94f2366a353c0f6bb0e5afe43fe0f064fcf78a58251505d938911"
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
            version: '^0.5.11'
        }
    }
};
