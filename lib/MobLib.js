/*
  __  __       _     _     _  _     
 |  \/  | ___ | |__ | |   (_)| |__  
 | |\/| |/ _ \| '_ \| |   | || '_ \ 
 | |  | | (_) | |_) | |___| || |_) |
 |_|  |_|\___/|_.__/|_____|_||_.__/ 
                                                      
    MobLib

    Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода
    3.Явное копирование кода

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.

    ©WolfTeam ( https://vk.com/wolf___team )
*/
/*  ChangeLog:
    v1.1
        - Fix MobRenderType
        - Add new EntityType and MobRenderType
        - Add <mob>.isThisMob(entity);
        - Add <mob>.getAllInRange(coords, range);
        - Add <mob>.getAllInRangeSpawn(coords);
        - Add Mob.getType(entity);
        - Add Mob.getAllInRange(coords, range, type);
        - Add Mob.getAllInRangeSpawn(coords, type);
        - Add field events
        - Add field spawn
        - Add field equipments
    v1
        - release
*/

LIBRARY({
    name: "MobLib",
    version: 1,
    shared: false,
    api: "CoreEngine"
});

var MOBLIB_SPAWN_RADIUS = parseInt(__config__.access("MobSpawnRadius")) || 64;
var MOBLIB_SPAWN_TIME = parseInt(__config__.access("MobSpawnTime")) || 300;
var MOBLIB_LIMIT_IN_RADIUS = parseInt(__config__.access("MobLimitInRadius")) || 12;

