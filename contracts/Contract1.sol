// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiUserAuth {
    struct User {
        string name;
        string email;
        string password; // In production, use hashed passwords
        bool exists;
    }

    mapping(address => User) private users;

    // Event for registration
    event UserRegistered(address indexed userAddress, string name);

    // Register a new user
    function register(
        string memory _name,
        string memory _email,
        string memory _password
    ) public {
        require(!users[msg.sender].exists, "User already registered");
        users[msg.sender] = User(_name, _email, _password, true);
        emit UserRegistered(msg.sender, _name);
    }

    // Login user
    function login(
        string memory _password
    ) public view returns (string memory) {
        require(users[msg.sender].exists, "User not registered");
        require(
            keccak256(abi.encodePacked(users[msg.sender].password)) ==
                keccak256(abi.encodePacked(_password)),
            "Invalid password"
        );
        return users[msg.sender].name;
    }

    // Get user data by wallet
    function getUser() public view returns (string memory) {
        require(users[msg.sender].exists, "User not registered");
        return users[msg.sender].name;
    }
}