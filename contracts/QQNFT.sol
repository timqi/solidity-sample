// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract QQNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _count;

    constructor() ERC721("QQNFTCollection", "QQNFT") {}

    function mint(string memory tokenURI) external returns (uint256) {
        require(msg.sender != address(0x0), "sender must not be 0x0");
        _count.increment();
        uint256 newTokenID = _count.current();
        _mint(msg.sender, newTokenID);
        _setTokenURI(newTokenID, tokenURI);
        return newTokenID;
    }
}
