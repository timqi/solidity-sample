const QQToken = artifacts.require("QQToken")

contract("QQToken", async (accounts) => {

    before(async () => {
        qqToken = await QQToken.deployed()
    })

    it("Initialize token to 10000", async () => {
        let balance = await qqToken.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, "ether")
        assert.equal(balance, "10000", "Balance should be 10000")
    })

    it("Transfer 10 tokens to accounts[1]", async () => {
        await qqToken.transfer(accounts[1], web3.utils.toWei("10", "ether"))
        let balanceAcc1 = await qqToken.balanceOf(accounts[1])
        assert.equal(web3.utils.fromWei(balanceAcc1), "10", "Acc1 balance is 10")

        let balanceAcc0 = await qqToken.balanceOf(accounts[0])
        assert.equal(web3.utils.fromWei(balanceAcc0), "9990", "Acc0 balance is 9990")
    })
})