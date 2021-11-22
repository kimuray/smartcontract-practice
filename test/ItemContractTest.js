const ItemContract = artifacts.require("Item")

contract("Item", (accounts) => {
  describe("sayHello", () => {
    it("return Hello, world", async () => {
      const item = await ItemContract.new()
      const actual = await item.sayHello()
      assert.equal(actual, "Hello, World", "words should match")
    })
  })
})
