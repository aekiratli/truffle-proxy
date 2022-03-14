var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "";

module.exports = {
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: '86U82G29S3A8WWG4I9ZSSCYR94M727UN1B'
  },

  networks: {
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/5abfb0d0480e43049a0fce761328a78f",0);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }


  },


  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.12",    // Fetch exact version from solc-bin (default: truffle's version)

    }
  },

};
