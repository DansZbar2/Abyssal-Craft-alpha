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