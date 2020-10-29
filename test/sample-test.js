const { assert } = require("chai");

describe("Simple", function() {
  before(async () => {
    await ethers.provider.send("evm_mine");
    await ethers.provider.send("evm_mine");
  });

  it("should get the hash", async function() {
    const Simple = await ethers.getContractFactory("Simple");
    const contract = await Simple.deploy();
    await contract.deployed();

    assert(await contract.test.call());
  });
});
