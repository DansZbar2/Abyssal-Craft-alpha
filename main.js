/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 12
*/



// file: header.js

IMPORT("dimensions");
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
if(Entity.getArmorSlot(params.entity, params.slot).id == params.id){
Entity.addEffect(params.entity, params.effectID, params.effectTime, params.powerLVL, false, false);   
  }
});
},
addArmorToEntity:function(params){
if(!params.entity)
return Logger.LogError("{addArmorToEntity} params.entity должен быть строкой или числом", "EntitysSS");
if(!params.slot)
return Logger.LogError("{addArmorToEntity} params.slot должен быть числом", "EntitysSS");    
if(!params.id)
return Logger.LogError("{addArmorToEntity} params.id должен быть строкой или числом", "EntitysSS");
if(!params.data)
return Logger.LogError("{addArmorToEntity} params.data должен быть числом", "EntitysSS");        
AE.push(params);
},
addItemToHand:function(params){
if(!params.entity)
return Logger.LogError("{addItemToHand} params.entity должен быть строкой или числом", "EntitysSS");
if(!params.slot)  
return Logger.LogError("{addItemToHand} params.slot должен быть числом", "EntitysSS");    
if(!params.id)    
return Logger.LogError("{addItemToHand} params.id должен быть строкой или числом", "EntitysSS");
if(!params.count)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
if(!params.data)
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

var BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3,
    opaque: true
}, "stone");

var BLOCK_TYPE_ORE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 5,
    explosionres: 4,
    opaque: true
}, "stone");


IDRegistry.genBlockID("stoneDark"); 
Block.createBlock("stoneDark", [
{name: "Dark Stone", texture: [["DS", 0]],inCreative: true}], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("dirtDark");
Block.createBlockWithRotation("dirtDark", [
{name: "DarkLends Dirt", texture: [["DLGbottom", 0], ["DLGtop", 0], ["DLGsides", 0], ["DLGsides", 0], ["DLGsides", 0], ["DLGsides", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dirtDark, "dirt", 0, true);

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




// file: Adimensions/Abys.js

const SKY_COLOR = [0.4, 0.4, 0.5];
const FOG_COLOR = [0.3, 0.3, 0.5];
var inWaste = false;


var AbyssalWastelands = new Dimension({
    name: "AbyssalWastelands",    
    generation: {
        layers: [           
          // major islands
            { 
                range: [0, 65],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [1.96, .95, 1.96]
                    }
                },     
                gradient: [[1.25, -1.12], [.32, .51], [.63, -.4], [9.4, -8], [1.3, -.81]],       
                terrain: {
                    base: BlockID.stoneAbyssal,
                    cover: {
                        height: 5,
                        top: BlockID.stoneAbyssal,
                        block: BlockID.stoneAbyssal
                    }
                }
            },
        ],
        
        decoration: {
        // biome: 34   
        }
    },
    
    environment: {
        sky: SKY_COLOR,
        fog: FOG_COLOR
    },
    callbacks:{
       tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 



},      
loaded: function(){
inWaste = true;    
},
unloaded: function(){
inWaste = false; 
}
}
});


var ABWTransferSequence = new TransferSequence(AbyssalWastelands);
ABWTransferSequence.setPortalTimeout(40);

ABWTransferSequence.setPortalOverlay(new PortalOverlayWindow({
    frames: 64, 
    rate: 22, 
    fade: 1, 
    texture: "AG_animation"
}));

ABWTransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("ABWPortal", ["AG", 0], ABWTransferSequence.getPortal(), {type: "u-plane", frameId: BlockID.stoneAbyssal}, true);
ABWTransferSequence.setPortalTiles(BlockID.ABWPortal);





var shape = new PortalShape();
shape.setPortalId(BlockID.ABWPortal);
shape.setFrameIds(BlockID.stoneAbyssal);
shape.setMinSize(2, 3);

ABWTransferSequence.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.keyABW) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == BlockID.stoneAbyssal || block.id == BlockID.ABWPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.ABWPortal, [4]);
    }
});




// file: Ablocks/ores.js

IDRegistry.genBlockID("oreAbyssalinite"); 
Block.createBlock("oreAbyssalinite", [
{name: "Abyssalinite Ore", texture:[["AO", 0]],inCreative: true}],BLOCK_TYPE_ORE);
Block.setDestroyLevel("oreAbyssalinite", 3);

IDRegistry.genBlockID("oreCoral"); 
Block.createBlock("oreCoral", [
{name: "Coralium Ore", texture:[["CO", 0]],inCreative: true}],BLOCK_TYPE_ORE);
Block.setDestroyLevel("oreCoral", 3);

