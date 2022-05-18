//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

interface INFileT {
    /**
     * @dev Mints a new token to the given address.
     * @param _owner Address to mint the token to.
     */
    function mint(address _owner) external returns (uint256);
}
