const FavoriteNumber = artifacts.require("FavoriteNumber");

module.exports = function (deployer) {
  deployer.deploy(FavoriteNumber);
};