IDRegistry.genBlockID("oreCoralInfused"); 
Block.createBlock("oreCoralInfused", [
{name: "Coralium Infused Stone", texture:[["CIS", 0]],inCreative: true}],BLOCK_TYPE_ORE);
Block.setDestroyLevel("oreCoral", 3);

IDRegistry.genBlockID("oreNitre"); 
Block.createBlock("oreNitre", [
{name: "Nitre Ore", texture:[["CIS", 0]],inCreative: true}],BLOCK_TYPE_ORE);
Block.setDestroyLevel("oreNitre", 4);
	Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 1; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 42); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.stoneDark, 0, randomInt(2, 5));     
   }  
});
	
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 3; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 25); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAbyssalinite, 0, randomInt(1, 5)); 
   }    
});  

    
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 4; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 23); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCoral, 0, randomInt(1, 4));     
   }  
}); 

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 4; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 26); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCoralInfused, 0, randomInt(1, 3));     
   }  
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 2; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 34); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreNitre, 0, randomInt(1, 3));     
   }  
});    
  }
});

//DimensionOres
IDRegistry.genBlockID("oreAiron"); 
Block.createBlock("oreAiron", [
{name: "Abyssal Iron Ore", texture:[["AIO", 0]],inCreative: true}],BLOCK_TYPE_ORE);


IDRegistry.genBlockID("oreAgold"); 
Block.createBlock("oreAgold", [
{name: "Abyssal Gold Ore", texture:[["AGO", 0]],inCreative: true}],BLOCK_TYPE_ORE);


IDRegistry.genBlockID("oreAdiamond"); 
Block.createBlock("oreAdiamond", [
{name: "Abyssal Diamond Ore", texture:[["ADO", 0]],inCreative: true}],BLOCK_TYPE_ORE);


IDRegistry.genBlockID("oreAnitre"); 
Block.createBlock("oreAnitre", [
{name: "Abyssal Nitre Ore", texture:[["ANO", 0]],inCreative: true}],BLOCK_TYPE_ORE);


IDRegistry.genBlockID("oreAcorpearl"); 
Block.createBlock("oreAcorpearl", [
{name: "Pearlescent Coralium Ore", texture:[["APCorO", 0]],inCreative: true}],BLOCK_TYPE_ORE);
Block.setDestroyLevel("oreAcorpearl", 3);

/*
Callback.addCallback("tick", function(){
if(AbyssalWastelands.isInDimension()){
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 14; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 78); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAiron, 0, randomInt(1, 4),true);   
}  
});    
   
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 3; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 78); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAgold, 0, randomInt(1, 4),false);   
}  
}); 

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 2; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 78); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAdiamond, 0, randomInt(1, 4),false);   
}  
});
   
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 2; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 78); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAnitre, 0, randomInt(1, 4),false);   
}  
});    

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 3; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 78); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAcorpearl, 0, randomInt(1, 4),false);   
}  
});
  } 
});*/


