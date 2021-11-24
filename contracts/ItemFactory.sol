pragma solidity ^0.8.10;

import "./Item.sol";

contract ItemFactory {
    Item[] private _items;

    function createItem(
        string memory name,
        uint256 price,
        string memory description,
        string memory imageURL
    ) public {
        Item item = new Item(name, price, description, imageURL, msg.sender);
        _items.push(item);
    }

    function itemsCount() public view returns (uint256) {
        return _items.length;
    }

    function items() public view returns (Item[] memory coll) {
        coll = _items;

        return coll;
    }
}
