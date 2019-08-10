var Demon_Chicken = new Mob({
    sid:"Demon_Chicken",
    name:"Dread infected Chiken",
    health:12,
    render:5,
    hitbox:{
         w: .6,
         h: .6
    },
    skin:"mob/UNpeasfull/demon_chicken.png",
    spawn:{
    chance:.23,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[367],
    ai:43
});

Demon_Chicken.registerEgg("egg_chicken");


var Demon_Cow = new Mob({
    sid:"Demon_Cow",
    name:"Dread infected Cow",
    health:16,
    render:6,
    hitbox:{
         w: 1.6,
         h: 1.3
    },
    skin:"mob/UNpeasfull/demon_cow.png",
    spawn:{
    chance:.22,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[367],
    ai:33
});

Demon_Cow.registerEgg("egg_cow");


var Demon_Pig = new Mob({
    sid:"Demon_Pig",
    name:"Dread infected Pig",
    health:14,
    render:8,
    hitbox:{
         w: 1.5,
         h: .9
    },
    skin:"mob/UNpeasfull/demon_pig.png",
    spawn:{
    chance:0.21,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[367],
    ai:36
});

Demon_Pig.registerEgg("egg_pig");