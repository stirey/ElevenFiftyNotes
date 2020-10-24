/* OBJECTS */

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: "Secret Shopper"},
                {episode: 7, episodeName: "Color Wars"},
                {episode: 8, episodeName: "Wedding Day Sale"},
                {episode: 9, episodeName: "All-Nighter"},
                {episode: 10, episodeName: "Demotion"},
                {episode: 11, episodeName: "Labor"},
            ]
        }
    },
    season2: {},
    season3: {}
}

// console.log(netflix);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); //dot notation allows us to drill into the object
console.log(netflix.season1.seasonInfo.episodeInfo[10].episodeName);


// JSON -> JavaScript Object Notation
//ALLOWS us to take a javascript object, convert it to a text format, and then when the recipient receives the javascript text, convert it back to a //javascript object so they can play with it. It allows you to send info that has to be sent as a text or a string.

//stringified json format
varjson = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam));
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
console.log(Object.keys(garden));
console.log(garden.vegetable);

let inc = 'fruit';

console.log(garden[inc]); //use square brackets, whatevers inside i'm treating as a string, [] are going to find the key based on the string inside

let baking = {};
baking['zuchinni'] = 'better make some bread!';
baking.bestKeyEver = 'zuchinni';

console.log(baking.zuchinni);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);


let g = 'water';
Object.keys(garden).forEach(key => {
    if(key === g) {
        console.log(garden[key]);

    }
})


let favoriteMovie = {
    nameOfMovie: 'The Goonies',
    runTime: 114,
    characters: {
         [
            {name:'Sloth', age: 50, item: [Object]}
            {name:'Data, age: 10, item: [Object]},
        ]
                },
    genre: 'Comedy'
  };
  
console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.characters);


//   {name: 'sloth', age: 60, itemOne: 'babyruth', itemTwo: 'treasure'}, 
//   { name: 'Data', age: 10, itemThree: 'computer', itemFour: 'gadget'} 
// ],

let favoriteMovie = {
    nameOfMovie: 'The Goonies',
    runTime: (114),
    characters: [
      {name: 'sloth', age: (60), items: [['babyruth'],['treasure']]}, 
      { name: 'Data', age: (10), items: [['computer'],['gadget']]} 
    ],
    genre: 'Comedy'
  }
  
  console.log(favoriteMovie.nameOfMovie);
  console.log(favoriteMovie.runTime);
  console.log(favoriteMovie.genre);
  console.log(favoriteMovie.characters);
console.log(favoriteMovie.characters[0].items[0]);

let favoriteMovie = {
    nameOfMovie: 'The Goonies',
    runTime: (114),
    characters: [
      {name: 'sloth', age: (60), items: ['babyruth','treasure']}, 
      { name: 'Data', age: (10), items: ['computer','gadget']} 
    ],
    genre: 'Comedy'
  }
  
console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.genre);
console.log(favoriteMovie.characters);
console.log(favoriteMovie.characters[0].items[0]);
console.log(favoriteMovie.characters[0].items[1]);
console.log(favoriteMovie.characters[1].items[0]);
console.log(favoriteMovie.characters[1].items[1]);
console.log(favoriteMovie.characters[0].name);
console.log(favoriteMovie.characters[1].name);