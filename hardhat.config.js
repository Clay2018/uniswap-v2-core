require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("hardhat-contract-sizer");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");
//require("@nomiclabs/hardhat-solhint");
//require('@nomicfoundation/hardhat-chai-matchers');
//require("@nomiclabs/hardhat-etherscan")
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: {
    version: "0.5.16",
  },
  networks: {
    hardhat: {
      //forking: {
      //  url: `https://sepolia.infura.io/v3/${process.env.WEB3_INFURA_PROJECT_ID}`,
      //  blockNumber: 3085764
      //},
      accounts: {
        mnemonic: `${process.env.MNEMONIC}`,
        count: 10,
      }
      //accounts: [{
      //  "privateKey": process.env.MAINNET_DEPLOYER_PRIVATE_KEY,
      //  "balance": "10000000000000000000000000",
      //}],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.WEB3_INFURA_PROJECT_ID}`,
      accounts: [process.env. MAINNET_DEPLOYER_PRIVATE_KEY],
    },
    local: {
      url: `http://127.0.0.1:8545`,
      accounts: [process.env. MAINNET_DEPLOYER_PRIVATE_KEY],
    },
    holesky: {
      url: `https://holesky.infura.io/v3/${process.env.WEB3_INFURA_PROJECT_ID}`,
      accounts: [process.env. MAINNET_DEPLOYER_PRIVATE_KEY],
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: true,
  },
  gasReporter: {
    enabled: false,
    currency: "CHF",
    gasPrice: 21,
  },
  mocha: {
    timeout: 100000,
  },
  etherscan: {
    apiKey: {
      goerli: `${process.env.ETHERSCAN_API_KEY}`,
      sepolia: `${process.env.ETHERSCAN_API_KEY}`,
      mainnet: `${process.env.ETHERSCAN_API_KEY}`,
      optimisticEthereum: `${process.env.OP_ETHERSCAN_API_KEY}`,
      optimismmainnet: `${process.env.OP_ETHERSCAN_API_KEY}`,
    },
    customChains: [
      {
        network: "optimismmainnet",
        chainId: 10,
        urls: {
          apiURL: "https://api-optimistic.etherscan.io/api",
          browserURL: "https://optimistic.etherscan.io"
        }
      }
    ]
  },
};
