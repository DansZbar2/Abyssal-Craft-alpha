IDRegistry.genBlockID("stoneDark"); 
Block.createBlock("stoneDark", [
    {name: "Dark Stone", texture: [["DS", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.stoneDark, "stone", 1, true);