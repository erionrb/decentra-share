//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFileT.sol";

contract NFileManager is Ownable {
    event Deployed(address _owner, address _contract);
    event NFileTMinted(address _owner, address _receiver, address _contract);

    /**
     * @dev Deploys a NFT Contract to the sender.
     * @param _name A name to the NFT Contract that is being deployed.
     * @param _tokenURI The endpoint that contains the metadata of the NFT.
     */
    function deployContract(string memory _name, string _tokenURI)
        public
        onlyOwner
    {
        NFileT nftContract = new NFileT(msg.sender, _name, _tokenURI);
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
        onlyNFileTOwner
    {
        NFileT nftContract = NFileT(_nfiletAddress).mint(msg.sender);
        emit NFileTMinted(msg.sender, _receiver, address(nftContract));
    }

}
