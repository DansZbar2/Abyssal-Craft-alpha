IDRegistry.genItemID("plateFood");
Item.createItem("plateFood", "Food Plate", {name: "plate"},{isTech:false});
Recipes.addShaped({id: ItemID.plateFood, count: 2, data: 0}, [
"xx",
], ['x', 265, 0]);

IDRegistry.genItemID("plateFoodD");
Item.createItem("plateFoodD", "Dirty Food Plate", {name: "dirtyplate"},{isTech:false});

IDRegistry.genItemID("plateFoodC");
Item.createFoodItem("plateFoodC", "Chicken on a Plate", {name: "ChiP"},{isTech:false,food: 11});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodC){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("plateFoodP");
Item.createFoodItem("plateFoodP", "Porkchop on a Plate", {name: "PorP"},{isTech:false,food: 15});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodP){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("plateFoodB");
Item.createFoodItem("plateFoodB", "Beef on a Plate", {name: "BeeP"},{isTech:false,food: 13});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodB){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("plateFoodF");
Item.createFoodItem("plateFoodF", "Fish on a Plate", {name: "BeeP"},{isTech:false,food: 13});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodF){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

IDRegistry.genItemID("eggF");
Item.createFoodItem("eggF", "Fried Egg", {name: "friedegg"},{isTech:false,food: 7});
Recipes.addFurnace(344, ItemID.eggF, 0);

IDRegistry.genItemID("plateEggF");
Item.createFoodItem("plateEggF", "Fried Egg on a Plate", {name: "eggp"},{isTech:false,food: 9});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.plateFoodF){
Player.addItemToInventory(ItemID.plateFoodD, 1);
}});

//ANTIFOOD
IDRegistry.genItemID("anBo");
Item.createItem("anBo", "Anti Bone", {name: "antiBone"});

IDRegistry.genItemID("anFl");
Item.createFoodItem("anFl", "Anti Flesh", {name: "antiFlesh"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.anFl){
Entity.addEffect(Player.get(), 17, 240, 1, false, false);
}});

IDRegistry.genItemID("anCb");
Item.createFoodItem("anCb", "Anti Boned Flesh", {name: "antiCB"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.anCb){
Entity.addEffect(Player.get(), 17, 240, 1, false, false);
}});

IDRegistry.genItemID("anCF");
Item.createFoodItem("anCF", "Anti Dreadling Flesh", {name: "antiCF"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.anCF){
Entity.addEffect(Player.get(), 17, 240, 1, false, false);
}});

IDRegistry.genItemID("anSY");
Item.createFoodItem("anSY", "Anti Spider Eye", {name: "antiSpider_eye"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.anSY){
Entity.addEffect(Player.get(), 17, 240, 1, false, false);
}});

IDRegistry.genItemID("anCh");
Item.createFoodItem("anCh", "Anti Chicken", {name: "antiChicken"},{isTech:false,food: 3});

IDRegistry.genItemID("anBe");
Item.createFoodItem("anBe", "Anti Beef", {name: "antiBeef"},{isTech:false,food: 3});

IDRegistry.genItemID("anMilk");
Item.createFoodItem("anMilk", "Anti Milk", {name: "Antibucket"},{isTech:false,food: 9});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.anMilk){
Player.addItemToInventory(325, 1, 0);
}});

IDRegistry.genItemID("anPo");
Item.createFoodItem("anPo", "Anti Pork", {name: "antiPork"},{isTech:false,food: 4});


