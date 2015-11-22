/* Contract mined! address: 0x1432737ecd736fd780e562e5a768297642673f47
transactionHash: 0xd9fa15101c913555a25cce3ea45243c3e1dc3fde7f7a1b17eb5cd76cc8ca743c*/
var supply = 1000 /* var of type uint256 here */ ;
var tokenContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"coinBalanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"supply","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"receiver","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"CoinTransfer","type":"event"}]);
var token = tokenContract.new(
    supply,
    {
        from: web3.eth.accounts[0],
        data: '6060604052604051602080610261833981016040528080519060200190919050505b80600060005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b506101fc806100656000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806390b98a1114610044578063bbd39ac01461007957610042565b005b61006360048080359060200190919080359060200190919050506100c0565b6040518082815260200191505060405180910390f35b61008f60048080359060200190919050506100a5565b6040518082815260200191505060405180910390f35b60006000506020528060005260406000206000915090505481565b600081600060005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101561010257600090506101f6565b81600060005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600060005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055507f16cdf1707799c6655baac6e210f52b94b7cec08adcaf9ede7dfe8649da926146338484604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190506101f6565b9291505056',
        gas: 3000000
    }, function(e, contract){
        if (typeof contract.address != 'undefined') {
            console.log(e, contract);
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })