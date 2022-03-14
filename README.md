
## Notes
```
truffle run verify impV1@0xc564ef797b56b363f2c7c29be8de4078585e8a10  --network rinkeby
await web3.eth.getAccounts();
let instance = await impV1.deployed()
await instance.fib(5)
await instance.setNumber(50)
npm install --save-dev @openzeppelin/truffle-upgrades
truffle deploy --reset --network rinkeby
await web3.eth.getAccounts()
```