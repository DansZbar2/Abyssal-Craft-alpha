//abyssalinite
IDRegistry.genItemID("abbChunck");
Item.createItem("abbChunck", "Abyssalnite Chunck", {name: "AC"});

IDRegistry.genItemID("abbIron");
Item.createItem("abbIron", "Abyssalnite Ingot", {name: "AI"});
Recipes.addFurnace(ItemID.abbChunck,ItemID.abbIron);

//coral
IDRegistry.genItemID("coralChunck");
Item.createItem("coralChunck", "Coralium Chunck", {name: "CC"});

IDRegistry.genItemID("coralIron");
Item.createItem("coralIron", "Coralium Ingot", {name: "RCI"});
Recipes.addFurnace(ItemID.coralChunck,ItemID.coralIron);

IDRegistry.genItemID("coralNugget");
Item.createItem("coralNugget", "Coralium Nugget", {name: "nugget_coralium"});

IDRegistry.genItemID("coralGem");
Item.createItem("coralGem", "Coralium Gem", {name: "CG"});
Recipes.addFurnace(ItemID.coralChunck,ItemID.coralIron);

IDRegistry.genItemID("coralPearl");
Item.createItem("coralPearl", "Coralium Pearl", {name: "CP"});

IDRegistry.genItemID("coralPlate");
Item.createItem("coralPlate", "Coralium Plate", {name: "CPP"});

IDRegistry.genItemID("dreadPeace");
Item.createItem("dreadPeace", "Dredalinite Peace", {name: "DSOA"});

IDRegistry.genItemID("dreadChunck");
Item.createItem("dreadChunck", "Dredalinite Chunck", {name: "DAC"});

Recipes.addShaped({id: ItemID.dreadChunck, count: 1, data: 0}, [
"xx",
"xx"
], ['x', ItemID.dreadPeace, 0]);

IDRegistry.genItemID("dreadIron");
Item.createItem("dreadIron", "Dredalinite Ingot", {name: "DI"});
Recipes.addFurnace(ItemID.dreadChunck,ItemID.dreadIron);
//Upgrade kits
IDRegistry.genItemID("cobUpgr");
Item.createItem("cobUpgr", "Cobblestone Upgrade", {name: "CobU"});

Recipes.addShaped({id: ItemID.cobUpgr, count: 1, data: 0}, [
     "ax",
     "xr",
     "d"
], ['x', 4, 0, 'a', 5, -1, 'r', 287, 0, 'd', 318, 0]);

Recipes.addShaped({id: 272, count: 1, data: 0}, [
"ax",
], ['x', ItemID.cobUpgr, 0, 'a', 268, 0]);
Recipes.addShaped({id: 275, count: 1, data: 0}, [
"ax",
], ['x', ItemID.cobUpgr, 0, 'a', 271, 0]);
Recipes.addShaped({id: 274, count: 1, data: 0}, [
"ax",
], ['x', ItemID.cobUpgr, 0, 'a', 270, 0]);
Recipes.addShaped({id: 291, count: 1, data: 0}, [
"ax",
], ['x', ItemID.cobUpgr, 0, 'a', 290, 0]);
Recipes.addShaped({id: 273, count: 1, data: 0}, [
"ax",
], ['x', ItemID.cobUpgr, 0, 'a', 269, 0]);

IDRegistry.genItemID("iroUpgr");
Item.createItem("iroUpgr", "Iron Upgrade", {name: "IroU"});

Recipes.addShaped({id: ItemID.iroUpgr, count: 1, data: 0}, [
     "ax",
     "xr",
], ['x', 265, 0, 'a', 4, 0, 'r', ItemID.cobUpgr, 0]);

Recipes.addShaped({id: 267, count: 1, data: 0}, [
"ax",
], ['x', ItemID.iroUpgr, 0, 'a', 272, 0]);
Recipes.addShaped({id: 258, count: 1, data: 0}, [
"ax",
], ['x', ItemID.iroUpgr, 0, 'a', 275, 0]);
Recipes.addShaped({id: 257, count: 1, data: 0}, [
"ax",
], ['x', ItemID.iroUpgr, 0, 'a', 274, 0]);
Recipes.addShaped({id: 292, count: 1, data: 0}, [
"ax",
], ['x', ItemID.iroUpgr, 0, 'a', 291, 0]);
Recipes.addShaped({id: 256, count: 1, data: 0}, [
"ax",
], ['x', ItemID.iroUpgr, 0, 'a', 273, 0]);

IDRegistry.genItemID("golUpgr");
Item.createItem("golUpgr", "Gold Ungrade", {name: "GolU"});

Recipes.addShaped({id: ItemID.golUpgr, count: 1, data: 0}, [
     "ax",
     "xr",
], ['x', 266, 0, 'a', 265, 0, 'r', ItemID.iroUpgr, 0]);

