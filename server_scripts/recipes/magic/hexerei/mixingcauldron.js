//priority 999

ServerEvents.recipes((event) => {
event.remove({id: 'hexerei:infused_fabric_from_mixing_cauldron'})
event.remove({id: 'hexerei:crystal_ball_from_mixing_cauldron'})
event.remove({output: 'irons_spellbooks:magic_cloth'})
const id_prefix = 'kubejs:recipes/hexerei/mixingcauldron/'

const recipes = [
//Infused fabric
{
    inputItem:[
        {"item":"kubejs:woven_silk"},
        {"item":"kubejs:woven_silk"},
        {"item":"kubejs:woven_silk"},
        {"item":"kubejs:woven_silk"},
        {"item":"kubejs:woven_silk"},
        {"item":"kubejs:woven_silk"},
        {"item":"minecraft:black_dye"},
        {"item":"minecraft:black_dye"}
    ],
    liquid:"minecraft:water",
    liquid_consum:1000,
    output_liquid:false,
    output:"hexerei:infused_fabric",
    output_amount:6,
    heat:true
},
//Arcane cloth
{
    inputItem:[
        {"tag":"minecraft:wool"},
        {"item":"mna:infused_silk"},
        {"item":"malum:astral_weave"},
        {"item":"irons_spellbooks:arcane_essence"},
        {"item":"irons_spellbooks:arcane_essence"},
        {"item":"irons_spellbooks:arcane_essence"},
        {"item":"irons_spellbooks:arcane_essence"}
    ],
    liquid:"constructs_casting:squid_ink",
    liquid_consum:1000,
    output_liquid:"constructs_casting:common_ink",
    output:"irons_spellbooks:magic_cloth",
    output_amount:3,
    heat:true
},
//STRING DYES
{
    inputItem:[
        {"item": "goety:magic_fabric"},
        {"item": "goety:magic_fabric"},
        {"item": "naturesaura:gold_powder"},
        {"item": "minecraft:wheat"},
        {"item": "supplementaries:flax"},
        {"item": "minecraft:sunflower"},
        {"item": "embers:ember_grit"}
    ],
    liquid:"gtceu:seed_oil",
    liquid_consum:2000,
    output_liquid:"kubejs:golden_fiber_dye",
    output:"immersive_engineering:hemp_fabric",
    output_amount:2,
    heat:false
},
{
    inputItem:[
        {"item": "eidolon:wicked_weave"},
        {"item": "eidolon:wicked_weave"},
        {"item": "hexerei:mandrake_root"},
        {"item": "hexerei:mandrake_flowers"},
        {"item": "hexalia:dream_paste"},
        {"item": "goety:nightshade_blossom"},
        {"item": "mna:arcane_ash"}
    ],
    liquid:"constructs_casting:squid_ink",
    liquid_consum:2000,
    output_liquid:"kubejs:witches_fiber_dye",
    output:"kubejs:woven_silk",
    output_amount:2,
    heat:false
},
{
    inputItem:[
        {"item": "irons_spellbooks:bloody_vellum"},
        {"item": "irons_spellbooks:bloody_vellum"},
        {"item": "kubejs:daemonic_preparation"},
        {"item": "biomancy:toxin_gland"},
        {"item": "occultism:otherworld_ashes"},
        {"item": "kubejs:dread_echoes"},
        {"item": "magichem:admixture_demon"}
    ],
    liquid:"evilcraft:blood",
    liquid_consum:2000,
    output_liquid:"kubejs:diabolical_fiber_dye",
    output:"irons_spellbooks:hogskin",
    output_amount:2,
    heat:false
},
{
    inputItem:[
        {"item": "hexerei:infused_fabric"},
        {"item": "hexerei:infused_fabric"},
        {"item": "kubejs:ecologists_distillation"},
        {"item": "hexerei:yellow_dock_leaves"},
        {"item": "hexerei:mugwort_leaves"},
        {"item": "goety:quick_growing_seed"},
        {"item": "eidolon:avennian_sprig"}
    ],
    liquid:"farmersdelight:green_tea",
    liquid_consum:2000,
    output_liquid:"kubejs:herbal_fiber_dye",
    output:"kubejs:woven_silk",
    output_amount:2,
    heat:false
},
{
    inputItem:[
        {"item": "goety:spirit_fabric"},
        {"item": "goety:chill_fabric"},
        {"item": "kubejs:shifting_tincture"},
        {"item": "upgrade_aquatic:boiled_blue_pickerelweed"},
        {"item": "minecraft:nautilus_shell"},
        {"item": "magichem:admixture_motion"},
        {"item": "gtceu:electrotine_dust"}
    ],
    liquid:"minecraft:water",
    liquid_consum:2000,
    output_liquid:"kubejs:flowing_fiber_dye",
    output:"immersive_engineering:hemp_fabric",
    output_amount:2,
    heat:false
},
//Crystal ball
{
  inputItem:[
    {"item": "malum:arcane_spirited_glass"},
    {"item": "malum:arcane_spirited_glass"},
    {"item": "minecraft:diamond"},
    {"item": "malum:arcane_spirited_glass"},
    {"item": "malum:arcane_spirited_glass"},
    {"tag": "forge:ingots/vinteum_alloy"},
    {"tag": "forge:ingots/vinteum_alloy"},
    {"tag": "forge:stone"}
  ],
  liquid: "minecraft:lava",
  liquid_consum: 1000,
  output_liquid: false,
  output: "hexerei:crystal_ball",
  output_amount: 1,
  heat: true
},
//Eidolon crucible
{
    inputItem:[
        {"item":"irons_spellbooks:common_ink"},
        {"item":"minecraft:glow_ink_sac"},
        {"item":"minecraft:blue_dye"},
        {"item": "minecraft:blue_dye"},
        {"item":"minecraft:charcoal"},
        {"tag": "forge:ingots/silver"},
        {"item":"malum:cthonic_gold"},
        {"item":"minecraft:glass_bottle"}
    ],
    liquid:"minecraft:water",
    liquid_consum:1000,
    output_liquid:"irons_spellbooks:common_ink",
    output:"eidolon:magic_ink",
    output_amount:8,
    heat:false
},
{
    inputItem:[
        {"item":"mna:vellum"},
        {"item":"mna:vellum"},
        {"item":"mna:vellum"},
        {"item":"mna:vellum"},
        {"item":"eidolon:enchanted_ash"},
        {"item":"malum:hallowed_gold_ingot"},
        {"item":"embers:ash"}
    ],
    liquid:"hexerei:tallow_fluid",
    liquid_consum:250,
    output_liquid:false,
    output:"eidolon:parchment",
    output_amount:4,
    heat:true
},
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
    liquid:"minecraft:water",
    liquid_consum:250,
    output:"eidolon:bloodlust_incense",
    output_amount:2,
    output_liquid:false,
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
        {"item":"netherexp:warped_wart"}
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
        {"item":"minecraft:gold_block"},
        {"item":"minecraft:redstone_block"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"item":"minecraft:gold_block"},
        {"item":"minecraft:redstone_block"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"}
    ],
    output:"eidolon:arcane_gold_block",
    output_amount:2,
    liquid:"minecraft:lava",
    output_liquid:false,
    liquid_consum:2000,
    heat:false
},
{
    inputItem:[
        {"tag": "forge:gems/coal"},
        {"item":"minecraft:ghast_tear"},
        {"item":"kubejs:vengeful_node"},
        {"item":"eidolon:crimson_essence"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:gems/ruby"}
    ],
    output:"eidolon:crimson_gem",
    output_amount:1,
    liquid:"hexerei:quicksilver_fluid",
    output_liquid:false,
    liquid_consum:1000,
    heat:false
},
{
    inputItem:[
        {"tag": "forge:gems/coal"},
        {"item":"minecraft:ghast_tear"},
        {"item": "kubejs:wicked_node"},
        {"tag": "forge:essences/death"},
        {"item":"eidolon:soul_shard"},
        {"item":"eidolon:soul_shard"},
        {"tag": "forge:gems/dark"}
    ],
    output:"eidolon:shadow_gem",
    output_amount:1,
    liquid:"hexerei:quicksilver_fluid",
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
        {"tag": "forge:feathers"},
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
{
    inputItem:[
        {"item": "minecraft:rotten_flesh"},
        {"item": "hexalia:spirit_powder"},
        {"item": "hexalia:witchweed"},
        {"tag": "forge:resins"},
        {"item":"hexalia:rustic_bottle"}
    ],
    output:"hexalia:brew_of_gravebloom",
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
}
]
const fluidMixingRecipes = [
    {
      inputItem:[
        { "item": "gtceu:cinnabar_gem" },
        { "item": "gtceu:cinnabar_gem" },
        { "item": "gtceu:cinnabar_gem" },
        { "item": "gtceu:cinnabar_gem" },
        {"item": "mna:transmuted_silver"},
        {"item": "mna:transmuted_silver"},
        {"item": "mna:transmuted_silver"},
        {"item": "mna:transmuted_silver"}
      ],
      input: 'minecraft:lava',
      output: 'hexerei:quicksilver_fluid',
      heat: false
    },
    {
      inputItem:[
        {"item": "mna:transmuted_silver"},
        {"item": "mna:transmuted_silver"},
        {"item": "mna:transmuted_silver"},
        {"item": "mna:transmuted_silver"}
      ],
      input: 'gtceu:mercury',
      output: 'hexerei:quicksilver_fluid',
      heat: false
    },
    {
      inputItem:[
        { "item": "irons_spellbooks:icy_fang" }
      ],
      input: 'minecraft:water',
      output: 'irons_spellbooks:ice_venom',
      heat: true
    },
    {
      inputItem:[
        { "item": "malum:warp_flux" }
      ],
      input: 'irons_spellbooks:evasion_elixir',
      output: 'irons_spellbooks:greater_evasion_elixir',
      heat: true
    },
    {
      inputItem:[
        { "item": "minecraft:amethyst_shard" }
      ],
      input: 'irons_spellbooks:oakskin_elixir',
      output: 'irons_spellbooks:greater_oakskin_elixir',
      heat: true
    },
    {
      inputItem:[
        { "item": "minecraft:amethyst_cluster" }
      ],
      input: 'irons_spellbooks:invisibility_elixir',
      output: 'irons_spellbooks:greater_invisibility_elixir',
      heat: true
    },
    {
      inputItem:[
        {'item': 'cosmopolitan:birch_sap_bottle'},
        {'item': 'cosmopolitan:birch_sap_bottle'},
        {'item': 'kubejs:anointing_paste'},
        {'item': 'hexalia:lotus_blossom'},
        {'item': 'gtceu:steel_ingot'},
        {'item': 'alexsmobs:straddlite'},
        {'item': 'magichem:admixture_healing'}
      ],
      input: 'magichem:liquid_light',
      output: 'kubejs:pure_fiber_dye',
      heat: false
    },
    {
      inputItem:[
        {'item': 'magichem:admixture_realm'},
        {'item': 'magichem:admixture_realm'},
        {'item': 'kubejs:sanctified_steam'},
        {'item': 'hexerei:belladonna_flowers'},
        {'item': 'delightful:animal_fat'},
        {'item': 'windswept:bluebells'},
        {'item': 'alexsmobs:raccoon_tail'}
      ],
      input: 'netherexp:ectoplasm',
      output: 'kubejs:travellers_fiber_dye',
      heat: false
    },
    {
      inputItem:
      [
        {'tag': 'vampirism:pure_blood'},
        {'item': 'eidolon:undeath_incense'},
        {'item': 'goety:shadow_essence'},
        {'tag': 'forge:tallow'},
        {'tag': 'forge:slimeballs'},
        {'item': 'gtceu:talc_dust'},
        {'item': 'magichem:admixture_protection'}
      ],
      input: 'irons_spellbooks:greater_oakskin_elixir',
      output: 'kubejs:sunscreen_elixir',
      heat: true
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
  fluidMixingRecipes.forEach(recipe => {
      if(recipe.heat == true){
    event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": recipe.input
    },
    "ingredients": recipe.inputItem,
    "output": {
      "fluid": recipe.output
    },
    "heatRequirement": "heated"
    });
    }
    else{
    event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": recipe.input
    },
    "ingredients": recipe.inputItem,
    "output": {
      "fluid": recipe.output
    }
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
//Emptying
function cauldronEmptying(extract, fluid, fluidAmount, output){
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": extract
    },
    "fluid": {
      "fluid": fluid,
      "amount": fluidAmount
    },
    "output": {
      "item": output,
      "count": 1
    }
  })
}
cauldronEmptying(
  'minecraft:glass_bottle',
  'irons_spellbooks:timeless_slurry',
  250,
  'irons_spellbooks:timeless_slurry'
)
cauldronEmptying(
  'minecraft:glass_bottle',
  'irons_spellbooks:ice_venom',
  250,
  'irons_spellbooks:ice_venom_vial'
)
cauldronEmptying(
  'minecraft:glass_bottle',
  'hexerei:quicksilver_fluid',
  250,
  'hexerei:quicksilver_bottle'
)
cauldronEmptying(
  'minecraft:glass_bottle',
  'kubejs:sunscreen_elixir',
  250,
  'kubejs:sunscreen_elixir'
)
//funky strings
cauldronEmptying(
  'minecraft:string',
  'kubejs:golden_fiber_dye',
  200,
  'kubejs:golden_thread'
)
cauldronEmptying(
  'betterend:silk_fiber',
  'kubejs:witches_fiber_dye',
  200,
  'kubejs:witches_stitching'
)
cauldronEmptying(
  'botania:mana_string',
  'kubejs:pure_fiber_dye',
  200,
  'kubejs:pure_filament'
)
cauldronEmptying(
  'immersiveengineering:hemp_fiber',
  'kubejs:travellers_fiber_dye',
  200,
  'kubejs:travellers_twine'
)
cauldronEmptying(
  'farmersdelight:straw',
  'kubejs:herbal_fiber_dye',
  200,
  'kubejs:herbal_string'
)
cauldronEmptying(
  'mna:infused_thread',
  'kubejs:flowing_fiber_dye',
  200,
  'kubejs:flowing_yarn'
)
cauldronEmptying(
  'biomancy:sinew',
  'kubejs:diabolical_fiber_dye',
  200,
  'kubejs:diabolical_vein'
)
//iss elixirs
function issElixirs(name){
  cauldronEmptying(
    'minecraft:glass_bottle',
    `irons_spellbooks:${name}_elixir`,
    250,
    `irons_spellbooks:${name}_elixir`
  )
  cauldronEmptying(
    'minecraft:glass_bottle',
    `irons_spellbooks:greater_${name}_elixir`,
    250,
    `irons_spellbooks:greater${name}_elixir`
  )
}
issElixirs('oakskin')
issElixirs('evasion')
issElixirs('healing')
issElixirs('invisibility')
});