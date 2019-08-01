var EntitysSS = {
AE:[],
IEt:[],    
addEffectToArmor:function(params){
Callback.addCallback("tick", function(){    
if(Entity.getArmorSlot(this.params.entity, this.params.slot).id == this.params.id){
Entity.addEffect(this.params.entity, this.params.effectID, this.params.effectTime, this.params.powerLVL, false, false);   
  }
});
},
addArmorToEntity:function(params){
if(!this.params.entity)
return Logger.LogError("{addArmorToEntity} params.entity должен быть строкой или числом", "EntitysSS");
if(!this.params.slot)
return Logger.LogError("{addArmorToEntity} params.slot должен быть числом", "EntitysSS");    
if(this.params.id)
return Logger.LogError("{addArmorToEntity} params.id должен быть строкой или числом", "EntitysSS");
if(this.params.data)
return Logger.LogError("{addArmorToEntity} params.data должен быть числом", "EntitysSS");        
AE.push(params);
},
addItemToHand:function(params){
if(!this.params.entity)
return Logger.LogError("{addItemToHand} params.entity должен быть строкой или числом", "EntitysSS");
if(!this.params.slot)  
return Logger.LogError("{addItemToHand} params.slot должен быть числом", "EntitysSS");    
if(this.params.id)    
return Logger.LogError("{addItemToHand} params.id должен быть строкой или числом", "EntitysSS");
if(this.params.count)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
if(this.params.data)
return Logger.LogError("{addItemToHand} params.data должен быть числом", "EntitysSS");  
AI.push(params);
},


setArmorToEntity:function(){
Callback.addCallback("EntityAdded", function(entity){
var AE = this.AE;
for(var i = 0; i < AE.length; i++){
if(entity == AE.entity){
Entity.setArmorSlot(entity, AE.slot, AE.id, 1, AE.data);    
          }
        }
    });
},
setItemsToEntity:function(){
Callback.addCallback("EntityAdded", function(entity){
var IEt = this.IEt;
for(var i = 0; i < IEt.length; i++){
if(entity == IEt.entity){
Entity.setCarriedItem(IEt.entity, IEt.id, IEt.count, IEt.data);    
          }
        }
    });
}
}