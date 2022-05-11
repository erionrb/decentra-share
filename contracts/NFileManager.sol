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
        NFileT(nfileTAddress).mint(msg.sender, _id, 1);
        return true;
    }
}
