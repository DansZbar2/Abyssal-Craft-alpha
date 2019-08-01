//Tier: 1
IDRegistry.genItemID("ABHelm");
Item.createArmorItem("ABHelm", "Abyssalnite helmet", {name: "AAH"}, {type: "helmet", armor: 3, durability: 364, texture: "armor/abyssalnite_1.png", isTech:false});

IDRegistry.genItemID("ABCh");
Item.createArmorItem("ABCh", "Abyssalnite chestplate", {name: "AAC"}, {type: "chestplate", armor: 8, durability: 529, texture: "armor/abyssalnite_1.png", isTech:false});

IDRegistry.genItemID("ABLeg");
Item.createArmorItem("ABLeg", "Abyssalnite leggins", {name: "AAP"}, {type: "leggings", armor: 6, durability:496, texture: "armor/abyssalnite_2.png", isTech:false});

IDRegistry.genItemID("ABBoot");
Item.createArmorItem("ABBoot", "Abyssalnite boots", {name: "AAB"}, {type: "boots", armor: 3, durability: 430, texture: "armor/abyssalnite_1.png", isTech:false});

//effects:Speed I, Water Breathing I
var spdfabb = new EntitysSS.addEffectToArmor({
id:ItemID.ABBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:0
});
var wtbfabb = new EntitysSS.addEffectToArmor({
id:ItemID.ABHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:1
});
//Tier: 2
IDRegistry.genItemID("DABHelm");
Item.createArmorItem("ABHelm", "Dreaded Abyssalnite helmet", {name: "ADAH"}, {type: "helmet", armor: 3, durability: 485, texture: "armor/dread_1.png", isTech:false});

IDRegistry.genItemID("DABCh");
Item.createArmorItem("DABCh", "Dreaded Abyssalnite chestplate", {name: "ADAC"}, {type: "chestplate", armor: 8, durability: 624, texture: "armor/dread_1.png", isTech:false});

IDRegistry.genItemID("DABLeg");
Item.createArmorItem("DABLeg", "Dreaded Abyssalnite leggins", {name: "ADAP"}, {type: "leggings", armor: 6, durability:542, texture: "armor/dread_2.png", isTech:false});

IDRegistry.genItemID("DABBoot");
Item.createArmorItem("DABBoot", "Dreaded Abyssalnite boots", {name: "ADAB"}, {type: "boots", armor: 3, durability: 488, texture: "armor/dread_1.png", isTech:false});

//effects:Night Vision I, Fire Resistance IV 
var rstfdre = new EntitysSS.addEffectToArmor({
id:ItemID.DABCh,    
entity:Player.get(),
slot:1,
effectID:12,
effectTime:200,
powerLVL:0
});
var ngvfdre = new EntitysSS.addEffectToArmor({
id:ItemID.DABHelm,    
entity:Player.get(),
slot:0,
effectID:16,
effectTime:200,
powerLVL:3
});

IDRegistry.genItemID("RCHelm");
Item.createArmorItem("RCHelm", "Refined Coralium helmet", {name: "ACH"}, {type: "helmet", armor: 3, durability: 520, texture: "armor/coralium_1.png", isTech:false});

IDRegistry.genItemID("RCCh");
Item.createArmorItem("RCCh", "Refined Coralium chestplate", {name: "ACC"}, {type: "chestplate", armor: 8, durability: 643, texture: "armor/coralium_1.png", isTech:false});

IDRegistry.genItemID("RCLeg");
Item.createArmorItem("RCLeg", "Refined Coralium leggins", {name: "ACP"}, {type: "leggings", armor: 6, durability:516, texture: "armor/coralium_2.png", isTech:false});

IDRegistry.genItemID("RCBoot");
Item.createArmorItem("RCBoot", "Refined Coralium boots", {name: "ACB"}, {type: "boots", armor: 3, durability: 498, texture: "armor/coralium_1.png", isTech:false});

//effects:, Speed II, Water Breathing I
var spdfrc = new EntitysSS.addEffectToArmor({
id:ItemID.RCBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:1
});
var wtbfrc = new EntitysSS.addEffectToArmor({
id:ItemID.RCHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:0
});

//Tier: 3
IDRegistry.genItemID("PRCHelm");
Item.createArmorItem("PRCHelm", "Plated Coralium helmet", {name: "ACHP"}, {type: "helmet", armor: 5, durability: 520, texture: "armor/coraliumP_1.png", isTech:false});

IDRegistry.genItemID("PRCCh");
Item.createArmorItem("PRCCh", "Plated Coralium chestplate", {name: "ACCP"}, {type: "chestplate", armor: 9, durability: 643, texture: "armor/coraliumP_1.png", isTech:false});

IDRegistry.genItemID("PRCLeg");
Item.createArmorItem("PRCLeg", "Plated Coralium leggins", {name: "ACPP"}, {type: "leggings", armor: 7, durability:516, texture: "armor/coraliumP_2.png", isTech:false});

IDRegistry.genItemID("PRCBoot");
Item.createArmorItem("PRCBoot", "Plated Coralium boots", {name: "ACBP"}, {type: "boots", armor: 4, durability: 498, texture: "armor/coraliumP_1.png", isTech:false});

