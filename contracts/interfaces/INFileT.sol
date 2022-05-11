//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

interface INFileT {
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