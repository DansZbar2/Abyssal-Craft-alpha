var BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3,
    opaque: true
}, "stone");

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
     base: 1,
     lightlevel: 6, 
}, "stone");


var BLOCK_TYPE_GRASS = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 2,
    explosionres: 0,
    opaque: true
}, "dirt");

var BLOCK_TYPE_GLASS = Block.createSpecialType({
    lightopacity: 1,
    destroytime: 1,
    opaque: false,
    renderlayer: 2
});

var BLOCK_TYPE_ORE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 5,
    explosionres: 4,
    opaque: true
}, "stone");

var BLOCK_TYPE_UNI = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 5,
    explosionres: 5,
    opaque: true
}, "stone");

IDRegistry.genBlockID("grassDark");
Block.createBlock("grassDark", [
{name: "DarkLends Grass", texture: [["DLGbottom", 0], ["DLGtop", 0], ["DLGSides", 1]], inCreative: true}], BLOCK_TYPE_GRASS);
ToolAPI.registerBlockMaterial(BlockID.grassDark, "dirt", 0, true);

IDRegistry.genBlockID("stoneDark"); 
Block.createBlock("stoneDark", [
{name: "Dark Stone", texture: [["DS", 0]],inCreative: true}], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("stoneDABri"); 
Block.createBlock("stoneDABri", [
{name: "Dark Bricks", texture: [["DSB", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addFurnace(BlockID.stoneDark, BlockID.stoneDABri, 0);

IDRegistry.genBlockID("stoneDABrik"); 
Block.createBlock("stoneDABrik", [
{name: "Dark Bricks", texture: [["DSBf", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addShaped({id: BlockID.stoneDABrik, count: 4, data: 0}, [
"xx",
"xx",
], ['x', BlockID.stoneDark, 0]);

IDRegistry.genBlockID("stoneDarkL"); 
Block.createBlock("stoneDarkL", [
{name: "Dark Stone Beacon", texture: [["DSsTop", 0], ["DSsTop", 0], ["DSGlow", 0]],inCreative: true}], BLOCK_TYPE_LIGHT);

//ingots blocks
IDRegistry.genBlockID("blockAbyssalinite"); 
Block.createBlock("blockAbyssalinite", [
{name: "Block of Abyssalinite", texture: [["BOA", 0]],inCreative: true}], BLOCK_TYPE_UNI);

IDRegistry.genBlockID("blockCoralium"); 
Block.createBlock("blockCoralium", [
{name: "Block of Coralium", texture: [["BOC", 0]],inCreative: true}], BLOCK_TYPE_UNI);

IDRegistry.genBlockID("blockDreadalinite"); 
Block.createBlock("blockDreadalinite", [
{name: "Block of Dreadalinite", texture: [["BOD", 0]],inCreative: true}], BLOCK_TYPE_UNI);

IDRegistry.genBlockID("blockEthaxium"); 
Block.createBlock("blockEthaxium", [
{name: "Block of Ethaxium", texture: [["BOE", 0]],inCreative: true}], BLOCK_TYPE_UNI);

IDRegistry.genBlockID("grassAbyss");
Block.createBlock("grassAbyss", [
    {name: "Abyssal Wastlands Grass", texture: [["abyssalsand", 0], ["fusedabyssalsand", 0], ["fusedabyssalsand_side", 0]],inCreative: true}], BLOCK_TYPE_GRASS);
ToolAPI.registerBlockMaterial(BlockID.grassAbyss, "dirt", 0, true);

IDRegistry.genBlockID("sandAbyss");
Block.createBlock("sandAbyss",[
{name: "Abyssal Wastlands Sand", texture: [["abyssalsand", 0]], inCreative: true}], BLOCK_TYPE_GRASS);
ToolAPI.registerBlockMaterial(BlockID.sandAbyss, "dirt", 0, true);

IDRegistry.genBlockID("glassAbyssal"); 
Block.createBlock("glassAbyssal", [
{name: "Abyssal Waste Glass", texture: [["abyssalsandglass", 0]],inCreative: true}], BLOCK_TYPE_GLASS);

IDRegistry.genBlockID("stoneAbyssal"); 
Block.createBlock("stoneAbyssal", [
{name: "Abyssal Waste Stone", texture: [["AS", 0]],inCreative: true}], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("stoneABri"); 
Block.createBlock("stoneABri", [
{name: "Abyssal Waste Bricks", texture: [["ASB", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addFurnace(BlockID.stoneAbyssal, BlockID.stoneABri, 0);

IDRegistry.genBlockID("stoneABrik"); 
Block.createBlock("stoneABrik", [
{name: "Abyssal Waste Bricks", texture: [["ASBf", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addShaped({id: BlockID.stoneABrik, count: 4, data: 0}, [
"xx",
"xx",
], ['x', BlockID.stoneAbyssal, 0]);

IDRegistry.genBlockID("grassDread");
Block.createBlock("grassDread", [
{name: "Dreaded Wastlands Grass", texture: [["DLGbottom", 0], ["DrGtop", 0], ["DRGSides", 1]], inCreative: true}], BLOCK_TYPE_GRASS);
ToolAPI.registerBlockMaterial(BlockID.grassDread, "dirt", 0, true);

IDRegistry.genBlockID("stoneDread"); 
Block.createBlock("stoneDread", [
{name: "Dread Lands Stone", texture: [["DrS", 0]],inCreative: true}], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("stoneDBri"); 
Block.createBlock("stoneDBri", [
{name: "Dread Lands Bricks", texture: [["DrSB", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addFurnace(BlockID.stoneAbyssal, BlockID.stoneABri, 0);

IDRegistry.genBlockID("stoneDBrik"); 
Block.createBlock("stoneDBrik", [
{name: "Dread Lands Bricks", texture: [["DrSBf", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addShaped({id: BlockID.stoneDBrik, count: 4, data: 0}, [
"xx",
"xx",
], ['x', BlockID.stoneDread, 0]);


IDRegistry.genBlockID("Etx"); 
Block.createBlock("Etx", [
{name: "Etaxium", texture: [["Eth", 0]],inCreative: true}], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("stoneEtxb"); 
Block.createBlock("stoneEtxb", [
{name: "Ethaxium Bricks", texture: [["EB", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addFurnace(BlockID.Etx, BlockID.stoneEtxb, 0);

IDRegistry.genBlockID("stoneEtxB"); 
Block.createBlock("stoneEtxB", [
{name: "Ethaxium Bricks", texture: [["EBC", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addFurnace(BlockID.Etx, BlockID.stoneEtxB, 0);

IDRegistry.genBlockID("stoneEtxP"); 
Block.createBlock("stoneEtxP", [
{name: "Ethaxium Pillar", texture: [["EBP_top", 0], ["EBP_top", 0], ["EBP", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Recipes.addShaped({id: BlockID.stoneEtxP, count: 1, data: 0}, [
"x",
], ['x', BlockID.stoneEtxb, 0]);
Recipes.addShaped({id: BlockID.stoneEtxP, count: 1, data: 0}, [
"x",
], ['x', BlockID.stoneEtxB, 0]);