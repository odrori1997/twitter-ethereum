const UserStorage = artifacts.require('UserStorage')

const assertVMException = error => {
    const hasException = error.toString().search("VM Exception");
    assert(hasException, "Should expect a VM Exception error");
}

contract('users', () => {
    it("can create user", async () => {
        const storage = await UserStorage.deployed()
        const username = web3.utils.fromAscii("Omer")
        const tx = await storage.createUser(username)
        console.log(tx)
        assert.isOk(tx)
    })

    it("can get user", async() => {
        const storage = await UserStorage.deployed()
        const userId = 1
        const userInfo = await storage.profiles.call(userId)

        const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')
        assert.equal(username, "Omer")
    })

    it("can't create user without controller", async () => {
        const storage = await UserStorage.deployed()
    
        try {
          const username = web3.utils.fromAscii("tristan")
          await storage.createUser(username)
          assert.fail()
        } catch (err) {
          assertVMException(err); 
        }
      })


        it("can create user with controller", async () => {
          const controller = await UserController.deployed()
      
          const username = web3.utils.fromAscii("tristan")
          const tx = await controller.createUser(username)
      
          assert.isOk(tx)
        })
})