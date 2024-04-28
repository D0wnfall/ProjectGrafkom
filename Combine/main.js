var mouseX = 0, mouseY = 0;
var prevMouseX = 0, prevMouseY = 0;
var isMouseDown = false;

var keysPressed = {
    w: false,
    a: false,
    s: false,
    d: false
};

//--------------------------------------kirby------------------------------------

// Sphere
function generateBadan(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [255 / 255, 165 / 255, 170 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generateKaki(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [217 / 255, 24 / 255, 71 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generateKaki2(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [217 / 255, 24 / 255, 71 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generateTangan(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [255 / 255, 165 / 255, 170 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generateTangan2(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [255 / 255, 165 / 255, 170 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generateMata(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [0 / 255, 0 / 255, 0 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generateMata2(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [0 / 255, 0 / 255, 0 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generatePupil(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [255 / 255, 255 / 255, 255 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Sphere
function generatePupil2(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];
    var rainbowColors = [
        [255 / 255, 255 / 255, 255 / 255]
    ];


    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ScaleX;
            var yCoord = sinLon * cosLat * ScaleY;
            var zCoord = sinLat * ScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}


//eliptic paraboloid
function generateTopi(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];



    var rainbowColors = [
        [206 / 255, 192 / 255, 166 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var vLat = latAngle;

        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * Math.max(0, (j / segments));
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);

            var xCoord = cosLon * vLat * ScaleX;
            var yCoord = sinLon * vLat * ScaleY;
            var zCoord = Math.pow(vLat, 2) * ScaleZ;

            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;

            vertices.push(vertexX, vertexY, vertexZ);

            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }

    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

//generate tongkat
function generateTongkat(x, y, z, radius, height, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [0 / 255, 255 / 255, 100 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var angle = 2 * Math.PI * (i / segments);
        var sinAngle = Math.sin(angle);
        var cosAngle = Math.cos(angle);

        for (var j = 0; j <= segments; j++) {
            var heightFraction = j / segments;
            var xCoord = radius * cosAngle * ScaleX;
            var yCoord = radius * sinAngle * ScaleY;
            var zCoord = height * heightFraction - height / 2 * ScaleZ;

            var vertexX = x + xCoord;
            var vertexY = y + yCoord;
            var vertexZ = z + zCoord;

            vertices.push(vertexX, vertexY, vertexZ);

            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }

    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

//Metaknight

// Bagian Kepala Dan Wajah
function generateKepalaM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [28 / 255, 22 / 255, 120 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Mata
function generateMataM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [255 / 255, 255 / 255, 0 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Blush
function generateBlushM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [255 / 255, 128 / 255, 255 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

function generateMaskM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [204 / 255, 204 / 255, 204 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}


// Bagian Lengan dan Tangan
function generateLenganM(x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [28 / 255, 22 / 255, 120 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var angle = 2 * Math.PI * (i / segments);
        var sinAngle = Math.sin(angle);
        var cosAngle = Math.cos(angle);
        for (var j = 0; j <= segments; j++) {
            var heightFraction = j / segments;
            var xCoord = radius * cosAngle * scaleX;
            var yCoord = radius * sinAngle * scaleY;
            var zCoord = (height * heightFraction - height / 2) * scaleZ;
            // Rotasi
            var rotatedX = xCoord * Math.cos(rotationZ) - yCoord * Math.sin(rotationZ);
            var rotatedY = xCoord * Math.sin(rotationZ) + yCoord * Math.cos(rotationZ);
            var rotatedZ = zCoord;
            // Pemutaran tambahan untuk diagonal
            rotatedY = rotatedY * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
            rotatedZ = rotatedY * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);
            // Rotasi horizontal (rotasi pada sumbu Y)
            var rotatedXHorizontal = rotatedX * Math.cos(rotationY) - rotatedZ * Math.sin(rotationY);
            rotatedZ = rotatedX * Math.sin(rotationY) + rotatedZ * Math.cos(rotationY);
            rotatedX = rotatedXHorizontal;
            var vertexX = x + rotatedX;
            var vertexY = y + rotatedY;
            var vertexZ = z + rotatedZ;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

function generateTanganM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [1.1, 1.1, 1.1]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

function generatePedangM(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ, rotationX, rotationY, rotationZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [255 / 255, 215 / 255, 0 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var vLat = latAngle;

        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * Math.max(0, (j / segments));
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);

            var xCoord = cosLon * vLat * ScaleX;
            var yCoord = sinLon * vLat * ScaleY;
            var zCoord = Math.pow(vLat, 2) * ScaleZ;
            // Rotasi
            var rotatedX = xCoord * Math.cos(rotationZ) - yCoord * Math.sin(rotationZ);
            var rotatedY = xCoord * Math.sin(rotationZ) + yCoord * Math.cos(rotationZ);
            var rotatedZ = zCoord;
            // Pemutaran tambahan untuk diagonal
            rotatedY = rotatedY * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
            rotatedZ = rotatedY * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);
            // Rotasi horizontal (rotasi pada sumbu Y)
            var rotatedXHorizontal = rotatedX * Math.cos(rotationY) - rotatedZ * Math.sin(rotationY);
            rotatedZ = rotatedX * Math.sin(rotationY) + rotatedZ * Math.cos(rotationY);
            rotatedX = rotatedXHorizontal;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;

            vertices.push(vertexX, vertexY, vertexZ);

            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }

    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}


function generateHandleM(x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [0 / 255, 128 / 255, 255 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var angle = 2 * Math.PI * (i / segments);
        var sinAngle = Math.sin(angle);
        var cosAngle = Math.cos(angle);
        for (var j = 0; j <= segments; j++) {
            var heightFraction = j / segments;
            var xCoord = radius * cosAngle * scaleX;
            var yCoord = radius * sinAngle * scaleY;
            var zCoord = (height * heightFraction - height / 2) * scaleZ;
            // Rotasi
            var rotatedX = xCoord * Math.cos(rotationZ) - yCoord * Math.sin(rotationZ);
            var rotatedY = xCoord * Math.sin(rotationZ) + yCoord * Math.cos(rotationZ);
            var rotatedZ = zCoord;
            // Pemutaran tambahan untuk diagonal
            rotatedY = rotatedY * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
            rotatedZ = rotatedY * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);
            // Rotasi horizontal (rotasi pada sumbu Y)
            var rotatedXHorizontal = rotatedX * Math.cos(rotationY) - rotatedZ * Math.sin(rotationY);
            rotatedZ = rotatedX * Math.sin(rotationY) + rotatedZ * Math.cos(rotationY);
            rotatedX = rotatedXHorizontal;
            var vertexX = x + rotatedX;
            var vertexY = y + rotatedY;
            var vertexZ = z + rotatedZ;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

function generateOrnamenM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [255 / 255, 215 / 255, 0 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

// Bagian Kaki
function generateKakiM(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [129 / 255, 104 / 255, 157 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
            var xCoord = cosLon * cosLat * ovalScaleX;
            var yCoord = sinLon * cosLat * ovalScaleY;
            var zCoord = sinLat * ovalScaleZ;
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
            vertices.push(vertexX, vertexY, vertexZ);
            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

//Pohon
function generatePohon(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];

    var angleIncrement = (2 * Math.PI) / segments;

    var rainbowColors = [
        [53 / 255, 107 / 255, 22 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var vLat = latAngle;

        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * Math.max(0, (j / segments));
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);

            var xCoord = cosLon * vLat * ScaleX;
            var yCoord = sinLon * vLat * ScaleY;
            var zCoord = Math.pow(vLat, 2) * ScaleZ;

            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;

            vertices.push(vertexX, vertexY, vertexZ);

            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }

    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}

function generateLog(x, y, z, radius, height, segments, ScaleX, ScaleY, ScaleZ) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [
        [135 / 255, 62 / 255, 35 / 255]
    ];

    for (var i = 0; i <= segments; i++) {
        var angle = 2 * Math.PI * (i / segments);
        var sinAngle = Math.sin(angle);
        var cosAngle = Math.cos(angle);

        for (var j = 0; j <= segments; j++) {
            var heightFraction = j / segments;
            var xCoord = radius * cosAngle * ScaleX;
            var yCoord = radius * sinAngle * ScaleY;
            var zCoord = height * heightFraction - height / 2 * ScaleZ;

            var vertexX = x + xCoord;
            var vertexY = y + yCoord;
            var vertexZ = z + zCoord;

            vertices.push(vertexX, vertexY, vertexZ);

            var colorIndex = j % rainbowColors.length;
            colors = colors.concat(rainbowColors[colorIndex]);
        }
    }

    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;

            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    return { vertices: vertices, colors: colors, faces: faces };
}





function updateViewMatrix() {
    var sensitivity = 0.001; // Adjust sensitivity here
    var dx = mouseX - prevMouseX;
    var dy = mouseY - prevMouseY;

    // Rotate the view matrix based on mouse movement
    LIBS.rotateY(VIEW_MATRIX, -dx);
    LIBS.rotateX(VIEW_MATRIX, -dy);

    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

function main() {
    var CANVAS = document.getElementById("mycanvas");

    CANVAS.width = window.innerWidth;
    CANVAS.height = window.innerHeight;

    var GL;
    try {
        GL = CANVAS.getContext("webgl", { antialias: true });
        var EXT = GL.getExtension("OES_element_index_uint");
    } catch (e) {
        alert("WebGL context cannot be initialized");
        return false;
    }

    //shaders
    var shader_vertex_source = `
    attribute vec3 position;
    attribute vec3 color;

    uniform mat4 PMatrix;
    uniform mat4 VMatrix;
    uniform mat4 MMatrix;
    
    varying vec3 vColor;
    void main(void) {
    gl_Position = PMatrix*VMatrix*MMatrix*vec4(position, 1.);
    vColor = color;
    }`;
    var shader_fragment_source = `
    precision mediump float;
    varying vec3 vColor;
      // uniform vec3 color;
    void main(void) {
    gl_FragColor = vec4(vColor, 1.);
    
    }`;
    var compile_shader = function (source, type, typeString) {
        var shader = GL.createShader(type);
        GL.shaderSource(shader, source);
        GL.compileShader(shader);
        if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
            alert("ERROR IN " + typeString + " SHADER: " + GL.getShaderInfoLog(shader));
            return false;
        }
        return shader;
    };

    var shader_vertex = compile_shader(shader_vertex_source, GL.VERTEX_SHADER, "VERTEX");
    var shader_fragment = compile_shader(shader_fragment_source, GL.FRAGMENT_SHADER, "FRAGMENT");

    var SHADER_PROGRAM = GL.createProgram();
    GL.attachShader(SHADER_PROGRAM, shader_vertex);
    GL.attachShader(SHADER_PROGRAM, shader_fragment);

    GL.linkProgram(SHADER_PROGRAM);


    var _color = GL.getAttribLocation(SHADER_PROGRAM, "color");
    var _position = GL.getAttribLocation(SHADER_PROGRAM, "position");


    //uniform
    var _PMatrix = GL.getUniformLocation(SHADER_PROGRAM, "PMatrix"); //projection
    var _VMatrix = GL.getUniformLocation(SHADER_PROGRAM, "VMatrix"); //View
    var _MMatrix = GL.getUniformLocation(SHADER_PROGRAM, "MMatrix"); //Model


    GL.enableVertexAttribArray(_color);
    GL.enableVertexAttribArray(_position);
    GL.useProgram(SHADER_PROGRAM);

    // Badan 
    var badan = generateBadan(0, 0, 0.5, 1, 100, 1, 1, 1); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX1 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX1);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(badan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS1 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS1);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(badan.colors), GL.STATIC_DRAW);
    var TUBE_FACES1 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES1);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(badan.faces), GL.STATIC_DRAW);

    // kaki 
    var kaki = generateKaki(-0.5, -0.95, 0.8, 1, 100, 0.5, 0.2, 0.7); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX2 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX2);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS2 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS2);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki.colors), GL.STATIC_DRAW);
    var TUBE_FACES2 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES2);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kaki.faces), GL.STATIC_DRAW);

    // kaki 
    var kaki2 = generateKaki2(0.5, -0.95, 0.8, 1, 100, 0.5, 0.2, 0.7); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX3 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX3);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki2.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS3 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS3);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki2.colors), GL.STATIC_DRAW);
    var TUBE_FACES3 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES3);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kaki2.faces), GL.STATIC_DRAW);

    // tangan 
    var tangan = generateTangan(0.8, -0.3, 0.5, 1, 100, 0.4, 0.4, 0.4); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX4 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX4);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS4 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS4);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan.colors), GL.STATIC_DRAW);
    var TUBE_FACES4 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES4);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tangan.faces), GL.STATIC_DRAW);

    // tangan2 
    var tangan2 = generateTangan2(-0.8, -0.3, 0.5, 1, 100, 0.4, 0.4, 0.4); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX5 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX5);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan2.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS5 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS5);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan2.colors), GL.STATIC_DRAW);
    var TUBE_FACES5 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES5);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tangan2.faces), GL.STATIC_DRAW);

    //mata
    var mata = generateMata(0.2, 0.1, 1.45, 0.1, 100, 0.7, 1.8, 0.7); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX6 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX6);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS6 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS6);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata.colors), GL.STATIC_DRAW);
    var TUBE_FACES6 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES6);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mata.faces), GL.STATIC_DRAW);

    //mata
    var mata2 = generateMata2(-0.2, 0.1, 1.45, 0.1, 100, 0.7, 1.8, 0.7); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX7 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX7);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata2.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS7 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS7);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata2.colors), GL.STATIC_DRAW);
    var TUBE_FACES7 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES7);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mata2.faces), GL.STATIC_DRAW);

    //topi
    var topi = generateTopi(0, 0.5, -1.2, 0.3, 100, 2, 2, 1);
    var TUBE_VERTEX8 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX8);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(topi.vertices), GL.STATIC_DRAW);

    var TUBE_COLORS8 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS8);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(topi.colors), GL.STATIC_DRAW);

    var TUBE_FACES8 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES8);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(topi.faces), GL.STATIC_DRAW);

    //pupil
    var pupil = generatePupil(0.2, 0.17, 1.49, 0.1, 100, 0.3, 0.9, 0.3); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX9 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX9);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pupil.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS9 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS9);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pupil.colors), GL.STATIC_DRAW);
    var TUBE_FACES9 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES9);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(pupil.faces), GL.STATIC_DRAW);

    //pupil2
    var pupil2 = generatePupil2(-0.2, 0.17, 1.49, 0.1, 100, 0.3, 0.9, 0.3); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX10 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX10);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pupil2.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS10 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS10);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pupil2.colors), GL.STATIC_DRAW);
    var TUBE_FACES10 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES10);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(pupil2.faces), GL.STATIC_DRAW);

    //tongkat
    var tongkat = generateTongkat(1, -0.56, 0, 0.35, 3, 10, 0.325, 0.325, 1); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX11 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX11);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tongkat.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS11 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS11);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tongkat.colors), GL.STATIC_DRAW);
    var TUBE_FACES11 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES11);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tongkat.faces), GL.STATIC_DRAW);

    //badan metaknight
    var badanMetaknight = generateKepalaM(3.5, 0, 0.5, 1, 100, 1, 1, 1);
    var TUBE_VERTEX12 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX12);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(badanMetaknight.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS12 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS12);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(badanMetaknight.colors), GL.STATIC_DRAW);
    var TUBE_FACES12 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES12);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(badanMetaknight.faces), GL.STATIC_DRAW);

    // Mata kanan: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var mata_Kanan = generateMataM(3.8, 0.1, 1.4, 0.175, 100, 0.7, 1.8, 0.7);
    var TUBE_VERTEX13 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX13);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS13 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS13);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES13 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES13);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mata_Kanan.faces), GL.STATIC_DRAW);

    // Mata kiri: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var mata_Kiri = generateMataM(3.2, 0.1, 1.4, 0.175, 100, 0.7, 1.8, 0.7);
    var TUBE_VERTEX14 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX14);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS14 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS14);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES14 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES14);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mata_Kiri.faces), GL.STATIC_DRAW);

    //                                              Bagian Tangan
    // Lengan Kanan: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var lengan_kanan = generateLenganM(4.6, 0, 0.5, 1, 1, 100, 0.2, 0.2, 0.4, 0, (Math.PI / 2), 0);
    var TUBE_VERTEX15 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX15);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS15 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS15);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES15 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES15);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(lengan_kanan.faces), GL.STATIC_DRAW);

    // Lengan Kiri: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var lengan_kiri = generateLenganM(2.35, 0, 0.5, 1, 1, 100, 0.2, 0.2, 0.4, 0, (Math.PI / 2), 0);
    var TUBE_VERTEX16 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX16);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS16 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS16);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES16 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES16);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(lengan_kiri.faces), GL.STATIC_DRAW);

    // Lengan Kiri: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var tanganM_kiri = generateTanganM(2, 0, 0.6, 0.5, 100, 0.8, 0.8, 0.8);
    var TUBE_VERTEX17 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX17);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tanganM_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS17 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS17);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tanganM_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES17 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES17);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tanganM_kiri.faces), GL.STATIC_DRAW);

    // Lengan Kiri: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var tanganM_Kanan = generateTanganM(5, 0, 0.6, 0.5, 100, 0.8, 0.8, 0.8);
    var TUBE_VERTEX18 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX18);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tanganM_Kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS18 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS18);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tanganM_Kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES18 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES18);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tanganM_Kanan.faces), GL.STATIC_DRAW);

    // Lengan Kiri: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var pedang = generatePedangM(2, 0, 3, 0.1, 100, 0.8,  0.8, -10, 0, (Math.PI / 2), 0);
    var TUBE_VERTEX19 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX19);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pedang.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS19 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS19);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pedang.colors), GL.STATIC_DRAW);
    var TUBE_FACES19 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES19);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(pedang.faces), GL.STATIC_DRAW);
    
    // kaki 
    var kaki_kanan = generateKakiM(4.10, -0.95, 0.8, 1, 100, 0.5, 0.2, 0.7); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX20 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX20);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS20 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS20);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES20 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES20);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kaki_kanan.faces), GL.STATIC_DRAW);

    // kaki 
    var kaki_kiri = generateKakiM(2.90, -0.95, 0.8, 1, 100, 0.5, 0.2, 0.7); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX21 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX21);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS21 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS21);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES21 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES21);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kaki_kiri.faces), GL.STATIC_DRAW);

    //---------------------------------ENVIROMENT-----------------
    //Pohon 
    var pohon = generatePohon(-3, -4, -5, 1, 100, 1, 1, 2); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX22 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX22);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pohon.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS22 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS22);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pohon.colors), GL.STATIC_DRAW);
    var TUBE_FACES22 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES22);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(pohon.faces), GL.STATIC_DRAW);

    //log
    var log = generateLog(-3, -4, -5, 0.35, 3, 100, 1, 1, -2); // badan: x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ
    var TUBE_VERTEX23 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX23);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(log.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS23 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS23);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(log.colors), GL.STATIC_DRAW);
    var TUBE_FACES23 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES23);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(log.faces), GL.STATIC_DRAW);


    //matrix
    var PROJECTION_MATRIX = LIBS.get_projection(40, CANVAS.width / CANVAS.height, 1, 100);
    var VIEW_MATRIX = LIBS.get_I4();
    var MODEL_MATRIX = LIBS.get_I4();
    var MODEL_MATRIX2 = LIBS.get_I4();
    var MODEL_MATRIX3 = LIBS.get_I4();


    // Event listener untuk mouse movement
    document.addEventListener('mousemove', function (event) {
        if (isMouseDown) {
            var sensitivity = 0.01; // Adjust sensitivity here
            var dx = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            var dy = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

            mouseX += dx * sensitivity;
            mouseY += dy * sensitivity;

            updateViewMatrix();
        }
    });
    // Event listener untuk mouse down
    document.addEventListener('mousedown', function (event) {
        isMouseDown = true;
        updateViewMatrix();
    });
    // Event listener untuk mouse up
    document.addEventListener('mouseup', function (event) {
        isMouseDown = false;
    });
    function updateViewMatrix() {
        var sensitivity = 0.001; // Adjust sensitivity here
        var dx = mouseX - prevMouseX;
        var dy = mouseY - prevMouseY;
        // Rotate the view matrix based on mouse movement
        LIBS.rotateY(VIEW_MATRIX, -dx);
        LIBS.rotateX(VIEW_MATRIX, -dy);
        prevMouseX = mouseX;
        prevMouseY = mouseY;
    }

    // Set view matrix to position the camera
    LIBS.translateZ(VIEW_MATRIX, -10);
    LIBS.translateX(VIEW_MATRIX, -1.5);
    var zoomSpeed = 0.2; // Kecepatan zoom
    // Event listener untuk scroll mouse
    document.addEventListener('wheel', function (event) {
        // Menentukan arah scroll
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        // Mengubah posisi kamera berdasarkan arah scroll
        LIBS.translateZ(VIEW_MATRIX, delta * zoomSpeed);
        // Memastikan kamera tidak terlalu dekat atau terlalu jauh
        if (VIEW_MATRIX[14] < -20) {
            VIEW_MATRIX[14] = -20;
        }
        if (VIEW_MATRIX[14] > -1) {
            VIEW_MATRIX[14] = -1;
        }
    });

    document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode;
        if (keyCode === 83) { // W key
            keysPressed.w = true;
        } else if (keyCode === 68) { // A key
            keysPressed.a = true;
        } else if (keyCode === 87) { // S key
            keysPressed.s = true;
        } else if (keyCode === 65) { // D key
            keysPressed.d = true;
        }
    });

    document.addEventListener('keyup', function (event) {
        var keyCode = event.keyCode;
        if (keyCode === 83) { // W key
            keysPressed.w = false;
        } else if (keyCode === 68) { // A key
            keysPressed.a = false;
        } else if (keyCode === 87) { // S key
            keysPressed.s = false;
        } else if (keyCode === 65) { // D key
            keysPressed.d = false;
        }
    });


    /*========================= DRAWING ========================= */
    GL.clearColor(0.0, 0.0, 0.0, 0.0);


    LIBS.rotateX(MODEL_MATRIX2, Math.PI / 2);
    LIBS.rotateX(MODEL_MATRIX3, Math.PI / 2);

    GL.enable(GL.DEPTH_TEST);
    GL.depthFunc(GL.LEQUAL);

    var cameraSpeed = 0.1; // Kecepatan pergerakan kamera

    var time_prev = 0;
    let walkingPhase = 0;
    var kaki_z = 0;
    var animate = function (time) {
        GL.viewport(0, 0, CANVAS.width, CANVAS.height);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

        var dt = time - time_prev;
        time_prev = time;

        walkingPhase = (time / 5000) % 1;

        if (keysPressed.w) {
            LIBS.translateZ(VIEW_MATRIX, -cameraSpeed);
        }
        if (keysPressed.a) {
            LIBS.translateX(VIEW_MATRIX, -cameraSpeed);
        }
        if (keysPressed.s) {
            LIBS.translateZ(VIEW_MATRIX, cameraSpeed);
        }
        if (keysPressed.d) {
            LIBS.translateX(VIEW_MATRIX, cameraSpeed);
        }

        let stepLength = 0.1 * Math.sin(walkingPhase * 2 * Math.PI);
        let kaki_kiri_MODEL_MATRIX = LIBS.get_I4();
        let kaki_kanan_MODEL_MATRIX = LIBS.get_I4();
        let kaki_kiri_M_MODEL_MATRIX = LIBS.get_I4();
        let kaki_kanan_M_MODEL_MATRIX = LIBS.get_I4();
        
        LIBS.translateZ(kaki_kiri_MODEL_MATRIX, stepLength);
        LIBS.rotateX(kaki_kiri_MODEL_MATRIX, stepLength);

        LIBS.rotateX(kaki_kanan_MODEL_MATRIX, -stepLength);
        LIBS.translateZ(kaki_kanan_MODEL_MATRIX, -stepLength);

        LIBS.translateZ(kaki_kiri_M_MODEL_MATRIX, stepLength);
        LIBS.rotateX(kaki_kiri_M_MODEL_MATRIX, stepLength);

        LIBS.rotateX(kaki_kanan_M_MODEL_MATRIX, -stepLength);
        LIBS.translateZ(kaki_kanan_M_MODEL_MATRIX, -stepLength);

        LIBS.translateZ(MODEL_MATRIX, 0.025);
        LIBS.translateZ(MODEL_MATRIX2, 0.025);

        kaki_z += 0.025;
        LIBS.translateZ(kaki_kiri_MODEL_MATRIX, kaki_z);
        LIBS.translateZ(kaki_kanan_MODEL_MATRIX, kaki_z);

        LIBS.translateZ(kaki_kiri_M_MODEL_MATRIX, kaki_z);
        LIBS.translateZ(kaki_kanan_M_MODEL_MATRIX, kaki_z);

        // Badan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX1);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS1);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES1);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, badan.faces.length, GL.UNSIGNED_SHORT, 0);

        // Kaki
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX2);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS2);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES2);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, kaki_kiri_MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kaki.faces.length, GL.UNSIGNED_SHORT, 0);

        // Kaki2
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX3);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS3);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES3);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, kaki_kanan_MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kaki2.faces.length, GL.UNSIGNED_SHORT, 0);

        // tangan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX4);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS4);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES4);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tangan.faces.length, GL.UNSIGNED_SHORT, 0);

        // tangan2
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX5);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS5);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES5);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tangan2.faces.length, GL.UNSIGNED_SHORT, 0);

        // mata
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX6);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS6);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES6);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mata.faces.length, GL.UNSIGNED_SHORT, 0);

        // mata2
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX7);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS7);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES7);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mata2.faces.length, GL.UNSIGNED_SHORT, 0);

        //topi
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX8);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS8);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES8);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX2);
        GL.drawElements(GL.TRIANGLES, topi.faces.length, GL.UNSIGNED_SHORT, 0);

        // pupil
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX9);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS9);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES9);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, pupil.faces.length, GL.UNSIGNED_SHORT, 0);

        // pupil
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX10);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS10);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES10);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, pupil2.faces.length, GL.UNSIGNED_SHORT, 0);

        //tongkat
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX11);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS11);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES11);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tongkat.faces.length, GL.UNSIGNED_SHORT, 0);

        // BadanMetaknight
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX12);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS12);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES12);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, badanMetaknight.faces.length, GL.UNSIGNED_SHORT, 0);

        // mataMetaknight
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX13);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS13);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES13);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mata_Kanan.faces.length, GL.UNSIGNED_SHORT, 0);

        // mataMetaknight
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX14);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS14);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES14);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mata_Kiri.faces.length, GL.UNSIGNED_SHORT, 0);

        // lenganMetaknight
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX15);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS15);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES15);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, lengan_kanan.faces.length, GL.UNSIGNED_SHORT, 0);

        // lenganMetaknight
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX16);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS16);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES16);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, lengan_kiri.faces.length, GL.UNSIGNED_SHORT, 0);

        //tanganMeta
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX17);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS17);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES17);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tanganM_kiri.faces.length, GL.UNSIGNED_SHORT, 0);

        //tanganMeta
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX18);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS18);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES18);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tanganM_Kanan.faces.length, GL.UNSIGNED_SHORT, 0);

        //pedang
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX19);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS19);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES19);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, pedang.faces.length, GL.UNSIGNED_SHORT, 0);

        //kakiM
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX20);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS20);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES20);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, kaki_kanan_M_MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kaki_kanan.faces.length, GL.UNSIGNED_SHORT, 0);

        //kakiM
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX21);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS21);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES21);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, kaki_kiri_M_MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kaki_kiri.faces.length, GL.UNSIGNED_SHORT, 0);

        //enviroment
        //pohon
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX22);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS22);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES22);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX3);
        GL.drawElements(GL.TRIANGLES, pohon.faces.length, GL.UNSIGNED_SHORT, 0);

        //log
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX23);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS23);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES23);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX3);
        GL.drawElements(GL.TRIANGLES, log.faces.length, GL.UNSIGNED_SHORT, 0);

   

        
        GL.flush();

        window.requestAnimationFrame(animate);
    };

    animate(0);
}


window.addEventListener('load', main);