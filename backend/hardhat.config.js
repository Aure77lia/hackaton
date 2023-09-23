require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    "otimism-kovan": {
      url: "https://kovan.optimism.io",
      accounts:[process.env.PRIVKEY]
    }
  }
};
