var BatchTransfer = artifacts.require("./BatchTransfer.sol");
//import assertRevert from './helpers/assertRevert';
//https://ropsten.etherscan.io/address/0xc611d5b26e3c750b5ea973d4c7c7b3ab8f49d8f6#code

//https://ropsten.etherscan.io/address/0x556e0c6f38cceac9241b2ea507f424b8286d4040

//https://hackernoon.com/how-to-script-an-automatic-token-airdrop-for-40k-subscribers-e40c8b1a02c6

contract('BatchTransfer', (accounts) => {
    var contract;
    var owner = "0x9a98D8306fEcA891D052f1572ea18589004Be56c";

    it('should deployed contract', async ()  => {
        assert.equal(undefined, contract);
        contract = await BatchTransfer.deployed();
        assert.notEqual(undefined, contract);
    });

    it('get address contract', async ()  => {
        assert.notEqual(undefined, contract.address);
    });

    it('check batch transfer', async ()  => {
        await contract.batchTransfer(["0x111111","0x222222"],[2000,3000]);
        var balanceAccountOne = await contract.balanceOf("0x111111");
        console.log("balanceAccountOne = " + balanceAccountOne);
        //assert.notEqual(undefined, contract.address);
    });

});



