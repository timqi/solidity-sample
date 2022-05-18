const QQToken = artifacts.require("QQToken");

module.exports = function (deployer) {
  deployer.deploy(QQToken);
};
