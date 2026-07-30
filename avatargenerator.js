// 1. Asset Databases (Raw SVG data strings designed on a 100x100 canvas grid)
const assets = {
    bg: [
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#a2d2ff"/></svg>`, // Blue
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffcdb2"/></svg>`, // Peach
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffd166"/></svg>`, // Green/Yellow
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#b5179e"/></svg>`, // Soft Lavender
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#f77f00"/></svg>`, // Pastel Rose
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#fefae0"/></svg>`, // Soft Cream
        `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#48cae4"/></svg>`  // Neon
    ],
    body: [
        // 0. Circle base body
        `<svg viewBox="0 0 100 100"><circle cx="50" cy="60" r="25" fill="var(--body-color)"/></svg>`,
        // 1. Square base body
        `<svg viewBox="0 0 100 100"><rect x="25" y="40" width="50" height="45" rx="10" fill="var(--body-color)"/></svg>`,
        // 2. Egg Body
        `<svg viewBox="0 0 100 100"><path d="M 50 32 C 30 32 22 50 22 66 C 22 80 34 85 50 85 C 66 85 78 80 78 66 C 78 50 70 32 50 32 Z" fill="var(--body-color)"/></svg>`,
        // 3. Blob Body
        `<svg viewBox="0 0 100 100"><path d="M 50 35 C 32 32 20 48 24 68 C 27 82 40 86 54 85 C 70 84 80 74 76 58 C 72 40 65 37 50 35 Z" fill="var(--body-color)"/></svg>`,
        // 4. Hexagon Body
        `<svg viewBox="0 0 100 100"><polygon points="50,33 74,47 74,73 50,87 26,73 26,47" fill="var(--body-color)"/></svg>`,
        // 5. Capsule Body
        `<svg viewBox="0 0 100 100"><rect x="30" y="32" width="40" height="52" rx="20" fill="var(--body-color)"/></svg>`,
        // 6. Ghost Body
        `<svg viewBox="0 0 100 100"><path d="M 28 60 C 28 40 38 34 50 34 C 62 34 72 40 72 60 C 72 75 66 84 64 80 C 60 74 56 82 50 80 C 44 78 40 84 36 80 C 32 75 28 72 28 60 Z" fill="var(--body-color)"/></svg>`
    ],
    face: [
        // Happy (default)
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="50" r="3" fill="#222"/>
            <circle cx="57" cy="50" r="3" fill="#222"/>
            <path d="M 40 62 Q 50 72 60 62" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
         </svg>`,
        // Surprised
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="48" r="3" fill="#222"/>
            <circle cx="57" cy="48" r="3" fill="#222"/>
            <circle cx="50" cy="62" r="5" fill="#222"/>
         </svg>`,
        // Sad
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="50" r="3" fill="#222"/>
            <circle cx="57" cy="50" r="3" fill="#222"/>
            <path d="M 40 65 Q 50 60 60 65" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,
        // Angry
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            <path d="M 37 44 L 48 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 63 44 L 52 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 42 66 Q 50 58 58 66" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
         </svg>`,
        // Neutral
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            <line x1="43" y1="66" x2="57" y2="66" stroke="#222" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        // Lazy
        `<svg viewBox="0 0 100 100">
            <path d="M 40 52 Q 43 55 46 52" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 54 52 Q 57 55 60 52" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="50" cy="66" r="2" stroke="#222" stroke-width="2" fill="none"/>
        </svg>`,
        // Tired
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            <line x1="43" y1="66" x2="57" y2="66" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 48 48 L 37 52" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 52 48 L 63 52" stroke="#222" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        // Nervous
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="3" fill="#222"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            <line x1="43" y1="66" x2="57" y2="66" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 44 46 L 37 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 55 46 L 63 48" stroke="#222" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        // Naughty
        `<svg viewBox="0 0 100 100">
            <path d="M 40 52 Q 43 55 46 52" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="57" cy="52" r="3" fill="#222"/>
            <path d="M 40 62 Q 50 72 60 62" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,
        // Bored
        `<svg viewBox="0 0 100 100">
            <path d="M 38 48 Q 43 52 48 48" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <line x1="38" y1="48" x2="48" y2="48" stroke="#222" stroke-width="2"/>
            <circle cx="43" cy="51" r="2.5" fill="#222"/>
            <path d="M 52 48 Q 57 52 62 48" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <line x1="52" y1="48" x2="62" y2="48" stroke="#222" stroke-width="2"/>
            <circle cx="57" cy="51" r="2.5" fill="#222"/>
            <line x1="38" y1="44" x2="48" y2="45" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="52" y1="45" x2="62" y2="44" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 42 66 Q 50 67 58 64" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,
        // Shocked
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="48" r="5" stroke="#222" stroke-width="2" fill="#fff"/>
            <circle cx="43" cy="48" r="2" fill="#222"/>
            <circle cx="57" cy="48" r="5" stroke="#222" stroke-width="2" fill="#fff"/>
            <circle cx="57" cy="48" r="2" fill="#222"/>
            <path d="M 37 38 Q 43 33 49 38" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 51 38 Q 57 33 63 38" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="65" rx="6" ry="9" fill="#222"/>
        </svg>`,
        // Dizzy
        `<svg viewBox="0 0 100 100">
            <path d="M 43 48 m -4 0 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 m 2 0 a 2 2 0 1 0 4 0" stroke="#222" stroke-width="2" fill="none"/>
            <path d="M 57 48 m -4 0 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 m 2 0 a 2 2 0 1 0 4 0" stroke="#222" stroke-width="2" fill="none"/>
            <path d="M 40 65 Q 45 61 50 65 T 60 65" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,
        // Evil
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="50" r="3" fill="#222"/>
            <circle cx="57" cy="50" r="3" fill="#222"/>
            <path d="M 36 40 L 48 46" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 64 40 L 52 46" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 38 60 Q 50 74 62 60 Z" fill="#222"/>
            <path d="M 40 61 Q 50 67 60 61" stroke="#fff" stroke-width="2" fill="none"/>
        </svg>`,
        // Blush
        `<svg viewBox="0 0 100 100">
            <path d="M 40 50 Q 43 46 46 50" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 54 50 Q 57 46 60 50" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
            <ellipse cx="36" cy="56" rx="5" ry="3" fill="#ff70a6" opacity="0.6"/>
            <ellipse cx="64" cy="56" rx="5" ry="3" fill="#ff70a6" opacity="0.6"/>
            <path d="M 42 63 Q 50 70 58 63" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,
        // Determined
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="50" r="3" fill="#222"/>
            <circle cx="57" cy="50" r="3" fill="#222"/>
            <path d="M 37 43 L 48 45" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M 63 43 L 52 45" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <line x1="42" y1="65" x2="58" y2="65" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>
        </svg>`
    ],
    accessories: [
        // 0. None
        `<svg viewBox="0 0 100 100"></svg>`,
        // 1. Glasses
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="5" stroke="#222" fill="#888888" stroke-width="2" fill-opacity="0.3"/>
            <circle cx="57" cy="52" r="5" stroke="#222" fill="#888888" stroke-width="2" fill-opacity="0.3"/>
            <line x1="48" y1="52" x2="52" y2="52" stroke="#222" stroke-width="2"/>
        </svg>`,
        // 2. Sunglasses
        `<svg viewBox="0 0 100 100">
            <circle cx="43" cy="52" r="5" fill="#222"/>
            <circle cx="57" cy="52" r="5" fill="#222"/>
            <line x1="48" y1="52" x2="52" y2="52" stroke="#222" stroke-width="2"/>
        </svg>`,
        // 3. Hat
        `<svg viewBox="0 0 100 100">
            <path d="M 28 35 L 72 35 L 72 37 L 28 37 Z" fill="#222"/>
            <rect x="36" y="10" width="28" height="25" fill="#222" rx="1"/>
            <rect x="36" y="30" width="28" height="5" fill="#e63946"/>
        </svg>`,
        // 4. Headset
        `<svg viewBox="0 0 100 100">
            <path d="M 22 52 A 28 28 0 0 1 78 52" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
            <rect x="18" y="44" width="8" height="16" rx="3" fill="#e63946"/>
            <rect x="74" y="44" width="8" height="16" rx="3" fill="#e63946"/>
            <path d="M 22 58 Q 22 72 36 72" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="37" cy="72" r="3" fill="#e63946"/>
        </svg>`,
        // 5. Cat Ears
        `<svg viewBox="0 0 100 100">
            <path d="M 24 38 L 32 16 L 44 32 Z" fill="var(--body-color, #ffb703)" stroke="#222" stroke-width="2"/>
            <path d="M 28 35 L 33 22 L 40 32 Z" fill="#ffb7b2"/>
            <path d="M 76 38 L 68 16 L 56 32 Z" fill="var(--body-color, #ffb703)" stroke="#222" stroke-width="2"/>
            <path d="M 72 35 L 67 22 L 60 32 Z" fill="#ffb7b2"/>
        </svg>`,
        // 6. Face Mask
        `<svg viewBox="0 0 100 100">
            <rect x="32" y="58" width="36" height="20" rx="4" fill="#ffffff" stroke="#48cae4" stroke-width="2"/>
            <line x1="32" y1="62" x2="22" y2="58" stroke="#ccc" stroke-width="1.5"/>
            <line x1="32" y1="74" x2="22" y2="68" stroke="#ccc" stroke-width="1.5"/>
            <line x1="68" y1="62" x2="78" y2="58" stroke="#ccc" stroke-width="1.5"/>
            <line x1="68" y1="74" x2="78" y2="68" stroke="#ccc" stroke-width="1.5"/>
        </svg>`,
        // 7. Monocle
        `<svg viewBox="0 0 100 100">
            <circle cx="57" cy="50" r="7" stroke="#ffd700" stroke-width="2" fill="#888" fill-opacity="0.2"/>
            <path d="M 64 50 Q 72 65 65 80" stroke="#ffd700" stroke-width="1.5" fill="none"/>
        </svg>`,
        // 8. Crown
        `<svg viewBox="0 0 100 100">
            <path d="M 30 36 L 25 18 L 38 28 L 50 14 L 62 28 L 75 18 L 70 36 Z" fill="#ffd700" stroke="#d4af37" stroke-width="1.5"/>
            <circle cx="25" cy="18" r="2" fill="#e63946"/>
            <circle cx="50" cy="14" r="2" fill="#48cae4"/>
            <circle cx="75" cy="18" r="2" fill="#e63946"/>
        </svg>`,
        // 9. Bow Tie
        `<svg viewBox="0 0 100 100">
            <polygon points="36,80 36,90 50,85" fill="#d62828"/>
            <polygon points="64,80 64,90 50,85" fill="#d62828"/>
            <circle cx="50" cy="85" r="3" fill="#9e2a2b"/>
        </svg>`
    ]
};

let currentSelections = {
    bg: 0,
    body: 0,
    face: 0,
    accessories: 0
};

// Main render function to update the DOM
function renderAvatar() {
    document.getElementById('layer-bg').innerHTML = assets.bg[currentSelections.bg];
    document.getElementById('layer-body').innerHTML = assets.body[currentSelections.body];
    document.getElementById('layer-face').innerHTML = assets.face[currentSelections.face];
    document.getElementById('layer-accessories').innerHTML = assets.accessories[currentSelections.accessories];
}

// Controller function triggered by buttons
function changeFeature(featureType, index) {
    currentSelections[featureType] = index;
    renderAvatar();
}

// Randomize function
function randomize() {
    currentSelections.bg = Math.floor(Math.random() * assets.bg.length);
    currentSelections.face = Math.floor(Math.random() * assets.face.length);
    currentSelections.body = Math.floor(Math.random() * assets.body.length);
    currentSelections.accessories = Math.floor(Math.random() * assets.accessories.length);
    renderAvatar();
}

// Dynamic body color variable setter
function changeBodyColor(colorHex) {
    document.documentElement.style.setProperty('--body-color', colorHex);
}

function downloadAvatarSVG() {
    // 1. Get current body color from CSS variable
    const currentColor = getComputedStyle(document.documentElement)
                          .getPropertyValue('--body-color').trim() || '#ffb703';
    
    // 2. Combine current active layers into a single SVG string
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="500" height="500">
        <style>:root { --body-color: ${currentColor}; }</style>
        ${assets.bg[currentSelections.bg]}
        ${assets.body[currentSelections.body]}
        ${assets.face[currentSelections.face]}
        ${assets.accessories[currentSelections.accessories]}
    </svg>`;

    // 3. Create a Blob and temporary download link
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = `avatar-${Date.now()}.svg`; // Saves with a unique filename
    
    // 4. Trigger download and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initial draw on load
renderAvatar();
