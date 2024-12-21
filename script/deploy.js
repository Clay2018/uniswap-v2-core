const hre = require("hardhat");
const {expect} = require("chai");
const config = require("./deploy-config.json");

async function main() {
    /*
    {
        const [owner, userAddr] = await hre.ethers.getSigners();
        console.log("owner adress:", owner.address)
        const Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
        const factory = await Factory.deploy(owner.address)
        await factory.deployed();
        console.log("factory:", factory.address)
    }
    */
    {
        const [owner, userAddr] = await hre.ethers.getSigners();
        console.log("owner adress:", owner.address)
        const factory = await hre.ethers.getContractAt("UniswapV2Factory", "0x72c09Fde348aAbf4A1403eB177378cbE8c910dCb");
        let a = await factory.getPair("0xB11caEee0909BD8e39958432F24059D6Ad6a6ee6", "0xA5dce4F5e9DC99db4f69da3935529B8CF8f2392e")

        console.log("a:", a)

    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
