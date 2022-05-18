//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFileT.sol";

contract NFileManager is Ownable {
    event Deployed(address _owner, address _contract);
    event NFileTMinted(address _owner, address _receiver, address _contract);

    /**
     * @dev Only the NFT contract owner can operate.
     */
    modifier onlyNFileTOwner(address _nfiletAddress) {
        require(
            msg.sender != NFileT(_nfiletAddress).owner(),
            "Sender is not the NFileT owner"
        );
        _;
    }

    /**
     * @dev Deploys a NFT Contract to the sender.
     * @param _name A name to the NFT Contract that is being deployed.
     * @param _tokenURI The endpoint that contains the metadata of the NFT.
     */
    function deployContract(string memory _name, string memory _tokenURI)
        public
        onlyOwner
    {
        NFileT nftContract = new NFileT(_name, _tokenURI);
        nftContract.transferOwnership(msg.sender);
        emit Deployed(msg.sender, address(nftContract));
    }

    /**
     * @dev Mint a file token to a specific user.
     * @param _nfiletAddress The address of the NFileT contract.
     * @param _receiver The address of the receiver.
     */
    function mintFileToken(address _nfiletAddress, address _receiver)
        public
        onlyNFileTOwner(_nfiletAddress)
    {
        NFileT(_nfiletAddress).mint(msg.sender);
        emit NFileTMinted(msg.sender, _receiver, _nfiletAddress);
    }
}
