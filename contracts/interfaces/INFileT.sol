//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

interface INFileT is IERC1155 {
    /**
     * @dev Mints a new token to the given address.
     * @param _receiver Address to mint the token to.
     * @param _id Token id.
     * @param _amount Amount of tokens to mint.
     */
    function mint(
        address _receiver,
        uint256 _id,
        uint256 _amount
    ) external returns (bool);
}
