const ItemContract = artifacts.require("Item")

contract("Item", (accounts) => {
  let item
  const name = "Tanaka Taro"
  const price = 500
  const description = "Very good item!!"
  const imageURL = "http://example.com/hoge.png"
  const owner = accounts[0]

  beforeEach(async () => {
    item = await ItemContract.new(name, price, description, imageURL, owner)
  })

  describe("sayHello", () => {
    it("return Hello, world", async () => {
      const actual = await item.sayHello()
      assert.equal(actual, "Hello, World", "words should match")
    })
  })

  describe("initialize", () => {
    it("gets the name", async () => {
      const actual = await item.name()
      assert.equal(actual, name, "name should match")
    })

    it("gets the description", async () => {
      const actual = await item.description()
      assert.equal(actual, description, "description should match")
    })

    it("gets the price", async () => {
      const actual = await item.price()
      assert.equal(actual, price, "price should match")
    })

    it("gets the imageURL", async () => {
      const actual = await item.imageURL()
      assert.equal(actual, imageURL, "imageURL should match")
    })

    it("gets the owner", async () => {
      const actual = await item.owner()
      assert.equal(actual, owner, "owner should match")
    })

    it("gets the isSold", async () => {
      const actual = await item.isSold()
      assert.equal(actual, false, "isSold should match")
    })
  })
})
