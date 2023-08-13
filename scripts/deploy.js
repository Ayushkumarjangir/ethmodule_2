const hre = require("hardhat");

async function main() {
  const initBalance = 1;
  const Assessment = await hre.ethers.getContractFactory("SmartContract_with_Front_end_interaction");
  const assessment = await Assessment.deploy(initBalance);
  await assessment.deployed();

  assessment.DisplayAddress();

  console.log(`A contract with balance of ${initBalance} eth deployed to ${assessment.address}`);

  assessment.on("showAddress", (owner) => {
    console.log(`msg.sender is : ${owner}`);
  })

  assessment.on("deposite", (deposit_val, Balance) => {
    console.log(`New deposit: ${deposit_val} new Balance is : ${Balance} ETH`);
  })

  assessment.on("withdraw", (withdraw_val, Balance) => {
    console.log(`New withdraw: ${withdraw_val} new Balance is : ${Balance} ETH`);
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


