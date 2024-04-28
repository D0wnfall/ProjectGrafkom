var mouseX = 0, mouseY = 0;
var prevMouseX = 0, prevMouseY = 0;
var isMouseDown = false;

var keysPressed = {
    w: false,
    a: false,
    s: false,
    d: false
};

function generateTanah(x, y, z, size) {
    var vertices = [
        // Front face
        x - size, y - size, z + size,
        x + size, y - size, z + size,
        x + size, y + size, z + size,
        x - size, y + size, z + size,

        // Back face
        x - size, y - size, z - size,
        x - size, y + size, z - size,
        x + size, y + size, z - size,
        x + size, y - size, z - size,

        // Top face
        x - size, y + size, z - size,
        x - size, y + size, z + size,
        x + size, y + size, z + size,
        x + size, y + size, z - size,

        // Bottom face
        x - size, y - size, z - size,
        x + size, y - size, z - size,
        x + size, y - size, z + size,
        x - size, y - size, z + size,

        // Right face
        x + size, y - size, z - size,
        x + size, y + size, z - size,
        x + size, y + size, z + size,
        x + size, y - size, z + size,

        // Left face
        x - size, y - size, z - size,
        x - size, y - size, z + size,
        x - size, y + size, z + size,
        x - size, y + size, z - size
    ];

    var colors = [
        // Front face (blue)
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        // Back face (green)
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        // Top face (red)
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        // Bottom face (yellow)
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,

        // Right face (cyan)
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,

        // Left face (magenta)
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0
    ];

    var faces = [
        // Front face
        0, 1, 2,
        0, 2, 3,

        // // Back face
        // 4, 5, 6,
        // 4, 6, 7,

        // // Top face
        // 8, 9, 10,
        // 8, 10, 11,

        // // Bottom face
        // 12, 13, 14,
        // 12, 14, 15,

        // // Right face
        // 16, 17, 18,
        // 16, 18, 19,

        // // Left face
        // 20, 21, 22,
        // 20, 22, 23
    ];

    return { vertices: vertices, colors: colors, faces: faces };
}

function generateCube(x, y, z, size) {
    var vertices = [
        // Front face
        x - size, y - size, z + size,
        x + size, y - size, z + size,
        x + size, y + size, z + size,
        x - size, y + size, z + size,

        // Back face
        x - size, y - size, z - size,
        x - size, y + size, z - size,
        x + size, y + size, z - size,
        x + size, y - size, z - size,

        // Top face
        x - size, y + size, z - size,
        x - size, y + size, z + size,
        x + size, y + size, z + size,
        x + size, y + size, z - size,

        // Bottom face
        x - size, y - size, z - size,
        x + size, y - size, z - size,
        x + size, y - size, z + size,
        x - size, y - size, z + size,

        // Right face
        x + size, y - size, z - size,
        x + size, y + size, z - size,
        x + size, y + size, z + size,
        x + size, y - size, z + size,

        // Left face
        x - size, y - size, z - size,
        x - size, y - size, z + size,
        x - size, y + size, z + size,
        x - size, y + size, z - size
    ];

    var colors = [
        // Front face (blue)
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        // Back face (green)
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        // Top face (red)
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        // Bottom face (yellow)
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,

        // Right face (cyan)
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,

        // Left face (magenta)
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0
    ];

    var faces = [
        // Front face
        0, 1, 2,
        0, 2, 3,

        // Back face
        4, 5, 6,
        4, 6, 7,

        // Top face
        8, 9, 10,
        8, 10, 11,

        // Bottom face
        12, 13, 14,
        12, 14, 15,

        // Right face
        16, 17, 18,
        16, 18, 19,

        // Left face
        20, 21, 22,
        20, 22, 23
    ];

    return { vertices: vertices, colors: colors, faces: faces };
}

