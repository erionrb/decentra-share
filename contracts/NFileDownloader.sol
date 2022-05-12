//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFileT.sol";

contract NFileManager {
    mapping(uint256 => string) private downloadUrl;
    mapping(address => mapping(address => uint256)) _allowances;

    modifier onlyAllowed(address _owner) {
        require(_allowances[_owner][msg.sender] > 0, "Not allowed to download");
        _;
    }

    /**
     * @dev Sets the download url for the given nft id.
     */
    function generateDownloadLink(address _owner, uint256 _id)
        public
        view
        onlyAllowed(_owner)
        returns (string memory)
    {
        _allowances[_owner][msg.sender] = _allowances[_owner][msg.sender] - 1;
        return downloadUrl[_id];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount)
        public
        virtual
        returns (bool)
    {
        address owner = msg.sender;
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "NFileDownloader: approve from the zero address");
        require(spender != address(0), "NFileDownloader: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
}