var Mob = function(params){
    //Создание моба
    if(!params instanceof Object)
        throw "params должен быть объектом.";
    
    if(!params.sid)
        throw "params.sid является обязательным полем.";
    
    this.getID = function(){return params.sid;}
    this.getSID = function(){return params.sid;}
    
    if(!params.name) params.name = this.getSID();
    
    this.getName = function(){return params.name};
    
    this.entity = MobRegistry.registerEntity(params.sid);
    
    //Задаем рендер с текстурой
    if(!params.render) params.render = 3;

    if(!params.skin) params.skin = "textures/entity/zombie/zombie.png";
    
    var render;
    if(typeof params.render == "number")
        render = new Render(params.render);
    else
        render = params.render;
    
    var model = new EntityModel();
    model.setRender(render);
    
    var skin = new Texture(params.skin);
    model.setTexture(skin);
    
    this.entity.customizeVisual({
        getModels: function() {
            return {
                "main": model
            };
        }
    });
    
    
    //Задаем данные моба
    if(!params.health) params.health = 20;
    
    if(!params.loot) params.loot = [];
    
    if(!params.loot instanceof Array)
        if(params.loot instanceof Object){
            params.loot = [params.loot];
        }else{
            throw "params.loot должен являться массивом предметов.";
        }
    
    if(!params.hitbox){
        params.hitbox = {w: 1,h: 2};
    }else{
        if(params.hitbox instanceof Object || typeof params.hitbox == "object"){
            if(params.hitbox instanceof Array)
                throw "params.hitbox должен быть объектом.(params.hitbox instanceof Array)";
        }else{
            if(typeof params.hitbox == "number"){
                params.hitbox = {w:params.hitbox, h:params.hitbox};
            }else{
                throw "params.hitbox должен быть объектом.(typeof params.hitbox == "+typeof params.hitbox+")";
            }
        }
    }
    
    this.entity.customizeDescription({
        getHealth:function(){
            return params.health;
        },
        
        getDrop: function(attacker) {
            return params.loot;
        },
        
        getHitbox: function(attacker) {
            return params.hitbox;
        }
    });
    
    //AI
    if(params.ai){
        if(typeof params.ai == "number")
            this.entity.setBaseType(params.ai);
        else
            this.entity.customizeAI({
                getAITypes: function() {
                    return params.ai;
                }
            });
    }
    
    //Spawn
    if(params.spawn){
        var s_chance = 0, s_biom = - 1, s_time = Mob.ALL_DAY, s_if = function(){return true};
        
        if(typeof params.spawn == "number"){
            s_chance = params.spawn;
        }else if(typeof params.spawn == "object"){
            s_chance = params.spawn.chance || s_chance;
            s_biom = params.spawn.biomes || params.spawn.biome || s_biom;
            s_time = params.spawn.time || s_time;
            s_if = params.spawn["if"] || s_if;
        }else{
            throw "params.spawn was be object";
        }
        
        if(!s_time instanceof Array && typeof s_time == "object")
            s_time = [s_time];
        
        if(s_chance > 0){
            var custom_entity = this;
            
            var spawnTick = function(){
                var p = Player.getPosition();
                if(Mob.tick % MOBLIB_SPAWN_TIME == 0){
                    if(custom_entity.getAllInRangeSpawn(p).length >= MOBLIB_LIMIT_IN_RADIUS) return;
                    
                    if(Math.random() < s_chance){
                        var coords = findSurface(
                                (Math.random() > .5 ? 1: -1) * Math.round(Math.random() * MOBLIB_SPAWN_RADIUS) + p.x,
                                80 + Math.round(Math.random() * 46),
                                (Math.random() > .5 ? 1: -1) * Math.round(Math.random() * MOBLIB_SPAWN_RADIUS) + p.z
                            );
                            
                        if(s_biom == -1 ||
                        (typeof s_biom == "string" && World.getBiomeName(coords.x, coords.z) == s_biom) ||
                        (typeof s_biom == "number" && World.getBiome(coords.x, coords.z) == s_biom) ||
                        (s_biom instanceof Array && ( s_biom.indexOf(World.getBiome(coords.x, coords.z)) != -1 || s_biom.indexOf(World.getBiomeName(coords.x, coords.z)) != -1))
                        ){
                            if(s_time.map(function(e){
                                return (e.start <= (World.getWorldTime() % 24000) && e.end >= (World.getWorldTime() % 24000))
                            }).indexOf(true) != -1){
                                if(s_if(coords)){
                                    custom_entity.spawn(coords.x, coords.y + 1, coords.z);
                                }
                            }
                        }
                    }
                }
            }
            
            Callback.addCallback("tick", spawnTick);
        }
    }
    
    if(!params.events) params.events = {};
    
    params.events._created = params.events.created || function(){};
    params.events.created = function(){
        params.events._created();
        
        if(params.equipments){
            if(!params.equipments instanceof Array)
                throw "params.equipments was been Array.";
            
            var helmet = chestplate = leggings = boots = item = null;
            for(var i = 0; i< params.equipments.length; i++){
                var equipment = params.equipments[i];
                if(Math.random() < equipment.chance){
                    helmet = equipment.helmet || null;
                    chestplate = equipment.chestplate || null;
                    leggings = equipment.leggings || null;
                    boots = equipment.boots || null;
                    item = equipment.item || null;
                }
            }
            
            if(helmet) Entity.setArmorSlot(this.entity, 0, helmet.id, helmet.count || 1, helmet.data || 0);
            if(chestplate) Entity.setArmorSlot(this.entity, 1, chestplate.id, chestplate.count || 1, chestplate.data || 0);
            if(leggings) Entity.setArmorSlot(this.entity, 2, leggings.id, leggings.count || 1, leggings.data || 0);
            if(boots) Entity.setArmorSlot(this.entity, 3, boots.id, boots.count || 1, boots.data || 0);
            if(item) Entity.setCarriedItem(this.entity, item.id, item.count || 1, item.data || 0);
            
        }
    }
    
    this.entity.customizeEvents(params.events);
    //Спавн по X, Y, Z
    this.spawn = function(x,y,z){
        if(typeof x == "object"){
            if(x.x !== undefined && 
               x.y !== undefined && 
               x.z !== undefined){
                  y = x.y;
                  z = x.z;
                  x = x.x;
               }else{
                   throw "Invalid coordinate object.";
               }
        }
        if(x === undefined && z === undefined && y === undefined)
            throw "Invalid coordinate.";
        
        var ent = Entity.spawnCustom(this.getSID(), x, y, z);
        return ent;
        
    }
    
    //Яйцо спавна
    this.egg_id = null;
    
    this.getEggID = function(){
        return this.egg_id;
    };
    
    this.registerEgg = function(texture){
        this.egg_id = "egg_spawn_" + this.getID();
        
        IDRegistry.genItemID(this.getEggID());
        
        if(typeof texture == "string")
            texture = {name:texture, meta:0}
        
        Item.createItem(this.getEggID(), "Spawn Egg "+ this.getName(), texture);
        
        var custom_entity = this;
        Item.registerUseFunctionForID(ItemID[this.getEggID()], function(coords, item, block) {
            coords = coords.relative;
            custom_entity.spawn(coords.x + .5, coords.y, coords.z + .5);
        });
    }

    this.isThisMob = function(entity){
        var ent = Entity.getCustom(entity);
        return ent ? this.getSID() == ent.nameId : false;
    }
    
    this.getAllInRange = function(coords, range){
        var a = Entity.getAllInRange(coords, range, typeof params.ai == "number"?params.ai:Native.EntityType.POLAR_BEAR), r = [];
        for(var i = 0; i< a.length; i++){
            if(this.isThisMob(a[i]))
                r.push(a[i]);
        }
        
        return r;
    }
    
    this.getAllInRangeSpawn = function(coords){
        return this.getAllInRange(coords, MOBLIB_SPAWN_RADIUS + 10)
    }
    
    Mob.customs[params.sid] = this;
};

