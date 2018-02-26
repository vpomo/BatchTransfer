var BatchTransfer = artifacts.require("./BatchTransfer.sol");
//import assertRevert from './helpers/assertRevert';

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

});



