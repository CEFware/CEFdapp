/**
 * Created by rdelgado on 11/17/15.
 */
/*
First, if you register a name, then you won't need the hardcoded address in the end. Select a nice coin name and try to reserve it for yourself. First, select your name:
*/

var tokenName = "CEFtest"

/*
Then, check the availability of your name:
*/
    registrar.addr(tokenName)

/*
If that function returns "0x00..", you can claim it to yourself:
*/
    registrar.reserve.sendTransaction(tokenName, {from: eth.accounts[0]});

/*
Wait for the previous transaction to be picked up. Wait up to thirty seconds and then try:
*/

registrar.owner("CEFtest")

/*
If it returns your address, it means you own that name and are able to set your chosen name to any address you want:
*/

/* Set the Name CEFtest to the address of the address of the CEFtoken we issued */
var tokenAddress = "0x1432737ecd736fd780e562e5a768297642673f47"
registrar.setAddress.sendTransaction(tokenName, tokenAddress, true,{from: eth.accounts[0]});

/*
 This should now return your token address, meaning that now the previous code to instantiate could use a name instead of an address. */

token = eth.contract([{constant:false,inputs:[{name:'receiver',type:'address'},{name:'amount',type:'uint256'}],name:'sendCoin',outputs:[{name:'sufficient',type:'bool'}],type:'function'},{constant:true,inputs:[{name:'',type:'address'}],name:'coinBalanceOf',outputs:[{name:'',type:'uint256'}],type:'function'},{inputs:[{name:'supply',type:'uint256'}],type:'constructor'},{anonymous:false,inputs:[{indexed:false,name:'sender',type:'address'},{indexed:false,name:'receiver',type:'address'},{indexed:false,name:'amount',type:'uint256'}],name:'CoinTransfer',type:'event'}]).at(registrar.addr("CEFtest"))


/*
 You can send a transaction to anyone or any contract by name instead of account simply by typing
 */
eth.sendTransaction({from: eth.accounts[0], to: registrar.addr("CEFtest"), value: web3.toWei(0.1, "ether")})