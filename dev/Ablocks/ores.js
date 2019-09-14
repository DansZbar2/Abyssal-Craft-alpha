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
{name: "Nitre Ore", texture:[["NO", 0]],inCreative: true}],BLOCK_TYPE_ORE);
Block.setDestroyLevel("oreNitre", 4);

Recipes.addShaped({id: BlockID.oreCoralInfused, count: 1, data: 0}, [
"xxx",
"aaa",
"xxx"
], ['a', ItemID.coralGem, 0,'x', 1, 0]);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOre(BlockID.stoneDark, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 45, 
minY: 48, 
maxY: 60,  
size: randomInt(2, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: true
}); 
});
    

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOre(BlockID.Etx, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 20, 
minY: 12, 
maxY: 48,  
size: randomInt(1, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: true
}); 
});


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOre(BlockID.oreAbyssalinite, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 38, 
minY: 4, 
maxY: 27,  
size: randomInt(1, 4),  
ratio: .5, 
checkerTile: 1, 
checkerMode: true
}); 
});
  
 
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOre(BlockID.oreCoral, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 32, 
minY: 4, 
maxY: 27,  
size: randomInt(1, 3),  
ratio: .5, 
checkerTile: 1, 
checkerMode: true
}); 
});


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOre(BlockID.oreCoralInfused, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 30, 
minY: 4, 
maxY: 30,  
size: 1,  
ratio: .5, 
checkerTile: 1, 
checkerMode: true
}); 
});


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOre(BlockID.oreNitre, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 35, 
minY: 22, 
maxY: 58,  
size: randomInt(1, 4),  
ratio: .5, 
checkerTile: 1, 
checkerMode: true
}); 
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

IDRegistry.genBlockID("oreDAbyss"); 
Block.createBlock("oreDAbyss", [
{name: "Dreaded Abyssalinite Ore", texture:[["DrSO", 0]],inCreative: true}],BLOCK_TYPE_ORE);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOreInDimension(BlockID.oreAiron, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 34, 
minY: 2, 
maxY: 52,  
size: randomInt(1, 4),  
ratio: .5, 
checkerTile: BlockID.stoneAbyssal, 
checkerMode: true
}); 
});

   
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOreInDimension(BlockID.oreAgold, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 2, 
veinChance: 32, 
minY: 2, 
maxY: 52,  
size: randomInt(1, 4),  
ratio: .5, 
checkerTile: BlockID.stoneAbyssal, 
checkerMode: true
}); 
});


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOreInDimension(BlockID.oreAdiamond, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 34, 
minY: 2, 
maxY: 52,  
size: randomInt(1, 4),  
ratio: .5, 
checkerTile: BlockID.stoneAbyssal, 
checkerMode: true
}); 
});


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOreInDimension(BlockID.oreAnitre, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 35, 
minY: 2, 
maxY: 52,  
size: randomInt(1, 4),  
ratio: .5, 
checkerTile: BlockID.stoneAbyssal, 
checkerMode: true
}); 
});
   

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){ 
UniGen.generateOreInDimension(BlockID.oreAcorpearl, 0, AbyssalWastelands, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 35, 
minY: 2, 
maxY: 52,  
size: randomInt(1, 3),  
ratio: .5, 
checkerTile: BlockID.stoneAbyssal, 
checkerMode: true
}); 
});


//Drops
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
Recipes.addFurnace(BlockID.oreDAbyss, ItemID.abbIron, 0);
Recipes.addFurnace(BlockID.oreAdiamond, 264, 0);


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
Recipes.addFurnace(BlockID.sandAbyss, BlockID.glassAbyssal, 0);
});