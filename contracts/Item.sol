pragma solidity ^0.8.10;

contract Item {
    string public name;
    uint256 public price;
    string public description;
    string public imageURL;
    bool public isSold;
    address public owner;

    constructor(
        string memory _name,
        uint256 _price,
        string memory _description,
        string memory _imageURL,
        address _owner
    ) public {
        name = _name;
        price = _price;
        description = _description;
        imageURL = _imageURL;
        isSold = false;
        owner = _owner;
    }

    function sayHello() public pure returns (string memory value) {
        value = "Hello, World";

        return value;
    }
}
