//priority 999

ServerEvents.recipes((event) => {
const id_prefix = 'kubejs:recipes/hexerei/mixingcauldron/'

const recipes = [
//Eidolon crucible
{
    inputItem:[
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:mirecap"},
        {"item":"eidolon:lesser_soul_gem"},
        {"item":"eidolon:merammer_resin"}
    ],
    liquid:"minecraft:water",
    liquid_consum:250,
    output_liquid:false,
    output:"eidolon:soul_harvest_incense",
    output_amount:2,
    heat:true
},
{
    inputItem:[
        {"item":"eidolon:ender_calx"},
        {"tag": "forge:dyes/red"},
        {"tag": "forge:dyes/red"},
        {"item":"minecraft:redstone_block"},
        {"tag": "forge:tallow"},
        {"tag": "forge:tallow"}
    ],
    liquid:"minecraft:water",
    liquid_consum:500,
    output_liquid:false,
    output:"eidolon:magicians_wax",
    output_amount:4,
    heat:true
},
{
    inputItem:[
        {"item":"eidolon:sildrian_seed"},
        {"item":"minecraft:rotten_flesh"},
        {"item":"eidolon:crimson_essence"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:bloodlust_incense",
    output_amount:2,
    output_liquid:false,
    liquid_consum:250,
    liquid:"minecraft_water",
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:lead"},
        {"item":"eidolon:avennian_sprig"},
        {"item":"eidolon:warped_sprouts"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:tether_incense",
    output_amount:2,
    liquid:"minecraft:water",
    liquid_consum:250,
    output_liquid:false,
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:packed_ice"},
        {"item":"eidolon:avennian_sprig"},
        {"item":"minecraft:bone_meal"},
        {"tag": "forge:frigid_heart"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:frostbind_incense",
    output_amount:2,
    liquid:"minecraft:water",
    liquid_consum:250,
    output_liquid:false,
    heat:true
},
{
    inputItem:[
        {"item":"eidolon:oanna_bloom"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:offering_incense",
    output_amount:2,
    output_liquid: false,
    liquid:"minecraft:water",
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:packed_mud"},
        {"item":"minecraft:packed_mud"},
        {"item":"minecraft:packed_mud"},
        {"item":"minecraft:packed_mud"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"eidolon:soul_shard"}
    ],
    output:"eidolon:elder_brick",
    output_amount:16,
    output_liquid:false,
    liquid:"minecraft:lava",
    liquid_consum:100,
    heat:false
},
{
    inputItem:[
        {"item":"minecraft:warped_fungus"},
        {"item":"eidolon:ender_calx"},
        {"item":"minecraft:nether_wart"}
    ],
    output:"eidolon:warped_sprouts",
    output_amount:4,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true
},
{
    inputItem:[
        {"tag": "c:mushrooms"},
        {"tag": "c:seeds"},
        {"item":"minecraft:bone_meal"}
    ],
    output:"eidolon:fungus_sprouts",
    output_amount:4,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:gold_block"},
        {"item":"minecraft:redstone_block"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"}
    ],
    output:"eidolon:arcane_gold_block",
    output_amount:1,
    liquid:"minecraft:lava",
    output_liquid:false,
    liquid_consum:1000,
    heat:false
},
{
    inputItem:[
        {"tag": "forge:gems/coal"},
        {"item":"minecraft:ghast_tear"},
        {"item":"eidolon:crimson_essence"},
        {"item":"eidolon:crimson_essence"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:gems/ruby"}
    ],
    output:"eidolon:crimson_gem",
    output_amount:1,
    liquid:"minecraft:lava",
    output_liquid:false,
    liquid_consum:1000,
    heat:false
},
{
    inputItem:[
        {"tag": "forge:gems/coal"},
        {"item":"minecraft:ghast_tear"},
        {"tag": "forge:essences/death"},
        {"tag": "forge:essences/death"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:gems/dark"}
    ],
    output:"eidolon:shadow_gem",
    output_amount:1,
    liquid:"minecraft:lava",
    output_liquid:false,
    liquid_consum:1000,
    heat:false
},
{
    inputItem:[
        {"tag": "forge:gems/lapis"},
        {"tag": "forge:gems/lapis"},
        {"tag": "forge:dusts/redstone"},
        {"tag": "forge:dusts/redstone"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:gems/quartz"}
    ],
    output:"eidolon:lesser_soul_gem",
    output_amount:1,
    liquid:"minecraft:lava",
    output_liquid:false,
    liquid_consum:100,
    heat:false
},
{
    inputItem:[
        {"tag": "forge:eggs"},
        {"item":"eidolon:mirecap"},
        {"item":"minecraft:bone_meal"},
        {"tag": "forge:essences/death"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:frail_incense",
    output_amount:2,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:rotten_flesh"},
        {"tag": "eidolon:mirecap"},
        {"tag": "forge:rods/bone"},
        {"tag": "forge:essences/death"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:gloom_incense",
    output_amount:2,
    liquid:"minecraft:water",
    liquid_consum:250,
    output_liquid:false,
    heat:true
},
{
    inputItem:[
        {"tag": "forge:zombie_heart"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:essences/death"},
        {"item":"eidolon:merammer_resin"}
    ],
    output:"eidolon:undeath_incense",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"tag": "forge:dusts/ender_pearl"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"malum:alchemical_calx"}
    ],
    output:"eidolon:ender_calx",
    output_amount:4,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:500,
    heat:true
},
{
    inputItem:[
        {"item":"caverns_and_chasms:rotten_flesh_block"},
        {"tag": "forge:zombie_heart"},
        {"item":"minecraft:bone_meal"},
        {"item":"minecraft:bone_meal"},
        {"tag": "forge:gems/charcoal"}
    ],
    output:"eidolon:death_essence",
    output_amount:4,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true,
},
{
    inputItem:[
        {"item":"caverns_and_chasms:rotten_flesh_block"},
        {"tag": "forge:wither_heart"},
        {"item":"minecraft:bone_meal"},
        {"item":"minecraft:bone_meal"},
        {"tag": "forge:gems/charcoal"}
    ],
    output:"eidolon:death_essence",
    output_amount:8,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true,
},
{
    inputItem:[
        {"item":"minecraft:weeping_vines"},
        {"item":"minecraft:crimson_roots"},
        {"item":"minecraft:crimson_fungus"},
        {"item":"minecraft:nether_wart"},
        {"tag": "forge:dusts/sulfur"}
    ],
    output:"eidolon:crimson_essence",
    output_amount:8,
    liquid:"minecraft:water",
    output_liquid:false,
    heat:true,
    liquid_consum:100
},
{
    inputItem:[
        {"item":"minecraft:gold_nugget"},
        {"item":"minecraft:gold_nugget"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"minecraft:carrot"}
    ],
    output:"minecraft:golden_carrot",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:gold_nugget"},
        {"item":"minecraft:gold_nugget"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"minecraft:melon_slice"}
    ],
    output:"minecraft:glistering_melon_slice",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true
},
{
    inputItem:[
        {"item":"minecraft:gold_ingot"},
        {"item":"minecraft:gold_ingot"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"minecraft:apple"}
    ],
    output:"minecraft:golden_apple",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:100,
    heat:true
},
{
    inputItem:[
        {"tag": "forge:stripped_logs"},
        {"tag": "forge:stripped_logs"},
        {"tag": "forge:stripped_logs"},
        {"tag": "forge:stripped_logs"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:wax"}
    ],
    output:"eidolon:polished_planks",
    output_amount:32,
    liquid:"minecraft:water",
    output_liquid:false,
    heat:true,
    liquid_consum:500
},
//Hexalia small cauldron
{
    inputItem:[
        {"item":"hexerei:mandrake_root"},
        {"item":"minecraft:rotten_flesh"},
        {"tag": "forge:resins"},
        {"item":"hexalia:spirit_powder"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_bloodlust",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"hexalia:galeberries"},
        {"tag": "forge:ender_pearls"},
        {"tag": "forge:resins"},
        {"item":"hexalia:spirit_powder"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_homestead",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"hexalia:celestial_crystal"},
        {"item":"minecraft:iron_nugget"},
        {"tag": "forge:resins"},
        {"item":"minecraft:sweet_berries"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_spikeskin",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"hexalia:dream_paste"},
        {"item":"hexalia:siren_paste"},
        {"item":"minecraft:iron_ingot"},
        {"item":"minecraft:redstone"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_siphon",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"hexalia:sunfire_tomato"},
        {"item":"hexalia:spirit_powder"},
        {"item":"minecraft:glow_berries"},
        {"item":"hexalia:witchweed"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_daybloom",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"hexalia:ghost_powder"},
        {"item":"hexalia:chillberries"},
        {"tag": "c:feathers"},
        {"item":"minecraft:sculk"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_hollow_silence",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"item":"hexalia:ghost_powder"},
        {"item":"minecraft:spider_eye"},
        {"tag": "forge:string"},
        {"tag": "c:dyes/black"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_arachnid_grace",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
{
    inputItem:[
        {"tag": "forge:slimeballs"},
        {"item":"hexalia:chillberries"},
        {"tag": "forge:resins"},
        {"tag": "c:feathers"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_slimewalker",
    output_amount:1,
    liquid:"minecraft:water",
    output_liquid:false,
    liquid_consum:250,
    heat:true
},
// Iron's Spells & Spellbooks stuff
{
    inputItem:[
        {"item" : "minecraft:obsidian"},
        {"item" : "minecraft:obsidian"},
        {"item" : "minecraft:obsidian"},
        {"item" : "minecraft:obsidian"}
    ],
    output:"minecraft:crying_obsidian",
    output_amount:4,
    liquid:"irons_spellbooks:evasion_elixir",
    output_liquid:false,
    liquid_consum:2000,
    heat:false
},
{
    inputItem:[
        {"item" : "irons_spellbooks:hogskin"},
        {"item" : "irons_spellbooks:hogskin"},
        {"item" : "irons_spellbooks:hogskin"},
        {"item" : "irons_spellbooks:hogskin"}
    ],
    output:"irons_spellbooks:bloody_vellum",
    output_amount:4,
    liquid:"hexerei:blood",
    output_liquid:false,
    liquid_consum:1000,
    heat:false
}
]

 recipes.forEach(recipe =>{
        recipe.output_liquid = (recipe.output_liquid == false) ? recipe.liquid : recipe.output_liquid
        if(recipe.heat == false){
            event.custom({
                "type": "hexerei:mixingcauldron",
                "liquid": {"fluid": recipe.liquid},
                "ingredients":recipe.inputItem,
                "output": {"item": recipe.output, "count":recipe.output_amount},
                "liquidOutput": {"fluid": recipe.output_liquid},
                "fluidLevelsConsumed":recipe.liquid_consum
               });
        }else{
            event.custom({
                "type": "hexerei:mixingcauldron",
                "liquid": {"fluid": recipe.liquid},
                "ingredients":recipe.inputItem,
                "output": {"item": recipe.output,"count":recipe.output_amount},
                "liquidOutput": {"fluid": recipe.output_liquid},
                "fluidLevelsConsumed":recipe.liquid_consum,
                "heatRequirement": "heated"
               });
        }
    })
//More Irons' garbage
 event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "REGULAR",
          "Potion": "minecraft:mundane"
        }
    },
    "ingredients": [
      { "item": "minecraft:echo_shard" }
    ],
    "output": {
      "fluid": "irons_spellbooks:timeless_slurry"
    },
    "heatRequirement": "heated"
  });
 event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "minecraft:water"
    },
    "ingredients": [
      { "item": "irons_spellbooks:icy_fang" }
    ],
    "output": {
      "fluid": "irons_spellbooks:ice_venom"
    },
    "heatRequirement": "none"
  });
event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "REGULAR",
          "Potion": "irons_spellbooks:instant_mana_three"
        }
    },
    "ingredients": [
      { "item": "malum:astral_weave" }
    ],
    "output": {
      "fluid": "irons_spellbooks:evasion_elixir"
    },
    "heatRequirement": "heated"
  });
event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "irons_spellbooks:evasion_elixir"
    },
    "ingredients": [
      { "item": "malum:warp_flux" }
    ],
    "output": {
      "fluid": "irons_spellbooks:greater_evasion_elixir"
    },
    "heatRequirement": "heated"
  });
 event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "REGULAR",
          "Potion": "minecraft:strong_healing"
        }
    },
    "ingredients": [
      { "item": "gtceu:red_garnet_gem" }
    ],
    "output": {
      "fluid": "irons_spellbooks:greater_healing_elixir"
    },
    "heatRequirement": "heated"
  });
 event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "REGULAR",
          "Potion": "minecraft:strong_healing"
        }
    },
    "ingredients": [
      { "tag": "minecraft:oak_logs" }
    ],
    "output": {
      "fluid": "irons_spellbooks:oakskin_elixir"
    },
    "heatRequirement": "heated"
  });
event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "irons_spellbooks:oakskin_elixir"
    },
    "ingredients": [
      { "item": "minecraft:amethyst_shard" }
    ],
    "output": {
      "fluid": "irons_spellbooks:greater_oakskin_elixir"
    },
    "heatRequirement": "heated"
  });
