pragma solidity ^0.8.11;

contract UserStorage {
    struct Profile {
        uint id;
        bytes32 username;
    }

    mapping(uint => Profile) public profiles;
    uint latestUserId = 0;

    function createUser(bytes32 _username) public returns(uint) {
        latestUserId++;
        profiles[latestUserId] = Profile(latestUserId, _username);
        return latestUserId;
    }

    // auto generated getter function from "public" keyword for profiles
    // function getUserFromId(uint _userId) public view returns(uint, bytes32) {
    //     return (
    //         profiles[_userId].id,
    //         profiles[_userId].username
    //     );
    // }
}