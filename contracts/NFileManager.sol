//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFileT.sol";

contract NFileManager is Ownable {
    event Deployed(address _owner, address _contract);

    /**
     * @dev Deploys a NFT Contract to the sender.
     * @param _name A name to the NFT Contract that is being deployed.
     * @param _tokenURI The endpoint that contains the metadata of the NFT.
     */
    function deployContract(string memory _name, string _tokenURI)
        public
        onlyOwner
    {
        NFileT nftContract = new NFileT(_name, _tokenURI);
        emit Deployed(msg.sender, address(nftContract));
    }
}
