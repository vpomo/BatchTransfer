const BatchTransfer = artifacts.require('./BatchTransfer.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0x9a98D8306fEcA891D052f1572ea18589004Be56c";

    deployer.deploy(BatchTransfer, owner);

};
