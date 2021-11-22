pragma solidity ^0.8.10;

contract Item {
    function sayHello() public pure returns (string memory value) {
        value = "Hello, World";

        return value;
    }
}
