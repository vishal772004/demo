const { ethers } = require("hardhat"); // Use Hardhat's injected ethers

async function main() {
    try {
        // Get the contract factory
        const Auth = await ethers.getContractFactory("MultiUserAuth");
        console.log("Deploying MultiUserAuth contract...");

        // Deploy the contract
        const authContract = await Auth.deploy();

        // Wait for deployment to complete
        await authContract.waitForDeployment();

        // Log the contract address and transaction details
        console.log("MultiUserAuth contract deployed to:", authContract.target); // `target` is the address in ethers.js v6
        const deployTx = authContract.deploymentTransaction();
        console.log("Deploy transaction hash:", deployTx.hash);

        // Wait for the transaction to be mined
        const receipt = await deployTx.wait();
        console.log("Transaction receipt:", receipt);

    } catch (error) {
        console.error("Error deploying MultiUserAuth contract:", error);
        process.exit(1);
    }
}

main();
