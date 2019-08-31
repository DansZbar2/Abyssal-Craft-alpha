var EntitysSS = {
AE:[],
IEt:[],    
addEffectToArmor:function(params){
Callback.addCallback("tick", function(){    
if(Entity.getArmorSlot(params.entity, params.slot).id == params.Aid){
Entity.addEffect(params.entity, params.effectID, params.effectTime, params.powerLVL, false, false);   
  }
});
},
addArmorToEntity:function(params){
if(!params.entity)
return Logger.LogError("{addArmorToEntity} params.entity должен быть строкой или числом", "EntitysSS");
if(!params.slot)
return Logger.LogError("{addArmorToEntity} params.slot должен быть числом", "EntitysSS");    
if(!params.id)
return Logger.LogError("{addArmorToEntity} params.id должен быть строкой или числом", "EntitysSS");
if(!params.data)
return Logger.LogError("{addArmorToEntity} params.data должен быть числом", "EntitysSS");        
AE.push(params);
},
addItemToHand:function(params){
if(!params.entity)
return Logger.LogError("{addItemToHand} params.entity должен быть строкой или числом", "EntitysSS");
if(!params.slot)  
return Logger.LogError("{addItemToHand} params.slot должен быть числом", "EntitysSS");    
if(!params.id)    
return Logger.LogError("{addItemToHand} params.id должен быть строкой или числом", "EntitysSS");
if(!params.count)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
if(!params.data)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
AI.push(params);
},


setArmorToEntity:function(){
Callback.addCallback("EntityAdded", function(entity){
var AE = this.AE;
for(var i = 0; i < AE.length; i++){
if(entity == AE[i].entity){
Entity.setArmorSlot(AE[i].entity, AE[i].slot, AE[i].id, 1, AE[i].data);    
          }
        }
    });
},
setItemsToEntity:function(){
Callback.addCallback("EntityAdded", function(entity){
var IEt = this.IEt;
for(var i = 0; i < IEt.length; i++){
if(entity == IEt[i].entity){
Entity.setCarriedItem(IEt[i].entity, IEt[i].id, IEt[i].count, IEt[i].data);    
          }
        }
    });
}
}