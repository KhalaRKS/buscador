'use strict'

const cards = [
    {
        name: 'HERMIT',
        hability: 'Shelter',
        breed: 'aquatic',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-02.png'
    },
    {
        name: 'BLUE MOON',
        hability: 'Scale Dart',
        breed: 'aquatic',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-04.png'
    },
    {
        name: 'GOLDFISH',
        hability: 'Switft Escape',
        breed: 'aquatic',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-06.png'

    },
    {
        name: 'SPONGE',
        hability: 'Shipwreck',
        breed: 'aquatic',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-08.png'
    },
    {
        name: 'ANEMONE',
        hability: 'Aqua Vitality',
        breed: 'aquatic',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-10.png'
    },
    {
        name: 'PERCH',
        hability: 'Spinal Tap',
        breed: 'aquatic',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-back-12.png'

    },
    {
        name: 'BABYLONIA',
        hability: 'Shell Jab',
        breed: 'aquatic',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-02.png'
    },
    {
        name: 'TEAL SHELL',
        hability: 'Deep Sea Gore',
        breed: 'aquatic',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-04.png'
    },
    {
        name: 'CLAMSHELL',
        hability: 'Clam Slash',
        breed: 'aquatic',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-06.png'

    },
    {
        name: 'ANEMONE',
        hability: 'Aquaponics',
        breed: 'Aquatic',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-08.png'
    },
    {
        name: 'Oranda',
        breed: 'Aquatic',
        hability: 'Hero\'s Bane',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-10.png'
    },
    {
        name: 'SHOAL STAR',
        hability: 'Star Shuriken',
        breed: 'aquatic',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-horn-12.png'

    },
    {
        name: 'LAM',
        hability: 'Angry Lam',
        breed: 'aquatic',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-02.png'
    },
    {
        name: 'CATFISH',
        hability: 'Swallow',
        breed: 'aquatic',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-04.png'
    },
    {
        name: 'RISKY FISH',
        hability: 'Fish Hook',
        breed: 'aquatic',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-08.png'
    },
    {
        name: 'PIRANHA',
        hability: 'Crimson Water',
        breed: 'aquatic',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-mouth-10.png'
    },
    {
        name: 'KOI',
        hability: 'Upstream Swim',
        breed: 'aquatic',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-02.png'
    },
    {
        name: 'NIMO',
        hability: 'Tail Slap',
        breed: 'aquatic',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-04.png'
    },
    {
        name: 'TADPOLE',
        hability: 'Black Bubble',
        breed: 'aquatic',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-06.png'
    },
    {
        name: 'RANCHU',
        hability: 'Water Sphere',
        breed: 'aquatic',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-08.png'
    },
    {
        name: 'NAVAGA',
        hability: 'Flanking Smack',
        breed: 'aquatic',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-10.png'
    },
    {
        name: 'SHRIMP',
        hability: 'Chitin Jump',
        breed: 'aquatic',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/aquatic-tail-12.png'

    }, /* --------------------             ------------          CARTAS BESTIA --------------         ------------------*/
    {
        name: 'RONIN',
        hability: 'Single Combat',
        breed: 'beast',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-02.png'
    }, 
    {
        name: 'HERO',
        hability: 'Heroic Reward',
        breed: 'beast',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-04.png'
    }, 
    {
        name: 'JAGUAR',
        hability: 'Nitro Leap',
        breed: 'beast',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-06.png'
    }, 
    {
        name: 'RISKY BEAST',
        hability: 'Revenge Arrow',
        breed: 'beast',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-08.png'
    }, 
    {
        name: 'TIMBER',
        hability: 'Woodman Power',
        breed: 'beast',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-10.png'
    }, 
    {
        name: 'FURBALL',
        hability: 'Juggling Balls',
        breed: 'beast',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-back-12.png'
    }, 
    {
        name: 'LITTLE BRANCH',
        hability: 'Branch Charge',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-02.png'
    }, 
    {
        name: 'IMP',
        hability: 'Ivory Stab',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-04.png'
    }, 
    {
        name: 'MERRY',
        hability: 'Merry Legion',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-06.png'
    }, 
    {
        name: 'Pocky',
        hability: 'Sugar Rush',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-08.png'
    }, 
    {
        name: 'DUAL BLADE',
        hability: 'Sinister Strike',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-10.png'
    }, 
    {
        name: 'ARCO',
        hability: 'Acrobatic',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-horn-12.png'
    }, 
    {
        name: 'NUT CRACKER',
        hability: 'Nut Crack',
        breed: 'beast',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-mouth-02.png'
    }, 
    {
        name: 'GODA',
        hability: 'Piercing Sound',
        breed: 'beast',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-mouth-04.png'
    }, 
    {
        name: 'AXIE KISS',
        hability: 'Death Mark',
        breed: 'beast',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-mouth-08.png'
    }, 
    {
        name: 'CONFIDENT',
        hability: 'Self Rally',
        breed: 'beast',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-mouth-10.png'
    }, 
    {
        name: 'COTTONTAIL',
        hability: 'Luna Absorb',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-02.png'
    }, 
    {
        name: 'RICE',
        hability: 'Night Steal',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-04.png'
    }, 
    {
        name: 'SHIBA',
        hability: 'Rampant Howl',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-06.png'
    }, 
    {
        name: 'HARE',
        hability: 'Hare Dagger',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-08.png'
    }, 
    {
        name: 'Nut Cracker',
        hability: 'Nut Throw',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-10.png'
    }, 
    {
        name: 'GERBIL',
        hability: 'Gerbil Jump',
        breed: 'beast',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/beast-tail-12.png'
    },
    /*--------------------INICIO PLANTAS -------------------------- */
    {
        name: 'TURNIP',
        hability: 'Turnip Rocket',
        breed: 'plant',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-back-02.png'
    }, 
    {
        name: 'SHIITAKE',
        breed: 'plant',
        hability: 'Shroom\'s Grace',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-back-04.png'
    }, 
    {
        name: 'BIDENS',
        hability: 'Cleanse Scent',
        breed: 'plant',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-back-06.png'
    }, 
    {
        name: 'WATERING CAN',
        hability: 'Aqua Stock',
        breed: 'plant',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-back-08.png'
    }, 
    {
        name: 'MINT',
        hability: 'Refresh',
        breed: 'plant',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-back-10.png'
    }, 
    {
        name: 'PUMPKIN',
        hability: 'October Treat',
        breed: 'plant',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-back-12.png'
    }, 
    {
        name: 'BAMBOO SHOOT',
        hability: 'Bamboo Clan',
        breed: 'plant',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-horn-02.png'
    }, 
    {
        name: 'BEECH',
        hability: 'Wooden Stab',
        breed: 'plant',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-horn-04.png'
    }, 
    {
        name: 'ROSE BUD',
        hability: 'Healing Aroma',
        breed: 'plant',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-horn-06.png'
    }, 
    {
        name: 'STRAWBERRY SHORTCAKE',
        hability: 'Sweet Party',
        breed: 'plant',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-horn-08.png'
    }, 
    {
        name: 'CACTUS',
        hability: 'Prickly Trap',
        breed: 'plant',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-horn-10.png'
    }, 
    {
        name: 'WATERMELON',
        hability: 'Seed Bullet',
        breed: 'plant',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-horn-12.png'
    }, 
    {
        name: 'SERIOUS',
        hability: 'Vegetal Bite',
        breed: 'plant',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-mouth-02.png'
    }, 
    {
        name: 'ZIGZAG',
        hability: 'Drain Bite',
        breed: 'plant',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-mouth-04.png'
    }, 
    {
        name: 'HERBIVORE',
        hability: 'Vegan Diet',
        breed: 'plant',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-mouth-08.png'
    }, 
    {
        name: 'SILENCE WHISPER',
        hability: 'Forest Spirit',
        breed: 'plant',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-mouth-10.png'
    }, 
    {
        name: 'CARROT',
        hability: 'Carrot Hammer',
        breed: 'plant',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-tail-02.png'
    }, 
    {
        name: 'CATTAIL',
        hability: 'Cattail Slap',
        breed: 'plant',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-tail-04.png'
    }, 
    {
        name: 'HATSUNE',
        hability: 'Leek Leak',
        breed: 'plant',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-tail-06.png'
    }, 
    {
        name: 'YAM',
        hability: 'Gas Unleash',
        breed: 'plant',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-tail-08.png'
    }, 
    {
        name: 'POTATO LEAF',
        hability: 'Aqua Deflect',
        breed: 'plant',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-tail-10.png'
    }, 
    {
        name: 'HOT BUTT',
        hability: 'Spicy Surprise',
        breed: 'plant',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/plant-tail-12.png'
    },
    /*--------------------------CARTAS PAJARO-------------------------------- */
    {
        name: 'BALLOON',
        hability: 'Balloon Pop',
        breed: 'bird',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-back-02.png'
    }, 
    {
        name: 'CUPID',
        breed: 'bird',
        hability: 'Heart Break',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-back-04.png'
    }, 
    {
        name: 'RAVEN',
        hability: 'Ill-omened',
        breed: 'bird',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-back-06.png'
    }, 
    {
        name: 'PIGEON POST',
        hability: 'Blackmail',
        breed: 'bird',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-back-08.png'
    }, 
    {
        name: 'KINGFISHER',
        hability: 'Patient Hunter',
        breed: 'bird',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-back-10.png'
    }, 
    {
        name: 'TRI FEATHER',
        hability: 'Triple Threat',
        breed: 'bird',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-back-12.png'
    }, 
    {
        name: 'EGGSHELL',
        hability: 'Eggbomb',
        breed: 'bird',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-horn-02.png'
    }, 
    {
        name: 'CUCKOO',
        hability: 'Cockadoodledoo',
        breed: 'bird',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-horn-04.png'
    }, 
    {
        name: 'TRUMP',
        hability: 'Air Force One',
        breed: 'bird',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-horn-06.png'
    }, 
    {
        name: 'KESTREL',
        hability: 'Headshot',
        breed: 'bird',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-horn-08.png'
    }, 
    {
        name: 'WING HORN',
        hability: 'Smart Shot',
        breed: 'bird',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-horn-10.png'
    }, 
    {
        name: 'FEATHER SPEAR',
        hability: 'Feather Lunge',
        breed: 'bird',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-horn-12.png'
    }, 
    {
        name: 'DOUBLETALK',
        hability: 'Soothing Song',
        breed: 'bird',
        distance: true,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-mouth-02.png'
    }, 
    {
        name: 'PEACE MAKER',
        hability: 'Peace Treaty',
        breed: 'bird',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-mouth-04.png'
    }, 
    {
        name: 'HUNGRY BIRD',
        hability: 'Insectivore',
        breed: 'bird',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-mouth-08.png'
    }, 
    {
        name: 'LITTLE OWL',
        hability: 'Dark Swoop',
        breed: 'bird',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-mouth-10.png'
    }, 
    {
        name: 'SWALLOW',
        hability: 'Early Bird',
        breed: 'bird',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-tail-02.png'
    }, 
    {
        name: 'FEATHER FAN',
        hability: 'Sunder Armor',
        breed: 'bird',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-tail-04.png'
    }, 
    {
        name: 'THE LAST ONE',
        hability: 'Risky Feather',
        breed: 'bird',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-tail-06.png'
    }, 
    {
        name: 'CLOUD',
        hability: 'Puffy Smack',
        breed: 'bird',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-tail-08.png'
    }, 
    {
        name: 'GRANMA\'S FAN',
        hability: 'Cool Breeze',
        breed: 'bird',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-tail-10.png'
    }, 
    {
        name: 'POST FIGHT',
        hability: 'All-out Shot',
        breed: 'bird',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bird-tail-12.png'
    },
    /*--------------------CARTAS BUG---------------------- */
    {
        name: 'SNAIL SHELL',
        hability: 'Sticky Goo',
        breed: 'bug',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-back-02.png'
    }, 
    {
        name: 'GARISH WORM',
        hability: 'Barb Strike',
        breed: 'bug',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-back-04.png'
    }, 
    {
        name: 'BUZZ BUZZ',
        hability: 'Bug Noise',
        breed: 'bug',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-back-06.png'
    }, 
    {
        name: 'SANDAL',
        hability: 'Bug Splat',
        breed: 'bug',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-back-08.png'
    }, 
    {
        name: 'SCARAB',
        hability: 'Scarab Curse',
        breed: 'bug',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-back-10.png'
    }, 
    {
        name: 'SPIKY WING',
        hability: 'Buzzing Wind',
        breed: 'bug',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-back-12.png'
    }, 
    {
        name: 'LAGGIN',
        hability: 'Mystic Rush',
        breed: 'bug',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-horn-02.png'
    }, 
    {
        name: 'ANTENNA',
        hability: 'Bug Signal',
        breed: 'bug',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-horn-04.png'
    }, 
    {
        name: 'CATERPILLARS',
        hability: 'Grub Surprise',
        breed: 'bug',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-horn-06.png'
    }, 
    {
        name: 'PLIERS',
        hability: 'Dull Grip',
        breed: 'bug',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-horn-08.png'
    }, 
    {
        name: 'PARASITE',
        hability: 'Third Glance',
        breed: 'bug',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-horn-10.png'
    }, 
    {
        name: 'LEAF BUG',
        hability: 'Disguise',
        breed: 'bug',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-horn-12.png'
    }, 
    {
        name: 'MOSQUITO',
        hability: 'Blood Taste',
        breed: 'bug',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-mouth-02.png'
    }, 
    {
        name: 'PINCER',
        hability: 'Sunder Claw',
        breed: 'bug',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-mouth-04.png'
    }, 
    {
        name: 'CUTE BUNNY',
        hability: 'Terror Chomp',
        breed: 'bug',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-mouth-08.png'
    }, 
    {
        name: 'SQUARE TEETH',
        hability: 'Mite Bite',
        breed: 'bug',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-mouth-10.png'
    }, 
    {
        name: 'ANT',
        hability: 'Chemical Warfare',
        breed: 'bug',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-02.png'
    }, 
    {
        name: 'TWIN TAIL',
        hability: 'Twin Needle',
        breed: 'bug',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-04.png'
    }, 
    {
        name: 'FISH SNACK',
        hability: 'Anesthetic Bait',
        breed: 'bug',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-06.png'
    }, 
    {
        name: 'GRAVEL ANT',
        hability: 'Numbing Lecretion',
        breed: 'bug',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-08.png'
    }, 
    {
        name: 'PUPAE',
        hability: 'Grub Explode',
        breed: 'bug',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-10.png'
    }, 
    {
        name: 'THORNY CATTEPILAR',
        hability: 'Allergic Reaction',
        breed: 'bug',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/bug-tail-12.png'
    },
    /*--------------------------------------------- CARTAS REPTIL -------------------------------*/
    {
        name: 'BONE SAIL, RUGGED SAIL',
        hability: 'Ivory Chop',
        breed: 'reptile',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-back-02.png'
    }, 
    {
        name: 'TRI SPIKES',
        hability: 'Spike Throw',
        breed: 'reptile',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-back-04.png'
    }, 
    {
        name: 'GREEN THORNS',
        hability: 'Vine Dagger',
        breed: 'reptile',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-back-06.png'
    }, 
    {
        name: 'INDIAN STAR',
        hability: 'Bulkwark',
        breed: 'reptile',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-back-08.png'
    }, 
    {
        name: 'RED EAR',
        hability: 'Slippery Shield',
        breed: 'reptile',
        distance: false,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-back-10.png'
    }, 
    {
        name: 'CROC',
        hability: 'Nile Strike',
        breed: 'reptile',
        distance: true,
        part: 'back',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-back-12.png'
    }, 
    {
        name: 'UNKO, PINKU UNKO',
        hability: 'Poo Fling',
        breed: 'reptile',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-02.png'
    }, 
    {
        name: 'SCALY SPEAR',
        hability: 'Scaly Lunge',
        breed: 'reptile',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-04.png'
    }, 
    {
        name: 'CERASTES',
        hability: 'Surprise Invasion',
        breed: 'reptile',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-06.png'
    }, 
    {
        name: 'SCALY SPOON',
        hability: 'Tiny Catapult',
        breed: 'reptile',
        distance: true,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-08.png'
    }, 
    {
        name: 'INCISOR',
        hability: 'Disarm',
        breed: 'reptile',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-10.png'
    }, 
    {
        name: 'BUMPY',
        hability: 'Overgrow Keratin',
        breed: 'reptile',
        distance: false,
        part: 'horn',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-horn-12.png'
    }, 
    {
        name: 'TOOTHLESS BITE, VENOM BITE',
        hability: 'Sneaky Raid',
        breed: 'reptile',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-mouth-02.png'
    }, 
    {
        name: 'KOTARO',
        hability: 'Kotaro bite',
        breed: 'reptile',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-mouth-04.png'
    }, 
    {
        name: 'RAZOR BITE',
        hability: 'Why So Serious',
        breed: 'reptile',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-mouth-08.png'
    }, 
    {
        name: 'TINY TURTLE',
        hability: 'Chomp',
        breed: 'reptile',
        distance: false,
        part: 'mouth',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-mouth-10.png'
    }, 
    {
        name: 'WALL GECKO, ESCAPED GECKO',
        hability: 'Critical Escape',
        breed: 'reptile',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-tail-02.png'
    }, 
    {
        name: 'IGUANA',
        hability: 'Scale Dart',
        breed: 'reptile',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-tail-04.png'
    }, 
    {
        name: 'TINY DINO',
        hability: 'Tiny Swing',
        breed: 'reptile',
        distance: false,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-tail-06.png'
    }, 
    {
        name: 'SNAKE JAR',
        hability: 'Jar Barrage',
        breed: 'reptile',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-tail-08.png'
    }, 
    {
        name: 'GILA',
        hability: 'Neuro Toxin',
        breed: 'reptile',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-tail-10.png'
    }, 
    {
        name: 'GRASS SNAKE',
        hability: 'Venom Spray',
        breed: 'reptile',
        distance: true,
        part: 'tail',
        url: 'https://storage.googleapis.com/axie-cdn/game/cards/base/reptile-tail-12.png'
    },
]



export default cards



