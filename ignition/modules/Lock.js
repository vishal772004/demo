const { ethers } = require("hardhat");

async function main() {
    try {
        // Get the contract factory
        const MultiUserAuth = await ethers.getContractFactory("MultiUserAuth");

        // Deploy the contract
        const authContract = await MultiUserAuth.deploy();

        // Log the contract address
        console.log("MultiUserAuth contract deployed to:", authContract.address);

        // Wait for the contract deployment transaction to be mined (use .deployTransaction for the transaction)
        const receipt = await authContract.deployTransaction.wait();

        // Log the transaction receipt
        console.log("Transaction receipt:", receipt);
    } catch (error) {
        console.error("Error deploying MultiUserAuth contract:", error);
        process.exit(1);
    }
}

// Run the deployment script
main();
