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
})
