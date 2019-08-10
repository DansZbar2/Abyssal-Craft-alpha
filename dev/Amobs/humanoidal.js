//ZOMBIFICATED
var Zombie_Abyssal = new Mob({
    sid:"Zombie_Abyssal",
    name:"Abyssal Zombie",
    health:25,
    render:3,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/zombies/abyssal_zombie.png",
    spawn:{
    chance:2.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[367],
    ai:32
});

Zombie_Abyssal.registerEgg("egg_zombie");

var Zombie_Abyssal_End = new Mob({
    sid:"Zombie_Abyssal_End",
    name:"Abyssal Ender Zombie",
    health:25,
    render:3,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/zombies/abyssal_zombie_end.png",
    spawn:{
    chance:2.26,      
    biomes:9,   
    time:[{start:0,end:23999}]},
    loot:[367],
    ai:38
});

Zombie_Abyssal_End.registerEgg("egg_zombie");

//GOLEMS
var Golem_Abyssal = new Mob({
    sid:"Golem_Abyssal",
    name:"Abyssal Golem",
    health:25,
    render:3,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/humanoid/aby_warden.png",
    spawn:{
    chance:2.25,      
    biomes:9,   
    time:[{start:0,end:23999}]},
    loot:[{id:ItemID.abbChunck,count:{min:1 , max:3}, chance:1}],
    ai:48,
    equipments:[{item:ItemID.abyssSword, chance:100}]
});

Golem_Abyssal.registerEgg("egg_zombie");

var Golem_Dreaded = new Mob({
    sid:"Golem_Dreaded",
    name:"Dreaded Golem",
    health:25,
    render:3,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/humanoid/dread_warden.png",
    spawn:{
    chance:1.25,      
    biomes:9,   
    time:[{start:0,end:23999}]},
    loot:[{id:ItemID.dreadChunck,count:{min:1 , max:3}, chance:100}],
    ai:48,
    equipments:[{item:ItemID.abyssSword, chance:100}]
});

Golem_Dreaded.registerEgg("egg_zombie");

var Dreadling = new Mob({
    sid:"Dreadling",
    name:"Dreadling",
    health:25,
    render:3,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/humanoid/Dreadling.png",
    spawn:{
    chance:1.2,      
    biomes:9,   
    time:[{start:0,end:23999}]},
    loot:[{id:ItemID.dreadChunck,count:{min:1 , max:3}, chance:100},{id:ItemID.dreadPeace,count:{min:1 , max:5}, chance:50}], 
    ai:48,
    equipments:[{item:ItemID.dreSword, chance:100}]
});

Dreadling.registerEgg("egg_zombie");