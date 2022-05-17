//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

interface INFileT {
    /**
     * @dev Mints a new token to the given address.
     * @param _owner Address to mint the token to.
     * @param _tokenURI The token URI.
     */
    function mint(address _owner, string memory _tokenURI)
        external
        returns (uint256);
}
