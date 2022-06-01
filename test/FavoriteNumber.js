const FavoriteNumber = artifacts.require("./FavoriteNumber");

contract("FavoriteNumber", accounts => {
  it("should change the favorite number", async () => {
    const Contract = await FavoriteNumber.deployed();
    await Contract.setFavoriteNumber(7, { from: accounts[0] });
  })

  it("should return the favorite number", async () => {
    const Contract = await FavoriteNumber.deployed();
    const result = await Contract.getFavoriteNumber();
    assert.equal(result.toNumber(), 7, "The favorite number is not 7");
  })
})