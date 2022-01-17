pragma solidity ^0.8.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {
    function testCreateTweet() public {
        TweetStorage _storage = TweetStorage(DeployedAddresses.TweetStorage());

        uint _userId = 1;
        uint _expectedTweetId = 1;

        Assert.equal(
            _storage.createTweet(_userId, "Banana pancakes"),
            _expectedTweetId,
            "Should create a tweet with ID 1"
        );
    }
}