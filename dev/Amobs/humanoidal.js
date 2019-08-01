var Zombie_Abbysal = new Mob({
    sid:"Zombie_Abbysal",
    name:"Abbysal Zombie",
    health:30,
    render:16,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/abyssal_zombie.png",
    spawn:.8,
    loot:[367],
    ai:32
});

Zombie_Abbysal.registerEgg({
    name:"egg_zombie",
    meta:0
});

var Zombie_Abbysal_End = new Mob({
    sid:"Zombie_Abbysal_End",
    name:"Abbysal Ender Zombie",
    health:30,
    render:16,
    hitbox:{
         w: .8,
         h: 1.8
    },
    skin:"mob/abyssal_zombie.png",
    spawn:.6,
    loot:[367],
    ai:38
});

Zombie_Abbysal_End.registerEgg({
    name:"egg_zombie",
    meta:0
});