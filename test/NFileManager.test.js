/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { ethers } from "hardhat";

const getLogResult = async (_result, _event) => {
  const logs = _result.events.filter((e) => e.event === _event);
  return logs[0].args;
};

describe("File Manager Workflow", async () => {
  // Contract Instance
  let managerContract;

  // Cotract Address
  let nftContractAddress;

  // Accounts
  let nftContractOwner;
  let managerOwner;

  const nftName = "MyFileNFT";
  const tokenURI = "https://myfile.com";

  it("Should deploy File Manager", async () => {
    const [_managerOwner, _nftContractOwner] = await ethers.getSigners();

    managerOwner = _managerOwner;
    nftContractOwner = _nftContractOwner;

    const NFileManager = await ethers.getContractFactory("NFileManager");
    managerContract = await NFileManager.connect(managerOwner).deploy();

    expect(await managerContract.owner()).to.equal(managerOwner.address);
  });

  it("Should return nothing to sender NFT Contracts", async () => {
    const contract = await managerContract.connect(nftContractOwner);
    const nftAddresses = await contract.getNFTContracts();

    expect(
      nftAddresses.filter((address) => address === nftContractAddress).length
    ).to.equal(0);
  });

  it("Should deploy NFT Contract", async () => {
    const contract = await managerContract.connect(nftContractOwner);
    const tx = await contract.deployContract(nftName, tokenURI);
    const result = await tx.wait();

    const { _owner, _contract } = await getLogResult(result, "Deployed");

    expect(_owner).to.equal(nftContractOwner.address);
    expect(_contract).to.not.be.null;
    nftContractAddress = _contract;
  });

  it("Should return sender NFT Contracts", async () => {
    const contract = await managerContract.connect(nftContractOwner);
    const nftAddresses = await contract.getNFTContracts();

    expect(
      nftAddresses.filter((address) => address === nftContractAddress).length
    ).to.equal(1);
  });
});
