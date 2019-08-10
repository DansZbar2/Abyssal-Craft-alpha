//Tier1
IDRegistry.genItemID("abyssSSword");
Item.createItem("abyssSSword", "Dark Stone Sword", {name: "DSW", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssSShovel");
Item.createItem("abyssSShovel", "Dark Stone Shovel", {name: "DS", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssSPickaxe");
Item.createItem("abyssSPickaxe", "Dark Stone Pickaxe", {name: "DP", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssSAxe");
Item.createItem("abyssSAxe", "Dark Stone Axe", {name: "DA", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssSHoe");
Item.createItem("abyssSHoe", "Dark Stone Hoe", {name: "DH", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("abyssSsw", {durability: 496, level: 2, efficiency: 4, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("abyssSsh", {durability: 448, level: 2, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("abyssSpi", {durability: 512, level: 2, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("abyssSaxe", {durability: 510, level: 2, efficiency: 6, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("abyssShoe", {durability: 506, level: 2, efficiency: 6, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.abyssSSword, "abyssSsw", ToolType.sword);
Item.setToolRender(ItemID.abyssSSword, true);
ToolAPI.setTool(ItemID.abyssSShovel, "abyssSsh", ToolType.shovel);
Item.setToolRender(ItemID.abyssSShovel, true);
ToolAPI.setTool(ItemID.abyssSPickaxe, "abyssSpi", ToolType.pickaxe);
Item.setToolRender(ItemID.abyssSPickaxe, true);
ToolAPI.setTool(ItemID.abyssSAxe, "abyssSaxe", ToolType.axe);
Item.setToolRender(ItemID.abyssSAxe, true);
ToolAPI.setTool(ItemID.abyssSHoe, "abyssShoe", ToolType.hoe);
Item.setToolRender(ItemID.abyssSHoe, true);
Callback.addCallback("PostLoaded", function(){  
Recipes.addShaped({id: ItemID.abyssSSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.stoneDark, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssSShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.stoneDark, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssSPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.stoneDark, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssSAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.stoneDark, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssSHoe, count: 1, data: 0}, [
   "aa",
    "b",
    "b"
], ['a', BlockID.stoneDark, 0, 'b', 280, 0]);
});
//Tier2
IDRegistry.genItemID("abyssSword");
Item.createItem("abyssSword", "Abyssalnite Sword", {name: "ASW", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssShovel");
Item.createItem("abyssShovel", "Abyssalnite Shovel", {name: "AS", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssPickaxe");
Item.createItem("abyssPickaxe", "Abyssalnite Pickaxe", {name: "AP", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssAxe");
Item.createItem("abyssAxe", "Abyssalnite Axe", {name: "AA", meta: 0}, {stack: 1});

IDRegistry.genItemID("abyssHoe");
Item.createItem("abyssHoe", "Abyssalnite Hoe", {name: "AH", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("abysssw", {durability: 1129, level: 5, efficiency: 4, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("abysssh", {durability: 1562, level: 5, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("abysspi", {durability: 1568, level: 5, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("abyssaxe", {durability: 1562, level: 5, efficiency: 6, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("abysshoe", {durability: 1562, level: 5, efficiency: 6, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.abyssSword, "abysssw", ToolType.sword);
Item.setToolRender(ItemID.abyssSword, true);
ToolAPI.setTool(ItemID.abyssShovel, "abysssh", ToolType.shovel);
Item.setToolRender(ItemID.abyssShovel, true);
ToolAPI.setTool(ItemID.abyssPickaxe, "abysspi", ToolType.pickaxe);
Item.setToolRender(ItemID.abyssPickaxe, true);
ToolAPI.setTool(ItemID.abyssAxe, "abyssaxe", ToolType.axe);
Item.setToolRender(ItemID.abyssAxe, true);
ToolAPI.setTool(ItemID.abyssHoe, "abysshoe", ToolType.hoe);
Item.setToolRender(ItemID.abyssHoe, true);
Recipes.addShaped({id: ItemID.abyssSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.abbIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.abbIron, 0, 'b', 280, 0]);
6
Recipes.addShaped({id: ItemID.abyssPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.abbIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.abbIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.abyssHoe, count: 1, data: 0}, [
   "aa",
    "b",
    "b"
], ['a', ItemID.abbIron, 0, 'b', 280, 0]);

//Coralium
IDRegistry.genItemID("corSword");
Item.createItem("corSword", "Reinforced Coralium Sword", {name: "RCSW", meta: 0}, {stack: 1});

IDRegistry.genItemID("corShovel");
Item.createItem("corShovel", "Reinforced Coralium Shovel", {name: "RCS", meta: 0}, {stack: 1});

IDRegistry.genItemID("corPickaxe");
Item.createItem("corPickaxe", "Reinforced Coralium Pickaxe", {name: "RCP", meta: 0}, {stack: 1});

IDRegistry.genItemID("corAxe");
Item.createItem("corAxe", "Reinforced Coralium Axe", {name: "RCA", meta: 0}, {stack: 1});

IDRegistry.genItemID("corHoe");
Item.createItem("corHoe", "Reinforced Coralium Hoe", {name: "RCH", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("corsw", {durability: 1189, level: 5, efficiency: 4, damage: 10, enchantability: 14});
ToolAPI.addToolMaterial("corsh", {durability: 1610, level: 5, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("corpi", {durability: 1506, level: 5, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("coraxe", {durability: 1598, level: 5, efficiency: 6, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("corhoe", {durability: 1597, level: 5, efficiency: 6, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.corSword, "corsw", ToolType.sword);
Item.setToolRender(ItemID.corSword, true);
ToolAPI.setTool(ItemID.corShovel, "corsh", ToolType.shovel);
Item.setToolRender(ItemID.corShovel, true);
ToolAPI.setTool(ItemID.corPickaxe, "corpi", ToolType.pickaxe);
Item.setToolRender(ItemID.corPickaxe, true);
ToolAPI.setTool(ItemID.corAxe, "coraxe", ToolType.axe);
Item.setToolRender(ItemID.corAxe, true);
ToolAPI.setTool(ItemID.corHoe, "corhoe", ToolType.hoe);
Item.setToolRender(ItemID.corHoe, true);
Recipes.addShaped({id: ItemID.corSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.coralIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.corShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.coralIron, 0, 'b', 280, 0]);
6
Recipes.addShaped({id: ItemID.corPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.coralIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.corAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.coralIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.corHoe, count: 1, data: 0}, [
   "aa",
    "b",
    "b"
], ['a', ItemID.coralIron, 0, 'b', 280, 0]);

//Tier3
IDRegistry.genItemID("dreSword");
Item.createItem("dreSword", "Dredalinite Sword", {name: "DDSW", meta: 0}, {stack: 1});

IDRegistry.genItemID("dreShovel");
Item.createItem("dreShovel", "Dredalinite Shovel", {name: "DDS", meta: 0}, {stack: 1});

IDRegistry.genItemID("drePickaxe");
Item.createItem("drePickaxe", "Dredalinite Pickaxe", {name: "DDP", meta: 0}, {stack: 1});

IDRegistry.genItemID("dreAxe");
Item.createItem("dreAxe", "Dredalinite Axe", {name: "DDA", meta: 0}, {stack: 1});

IDRegistry.genItemID("dreHoe");
Item.createItem("dreHoe", "Dredalinite Hoe", {name: "DDH", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("dresw", {durability: 1329, level: 5, efficiency: 4, damage: 12, enchantability: 14});
ToolAPI.addToolMaterial("dresh", {durability: 1762, level: 5, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("drepi", {durability: 1768, level: 5, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("dreaxe", {durability: 1762, level: 5, efficiency: 6, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("drehoe", {durability: 1762, level: 5, efficiency: 6, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.dreSword, "dresw", ToolType.sword);
Item.setToolRender(ItemID.dreSword, true);
ToolAPI.setTool(ItemID.dreShovel, "dresh", ToolType.shovel);
Item.setToolRender(ItemID.dreShovel, true);
ToolAPI.setTool(ItemID.drePickaxe, "drepi", ToolType.pickaxe);
Item.setToolRender(ItemID.drePickaxe, true);
ToolAPI.setTool(ItemID.dreAxe, "dreaxe", ToolType.axe);
Item.setToolRender(ItemID.dreAxe, true);
ToolAPI.setTool(ItemID.dreHoe, "drehoe", ToolType.hoe);
Item.setToolRender(ItemID.dreHoe, true);
Recipes.addShaped({id: ItemID.dreSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.dreadIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.dreShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.dreadIron, 0, 'b', 280, 0]);
6
Recipes.addShaped({id: ItemID.drePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.dreadIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.dreAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.dreadIron, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.dreHoe, count: 1, data: 0}, [
   "aa",
    "b",
    "b"
], ['a', ItemID.dreadIron, 0, 'b', 280, 0]);

//Ethaxium
IDRegistry.genItemID("ethSword");
Item.createItem("ethSword", "Dredalinite Sword", {name: "ESW", meta: 0}, {stack: 1});

IDRegistry.genItemID("ethShovel");
Item.createItem("ethShovel", "Dredalinite Shovel", {name: "ES", meta: 0}, {stack: 1});

IDRegistry.genItemID("ethPickaxe");
Item.createItem("ethPickaxe", "Dredalinite Pickaxe", {name: "EP", meta: 0}, {stack: 1});

IDRegistry.genItemID("ethAxe");
Item.createItem("ethAxe", "Dredalinite Axe", {name: "EA", meta: 0}, {stack: 1});

IDRegistry.genItemID("ethHoe");
Item.createItem("ethHoe", "Dredalinite Hoe", {name: "EH", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ethsw", {durability: 1929, level: 6, efficiency: 5, damage: 15, enchantability: 14});
ToolAPI.addToolMaterial("ethsh", {durability: 2162, level: 6, efficiency: 7, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("ethpi", {durability: 2168, level: 6, efficiency: 7, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("ethaxe", {durability: 2162, level: 6, efficiency: 7, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("ethhoe", {durability: 2162, level: 6, efficiency: 7, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.ethSword, "ethsw", ToolType.sword);
Item.setToolRender(ItemID.ethSword, true);
ToolAPI.setTool(ItemID.ethShovel, "ethsh", ToolType.shovel);
Item.setToolRender(ItemID.ethShovel, true);
ToolAPI.setTool(ItemID.ethPickaxe, "ethpi", ToolType.pickaxe);
Item.setToolRender(ItemID.ethPickaxe, true);
ToolAPI.setTool(ItemID.ethAxe, "ethaxe", ToolType.axe);
Item.setToolRender(ItemID.ethAxe, true);
ToolAPI.setTool(ItemID.ethHoe, "ethhoe", ToolType.hoe);
Item.setToolRender(ItemID.ethHoe, true);
Recipes.addShaped({id: ItemID.ethSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ethIron, 0, 'b', ItemID.ethBrick, 0]);

Recipes.addShaped({id: ItemID.ethShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ethIron, 0, 'b', ItemID.ethBrick, 0]);
6
Recipes.addShaped({id: ItemID.ethPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ethIron, 0, 'b', ItemID.ethBrick, 0]);

Recipes.addShaped({id: ItemID.ethAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ethIron, 0, 'b', ItemID.ethBrick, 0]);

Recipes.addShaped({id: ItemID.ethHoe, count: 1, data: 0}, [
   "aa",
    "b",
    "b"
], ['a', ItemID.ethIron, 0, 'b', ItemID.ethBrick, 0]);