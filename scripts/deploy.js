async function main() {
    const GameItem = await ethers.getContractFactory('GameItem');
    console.log('Deploying GameItem...');
    const gameItem = await GameItem.deploy();
    await gameItem.waitForDeployment();
    console.log('GameItem deployed to:', await gameItem.getAddress());
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});