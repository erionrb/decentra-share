//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFileT.sol";

contract NFileManager is Ownable {
    mapping(address => address[]) private userNftMap;

    event Deployed(address _owner, address _contract);
    event NFileTMinted(address _owner, address _receiver, address _contract);

    /**
     * @dev Deploys a NFT Contract to the sender.
     * @param _name A name to the NFT Contract that is being deployed.
     * @param _tokenURI The endpoint that contains the metadata of the NFT.
     */
    function deployContract(string memory _name, string memory _tokenURI)
        public
    {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_tokenURI).length > 0, "Token URI cannot be empty");

        NFileT nftContract = new NFileT(_name, _tokenURI);
        nftContract.transferOwnership(msg.sender);

        address nftContractAddress = address(nftContract);

        userNftMap[msg.sender].push(nftContractAddress);

        emit Deployed(msg.sender, nftContractAddress);
    }

    /**
     * @dev Return all the NFT Contracts owned by the sender.
     */
    function getNFTContracts() public view returns (address[] memory) {
        return userNftMap[msg.sender];
    }
}
