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