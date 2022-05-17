import { expect } from "chai";
import { ethers } from "hardhat";

const provider = ethers.provider;
const NFileT = await ethers.getContractFactory("NFileT");

/**
 * Utility functions
 */
const errorEvaluation = (_error, _expectedError) =>
  ("" + _error).includes(_expectedError);

const impersonateAddress = async (address) => {
  const hre = require("hardhat");
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [address],
  });
  const signer = await ethers.provider.getSigner(address);
  signer.address = signer._address;
  return signer;
};

/**
 * Utility variables
 */
const contractOwner = provider.getSigner(1);
const tokenOwner = provider.getSigner(2);
let nFileT;

describe("NFT Workflow", function () {
  it("Shold deploy contract", async function () {
    nFileT = await NFileT.connect(contractOwner).deploy();
    expect(await nFileT.owner()).to.equal(contractOwner);
  });
});
