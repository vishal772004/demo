require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork:"hardhat",
  networks: {
    hardhat: {
      chainId: 31337,  // Default chain ID for the local Hardhat network
    },
    localhost: {
      url: "http://127.0.0.1:8545",  // URL for local Ethereum node
      accounts: ["df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"],  // Use a valid private key or Hardhat's default accounts
    },}
  };
