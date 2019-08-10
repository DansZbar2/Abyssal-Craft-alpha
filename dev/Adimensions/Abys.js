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
//Callback.invokeCallback("GenerateAbys", function(chunkX, chunkZ){});
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