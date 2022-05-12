//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFileT.sol";

contract NFileManager is Ownable {
    address public nfileTAddress;

    /**
     * @dev Mints a new token to the given address.
     * @param _id Token id.
     */
    function mint(uint256 _id) public onlyOwner returns (bool) {
        uint256 tokenId = NFileT(nfileTAddress).mint(msg.sender, _id, 1);
        return true;
    }

    /**
     * @dev Sets the address of the NFileT contract.
     */
    function setNFileTAddress(address _nfileTAddress) public onlyOwner {
        nfileTAddress = _nfileTAddress;
    }

    function() public payable {
        revert(true, "Not allowable to receive ethers");
    }
}
