var mouseX = 0, mouseY = 0;
var prevMouseX = 0, prevMouseY = 0;
var isMouseDown = false;

var keysPressed = {
    w: false,
    a: false,
    s: false,
    d: false
};
//tempat masukin code
function generateSphere3(x, y, z, radius, segments) {
    var vertices = [];
    var colors = [];

    var angleIncrement = (2 * Math.PI) / segments;

    var rainbowColors = [
        [255/255,255/255,255/255]
    ];

    for (var i = 0; i <= segments; i++) {
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);

        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);

            var xCoord = cosLon * cosLat;
            var yCoord = sinLon * cosLat;
            var zCoord = sinLat;

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



    //masukin shadder
    var awan = generateSphere3(5, 5, -10, 2, 100);
    var TUBE_VERTEX38 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX38);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS38 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS38);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan.colors), GL.STATIC_DRAW);
    var TUBE_FACES38 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES38);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(awan.faces), GL.STATIC_DRAW);
   

    var awan2 = generateSphere3(3, 5, -10, 2, 100);
    var TUBE_VERTEX39 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX39);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan2.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS39 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS39);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan2.colors), GL.STATIC_DRAW);
    var TUBE_FACES39 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES39);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(awan2.faces), GL.STATIC_DRAW);

    var awan3= generateSphere3(-10, 8, -11, 2, 100);
    var TUBE_VERTEX40 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX40);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan3.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS40 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS40);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan3.colors), GL.STATIC_DRAW);
    var TUBE_FACES40 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES40);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(awan3.faces), GL.STATIC_DRAW);

    var awan4= generateSphere3(-12, 8, -11, 2, 100);
    var TUBE_VERTEX41 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX41);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan4.vertices), GL.STATIC_DRAW);
    var TUBE_COLORS41 = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS41);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(awan4.colors), GL.STATIC_DRAW);
    var TUBE_FACES41 = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES41);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(awan4.faces), GL.STATIC_DRAW);




    //matrix
    var PROJECTION_MATRIX = LIBS.get_projection(40, CANVAS.width / CANVAS.height, 1, 100);
    var VIEW_MATRIX = LIBS.get_I4();
    var MODEL_MATRIX = LIBS.get_I4();
    var MODEL_MATRIX2 = LIBS.get_I4();



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
        
        //buffer
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX38);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS38);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES38);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, awan.faces.length, GL.UNSIGNED_SHORT, 0);
       
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX39);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS39);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES39);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, awan2.faces.length, GL.UNSIGNED_SHORT, 0);

        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX40);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS40);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES40);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, awan3.faces.length, GL.UNSIGNED_SHORT, 0);

        
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_VERTEX41);
        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ARRAY_BUFFER, TUBE_COLORS41);
        GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 0, 0);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TUBE_FACES41);
        GL.uniformMatrix4fv(_PMatrix, false, PROJECTION_MATRIX);
        GL.uniformMatrix4fv(_VMatrix, false, VIEW_MATRIX);
        GL.uniformMatrix4fv(_MMatrix, false, MODEL_MATRIX);
        GL.drawElements(GL.TRIANGLES, awan4.faces.length, GL.UNSIGNED_SHORT, 0);


        GL.flush();

        window.requestAnimationFrame(animate);
    };

    animate(0);
}


window.addEventListener('load', main);