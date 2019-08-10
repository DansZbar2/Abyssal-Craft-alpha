var BLOCK_TYPE_OLEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
    opaque:true
});

//DARK
IDRegistry.genBlockID("darkLog");
Block.createBlock("darkLog", [
    {name: "Dark Log", texture: [["DLTTtop", 0], ["DLTTtop", 0], ["DLTTside", 0], ["DLTTside", 0], ["DLTTside", 0], ["DLTTside", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.darkLog, "wood");

IDRegistry.genBlockID("darkP");
Block.createBlock("darkP", [
    {name: "Dark Planks", texture: [["DLTplank", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.darkP, "wood");

IDRegistry.genBlockID("darkLeaves");
Block.createBlock("darkLeaves", [
    {name: "Dark Leaves", texture: [["DLT_L_opaque", 0]], inCreative: true}
], BLOCK_TYPE_OLEAVES);
Block.registerDropFunction("darkLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.darkSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.darkLeaves, "plant");

IDRegistry.genBlockID("darkSapling");
Block.createBlock("darkSapling", [{name: "Dark Tree Sapling", texture: [["DLTS", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.darkSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("darkSapling", function(){
    return [[ItemID.darkSapling, 1, 0]];
});

IDRegistry.genItemID("darkSapling");
Item.createItem("darkSapling", "Dark Tree Sapling", {name: "DLTS", data: 1});

BlockRenderer.addRenderCallback(BlockID.darkSapling, function(api, coords, block) {
var box = BlockID.darkSapling;
api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);                 
});
BlockRenderer.enableCustomRender(BlockID.darkSapling);
ToolAPI.registerBlockMaterial(BlockID.darkSapling, "plant");

function darkTree(x,y,z){
    for(var i=0;i<5;i++){
        for(var b=0;b<3;b++){
            for(var k=0;k<5;k++){
                if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.darkLeaves,0);
            }
        }
    }
    for(var i=0;i<5;i++){
        if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.darkLeaves)World.setBlock(x,y+i,z,BlockID.darkLog,0);
    }
    World.setBlock(x+1,y+5,z,BlockID.darkLeaves,0);
    World.setBlock(x+1,y+6,z,BlockID.darkLeaves,0);
    World.setBlock(x-1,y+5,z,BlockID.darkLeaves,0);
    World.setBlock(x-1,y+6,z,BlockID.darkLeaves,0);
    World.setBlock(x,y+5,z,BlockID.darkLeaves,0);
    World.setBlock(x,y+6,z,BlockID.darkLeaves,0);
    World.setBlock(x,y+5,z+1,BlockID.darkLeaves,0);
    World.setBlock(x,y+6,z+1,BlockID.darkLeaves,0);
    World.setBlock(x,y+5,z-1,BlockID.darkLeaves,0);
    World.setBlock(x,y+6,z-1,BlockID.darkLeaves,0);   
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.darkSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.dirtDark){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.darkSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("ItemUse",function(crd,item){
crd = coords.relative();
if(World.getBlock(crd.x,crd.y,crd.z).id == BlockID.darkSapling){
if(item.id == 351 && item.data == 15){    
World.destroyBlock(crd.x, crd.y, crd.z, false);
darkTree(crd.x,crd.y,crd.z);
Player.setCarriedItem(id, count - 1, data);
}
}
});

Block.setRandomTickCallback(BlockID.darkSapling, function(x, y, z, id, data){    
if(World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.dirtDark){
World.destroyBlock(coords.x,coords.y,coords.z,false);                      
darkTree(coords.x,coords.y,coords.z);
     }
});         


//DREAD
IDRegistry.genBlockID("dreadLog");
Block.createBlock("dreadLog", [
    {name: "Dread Log", texture: [["DrTtop", 0], ["DrTtop", 0], ["DrTside", 0], ["DrTside", 0], ["DrTside", 0], ["DrTside", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.dreadLog, "wood");


IDRegistry.genBlockID("dreadP");
Block.createBlock("dreadP", [
    {name: "Dread Planks", texture: [["DrTplank", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.dreadP, "wood");


IDRegistry.genBlockID("dreadLeaves");
Block.createBlock("dreadLeaves", [
    {name: "Dread Leaves", texture: [["DrT_L_opaque", 0]], inCreative: true}
], BLOCK_TYPE_OLEAVES);
Block.registerDropFunction("dreadLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.dreadSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.dreadLeaves, "plant");

IDRegistry.genBlockID("dreadSapling");
Block.createBlock("dreadSapling", [{name: "Dread Tree Sapling", texture: [["DLTS", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.dreadSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("dreadSapling", function(){
    return [[ItemID.dreadSapling, 1, 0]];
});

IDRegistry.genItemID("dreadSapling");
Item.createItem("dreadSapling", "Dread Tree Sapling", {name: "DLTS", data: 1});

BlockRenderer.addRenderCallback(BlockID.dreadSapling, function(api, coords, block) {
var box = BlockID.dreadSapling;
api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);                 
});
BlockRenderer.enableCustomRender(BlockID.dreadSapling);
ToolAPI.registerBlockMaterial(BlockID.dreadSapling, "plant");

function dreadTree(x,y,z){
    for(var i=0;i<5;i++){
        for(var b=0;b<3;b++){
            for(var k=0;k<5;k++){
                if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.dreadLeaves,0);
            }
        }
    }
    for(var i=0;i<5;i++){
        if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.dreadLeaves)World.setBlock(x,y+i,z,BlockID.dreadLog,0);
    }
    World.setBlock(x+1,y+5,z,BlockID.dreadLeaves,0);
    World.setBlock(x+1,y+6,z,BlockID.dreadLeaves,0);
    World.setBlock(x-1,y+5,z,BlockID.dreadLeaves,0);
    World.setBlock(x-1,y+6,z,BlockID.dreadLeaves,0);
    World.setBlock(x,y+5,z,BlockID.dreadLeaves,0);
    World.setBlock(x,y+6,z,BlockID.dreadLeaves,0);
    World.setBlock(x,y+5,z+1,BlockID.dreadLeaves,0);
    World.setBlock(x,y+6,z+1,BlockID.dreadLeaves,0);
    World.setBlock(x,y+5,z-1,BlockID.dreadLeaves,0);
    World.setBlock(x,y+6,z-1,BlockID.dreadLeaves,0);   
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.dreadSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.dirtDread){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.dreadSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("ItemUse",function(crd,item){
crd = coords.relative();
if(World.getBlock(crd.x,crd.y,crd.z).id == BlockID.dreadSapling){
if(item.id == 351 && item.data == 15){    
World.destroyBlock(crd.x, crd.y, crd.z, false);
dreadTree(crd.x,crd.y,crd.z);
Player.setCarriedItem(id, count - 1, data);
}
}
});

Block.setRandomTickCallback(BlockID.dreadSapling, function(x, y, z, id, data){    
if(World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.dirtDread){
World.destroyBlock(coords.x,coords.y,coords.z,false);                      
dreadTree(coords.x,coords.y,coords.z);
     }
});  

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: BlockID.darkP, count: 4, data: 0}, [
"x",
], ['x', BlockID.darkLog, 0]); 

Recipes.addShaped({id: BlockID.dreadP, count: 1, data: 0}, [
"x",
], ['x', BlockID.dreadLog, 0]); 

Recipes.addShaped({id: 58, count: 1, data: 0}, [
"xx",
"xx",
], ['x', BlockID.darkP, 0]); 

Recipes.addShaped({id: 58, count: 1, data: 0}, [
"xx",
"xx",
], ['x', BlockID.dreadP, 0]); 
});