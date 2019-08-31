var NecronomiconPE={
PEblocks:[],
PEitems:[],
regPEforItem:function(params){
if(!params.id)  
return Logger.LogError("{regPEforItem} params.id должен быть числом или строкой", "NecroPE"); 
if(!params.PEvalue)  
return Logger.LogError("{regPEforItem} params.PEvalue должен быть числом", "NecroPE");
if(!params.maxPE)  
return Logger.LogError("{regPEforItem} params.MaxPE должен быть числом", "NecroPE");
if(!params.tier)  
return Logger.LogError("{regPEforItem} params.tier должен быть числом", "NecroPE"); 
PEitems.push(params);
},

setPEfItem:function(){
for(var i in PEitems){
Item.setMaxDamage(PEitems[i].id, PEitems[i].PEvalue + 1)    
}
},
showPE:function(){
for(var i in PEitems){
if(Player.getCarriedItem().id=PEitems[i].id){
return getItemStorageText(PEitems[i].id, PEitems[i].name);
}else{
return 0;
}
}
},

getItemData: function(id){
return this.PEitems[id];
},

getEnergyFromItem: function(item, PEnrg){
var data = this.getItemData(item.id);
if(!data || PEnrg && data.PE != PEnrg){
return 0;
}
return Math.min(data.maxPE - item.data, data.PEvalue);
},

getItemStorageText: function(item, name){
var capacity = Item.getMaxDamage(item.id) - 1;
var PEn = getEnergyFromItem(item);
var tooltip = "§7" + displayPE(PEn) + "/" + displayPE(capacity) + " PE";
return getTooltip(name, tooltip);
},
displayPE: function(PE){
if(PE >= 1e6){
return Math.floor(PE / 1e5) / 10 + "M";
}
if(PE >= 1000){
return Math.floor(PE / 100) / 10 + "K";
}
return PE;
},

getTooltip: function(name, Necronomtip){
var n = name.length, l = tooltip.length;
var space = "";
if(name[0]=='§') n -= 2;
if(tooltip[0]=='§') l -= 2;
while(n > l){
space += " ";
n -= 2;
}
return "\n" + space + tooltip;
}
}