event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "REGULAR",
          "Potion": "minecraft:long_invisibility"
        }
    },
    "ingredients": [
      { "item": "irons_spellbooks:shriving_stone" }
    ],
    "output": {
      "fluid": "irons_spellbooks:invisibility_elixir"
    },
    "heatRequirement": "heated"
  });
event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "irons_spellbooks:invisibility_elixir"
    },
    "ingredients": [
      { "item": "minecraft:amethyst_cluster" }
    ],
    "output": {
      "fluid": "irons_spellbooks:greater_invisibility_elixir"
    },
    "heatRequirement": "heated"
  });
event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "irons_spellbooks:oakskin_elixir",
      "amount": 250
    },
    "output": {
      "item": "irons_spellbooks:oakskin_elixir",
      "count": 1
    }
  });
event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "irons_spellbooks:greater_oakskin_elixir",
      "amount": 250
    },
    "output": {
      "item": "irons_spellbooks:greater_oakskin_elixir",
      "count": 1
    }
  });
event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "irons_spellbooks:invisibility_elixir",
      "amount": 250
    },
    "output": {
      "item": "irons_spellbooks:invisibility_elixir",
      "count": 1
    }
  });
event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "irons_spellbooks:evasion_elixir",
      "amount": 250
    },
    "output": {
      "item": "irons_spellbooks:evasion_elixir",
      "count": 1
    }
  });
event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "irons_spellbooks:greater_evasion_elixir",
      "amount": 250
    },
    "output": {
      "item": "irons_spellbooks:greater_evasion_elixir",
      "count": 1
    }
  });
event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "irons_spellbooks:greater_invisibility_elixir",
      "amount": 250
    },
    "output": {
      "item": "irons_spellbooks:greater_invisibility_elixir",
      "count": 1
    }
  });

});