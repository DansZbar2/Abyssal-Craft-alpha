IDRegistry.genBlockID("AltarAbyssal");
Block.createBlockWithRotation("AltarAbyssal", [
{name: "Abyssal Altar", texture: [["coblestone", 0], ["coblestone", 0], ["coblestone", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.AltarAbyssal, "stone", 0, true);

IDRegistry.genBlockID("PillarAbyssal");
Block.createBlockWithRotation("PillarAbyssal", [
{name: "Abyssal Pillar", texture: [["coblestone", 0], ["coblestone", 0], ["coblestone", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.PillarAbyssal, "stone", 0, true);


var renderAA = new ICRender.Model();
var modelAA = BlockRenderer.BlockModel();
var AAblock = BlockID.AltarAbyssal;
modelAA.addBox(2/16, 0/16, 2/16, 14/16, 2/16, 14/16, AAblock); //plate1
modelAA.addBox(3/16, 2/16, 3/16, 13/16, 3/16, 13/16, AAblock); //plate2
modelAA.addBox(4/16, 3/16, 4/16, 5/16, 11/16, 5/16, AAblock); //pillar1
modelAA.addBox(11/16, 3/16, 4/16, 12/16, 11/16, 5/16, AAblock); //pillar2
modelAA.addBox(11/16, 3/16, 11/16, 12/16, 11/16, 12/16, AAblock); //pillar3
modelAA.addBox(4/16, 3/16, 11/16, 5/16, 11/16, 12/16, AAblock); //pillar4
modelAA.addBox(5/16, 3/16, 5/16, 11/16, 11/16, 11/16, AAblock); //pillar5
modelAA.addBox(11/16, 6/16, 5/16, 12/16, 8/16, 11/16, AAblock); //planed1
modelAA.addBox(5/16, 6/16, 11/16, 11/16, 8/16, 12/16, AAblock); //planed2
modelAA.addBox(5/16, 6/16, 4/16, 11/16, 8/16, 5/16, AAblock); //planed3
modelAA.addBox(4/16, 6/16, 5/16, 5/16, 8/16, 11/16, AAblock); //planed2
modelAA.addBox(3/16, 11/16, 3/16, 13/16, 12/16, 13/16, AAblock); //plate3
modelAA.addBox(4/16, 12/16, 11/16, 5/16, 15/16, 12/16, AAblock); //cndle1
modelAA.addBox(4/16, 12/16, 4/16, 5/16, 15/16, 5/16, AAblock); //cndle2
modelAA.addBox(11/16, 12/16, 4/16, 12/16, 15/16, 5/16, AAblock); //cndle3
modelAA.addBox(11/16, 12/16, 11/16, 12/16, 15/16, 12/16, AAblock); //cndle4
modelAA.addBox(5/16, 12/16, 5/16, 11/16, 13/16, 11/16, AAblock); //plate4
renderAA.addEntry(modelAA);
BlockRenderer.setStaticICRender(BlockID.AltarAbyssal, 0, renderAA);


TileEntity.registerPrototype(BlockID.AltarAbyssal, {
    defaultValues: {
        progress: 0,  
        items:{
            center: null,
            item1: null,
            item2: null,
            item3: null,
            item4: null,
            item5: null,
            item6: null,
            item7: null,
            item8: null,   
        },    
        haveRecipe:false,
        energyTotal: 0,
        result: null,
        consumption: 0
    },
    connect: function(connect, c){
        let block = World.getBlock(c.x, c.y, c.z).id === BlockID.AltarAbyssal;
        if(connect === null && block){
            let tile = World.getTileEntity(c.x, c.y, c.z);
            connect = tile.connect(this);
            Game.message("Connected Block at x: "+c.x+", y: "+c.y+", z: "+c.z);
        }
        if(connect != null && block)
            Game.message("Already Connected Block at x: "+c.x+", y: "+c.y+", z: "+c.z);
    },  
    click: function(id, count, data, c){          
        if(id != ItemID.normalNecronomicon && id != 0){
          for(var j in this.items){  
            this.addAnim(id, count, data);
           var prms = {id:id,data:data};
           this.items[j].push(prms);
           }
        }else{if(id== ItemID.normalNecronomicon){
           this.data.haveRecipe = true;
           this.destroyAnim();
           this.getRecipe();  
           }else{
           World.drop(this.x, this.y+.3, this.z, this.items.center.id, 1, this.items.center.data);    
           }  
        }
    },
    drop: function(){
        for(var j in this.data.items){
        Player.addItemToInventory(this.data.items[j].id, 1, this.data.items[j].data); this.data.items[j]=null; this.anim.destroy();
        }
    },
    destroy: function(){
        if(this.data.items){
            this.drop();
        }
    },
    anim: null,
    created: function(){
        for(var k in SacrificesApi.connections){
        this.anim = new Animation.item(SacrificesApi.connections[k].x+0.5, SacrificesApi.connections[k].y+1, SacrificesApi.connections[k].z+0.5);
        } 
    },
    init: function(){
        for(var k in SacrificesApi.connections){
        this.anim = new Animation.item(SacrificesApi.connections[k].x+0.5, SacrificesApi.connections[k].y+1, SacrificesApi.connections[k].z+0.5);
        }
    }, 

    getRecipe: function(){
       for(var g in SacrificesApi.recipes){
       for(var f in this.data.items){
        if(this.data.items[f].id == SacrificesApi.recipes[g].id && this.data.items[f].data == SacrificesApi.recipes[g].data){  
         this.addAnim(SacrificesApi.results[g].id, 1, SacrificesApi.recipes[g].data);
         Entity.spawn(this.x, this.y+1, this.z, 93);
        }             
       }  
      } 
    },

    addAnim: function(id, count, data){
       for(var j in this.data.items){
        if(SacrificesApi.getStructure(BlockID.AltarAbyssal)){   
        if(this.data.items[j]===null || this.data.items[j]===undefined || id != null){
            Player.decreaseCarriedItem(1);
            this.data.items[j] = {id: id, count: 1, data: data};
            this.anim.describeItem({
                     id: this.data.items[j].id,
                     count: 1,
                     data: this.data.items[j].data,
                     size: .7,
                     rotation: [Math.PI/2, 0, 0],
                     notRandomize: true
});   
    this.anim.load();
        }else{this.drop();}
      } 
    }
  },
destroyAnim: function(){
this.anim.destroy();
}
});