Callback.addCallback("PostLoaded", function(){ 
Block.registerDropFunction("oreAbyssalinite", function(coords, blockID, blockData, level, enchant){
    if(level >= 3){
        if(enchant.silk){
            return [[BlockID.oreAbyssalinite, 1, 0]];
        }
        var drop = [[BlockID.oreAbyssalinite, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});
Recipes.addFurnace(BlockID.oreAbyssalinite, ItemID.abbIron, 0);

Block.registerDropFunction("oreCoral", function(coords, blockID, blockData, level, enchant){
    if(level >= 3){
        if(enchant.silk){
            return [[BlockID.oreCoral, 1, 0]];
        }
        var drop = [[ItemID.coralGem, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});
Recipes.addFurnace(BlockID.oreCoral, ItemID.coralGem, 0);

Block.registerDropFunction("oreCoralInfused", function(coords, blockID, blockData, level, enchant){
    if(level >= 3){
        if(enchant.silk){
            return [[BlockID.oreCoralInfused, 1, 0]];
        }
        var drop = [[ItemID.coralPearl, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});
Recipes.addFurnace(BlockID.oreCoralInfused, ItemID.coralPearl, 0);

Block.registerDropFunction("oreNitre", function(coords, blockID, blockData, level, enchant){
    if(level >= 3){
        if(enchant.silk){
            return [[BlockID.oreNitre, 1, 0]];
        }
        var drop = [[ItemID.nitrePeace, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});
Recipes.addFurnace(BlockID.oreNitre, ItemID.nitrePeace, 0);

Recipes.addFurnace(BlockID.oreAiron, 265, 0);
Recipes.addFurnace(BlockID.oreAgold, 266, 0);

Block.registerDropFunction("oreAdiamond", function(coords, blockID, blockData, level, enchant){
    if(level >= 3){
        if(enchant.silk){
            return [[BlockID.oreAdiamond, 1, 0]];
        }
        var drop = [[264, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});
Recipes.addFurnace(BlockID.oreAdiamond, 264, 0);
});




// file: Ablocks/flora.js





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

IDRegistry.genItemID("nitrePeace");
Item.createItem("nitrePeace", "Nitre", {name: "nitre"});

IDRegistry.genItemID("coralNugget");
Item.createItem("coralNugget", "Coralium Nugget", {name: "nugget_coralium"});

IDRegistry.genItemID("coralGem");
Item.createItem("coralGem", "Coralium Gem", {name: "CG"});
Recipes.addFurnace(ItemID.coralChunck,ItemID.coralIron);

IDRegistry.genItemID("coralPearl");
Item.createItem("coralPearl", "Coralium Pearl", {name: "CP"});

IDRegistry.genItemID("coralPlate");
Item.createItem("coralPlate", "Coralium Plate", {name: "CPP"});


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
//PortalItems
IDRegistry.genItemID("keyABW");
Item.createItem("keyABW", "Geateway Key", {name: "CPP"});




// file: Aitems/food.js

IDRegistry.genItemID("plateFood");
Item.createItem("plateFood", "Food Plate", {name: "plate"},{isTech:false});
Recipes.addShaped({id: ItemID.plateFood, count: 2, data: 0}, [
"xx",
], ['x', 265, 0]);

IDRegistry.genItemID("plateFoodD");
Item.createItem("plateFoodD", "Dirty Food Plate", {name: "dirtyplate"},{isTech:false});

IDRegistry.genItemID("plateFoodC");
Item.createFoodItem("plateFoodC", "Chicken on a Plate", {name: "ChiP"},{isTech:false,food: 11});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodC){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("plateFoodP");
Item.createFoodItem("plateFoodP", "Porkchop on a Plate", {name: "PorP"},{isTech:false,food: 15});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodP){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("plateFoodB");
Item.createFoodItem("plateFoodB", "Beef on a Plate", {name: "BeeP"},{isTech:false,food: 13});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodB){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("plateFoodF");
Item.createFoodItem("plateFoodF", "Fish on a Plate", {name: "BeeP"},{isTech:false,food: 13});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodF){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("eggF");
Item.createFoodItem("eggF", "Fried Egg", {name: "friedegg"},{isTech:false,food: 7});
Recipes.addFurnace(344, ItemID.eggF, 0);

IDRegistry.genItemID("plateEggF");
Item.createFoodItem("plateEggF", "Fried Egg on a Plate", {name: "eggp"},{isTech:false,food: 9});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodF){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});










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
Item.createArmorItem("DADSHelm", "Dreadium Samurai helmet", {name: "ADSH"}, {type: "helmet", armor: 7, durability: 520, texture: "armor/dreadiumS_1.png", isTech:false});

IDRegistry.genItemID("DADSCh");
Item.createArmorItem("DADSCh", "Dreadium Samurai chestplate", {name: "ADSC"}, {type: "chestplate", armor: 12, durability: 643, texture: "armor/dreadiumS_1.png", isTech:false});

IDRegistry.genItemID("DADSLeg");
Item.createArmorItem("DADSLeg", "Dreadium Samurai leggins", {name: "ADSP"}, {type: "leggings", armor: 8, durability:516, texture: "armor/dreadiumS_2.png", isTech:false});

IDRegistry.genItemID("DADSBoot");
Item.createArmorItem("DADSBoot", "Dreadium Samurai boots", {name: "ADSB"}, {type: "boots", armor: 5, durability: 498, texture: "armor/dreadiumS_1.png", isTech:false});

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
    skin:"mob/zombies/abyssal_zombie.png",
    spawn:{
    chance:1,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[367],
    ai:32
});

Zombie_Abbysal.registerEgg("egg_zombie");

var Zombie_Abbysal_End = new Mob({
    sid:"Zombie_Abbysal_End",
    name:"Abbysal Ender Zombie",
    health:30,
    render:16,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/zombies/abyssal_zombie_end.png",
    spawn:{
    chance:1.5,      
    biomes:9,   
    time:[{start:0,end:23999}]},
    loot:[367],
    ai:38
});

Zombie_Abbysal_End.registerEgg("egg_zombie");




// file: Amobs/unpeasful.js




