const ItemFactoryContract = artifacts.require("./ItemFactory.sol")

module.exports = function (deployer) {
  deployer.deploy(ItemFactoryContract)
}
