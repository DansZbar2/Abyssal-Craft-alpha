/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 10
*/



// file: header.js

IMPORT("AdvancedEvents");
IMPORT("SoundAPI");
//IMPORT("ShootLib");
IMPORT("ToolType");
IMPORT("MobLib");

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}


/*ShootLib.init({
    crosshairGUI:{
        bitmap:{
''          name:-1,
            coords:{
                x:0,
                y:0,
                width:2048,
                height:512
            },
            size:{
                width:4000,
                height:1000
            }
        }
    }
});*/




// file: api/armorStuff.js

var EntitysSS = {
AE:[],
IEt:[],    
addEffectToArmor:function(params){
Callback.addCallback("tick", function(){    
if(Entity.getArmorSlot(this.params.entity, this.params.slot) == this.params.id){
Entity.addEffect(this.params.entity, this.params.effectID, this.params.effectTime, this.params.powerLVL, false, false);   
  }
});
},
addArmorToEntity:function(params){
if(!this.params.entity)
return Logger.LogError("{addArmorToEntity} params.entity должен быть строкой или числом", "EntitysSS");
if(!this.params.slot)
return Logger.LogError("{addArmorToEntity} params.slot должен быть числом", "EntitysSS");    
if(this.params.id)
return Logger.LogError("{addArmorToEntity} params.id должен быть строкой или числом", "EntitysSS");
if(this.params.data)
return Logger.LogError("{addArmorToEntity} params.data должен быть числом", "EntitysSS");        
AE.push(params);
},
addItemToHand:function(params){
if(!this.params.entity)
return Logger.LogError("{addItemToHand} params.entity должен быть строкой или числом", "EntitysSS");
if(!this.params.slot)  
return Logger.LogError("{addItemToHand} params.slot должен быть числом", "EntitysSS");    
if(this.params.id)    
return Logger.LogError("{addItemToHand} params.id должен быть строкой или числом", "EntitysSS");
if(this.params.count)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
if(this.params.data)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
AI.push(params);
},


setArmorToEntity:function(){
Callback.addCallback("EntityAdded", function(entity){
var AE = this.AE;
for(var i = 0; i < AE.length; i++){
if(entity == AE.entity){
Entity.setArmorSlot(entity, AE.slot, AE.id, 1, AE.data);    
          }
        }
    });
},
setItemsToEntity:function(){
Callback.addCallback("EntityAdded", function(entity){
var IEt = this.IEt;
for(var i = 0; i < IEt.length; i++){
if(entity == IEt.entity){
Entity.setCarriedItem(IEt.entity, IEt.id, IEt.count, IEt.data);    
          }
        }
    });
}
}




// file: Ablocks/terrain.js

