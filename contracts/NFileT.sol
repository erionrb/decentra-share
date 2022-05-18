//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "./interfaces/INFileT.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFileT is INFileT, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string private TOKEN_URI;

    constructor(string memory _name, string memory _tokenURI)
        ERC721(_name, "NFLT")
    {
        TOKEN_URI = _tokenURI;
    }

    event Minted(address _receiver, uint256 _id, uint256 _amount);

    modifier onlyTokenOwner(uint256 _tokenId) {
        require(
            ownerOf(_tokenId) == msg.sender || owner() == msg.sender,
            "Sender is not the owner of this token or the contract"
        );
        _;
    }

    /**
     * @dev Mints a new token to the given address.
     * @param _owner Address to mint the token to.
     */
    function mint(address _owner) public override onlyOwner returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _mint(_owner, newItemId);
        _setTokenURI(newItemId, TOKEN_URI);

        _tokenIds.increment();
        emit Minted(_owner, newItemId, 1);
        return newItemId;
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     * @dev Overrided to restrict usage to the token owner.
     */
    function tokenURI(uint256 _tokenId)
        public
        view
        override
        onlyTokenOwner(_tokenId)
        returns (string memory)
    {
        return TOKEN_URI;
    }
}
