//MATIREALS
IDRegistry.genItemID("trsGem");
Item.createItem("trsGem", "Transmutation Gem", {name: "TG"});

IDRegistry.genItemID("soulPe");
Item.createItem("soulPe", "Soul Gem Peace", {name: "SF"});

IDRegistry.genItemID("soulPa");
Item.createItem("soulPa", "Soul Gem Part", {name: "SS"});

Recipes.addShaped({id:ItemID.soulPa, count: 1, data: 0}, [
"xx",
"xx"
], ['x', ItemID.soulPe, 0]);

IDRegistry.genItemID("soulG");
Item.createItem("soulG", "Soul Gem", {name: "SG"});

Recipes.addShaped({id:ItemID.soulG, count: 1, data: 0}, [
"xx",
"xx"
], ['x', ItemID.soulPa, 0]);

IDRegistry.genItemID("shardObl");
Item.createItem("shardObl", "Oblivion Shard", {name: "OS"});

IDRegistry.genItemID("catalObl");
Item.createItem("catalObl", "Oblivion Catalyst", {name: "OC"});

Item.registerUseFunction("catalObl",function(coords, item, block){
Entity.addEffect(Player.get(), 1, 6000, 2, false, false); 
Entity.addEffect(Player.get(), 3, 6000, 2, false, false);   
Entity.addEffect(Player.get(), 5, 6000, 2, false, false);  
Entity.addEffect(Player.get(), 6, 6000, 2, false, false);
Entity.addEffect(Player.get(), 10, 6000, 2, false, false);
Entity.addEffect(Player.get(), 11, 6000, 2, false, false);
Entity.addEffect(Player.get(), 12, 6000, 2, false, false);
Entity.addEffect(Player.get(), 13, 6000, 2, false, false);
Entity.addEffect(Player.get(), 14, 6000, 2, false, false);
Entity.addEffect(Player.get(), 16, 6000, 2, false, false);
Entity.addEffect(Player.get(), 21, 6000, 2, false, false);
Entity.addEffect(Player.get(), 22, 6000, 2, false, false);
Entity.addEffect(Player.get(), 23, 6000, 2, false, false);
});

//RECIPES
SacrificesApi.regRecipe(ItemID.trsGem,{
            center: {id:368,data:0},//ЦЕНТР
            item1: {id:264,data:0},//ВЕРХ
            item2: {id:264,data:0},//НИЗ
            item3: {id:ItemID.coralGem,data:0},//ПРАВО
            item4: {id:ItemID.coralGem,data:0},//ЛЕВО
            item5: {id:377,data:0},//ДИАГ?
            item6: {id:377,data:0},//ДИАГ?
            item7: {id:377,data:0},//ДИАГ?
            item8: {id:377,data:0},//ДИАГ?
});

SacrificesApi.regRecipe(ItemID.catalObl,{
            center: {id:381,data:0},//ЦЕНТР
            item1: {id:ItemID.shardObl,data:0},//ВЕРХ
            item2: {id:ItemID.shardObl,data:0},//НИЗ
            item3: {id:ItemID.shardObl,data:0},//ПРАВО
            item4: {id:ItemID.shardObl,data:0},//ЛЕВО
            item5: {id:331,data:0},//ДИАГ?
            item6: {id:331,data:0},//ДИАГ?
            item7: {id:331,data:0},//ДИАГ?
            item8: {id:331,data:0},//ДИАГ?
});        
        
IDRegistry.genItemID("normalNecronomicon"); 
Item.createItem("normalNecronomicon", "Necronomicon", {name: "necronomicon"}); 
NecronomiconPE.regPEforItem({id:ItemID.normalNecronomicon, PEvalue:5000, maxPE:5000, tier:1}); 
SacrificesApi.regAltar(ItemID.normalNecronomicon,{pillars:BlockID.PillarAbyssal,stones:4});

IDRegistry.genItemID("abyssNecronomicon"); 
Item.createItem("abyssNecronomicon", "Necronomicon", {name: "abyssalnomicon"}); 
NecronomiconPE.regPEforItem({id:ItemID.abyssNecronomicon, PEvalue:10000, maxPE:10000, tier:2}); 
//SacrificesApi.regAltar();



Callback.addCallback("PostLoaded", function(){ 
NecronomiconPE.setPEfItem();
}); 

Callback.addCallback("tick", function(){ 
NecronomiconPE.showPE(); 
});