IDRegistry.genBlockID("stoneDark"); 
Block.createBlock("stoneDark", [
    {name: "Dark Stone", texture: [["DS", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.stoneDark, "stone", 1, true);




// file: Aitems/items.js

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
















// file: Aitems/food.js





// file: Aitems/tools.js

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




// file: Aitems/armor.js

//Tier: 1
IDRegistry.genItemID("ABHelm");
Item.createArmorItem("ABHelm", "Abyssalnite helmet", {name: "AAH"}, {type: "helmet", armor: 3, durability: 364, texture: "armor/abyssalnite_1.png", isTech:false});

IDRegistry.genItemID("ABCh");
Item.createArmorItem("ABCh", "Abyssalnite chestplate", {name: "AAC"}, {type: "chestplate", armor: 8, durability: 529, texture: "armor/abyssalnite_1.png", isTech:false});

IDRegistry.genItemID("ABLeg");
Item.createArmorItem("ABLeg", "Abyssalnite leggins", {name: "AAP"}, {type: "leggings", armor: 6, durability:496, texture: "armor/abyssalnite_2.png", isTech:false});

IDRegistry.genItemID("ABBoot");
Item.createArmorItem("ABBoot", "Abyssalnite boots", {name: "AAB"}, {type: "boots", armor: 3, durability: 430, texture: "armor/abyssalnite_1.png", isTech:false});

//effects:Speed I, Water Breathing I
var spdfabb = new EntitysSS.addEffectToArmor({
id:ItemID.ABBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:0
});
var wtbfabb = new EntitysSS.addEffectToArmor({
id:ItemID.ABHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:1
});
//Tier: 2
IDRegistry.genItemID("DABHelm");
Item.createArmorItem("ABHelm", "Dreaded Abyssalnite helmet", {name: "ADAH"}, {type: "helmet", armor: 3, durability: 485, texture: "armor/dread_1.png", isTech:false});

IDRegistry.genItemID("DABCh");
Item.createArmorItem("DABCh", "Dreaded Abyssalnite chestplate", {name: "ADAC"}, {type: "chestplate", armor: 8, durability: 624, texture: "armor/dread_1.png", isTech:false});

IDRegistry.genItemID("DABLeg");
Item.createArmorItem("DABLeg", "Dreaded Abyssalnite leggins", {name: "ADAP"}, {type: "leggings", armor: 6, durability:542, texture: "armor/dread_2.png", isTech:false});

IDRegistry.genItemID("DABBoot");
Item.createArmorItem("DABBoot", "Dreaded Abyssalnite boots", {name: "ADAB"}, {type: "boots", armor: 3, durability: 488, texture: "armor/dread_1.png", isTech:false});

//effects:Night Vision I, Fire Resistance IV 
var rstfdre = new EntitysSS.addEffectToArmor({
id:ItemID.DABCh,    
entity:Player.get(),
slot:1,
effectID:12,
effectTime:200,
powerLVL:0
});
var ngvfdre = new EntitysSS.addEffectToArmor({
id:ItemID.DABHelm,    
entity:Player.get(),
slot:0,
effectID:16,
effectTime:200,
powerLVL:3
});

IDRegistry.genItemID("RCHelm");
Item.createArmorItem("RCHelm", "Refined Coralium helmet", {name: "ACH"}, {type: "helmet", armor: 3, durability: 520, texture: "armor/coralium_1.png", isTech:false});

IDRegistry.genItemID("RCCh");
Item.createArmorItem("RCCh", "Refined Coralium chestplate", {name: "ACC"}, {type: "chestplate", armor: 8, durability: 643, texture: "armor/coralium_1.png", isTech:false});

IDRegistry.genItemID("RCLeg");
Item.createArmorItem("RCLeg", "Refined Coralium leggins", {name: "ACP"}, {type: "leggings", armor: 6, durability:516, texture: "armor/coralium_2.png", isTech:false});

IDRegistry.genItemID("RCBoot");
Item.createArmorItem("RCBoot", "Refined Coralium boots", {name: "ACB"}, {type: "boots", armor: 3, durability: 498, texture: "armor/coralium_1.png", isTech:false});

//effects:, Speed II, Water Breathing I
var spdfrc = new EntitysSS.addEffectToArmor({
id:ItemID.RCBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:1
});
var wtbfrc = new EntitysSS.addEffectToArmor({
id:ItemID.RCHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:0
});

//Tier: 3
IDRegistry.genItemID("PRCHelm");
Item.createArmorItem("PRCHelm", "Plated Coralium helmet", {name: "ACHP"}, {type: "helmet", armor: 5, durability: 520, texture: "armor/coraliumP_1.png", isTech:false});

IDRegistry.genItemID("PRCCh");
Item.createArmorItem("PRCCh", "Plated Coralium chestplate", {name: "ACCP"}, {type: "chestplate", armor: 9, durability: 643, texture: "armor/coraliumP_1.png", isTech:false});

IDRegistry.genItemID("PRCLeg");
Item.createArmorItem("PRCLeg", "Plated Coralium leggins", {name: "ACPP"}, {type: "leggings", armor: 7, durability:516, texture: "armor/coraliumP_2.png", isTech:false});

IDRegistry.genItemID("PRCBoot");
Item.createArmorItem("PRCBoot", "Plated Coralium boots", {name: "ACBP"}, {type: "boots", armor: 4, durability: 498, texture: "armor/coraliumP_1.png", isTech:false});

//effects: Night Vision I, Speed II, Water Breathing II
var spdfrcp = new EntitysSS.addEffectToArmor({
id:ItemID.PRCBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:1
});
var ngvfrcp = new EntitysSS.addEffectToArmor({
id:ItemID.PRCHelm,    
entity:Player.get(),
slot:0,
effectID:16,
effectTime:200,
powerLVL:0
});
var wtbfrcp = new EntitysSS.addEffectToArmor({
id:ItemID.PRCHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:1
});

IDRegistry.genItemID("DPHelm");
Item.createArmorItem("DPHelm", "Depths helmet", {name: "ADH"}, {type: "helmet", armor: 3, durability: 520, texture: "armor/depths_1.png", isTech:false});

IDRegistry.genItemID("DPCh");
Item.createArmorItem("DPCh", "Depths chestplate", {name: "ADC"}, {type: "chestplate", armor: 8, durability: 643, texture: "armor/depths_1.png", isTech:false});

IDRegistry.genItemID("DPLeg");
Item.createArmorItem("DPLeg", "Depths leggins", {name: "ADP"}, {type: "leggings", armor: 6, durability:516, texture: "armor/depths_2.png", isTech:false});

IDRegistry.genItemID("DPBoot");
Item.createArmorItem("DPBoot", "Depths boots", {name: "ADB"}, {type: "boots", armor: 3, durability: 498, texture: "armor/depths_1.png", isTech:false});

//effects: Night Vision II, Speed III, Water Breathing II, Jump Boost II
var spdfdp = new EntitysSS.addEffectToArmor({
id:ItemID.DPBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:2
});
var jpbfdp = new EntitysSS.addEffectToArmor({
id:ItemID.DPLeg,    
entity:Player.get(),
slot:2,
effectID:8,
effectTime:200,
powerLVL:1
});
var ngvfdp = new EntitysSS.addEffectToArmor({
id:ItemID.DPHelm,    
entity:Player.get(),
slot:0,
effectID:16,
effectTime:200,
powerLVL:1
});
var wtbfdp = EntitysSS.addEffectToArmor({
id:ItemID.DPHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:1
});

IDRegistry.genItemID("DADHelm");
Item.createArmorItem("DADHelm", "Dreadium helmet", {name: "ADDH"}, {type: "helmet", armor: 3, durability: 520, texture: "armor/dreadium_1.png", isTech:false});

IDRegistry.genItemID("DADCh");
Item.createArmorItem("DADCh", "Dreadium chestplate", {name: "ADDC"}, {type: "chestplate", armor: 8, durability: 643, texture: "armor/dreadium_1.png", isTech:false});

IDRegistry.genItemID("DADLeg");
Item.createArmorItem("DADLeg", "Dreadium leggins", {name: "ADDP"}, {type: "leggings", armor: 6, durability:516, texture: "armor/dreadium_2.png", isTech:false});

IDRegistry.genItemID("DADBoot");
Item.createArmorItem("DADBoot", "Dreadium boots", {name: "ADDB"}, {type: "boots", armor: 3, durability: 498, texture: "armor/dreadium_1.png", isTech:false});

//EFFECTS: Resistance III, Speed III
var spdfdad = new EntitysSS.addEffectToArmor({
id:ItemID.DADBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:2
});
var resfdad = new EntitysSS.addEffectToArmor({
id:ItemID.DADCh,    
entity:Player.get(),
slot:1,
effectID:11,
effectTime:200,
powerLVL:2
});

//tier:4
IDRegistry.genItemID("DADSHelm");
Item.createArmorItem("DADSHelm", "Dreadium Samurai helmet", {name: "ADDH"}, {type: "helmet", armor: 7, durability: 520, texture: "armor/dreadiumS_1.png", isTech:false});

IDRegistry.genItemID("DADSCh");
Item.createArmorItem("DADSCh", "Dreadium Samurai chestplate", {name: "ADDC"}, {type: "chestplate", armor: 12, durability: 643, texture: "armor/dreadiumS_1.png", isTech:false});

IDRegistry.genItemID("DADSLeg");
Item.createArmorItem("DADSLeg", "Dreadium Samurai leggins", {name: "ADDP"}, {type: "leggings", armor: 8, durability:516, texture: "armor/dreadiumS_2.png", isTech:false});

IDRegistry.genItemID("DADSBoot");
Item.createArmorItem("DADSBoot", "Dreadium Samurai boots", {name: "ADDB"}, {type: "boots", armor: 5, durability: 498, texture: "armor/dreadiumS_1.png", isTech:false});

//EFFECTS: Resistance 4, Speed III, Fire Resistance II, Strength II
var srtgfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSHelm,    
entity:Player.get(),
slot:3,
effectID:5,
effectTime:200,
powerLVL:1
});
var spdfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:2
});
var resfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSCh,    
entity:Player.get(),
slot:1,
effectID:11,
effectTime:200,
powerLVL:3
});
var fresfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSLeg,    
entity:Player.get(),
slot:3,
effectID:12,
effectTime:200,
powerLVL:1
});




// file: Amobs/humanoidal.js

var Zombie_Abbysal = new Mob({
    sid:"Zombie_Abbysal",
    name:"Abbysal Zombie",
    health:30,
    render:16,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/abyssal_zombie.png",
    spawn:.8,
    loot:[367],
    ai:32
});

Zombie_Abbysal.registerEgg({
    name:"egg_zombie",
    meta:0
});

var Zombie_Abbysal_End = new Mob({
    sid:"Zombie_Abbysal_End",
    name:"Abbysal Ender Zombie",
    health:30,
    render:16,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/abyssal_zombie.png",
    spawn:.6,
    loot:[367],
    ai:38
});

Zombie_Abbysal_End.registerEgg({
    name:"egg_zombie",
    meta:0
});




// file: Amobs/unpeasful.js





// file: Adimensions/Abys.js





