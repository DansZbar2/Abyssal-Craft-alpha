IDRegistry.genBlockID("stoneDark"); 
Block.createBlock("stoneDark", [
{name: "Dark Stone", texture: [["DS", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.stoneDark, "stone", 1, true);

IDRegistry.genBlockID("dirtDark");
Block.createBlockWithRotation("dirtDark", [
{name: "DarkLends Dirt", texture: [["DLGbottom", 0], ["DLGtop", 0], ["DLGsides", 0], ["DLGsides", 0], ["DLGsides", 0], ["DLGsides", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dirtDark, "dirt", 0, true);