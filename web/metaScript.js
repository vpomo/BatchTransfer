window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log("Web3 detected!");
    window.web3 = new Web3(web3.currentProvider);
    // Now you can start your app & access web3 freely:
    var currentNetwork = web3.version.network;
    if (currentNetwork == 3){
        $('#dappInfo').html("You are connected to the Blockchain");
    } else {
        $('#dappInfo').html("You are not connected to the Ropsten network");
    }
    startApp();
  } else {
    $('#dappInfo').html("Please use Chrome or Firefox, install the Metamask extension and retry the request!");
    //alert('Please use Chrome or Firefox, install Metamask and then try again!')
  }
})

function startApp() {
  var myWalletAddress = web3.eth.accounts[0];
  var contract = initContract();

/*
  contract.balanceOf(myWalletAddress, function(error, data) {
    $('#walletTokens').html(Number(data)/10**18);
	document.getElementById('numberTokens').value = Number(data)/10**18;
  });
*/

}

$(document).ready(function(){
//https://developers.google.com/chart/interactive/docs/gallery/piechart
});

function batchTransfer() {
    var addressVoteOne = "0x2AB09D4BCcC9D8Ca27D3ACc8BD7c15861a08C1F3";
    var contract = initContract();

    contract.batchTransfer(["0x333333", "0x444444"],[2000000000000000,2000000000000000000], function(error, data) {
      //$('#walletTokens').html(Number(data)/10**18);
  	  //document.getElementById('numberTokens').value = Number(data)/10**18;
  	  console.log("data = " + data);
    });

}

function initContract(){
 var address = {
    "3" : "0x41e60821b454340d6f09ddc98ab27e94a643ec8b" // Ropsten
  }
  var current_network = web3.version.network;
  var abi = [{"constant":false,"inputs":[{"name":"_addressContract","type":"address"}],"name":"setContractToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"userTransfered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"standardToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_values","type":"uint256[]"}],"name":"batchTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"},{"name":"_isAdmin","type":"bool"}],"name":"setContractAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contractAdmins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"TransferToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"}];
  var contract = web3.eth.contract(abi).at(address[current_network]);
  console.log("Contract initialized successfully");
  console.log("current_network = " + current_network);

  return contract;

}
