const QQNFT = artifacts.require("QQNFT")

contract("QQNFT", async (accounts) => {

    before(async () => {
        qqNFT = await QQNFT.deployed()
    })

    it("Mint", async () => {
        let uri0 = "https://ipfs.io/ipfs/bafybeiezeds576kygarlq672cnjtimbsrspx5b3tr3gct2lhqud6abjgiu"
        let uri1 = "https://ipfs.io/ipfs/Qmb2GEosULoXD1QkG1vgJ87HCG3Nw9TDKc2TJX2inoRfpt/7983"
        let uri2 = "https://ipfs.io/ipfs/Qmb2GEosULoXD1QkG1vgJ87HCG3Nw9TDKc2TJX2inoRfpt/7980"
        
        await qqNFT.mint(uri0, { from: accounts[0] })
        let owner = await qqNFT.ownerOf(1)
        assert.equal(owner, accounts[0], `owner of token 1 is {accounts[0]}`)

        await qqNFT.mint(uri1, {from: accounts[0]})
        let tokenURI2 = await qqNFT.tokenURI(2)
        assert.equal(tokenURI2, uri2, `tokenURI of token 2 is wrong`)

        await qqNFT.mint(uri1, {from: accounts[0]})
        let balance = await qqNFT.balanceOf(accounts[0])
        assert.equal(balance.toNumber(), 3, `balance of {accounts[0]} should be 3`)
    })

})