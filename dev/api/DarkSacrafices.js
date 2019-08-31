var SacrificesApi = {
    recipes:[],
    results:[],
    connections: [{x: 3, y: 0, z: 0}, {x: -3, y: 0, z: 0}, {x: 0, y: 0, z: 3}, {x: 0, y: 0, z: -3},{x: 2, y: 0, z: 2}, {x: -2, y: 0, z: 2}, {x: 2, y: 0, z: -2}, {x: -2, y: 0, z: -2}],
    connect: function(c, coords, tile){
        let coord = {x: coords.x+this.connections[c].x, y: coords.y, z: coords.z+this.connections[c].z};
        let block = World.getBlock(coord.x, coord.y, coord.z).id === BlockID.block_display_stand;
        if(block){
            let tile = World.getTileEntity(coord.x, coord.y, coord.z);
            //tile.connect[] = Game.message("Connected Block at x: "+coord.x+", y: "+coord.y+", z: "+coord.z);
        }
        if(connect != null && block)
            Game.message("Already Connected Block at x: "+coord.x+", y: "+coord.y+", z: "+coord.z);
    },
    getStructure:function(blcok){ 
     var connectionss =  this.connections;
     for(var i in connectionss){
       if(World.getBlock(connections[i].x,connections[i].y, connections[i].z).id == blcok){
   return true;
}else{
   return false;
            }
        }
    },

    regAltar:function(nB,params){  
      Item.registerUseFunction(nB,function(coords, item, block){
     coords = coords.relative;      
       Callback.addCallback("tick", function(){ 
         for(var k in conectionss){
        if(getStructure(params.stones)){
     World.setBlock(conectionss[k].x, conectionss[k].y, conectionss[k].z, params.pillars, params.meta);    
                     }  
                 }
             });
         });
    }, 
    regRecipe:function(result,params){
     recipes.push(params);
     results.push(result);
   }
};

var DisplayStandApi = {
};

