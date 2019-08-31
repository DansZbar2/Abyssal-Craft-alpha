IMPORT("dimensions");
IMPORT("AdvancedEvents");
IMPORT("SoundAPI");
//IMPORT("ShootLib");
IMPORT("ToolType");
IMPORT("MobLib");

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var UniGen={ 
generateOre: function(id, data, dimension, chunkX, chunkZ, params){ 
if(Player.getDimension() != dimension){ 
for (var i = 0; i < params.veinCounts; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y); 
if(Math.random() < params.veinChance)GenerationUtils.genMinable(coords.x, coords.y, coords.z, { 
id: id, 
data: data, 
size: params.size, 
ratio: params.ratio, 
checkerTile: params.checkerTile, 
checkerMode: params.checkerMode 
         }); 
      } 
   } 
}, 
generateOreInDimension: function(id, data, dimension, chunkX, chunkZ, params){ 
if(Player.getDimension() ==dimension){ 
for (var i = 0; i < params.veinCounts; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y); 
if(Math.random() < params.veinChance)GenerationUtils.genMinable(coords.x, coords.y, coords.z, { 
id: id, 
data: data, 
size: params.size, 
ratio: params.ratio, 
checkerTile: params.checkerTile, 
checkerMode: params.checkerMode 
         }); 
      } 
   } 
} 
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

/* 
    recipeRitual: function(){
        var c1 = this.data.connects.connect1;
        var c2 = this.data.connects.connect2;
        var c3 = this.data.connects.connect3;
        var c4 = this.data.connects.connect4;
        var c5 = this.data.connects.connect1;
        var c6 = this.data.connects.connect2;
        var c7 = this.data.connects.connect3;
        var c8 = this.data.connects.connect4;
        
        this.data.consumption = 0;
        this.data.items.item1 = World.getTileEntity(c1.x, c1.y, c1.z).getID();
        this.data.items.item2 = World.getTileEntity(c2.x, c2.y, c2.z).getID();
        this.data.items.item3 = World.getTileEntity(c3.x, c3.y, c3.z).getID();
        this.data.items.item4 = World.getTileEntity(c4.x, c4.y, c4.z).getID();
        this.data.items.item5 = World.getTileEntity(c5.x, c5.y, c5.z).getID();
        this.data.items.item6 = World.getTileEntity(c6.x, c6.y, c6.z).getID();
        this.data.items.item7 = World.getTileEntity(c7.x, c7.y, c7.z).getID();
        this.data.items.item8 = World.getTileEntity(c8.x, c8.y, c8.z).getID();

        var l = 0;
        var st_rt = false;

        for(let i in ec){
            for (let y in this.data.items){
                for(let u in ec[i]){
                    if(this.data.items[y]===bc[i][u]){
                        if(this.data.items.center === bc[i].center){       
                            this.data.result=ec[i].results.item;
                            this.data.consumption+=4000;
                            l++;
                            delete bc[i][u];
                        }else{
                            this.data.result=ec[i].results.block;
                            this.data.consumption+=40000;
                            l++;
                            delete bc[i][u];
                        }
                        if(l==5)st_rt=true;
                        break;
                    }
                }
            }
        }  
        bc=ec;
        
        if(st_rt==true && this.data.energyTotal===this.data.consumption){
            for(let i in this.data.items){
                this.data.items[i]=null;
            }
            World.getTileEntity(c1.x, c1.y, c1.z).getItem();
            World.getTileEntity(c2.x, c2.y, c2.z).getItem();
            World.getTileEntity(c3.x, c3.y, c3.z).getItem();
            World.getTileEntity(c4.x, c4.y, c4.z).getItem();
            World.getTileEntity(c5.x, c5.y, c5.z).getItem();
            World.getTileEntity(c6.x, c6.y, c6.z).getItem();
            World.getTileEntity(c7.x, c7.y, c7.z).getItem();
            World.getTileEntity(c8.x, c8.y, c8.z).getItem();

            
            
            this.data.energyTotal += World.getTileEntity(c1.x, c1.y, c1.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal += World.getTileEntity(c2.x, c2.y, c2.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal += World.getTileEntity(c3.x, c3.y, c3.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal += World.getTileEntity(c4.x, c4.y, c4.z).getEnergy(this.data.consumption/5);  
            this.data.energyTotal += World.getTileEntity(c5.x, c5.y, c5.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal += World.getTileEntity(c6.x, c6.y, c6.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal += World.getTileEntity(c7.x, c7.y, c7.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal += World.getTileEntity(c8.x, c8.y, c8.z).getEnergy(this.data.consumption/5);
            this.data.energyTotal -= this.data.consumption;
        }
    },*/