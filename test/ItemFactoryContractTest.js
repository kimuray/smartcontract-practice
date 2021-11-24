const ItemFactoryContract = artifacts.require("ItemFactory")

contract("ItemFactory", async (accounts) => {
  const itemFactory = await ItemFactoryContract.new()

  describe("create item", () => {
    it("Add Item", async () => {
      const prevItemCount = await itemFactory.itemsCount()
      await itemFactory.createItem(
        "Test",
        100,
        "Good Item",
        "http://example.com/hoge.png"
      )
      const actual = await itemFactory.itemsCount()
      assert.equal(actual - prevItemCount, 1, "prevCount + 1 shoud match")
    })
  })

  describe("fetch items", () => {
    const createItems = async (count) => {
      const name = "OwnerTaro"
      const lowerCaseName = name.toLowerCase()
      for (let i = 0; i < count; i++) {
        await itemFactory.createItem(
          name,
          100,
          `Good Item${i}!!`,
          `${lowerCaseName}${i}.png`,
          accounts[1]
        )
      }
    }

    describe("simple fetch", () => {
      it("gets 10 items", async () => {
        createItems(10)
        const items = await itemFactory.items()
        assert(items.length, 10, "should gets 10 items")
      })
    })
  })
})
