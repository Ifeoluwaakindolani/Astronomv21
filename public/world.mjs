export const planets=[['Verdantia','Living forests','Flora'],['Cryora','Frozen crystal oceans','Frost'],['Solara','Sun-scorched dunes','Solar'],['Nebulon','Violet cloud seas','Cosmic'],['Ferron','Iron mountains','Stone'],['Voltaris','Electric stormlands','Volt'],['Aquaris','Endless alien reefs','Tide'],['Umbria','The twilight frontier','Shadow'],['Lumina','Fields of fallen stars','Light'],['Aetheria','Beyond the edge of space','Aether']].map(([name,biome,type],i)=>({id:i,name,biome,type,level:i+1}));
const bases=[['Emberkit',0],['Frostfin',1],['Sproutlet',2],['Nebuloom',3],['Orbitusk',4],['Astralyn',5],['Metamon',3]];
const prefixes=['','Ice','Sun','Nebula','Iron','Storm','Reef','Dusk','Star','Aether'];
export const species=planets.flatMap((p,t)=>bases.map(([name,art],i)=>({id:t*7+i,name:t===0?name:i===6?prefixes[t]+' Metamon':prefixes[t]+['pounce','whisk','hopper','drift','shell','wing'][i],type:t===0?['Solar','Frost','Flora','Cosmic','Stone','Cosmic','Cosmic'][i]:p.type,art,planet:t,rarity:i>=5?'Rare':i===4?'Uncommon':'Common',hp:46+i*3,attack:10+i,move:['Flare rush','Crystal wave','Spore burst','Mind ripple','Meteor crash','Starfall','Morph burst'][i]})));
// Append new species so existing saved creature IDs stay valid.
export const animalTemplates=[
 {name:'Starwolf',animal:'Wolf',icon:'🐺',hp:62,attack:15,rarity:'Uncommon',move:'Lunar howl'},
 {name:'Moonhare',animal:'Rabbit',icon:'🐰',hp:48,attack:12,rarity:'Common',move:'Moon leap'},
 {name:'Nebear',animal:'Bear',icon:'🐻',hp:74,attack:16,rarity:'Rare',move:'Gravity slam'},
 {name:'Astrowl',animal:'Owl',icon:'🦉',hp:53,attack:14,rarity:'Uncommon',move:'Starlight swoop'},
 {name:'Orbitiger',animal:'Tiger',icon:'🐯',hp:61,attack:17,rarity:'Rare',move:'Plasma pounce'},
 {name:'Voidpanther',animal:'Panther',icon:'🐈‍⬛',hp:57,attack:16,rarity:'Rare',move:'Shadow dash'},
 {name:'Cometpup',animal:'Dog',icon:'🐶',hp:54,attack:13,rarity:'Common',move:'Comet chase'},
 {name:'Solarion',animal:'Lion',icon:'🦁',hp:68,attack:17,rarity:'Rare',move:'Solar roar'},
 {name:'Deerora',animal:'Deer',icon:'🦌',hp:60,attack:13,rarity:'Uncommon',move:'Aurora antlers'},
 {name:'Quillstar',animal:'Hedgehog',icon:'🦔',hp:59,attack:12,rarity:'Common',move:'Meteor quills'},
 {name:'Cosmopenguin',animal:'Penguin',icon:'🐧',hp:58,attack:13,rarity:'Common',move:'Frost slide'},
 {name:'Astroray',animal:'Manta ray',icon:'🌊',hp:64,attack:15,rarity:'Uncommon',move:'Nebula glide'}
];
for(const planet of planets){animalTemplates.forEach((animal,art)=>species.push({...animal,id:species.length,name:planet.id===0?animal.name:`${prefixes[planet.id]} ${animal.name}`,planet:planet.id,type:planet.type,art,artSheet:'animals'}));}
export const towns=['Mosslight Town','Frosthaven','Sundrift Port','Cloudrest','Ironhold','Spark City','Coral Landing','Duskborough','Starfall Village','Aether Citadel'];
export const areas=[{id:0,name:'Wild trails',description:'Gentle paths. A good place to meet your first companions.',rare:8},{id:1,name:'Ancient ruins',description:'Forgotten signals attract elusive Astromon.',rare:20},{id:2,name:'Meteor crater',description:'Stronger creatures. Your best chance to find Metamon.',rare:32}];
export const missions=[{id:'first',title:'First contact',text:'Catch 1 wild Astromon',stat:'caught',target:1,xp:40,coins:40},{id:'scout',title:'Field researcher',text:'Win 3 wild encounters',stat:'wins',target:3,xp:90,coins:80},{id:'crew',title:'A growing crew',text:'Catch 6 wild Astromon',stat:'caught',target:6,xp:120,coins:100},{id:'worlds',title:'World traveller',text:'Visit 3 different planets',stat:'visited',target:3,xp:150,coins:120},{id:'arena',title:'Stadium debut',text:'Complete 1 PvP battle',stat:'pvp',target:1,xp:100,coins:80},{id:'collector',title:'Cosmic collector',text:'Discover 15 different species',stat:'species',target:15,xp:220,coins:180},{id:'veteran',title:'Sector veteran',text:'Win 20 wild encounters',stat:'wins',target:20,xp:300,coins:250},{id:'explorer',title:'Beyond the frontier',text:'Visit all 10 planets',stat:'visited',target:10,xp:500,coins:500}];
export const xpGoal=level=>80+level*35;
export const maxHp=c=>species[c.species].hp+c.level*7;
export const trainers=[
 {id:'luma',name:'Cadet Luma',species:71,description:'A quick-footed Moonhare companion.'},
 {id:'orion',name:'Ranger Orion',species:70,description:'A loyal Starwolf with a powerful howl.'},
 {id:'vega',name:'Captain Vega',species:73,description:'An observant Astrowl with a precise swoop.'}
];
