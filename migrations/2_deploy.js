const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const impV1 = artifacts.require('impV1');
const impV2 = artifacts.require('impV2');

module.exports = async function(deployer, network, accounts) {


    const instance = await deployProxy(impV1, { deployer });
    // const upgraded = await upgradeProxy(instance.address, BoxV2, { deployer });
    console.log('Deployed', instance.address);
 
 //   deployer.deploy(MyNotary,{from: accounts[0]});
};