let selectedColor = null;
let mixing = false;

function selectColor(color) {
    selectedColor = color;
    mixing = false;
}

function clearCanvas() {
    const canvas = document.getElementById('mixCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
}

function mixColors(color1, color2) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const mixedColor = {
        r: Math.min(255, Math.floor((c1.r + c2.r) / 2)),
        g: Math.min(255, Math.floor((c1.g + c2.g) / 2)),
        b: Math.min(255, Math.floor((c1.b + c2.b) / 2)),
    };
    return `rgb(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`;
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    const toHex = (x) => x.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('mixCanvas');
    const context = canvas.getContext('2d');
    let lastColor = null;

    canvas.addEventListener('mousedown', function(event) {
        mixing = true;
        lastColor = selectedColor;
    });

    canvas.addEventListener('mouseup', function() {
        mixing = false;
    });

    canvas.addEventListener('mousemove', function(event) {
        if (mixing && selectedColor) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (lastColor) {
                const mixedColor = mixColors(lastColor, selectedColor);
                context.fillStyle = mixedColor;
            } else {
                context.fillStyle = selectedColor;
            }

            context.beginPath();
            context.arc(x, y, 10, 0, 2 * Math.PI);
            context.fill();

            lastColor = selectedColor;
        }
    });
});