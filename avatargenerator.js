// 1. Asset Databases (Raw SVG data strings designed on a 100x100 canvas grid)
const assets = {
    bg: [
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#a2d2ff"/></svg>`, // Blue
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffcdb2"/></svg>`,  // Peach
        `<svg viewBox ="0 0 100 100"><rect width ="100" height ="100" fill="#ffd166"/></svg>`, //green
        `<svg viewBox ="0 0 100 100"><rect width ="100" height ="100" fill="#b5179e"/></svg>`, //spft lavender
        `<svg viewBox ="0 0 100 100"><rect width ="100" height ="100" fill="#f77f00"/></svg>`, //pastel Rose
        `<svg viewBox ="0 0 100 100"><rect width ="100" height ="100" fill="#fefae0"/></svg>`, //soft cream
        `<svg viewBox ="0 0 100 100"><rect width ="100" height ="100" fill="#48cae4"/></svg>`//neon
    ],
    body: [
        // Option 0: Circle base body
        `<svg viewBox="0 0 100 100"><circle cx="50" cy="60" r="25" fill="var(--body-color)"/></svg>`,
        // Option 1: Square base body
        `<svg viewBox="0 0 100 100"><rect x="25" y="40" width="50" height="45" rx="10" fill="var(--body-color)"/></svg>`
    ],

    face: [

        //happy (default)
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="50" r="3" fill="#222"/>
            <circle cx="57" cy="50" r="3" fill="#222"/>
            <path d="M 40 62 Q 50 72 60 62" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
         </svg>`,

         //surprized face
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="48" r="3" fill="#222"/>
            <circle cx="57" cy="48" r="3" fill="#222"/>
            <circle cx="50" cy="62" r="5" fill="#222"/>
         </svg>`,

         //sad face
         `<svg viewBox ="0 0 100 100">
            <circle cx="43" cy="50" r="3" fill="#222"/>
            <circle cx="57" cy="50" r="3" fill="#222"/>
            <path d="M 40 65 Q 50 60 60 65" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,

        //angry face
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            
            <path d="M 37 44 L 48 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 63 44 L 52 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            
            <path d="M 42 66 Q 50 58 58 66" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
         </svg>`,

         //netural
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>

            <line x1="43" y1="66" x2="57" y2="66" stroke="#222" stroke-width="3" stroke-linecap="round"/>
        </svg>`,

        //lazy
        `<svg viewBox="0 0 100 100">
            <path d="M 40 52 Q 43 55 46 52" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 54 52 Q 57 55 60 52" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>

            <circle cx="50" cy="66" r="2" stroke="#222" stroke-width="2" fill="none"/>

        </svg>`,

        //tired
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>

            <line x1="43" y1="66" x2="57" y2="66" stroke="#222" stroke-width="3" stroke-linecap="round"/>

            <path d="M 48 48 L 37 52" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 52 48 L 63 52" stroke="#222" stroke-width="3" stroke-linecap="round"/>

        </svg>`,

        //nervous
         `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>

            <line x1="43" y1="66" x2="57" y2="66" stroke="#222" stroke-width="3" stroke-linecap="round"/>

            <path d="M 44 46 L 37 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 55 46 L 63 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
        </svg>`,

          //naughty
        `<svg viewBox="0 0 100 100">
            <path d="M 40 52 Q 43 55 46 52" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            
            <path d="M 40 62 Q 50 72 60 62" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>

        </svg>`,
    ],
    accessories: [
        `<svg viewBox="0 0 100 100">

        </svg>`,

        // glasses
        `<svg viewBox = "0 0 100 100">
            <circle cx="43" cy="52" r="5" stroke="#222" fill="#888888" stroke-width="2"/>
            <circle cx="57" cy="52" r="5" stroke="#222" fill="#888888" stroke-width="2"/>

            <line x1="48" y1="52" x2="52" y2="52" stroke="#222"/>
        </svg>` ,

        //sunglasses
        `<svg - viewBox = "0 0 100 100">
            <circle cx="43" cy="52" r="5" fill="#222"/>
            <circle cx="57" cy="52" r="5" fill="#222"/>

            <line x1="48" y1="52" x2="52" y2="52" stroke="#222"/>
        </svg>`
    ]
};


let currentSelections = {
    bg: 0,
    body: 0,
    face: 0,
    accessories:0
};

// Main render function to update the DOM
function renderAvatar() {
    document.getElementById('layer-bg').innerHTML = assets.bg[currentSelections.bg];
    document.getElementById('layer-body').innerHTML = assets.body[currentSelections.body];
    document.getElementById('layer-face').innerHTML = assets.face[currentSelections.face];
    document.getElementById('layer-accessories').innerHTML = assets.accessories[currentSelections.accessories];
}

//Controller function triggered by buttons
function changeFeature(featureType, index) {
    currentSelections[featureType] = index;
    renderAvatar();
}

// Initial draw when the page loads
renderAvatar();


//randomize function
function randomize() {
    currentSelections.bg = Math.floor(Math.random() * assets.bg.length);
    currentSelections.face = Math.floor(Math.random() * assets.face.length);
    currentSelections.body = Math.floor(Math.random() * assets.body.length);
    currentSelections.accessories = Math.floor(Math.random() * assets.accessories.length);
    renderAvatar();
}

function changeBodyColor(colorHex) {
    document.documentElement.style.setProperty('--body-color', colorHex);
}