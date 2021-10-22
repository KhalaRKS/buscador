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
    }
]



export default cards