//effects: Night Vision I, Speed II, Water Breathing II
var spdfrcp = new EntitysSS.addEffectToArmor({
id:ItemID.PRCBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:1
});
var ngvfrcp = new EntitysSS.addEffectToArmor({
id:ItemID.PRCHelm,    
entity:Player.get(),
slot:0,
effectID:16,
effectTime:200,
powerLVL:0
});
var wtbfrcp = new EntitysSS.addEffectToArmor({
id:ItemID.PRCHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:1
});

IDRegistry.genItemID("DPHelm");
Item.createArmorItem("DPHelm", "Depths helmet", {name: "ADH"}, {type: "helmet", armor: 3, durability: 520, texture: "armor/depths_1.png", isTech:false});

IDRegistry.genItemID("DPCh");
Item.createArmorItem("DPCh", "Depths chestplate", {name: "ADC"}, {type: "chestplate", armor: 8, durability: 643, texture: "armor/depths_1.png", isTech:false});

IDRegistry.genItemID("DPLeg");
Item.createArmorItem("DPLeg", "Depths leggins", {name: "ADP"}, {type: "leggings", armor: 6, durability:516, texture: "armor/depths_2.png", isTech:false});

IDRegistry.genItemID("DPBoot");
Item.createArmorItem("DPBoot", "Depths boots", {name: "ADB"}, {type: "boots", armor: 3, durability: 498, texture: "armor/depths_1.png", isTech:false});

//effects: Night Vision II, Speed III, Water Breathing II, Jump Boost II
var spdfdp = new EntitysSS.addEffectToArmor({
id:ItemID.DPBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:2
});
var jpbfdp = new EntitysSS.addEffectToArmor({
id:ItemID.DPLeg,    
entity:Player.get(),
slot:2,
effectID:8,
effectTime:200,
powerLVL:1
});
var ngvfdp = new EntitysSS.addEffectToArmor({
id:ItemID.DPHelm,    
entity:Player.get(),
slot:0,
effectID:16,
effectTime:200,
powerLVL:1
});
var wtbfdp = EntitysSS.addEffectToArmor({
id:ItemID.DPHelm,    
entity:Player.get(),
slot:0,
effectID:13,
effectTime:200,
powerLVL:1
});

IDRegistry.genItemID("DADHelm");
Item.createArmorItem("DADHelm", "Dreadium helmet", {name: "ADDH"}, {type: "helmet", armor: 3, durability: 520, texture: "armor/dreadium_1.png", isTech:false});

IDRegistry.genItemID("DADCh");
Item.createArmorItem("DADCh", "Dreadium chestplate", {name: "ADDC"}, {type: "chestplate", armor: 8, durability: 643, texture: "armor/dreadium_1.png", isTech:false});

IDRegistry.genItemID("DADLeg");
Item.createArmorItem("DADLeg", "Dreadium leggins", {name: "ADDP"}, {type: "leggings", armor: 6, durability:516, texture: "armor/dreadium_2.png", isTech:false});

IDRegistry.genItemID("DADBoot");
Item.createArmorItem("DADBoot", "Dreadium boots", {name: "ADDB"}, {type: "boots", armor: 3, durability: 498, texture: "armor/dreadium_1.png", isTech:false});

//EFFECTS: Resistance III, Speed III
var spdfdad = new EntitysSS.addEffectToArmor({
id:ItemID.DADBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:2
});
var resfdad = new EntitysSS.addEffectToArmor({
id:ItemID.DADCh,    
entity:Player.get(),
slot:1,
effectID:11,
effectTime:200,
powerLVL:2
});

//tier:4
IDRegistry.genItemID("DADSHelm");
Item.createArmorItem("DADSHelm", "Dreadium Samurai helmet", {name: "ADDH"}, {type: "helmet", armor: 7, durability: 520, texture: "armor/dreadiumS_1.png", isTech:false});

IDRegistry.genItemID("DADSCh");
Item.createArmorItem("DADSCh", "Dreadium Samurai chestplate", {name: "ADDC"}, {type: "chestplate", armor: 12, durability: 643, texture: "armor/dreadiumS_1.png", isTech:false});

IDRegistry.genItemID("DADSLeg");
Item.createArmorItem("DADSLeg", "Dreadium Samurai leggins", {name: "ADDP"}, {type: "leggings", armor: 8, durability:516, texture: "armor/dreadiumS_2.png", isTech:false});

IDRegistry.genItemID("DADSBoot");
Item.createArmorItem("DADSBoot", "Dreadium Samurai boots", {name: "ADDB"}, {type: "boots", armor: 5, durability: 498, texture: "armor/dreadiumS_1.png", isTech:false});

//EFFECTS: Resistance 4, Speed III, Fire Resistance II, Strength II
var srtgfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSHelm,    
entity:Player.get(),
slot:3,
effectID:5,
effectTime:200,
powerLVL:1
});
var spdfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSBoot,    
entity:Player.get(),
slot:3,
effectID:1,
effectTime:200,
powerLVL:2
});
var resfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSCh,    
entity:Player.get(),
slot:1,
effectID:11,
effectTime:200,
powerLVL:3
});
var fresfdads = new EntitysSS.addEffectToArmor({
id:ItemID.DADSLeg,    
entity:Player.get(),
slot:3,
effectID:12,
effectTime:200,
powerLVL:1
});