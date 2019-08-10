var Anti_Chicken = new Mob({
    sid:"Anti_Chicken",
    name:"Anti Chiken",
    health:12,
    render:5,
    hitbox:{
         w: .6,
         h: .6
    },
    skin:"mob/ANTImobs/chicken.png",
    spawn:{
    chance:4.12,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anCh,count:1, chance:100}],
    ai:10
});

Anti_Chicken.registerEgg("egg_chicken");


var Anti_Cow = new Mob({
    sid:"Anti_Cow",
    name:"Anti Cow",
    health:16,
    render:6,
    hitbox:{
         w: 1.6,
         h: 1.3
    },
    skin:"mob/ANTImobs/cow.png",
    spawn:{
    chance:4.1,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anBe,count:{min:1,max:4}, chance:100}],
    ai:11
});

Anti_Cow.registerEgg("egg_cow");


var Anti_Pig = new Mob({
    sid:"Demon_Pig",
    name:"Anti Pig",
    health:14,
    render:8,
    hitbox:{
         w: 1.5,
         h: .9
    },
    skin:"mob/ANTImobs/pig.png",
    spawn:{
    chance:4.09,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anPo,count:{min:1,max:3}, chance:100}],
    ai:12
});

Anti_Pig.registerEgg("egg_pig");

var Anti_Zombie = new Mob({
    sid:"Anti_Zombie",
    name:"Anti Zombie",
    health:25,
    render:16,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/ANTImobs/zombie.png",
    spawn:{
    chance:4.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anFl,count:{min:1,max:3}, chance:100}],
    ai:32
});

Anti_Zombie.registerEgg("egg_zombie");

var Anti_Zombie_Abyssal = new Mob({
    sid:"Anti_Zombie_Abyssal",
    name:"Anti Abyssal Zombie",
    health:25,
    render:3,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/ANTImobs/abyssal_zombie.png",
    spawn:{
    chance:3.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anCb,count:{min:1,max:3}, chance:100},{id:ItemID.anCF,count:{min:1,max:2}, chance:25}],
    ai:32
});

Anti_Zombie_Abyssal.registerEgg("egg_zombie");

var Anti_Skeleton = new Mob({
    sid:"Anti_Skeleton",
    name:"Anti Skeleton",
    health:25,
    render:21,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/ANTImobs/skeleton.png",
    spawn:{
    chance:3.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anBo,count:{min:1,max:3}, chance:100}],
    ai:34
});

Anti_Skeleton.registerEgg("egg_skeleton");

var Anti_Creeper = new Mob({
    sid:"Anti_Creeper",
    name:"Anti Creeper",
    health:25,
    render:24,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/ANTImobs/creeper.png",
    spawn:{
    chance:3.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anBo,count:{min:1,max:3}, chance:100}],
    ai:33
});

Anti_Creeper.registerEgg("egg_creeper");

var Anti_Spider = new Mob({
    sid:"Anti_Spider",
    name:"Anti Spider",
    health:25,
    render:22,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/ANTImobs/spider.png",
    spawn:{
    chance:3.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anBo,count:{min:1,max:3}, chance:100}],
    ai:35
});

Anti_Spider.registerEgg("egg_spider");

var Anti_Bat  = new Mob({
    sid:"Anti_Bat",
    name:"Anti Bat",
    health:25,
    render:10,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/ANTImobs/bat.png",
    spawn:{
    chance:3.25,      
    biomes:-1,   
    time:[{start:0,end:23999}]},  
    loot:[{id:ItemID.anBo,count:{min:1,max:3}, chance:100}],
    ai:19
});

Anti_Spider.registerEgg("egg_bat");