Mob.getType = function(entity){
    var ent = Entity.getCustom(entity);
    return ent ? ent.nameId : Entity.getType(entity);
}
Mob.getAllInRange = function(coords, range, type){
    if(typeof type == "string"){
        if(!Mob.customs.hasOwnProperty(type))
            throw "";
        
        return Mob.customs[type].getAllInRange(coords, range);
    }else{
        return Entity.getAllInRange(coords, range, type);
    }
}
Mob.getAllInRangeSpawn = function(coords, type){
    return Mob.getAllInRange(coords, MOBLIB_SPAWN_RADIUS + 10, type);
}

/* TIME SPAWN */
Mob.NIGHT = [{start:12000, end:23999}];
Mob.DAY = [{start:0, end:11999}];
Mob.ALL_DAY = [{start:0, end:23999}];

/* EQUIPMENTS */
Mob.NO_EQUIPMENT = {chance:1};

Mob.tick = 0;
Callback.addCallback("tick", function(){Mob.tick++});
Callback.addCallback("LevelPreLeft", function(){Mob.tick = 0});
function findSurface(x, y, z){
    while(y > 0 && World.getBlockID(x, y, z) == 0) y--;
    return {x: x, y: y, z: z};
}
Mob.customs = {};

/* Added EntityType */
Native.EntityType.HORSE = 23;
Native.EntityType.DONKEY = 24;
Native.EntityType.MULE = 25;
Native.EntityType.HORSE_SKELETON = 26;
Native.EntityType.HORSE_ZOMBIE = 27;
Native.EntityType.SKELETON_WITHER = 48;
Native.EntityType.WITCH = 45;
Native.EntityType.STRAY = 46;
Native.EntityType.HUSK = 47;
Native.EntityType.GUARDIAN = 49;
Native.EntityType.GUARDIAN_ELDER = 50;
Native.EntityType.ENDERMITE = 55;
Native.EntityType.SHULKER = 54;
Native.EntityType.ENDER_PEARL = 87;
Native.EntityType.MINECART_CHEST = 98;
Native.EntityType.MINECART_HOPPER = 96;
Native.EntityType.MINECART_TNT = 97;
Native.EntityType.END_DRAGON = 53;
Native.EntityType.END_CRYSTAL = 71;
Native.EntityType.WITHER = 52;
Native.EntityType.WITHER_HEAD = 89;

/* Added MobRenderType */
Native.MobRenderType.mule = 54;
Native.MobRenderType.horseSkeleton = 54;
Native.MobRenderType.horse = 54;
Native.MobRenderType.horseZombie = 54;
Native.MobRenderType.donkey = 54;
Native.MobRenderType.skeletonWither = 68;
Native.MobRenderType.stray = 67;
Native.MobRenderType.husk = 66;
Native.MobRenderType.guardian = 60;
Native.MobRenderType.guardianElder = 60;
Native.MobRenderType.endermite = 71;
Native.MobRenderType.shulker = 50;
Native.MobRenderType.enderPearl = 33;
Native.MobRenderType.endDragon = 12;
Native.MobRenderType.endCrystal = 70;
Native.MobRenderType.wither = 63;
Native.MobRenderType.wither_head = 64;

/* Fixed MobRenderType */
Native.MobRenderType.villager = 14;
Native.MobRenderType.blaze = 20;
Native.MobRenderType.boat = 39;
Native.MobRenderType.spider = 22;
Native.MobRenderType.creeper = 24;
Native.MobRenderType.enderman = 26;
Native.MobRenderType.ghast = 19;
Native.MobRenderType.ironGolem = 47;
Native.MobRenderType.lavaSlime = 18;
Native.MobRenderType.minecart = 38;
Native.MobRenderType.ocelot = 48;
Native.MobRenderType.painting = 36;
Native.MobRenderType.polarBear = 13;
Native.MobRenderType.zombiePigman = 17;
Native.MobRenderType.rabbit = 52;
Native.MobRenderType.silverfish = 23;
Native.MobRenderType.skeleton = 21;
Native.MobRenderType.slime = 25;
Native.MobRenderType.snowGolem = 49;
Native.MobRenderType.squid = 40;
Native.MobRenderType.witch = 53;
Native.MobRenderType.zombie = 16;
Native.MobRenderType.villagerZombie = 44;
Native.MobRenderType.arrow = 27;
Native.MobRenderType.egg = 31;
Native.MobRenderType.expPotion = 51;
Native.MobRenderType.experienceOrb = 45;
Native.MobRenderType.fallingTile = 37;
Native.MobRenderType.snowball = 32;
Native.MobRenderType.thrownPotion = 34;
Native.MobRenderType.smallFireball = 42;
Native.MobRenderType.fireball = 41;
Native.MobRenderType.fishHook = 29;
Native.MobRenderType.lightningBolt = 46;
Native.MobRenderType.player = 30;

/* Don't checked
Native.MobRenderType.camera - number(48)
Native.MobRenderType.map - number(50)
Native.MobRenderType.unknownItem - number(30)
*/

EXPORT("Mob", Mob);