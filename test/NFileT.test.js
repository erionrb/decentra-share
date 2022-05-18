/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { ethers } from "hardhat";

const provider = ethers.provider;
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
  const signer = ethers.provider.getSigner(address);
  return {
    address: signer._address,
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    ...signer,
  };
};

describe("NFT Workflow", async () => {
  let nftContract;
  let tokenOwner;
  let contractOwner;
  let anotherAccount;

  const nftName = "MyFileNFT";
  const tokenURI = "https://myfile.com";

  it("Should deploy contract", async () => {
    const [_contractOwner, _tokenOwner, _anotherAccount] =
      await ethers.getSigners();
    tokenOwner = _tokenOwner;
    contractOwner = _contractOwner;
    anotherAccount = _anotherAccount;

    const NFileT = await ethers.getContractFactory("NFileT");
    nftContract = await NFileT.connect(contractOwner).deploy(nftName, tokenURI);

    expect(await nftContract.owner()).to.equal(contractOwner.address);
  });

  it("Should mint a token", async () => {
    const contract = await nftContract.connect(contractOwner);
    const tx = await contract.mint(tokenOwner.address);
    const result = await tx.wait();

    const logs = result.events.filter((e) => e.event === "Minted");
    const { _receiver, _id, _amount } = logs[0].args;

    expect(_receiver).to.equal(tokenOwner.address);
    expect(_id).to.not.be.null;
    expect(_amount).to.equal(1);
  });

  it("Should get token URI when contract owner", async () => {
    const result = await nftContract.connect(contractOwner).tokenURI(0);
    expect(result).to.equal(tokenURI);
  });

  it("Should get token URI when token owner", async () => {
    const result = await nftContract.connect(tokenOwner).tokenURI(0);
    expect(result).to.equal(tokenURI);
  });

  it("Should not get token URI when not owner", async () => {
    const expectedError =
      "Sender is not the owner of this token or the contract";
    await nftContract
      .connect(anotherAccount)
      .tokenURI(0)
      .then(
        (result) => {},
        (error) => expect(errorEvaluation(error, expectedError)).to.equal(true)
      );
  });
});
