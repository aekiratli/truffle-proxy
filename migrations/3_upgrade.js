const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('impV1');
const BoxV2 = artifacts.require('impV2');

module.exports = async function (deployer) {
    const myContract = await Box.deployed();
  const upgraded = await upgradeProxy(myContract.address, BoxV2, { deployer });
}