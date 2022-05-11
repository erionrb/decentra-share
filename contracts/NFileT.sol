//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "./interfaces/INFileT.sol";

contract NFileT is INFileT {
    uint256 public constant AUDIO = 1;
    uint256 public constant VIDEO = 2;
    uint256 public constant IMAGE = 3;
    uint256 public constant DEFAULT_FILE = 0;

    constructor() ERC1155("https://nfilet.example/api/item/{id}.json") {}

    event Minted(address _receiver, uint256 _id, uint256 _amount);

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
    ) external onlyOwner returns (bool) {
        _mint(_receiver, _id, _amount, "");
        emit Minted(_receiver, _id, _amount);
        return true;
    }
}