// Bagian Kepala Dan Wajah
function generateKepala(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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
function generateMata(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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
function generateBlush(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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

function generateMask(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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

// kurva
function generateCurves (controlPoints, segments,zOffset, thickness) {
    var vertices = [];
    var colors = [];

    var rainbowColors = [[1, 1, 1]]; 

    for (var i = 0; i <= segments; i++) {
      var t = i / segments;
      var x = Math.pow(1 - t, 3) * controlPoints[0][0] + 3 * Math.pow(1 - t, 2) * t * controlPoints[1][0] + 3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][0] + Math.pow(t, 3) * controlPoints[3][0];
      var y = Math.pow(1 - t, 3) * controlPoints[0][1] + 3 * Math.pow(1 - t, 2) * t * controlPoints[1][1] + 3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][1] + Math.pow(t, 3) * controlPoints[3][1];
      var z = Math.pow(1 - t, 3) * controlPoints[0][2] + 3 * Math.pow(1 - t, 2) * t * controlPoints[1][2] + 3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][2] + Math.pow(t, 3) * controlPoints[3][2];

      vertices.push(x - thickness, y - thickness, z + zOffset);
      vertices.push(x + thickness, y - thickness, z + zOffset);
      vertices.push(x, y + thickness, z + zOffset);

      var colorIndex = Math.floor(t * rainbowColors.length);
      colors = colors.concat(rainbowColors[colorIndex]);
      colors = colors.concat(rainbowColors[colorIndex]);
      colors = colors.concat(rainbowColors[colorIndex]);
    }

    var faces = [];
    for (var i = 0; i < segments; i++) {
      var index = i * 3;
      faces.push(index, index + 1, index + 2); // create triangles for each vertex
    }

    return { vertices: vertices, colors: colors, faces: faces };
  }

// Bagian Lengan dan Tangan
function generateLengan(x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ) {
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

function generateTangan(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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

function generatePedang(x, y, z, radius, segments, ScaleX, ScaleY, ScaleZ) {
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


function generateHandle(x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ) {
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

function generateOrnamen(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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
function generateKaki(x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ) {
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
    var CANVAS = document.getElementById("myCanvas");

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

    //                                              Bagian Kepala
    // Kepala: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var kepala = generateKepala(0, 0, 0, 3, 100, 0.6, 0.6, 0.6);
    var TUBE_VERTEX1 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX1);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kepala.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS1 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS1);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kepala.colors), GL.STATIC_DRAW);
    var TUBE_FACES1 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES1);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kepala.faces), GL.STATIC_DRAW);

    // Mask: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var Mask = generateMask(0, -1, 0, 3.5, 100, 0.45, 0.3, 0.45);
    var TUBE_VERTEX2 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX2);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(Mask.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS2 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS2);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(Mask.colors), GL.STATIC_DRAW);
    var TUBE_FACES2 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES2);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(Mask.faces), GL.STATIC_DRAW);
    
    // Mata kanan: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var mata_Kanan = generateMata(0.4, -1.4, 0.3, 3.5, 100, 0.1, 0.1, 0.2);
    var TUBE_VERTEX3 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX3);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS3 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS3);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES3 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES3);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mata_Kanan.faces), GL.STATIC_DRAW);

    // Mata kiri: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var mata_Kiri = generateMata(-0.4, -1.4, 0.3, 3.5, 100, 0.1, 0.1, 0.2);
    var TUBE_VERTEX4 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX4);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS4 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS4);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mata_Kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES4 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES4);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mata_Kiri.faces), GL.STATIC_DRAW);

    // Blush kanan: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var blush_Kanan = generateBlush(0.8, -1.4, 0.1, 3.5, 100, 0.1, 0.05, 0.05);
    var TUBE_VERTEX6 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX6);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(blush_Kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS6 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS6);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(blush_Kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES6 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES6);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(blush_Kanan.faces), GL.STATIC_DRAW);

    // Blush kiri: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var blush_Kiri = generateBlush(-0.8, -1.4, 0.1, 3.5, 100, 0.1, 0.05, 0.05);
    var TUBE_VERTEX7 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX7);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(blush_Kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS7 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS7);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(blush_Kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES7 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES7);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(blush_Kiri.faces), GL.STATIC_DRAW);

    var matrixMulut = [ 3, 3, 3,
                        1, 1, 1,
                        2, 2, 2
                    ];
    var mulut = generateCurves(matrixMulut, 100, 1, 2);
    var TUBE_VERTEX8 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX8);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mulut.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS8 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS8);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(mulut.colors), GL.STATIC_DRAW);
    var TUBE_FACES8 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES8);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(mulut.faces), GL.STATIC_DRAW);

    //                                              Bagian Tangan
    // Lengan Kanan: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var lengan_kanan = generateLengan(1.9, 0, 0, 1, 1, 100, 0.2, 0.2, 0.4, 0, (Math.PI / 2), 0);
    var TUBE_VERTEX11 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX11);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS11 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS11);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES11 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES11);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(lengan_kanan.faces), GL.STATIC_DRAW);

    // Lengan Kiri: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var lengan_kiri = generateLengan(-1.9, 0, 0, 1, 1, 100, 0.2, 0.2, 0.4, 0, (Math.PI / 2), 0);
    var TUBE_VERTEX12 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX12);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS12 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS12);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(lengan_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES12 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES12);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(lengan_kiri.faces), GL.STATIC_DRAW);

    // Tangan: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var tangan_kanan = generateTangan(2.4, 0, 0, 0.5, 100, 0.8, 0.8, 0.8);
    var TUBE_VERTEX13 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX13);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan_kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS13 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS13);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan_kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES13 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES13);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tangan_kanan.faces), GL.STATIC_DRAW);

    // Tangan: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var tangan_kiri = generateTangan(-2.4, 0, 0, 0.5, 100, 0.8, 0.8, 0.8);
    var TUBE_VERTEX14 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX14);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS14 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS14);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tangan_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES14 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES14);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tangan_kiri.faces), GL.STATIC_DRAW);

    // pedang:x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ 
    var pedang = generatePedang(-2.4, 0, 3, 0.1, 100, 0.8,  0.8, -10);
    var TUBE_VERTEX15 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX15);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pedang.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS15 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS15);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(pedang.colors), GL.STATIC_DRAW);
    var TUBE_FACES15 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES15);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(pedang.faces), GL.STATIC_DRAW);

    // handlePedang: x, y, z, radius, height, segments, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ
    var handlePedang = generateHandle(-2.4, 0, 0, 0.5, 1.2, 100, 0.2, 0.2, 1, 0, 0, 0);
    var TUBE_VERTEX16 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX16);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(handlePedang.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS16 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS16);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(handlePedang.colors), GL.STATIC_DRAW);
    var TUBE_FACES16 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES16);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(handlePedang.faces), GL.STATIC_DRAW);

    // Ornamen: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var ornamen = generateOrnamen(-2.4, 0, -0.7, 0.5, 100, 0.5, 0.5, 0.5);
    var TUBE_VERTEX17 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX17);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(ornamen.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS17 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS17);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(ornamen.colors), GL.STATIC_DRAW);
    var TUBE_FACES17 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES17);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(ornamen.faces), GL.STATIC_DRAW);

    //                                                  Bagian Kaki
    // Kaki: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var kaki_kanan = generateKaki(0.7, -0.7, -1.8, 2, 100, 0.3, 0.7, 0.2);
    var TUBE_VERTEX21 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX21);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS21 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS21);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES21 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES21);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kaki_kanan.faces), GL.STATIC_DRAW);

    // Kaki: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var kaki_kiri = generateKaki(-0.7, -0.7, -1.8, 2, 100, 0.3, 0.7, 0.2);
    var TUBE_VERTEX22 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX22);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS22 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS22);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kaki_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES22 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES22);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kaki_kanan.faces), GL.STATIC_DRAW);

    // Kaki: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var tapak_kaki_kanan = generateKaki(0.7, -0.7, -2, 2, 100, 0.2, 0.4, 0);
    var TUBE_VERTEX23 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX23);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tapak_kaki_kanan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS23 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS23);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tapak_kaki_kanan.colors), GL.STATIC_DRAW);
    var TUBE_FACES23 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES23);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tapak_kaki_kanan.faces), GL.STATIC_DRAW);

    // Kaki: x, y, z, radius, segments, ovalScaleX, ovalScaleY, ovalScaleZ
    var tapak_kaki_kiri = generateKaki(-0.7, -0.8, -2, 2, 100, 0.2, 0.4, 0);
    var TUBE_VERTEX24 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX24);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tapak_kaki_kiri.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS24 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS24);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tapak_kaki_kiri.colors), GL.STATIC_DRAW);
    var TUBE_FACES24 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES24);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tapak_kaki_kiri.faces), GL.STATIC_DRAW);

    var kubus = generateCube(0, 5, 0, 3);
    var TUBE_VERTEX31 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX31);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kubus.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS31 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS31);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(kubus.colors), GL.STATIC_DRAW);
    var TUBE_FACES31 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES31);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(kubus.faces), GL.STATIC_DRAW);

    var tanah = generateTanah(0, -1, 0, 10);
    var TUBE_VERTEX32 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX32);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tanah.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS32 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS32);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tanah.colors), GL.STATIC_DRAW);
    var TUBE_FACES32 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES32);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(tanah.faces), GL.STATIC_DRAW);

    //matrix
    var PROJECTION_MATRIX = LIBS.get_projection(40, CANVAS.width / CANVAS.height, 1, 100);
    var VIEW_MATRIX = LIBS.get_I4();
    var MODEL_MATRIX = LIBS.get_I4();

    // Event listener untuk mouse movement
    document.addEventListener('mousemove', function (event) {
        if (isMouseDown) {
            var sensitivity = 0.01; // Adjust sensitivity here
            var dx = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            var dy = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

            mouseX -= dx * sensitivity;
            mouseY -= dy * sensitivity;

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
    LIBS.translateZ(VIEW_MATRIX, -5);
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
        if (keyCode === 83) { // S key
            keysPressed.w = true;
        } else if (keyCode === 68) { // D key
            keysPressed.a = true;
        } else if (keyCode === 87) { // W key
            keysPressed.s = true;
        } else if (keyCode === 65) { // A key
            keysPressed.d = true;
        }
    });

    document.addEventListener('keyup', function (event) {
        var keyCode = event.keyCode;
        if (keyCode === 83) { // S key
            keysPressed.w = false;
        } else if (keyCode === 68) { // D key
            keysPressed.a = false;
        } else if (keyCode === 87) { // W key
            keysPressed.s = false;
        } else if (keyCode === 65) { // A key
            keysPressed.d = false;
        }
    });


    /*========================= DRAWING ========================= */
    GL.clearColor(0.0, 0.0, 0.0, 0.0);


    GL.enable(GL.DEPTH_TEST);
    GL.depthFunc(GL.LEQUAL);

    var cameraSpeed = 0.1; // Kecepatan pergerakan kamera

    var time_prev = 0;
    var animate = function (time) {
        GL.viewport(0, 0, CANVAS.width, CANVAS.height);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

        var dt = time - time_prev;
        time_prev = time;

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

        //                          Bagian Kepala
        // Kepala
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX1);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS1);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES1);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kepala.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Mata kanan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX3);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS3);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES3);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mata_Kanan.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Mata kiri
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX4);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS4);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES4);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mata_Kiri.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Blush Kanan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX6);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS6);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES6);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, blush_Kanan.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Blush Kiri
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX7);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS7);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES7);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, blush_Kiri.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // mulut 
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX8);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS8);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES8);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, mulut.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        //                             Bagian Tangan
        // Lengan Kanan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX11);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS11);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES11);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, lengan_kanan.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Lengan Kiri
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX12);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS12);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES12);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, lengan_kiri.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Tangan Kanan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX13);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS13);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES13);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tangan_kanan.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Tangan Kiri
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX14);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS14);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES14);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tangan_kiri.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // pedang
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX15);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS15);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES15);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, pedang.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Handle Pedang
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX16);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS16);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES16);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, handlePedang.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Ornamen
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX17);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS17);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES17);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, ornamen.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        //                              Bagian Kaki
        // Kaki Kanan
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX21);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS21);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES21);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kaki_kanan.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // Kaki Kiri
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX22);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS22);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES22);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kaki_kiri.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        // kubus
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX31);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS31);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES31);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, kubus.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX32);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS32);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES32);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, tanah.faces.length, GL.UNSIGNED_SHORT, 0);
        GL.flush();

        window.requestAnimationFrame(animate);
    };

    animate(0);
}


window.addEventListener('load', main);