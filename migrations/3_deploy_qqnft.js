const QQNFT = artifacts.require("QQNFT");

module.exports = function (deployer) {
  deployer.deploy(QQNFT);
};