Recipes.addShaped({id: 283, count: 1, data: 0}, [
"ax",
], ['x', ItemID.golUpgr, 0, 'a', 267, 0]);
Recipes.addShaped({id: 286, count: 1, data: 0}, [
"ax",
], ['x', ItemID.golUpgr, 0, 'a', 258, 0]);
Recipes.addShaped({id: 285, count: 1, data: 0}, [
"ax",
], ['x', ItemID.golUpgr, 0, 'a', 257, 0]);
Recipes.addShaped({id: 294, count: 1, data: 0}, [
"ax",
], ['x', ItemID.golUpgr, 0, 'a', 292, 0]);
Recipes.addShaped({id: 284, count: 1, data: 0}, [
"ax",
], ['x', ItemID.golUpgr, 0, 'a', 256, 0]);

IDRegistry.genItemID("diaUpgr");
Item.createItem("diaUpgr", "Diamond Upgrade", {name: "DiaU"});

Recipes.addShaped({id: ItemID.diaUpgr, count: 1, data: 0}, [
     "ax",
     "xr",
], ['x', 264, 0, 'a', 266, 0, 'r', ItemID.golUpgr, 0]);

Recipes.addShaped({id: 276, count: 1, data: 0}, [
"ax",
], ['x', ItemID.diaUpgr, 0, 'a', 283, 0]);
Recipes.addShaped({id: 279, count: 1, data: 0}, [
"ax",
], ['x', ItemID.diaUpgr, 0, 'a', 286, 0]);
Recipes.addShaped({id: 278, count: 1, data: 0}, [
"ax",
], ['x', ItemID.diaUpgr, 0, 'a', 285, 0]);
Recipes.addShaped({id: 293, count: 1, data: 0}, [
"ax",
], ['x', ItemID.diaUpgr, 0, 'a', 294, 0]);
Recipes.addShaped({id: 277, count: 1, data: 0}, [
"ax",
], ['x', ItemID.diaUpgr, 0, 'a', 284, 0]);

IDRegistry.genItemID("abyUpgr");
Item.createItem("abyUpgr", "Abyssalinite Upgrade", {name: "AbyU"});

Recipes.addShaped({id: ItemID.abyUpgr, count: 1, data: 0}, [
     "ax",
     "xr",
], ['x', ItemID.abbIron, 0, 'a', 264, 0, 'r', ItemID.diaUpgr, 0]);
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.abyssSword, count: 1, data: 0}, [
"ax",
], ['x', ItemID.abyUpgr, 0, 'a', 276, 0]);
Recipes.addShaped({id: ItemID.abyssAxe, count: 1, data: 0}, [
"ax",
], ['x', ItemID.abyUpgr, 0, 'a', 279, 0]);
Recipes.addShaped({id: ItemID.abyssPickaxe, count: 1, data: 0}, [
"ax",
], ['x', ItemID.abyUpgr, 0, 'a', 278, 0]);
Recipes.addShaped({id: ItemID.abyssHoe, count: 1, data: 0}, [
"ax",
], ['x', ItemID.abyUpgr, 0, 'a', 293, 0]);
Recipes.addShaped({id: ItemID.abyssShovel, count: 1, data: 0}, [
"ax",
], ['x', ItemID.abyUpgr, 0, 'a', 277, 0]);
});
IDRegistry.genItemID("dreUpgr");
Item.createItem("dreUpgr", "Dredium Upgrade", {name: "DreU"});

Recipes.addShaped({id: ItemID.dreUpgr, count: 1, data: 0}, [
     "ax",
     "xr",
], ['x', ItemID.dreadIron, 0, 'a', ItemID.abbIron, 0, 'r', ItemID.abyUpgr, 0]);
Callback.addCallback("PostLoaded", function(){  
Recipes.addShaped({id: ItemID.dreSword, count: 1, data: 0}, [
"ax",
], ['x', ItemID.dreUpgr, 0, 'a', ItemID.abyssSword, 0]);
Recipes.addShaped({id: ItemID.dreAxe, count: 1, data: 0}, [
"ax",
], ['x', ItemID.dreUpgr, 0, 'a', ItemID.abyssAxe, 0]);
Recipes.addShaped({id: ItemID.drePickaxe, count: 1, data: 0}, [
"ax",
], ['x', ItemID.dreUpgr, 0, 'a', ItemID.abyssPickaxe, 0]);
Recipes.addShaped({id: ItemID.dreHoe, count: 1, data: 0}, [
"ax",
], ['x', ItemID.dreUpgr, 0, 'a', ItemID.abyssHoe, 0]);
Recipes.addShaped({id: ItemID.dreShovel, count: 1, data: 0}, [
"ax",
], ['x', ItemID.dreUpgr, 0, 'a', ItemID.abyssShovel, 0]);
});












