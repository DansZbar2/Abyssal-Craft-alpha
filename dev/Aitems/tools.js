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
], ['a', BlockID.abbIron, 0, 'b', 280, 0]);
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

ToolAPI.addToolMaterial("dresw", {durability: 1329, level: 5, efficiency: 4, damage: 9, enchantability: 14});
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
], ['a', BlockID.dreadIron, 0, 'b', 280, 0]);