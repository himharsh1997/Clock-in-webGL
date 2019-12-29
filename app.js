
         /*================Creating a canvas=================*/
         var canvas = document.getElementById('my_Canvas');
         gl = canvas.getContext('experimental-webgl');
         var  x = 0.02;
         /*==========Defining and storing the geometry=======*/
         goin3 = [
            0.0,0.0,0.0,   //second
            0.0,0.7,0.0,   
            0.0,0.0,0.0,  
            0.0,0.38,0.0,
            0.0,0.0,0.0,
            0.0,0.57,0.0
          ];

          /*0.07,0.05,0.0,
          0.38,0.2,0.0,
          0.07,0.05,0.0,
          0.57,0.3,0.0
           */
            theta1 = 0;
            h1 = 0
            k1 = 15
           
            r1 = 15;
            bol = 1;
            step1= 0


   //minute
         h1m = 0;
         k1m = 15;
         r1m  = 15;
         bolm = 1;
         
   // hours 
         h1h = 0;
         k1h = 3;
         r1h  = 3;
         bolh = 1;  
           
         setInterval(function(){

   goin = [];
   theta = 0;  // angle that will be increased each loop
   h = 0.0      // x coordinate of circle center
   k = 0.0      // y coordinate of circle center
   step = 15;  // amount to add to theta each time (degrees)
   r=0.7;
   for(i = 0;theta <=3270;theta =theta + step)
     {  x = (h + r*Math.cos(theta));
        y = (k + r*Math.sin(theta));
        goin.push(x);
        goin.push(y);
        goin.push(0.5);
     }

        console.log(goin)
         // Create an empty buffer object to store the vertex buffer
         var vertex_buffer = gl.createBuffer();

         //Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin), gl.STATIC_DRAW);

         // Unbind the buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, null);

         /*=========================Shaders========================*/

         // vertex shader source code
         var vertCode =
            'attribute vec3 coordinates;' +

            'void main(void) {' +
               ' gl_Position = vec4(coordinates, 1.0);' +
               'gl_PointSize = 6.5;'+
            '}';

         // Create a vertex shader object
         var vertShader = gl.createShader(gl.VERTEX_SHADER);

         // Attach vertex shader source code
         gl.shaderSource(vertShader, vertCode);

         // Compile the vertex shader
         gl.compileShader(vertShader);

         // fragment shader source code
         var fragCode =
            'void main(void) {' +
               ' gl_FragColor = vec4(0.0, 0.0, 0.4, 0.7);' +
            '}';

         // Create fragment shader object
         var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

         // Attach fragment shader source code
         gl.shaderSource(fragShader, fragCode);

         // Compile the fragmentt shader
         gl.compileShader(fragShader);

         // Create a shader program object to store
         // the combined shader program
         var shaderProgram = gl.createProgram();

         // Attach a vertex shader
         gl.attachShader(shaderProgram, vertShader);

         // Attach a fragment shader
         gl.attachShader(shaderProgram, fragShader);

         // Link both programs
         gl.linkProgram(shaderProgram);

         // Use the combined shader program object
         gl.useProgram(shaderProgram);

         /*======== Associating shaders to buffer objects ========*/

         // Bind vertex buffer object
           gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Get the attribute location
         var coord = gl.getAttribLocation(shaderProgram, "coordinates");

         // Point an attribute to the currently bound VBO
         gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

         // Enable the attribute
         gl.enableVertexAttribArray(coord);

         /*============= Drawing the primitive ===============*/

         // Clear the canvas
         gl.clearColor(0.0, 0.0, 0.0, 0.2);

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);

         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT);

         // Set the view port
         gl.viewport(0,0,canvas.width,canvas.height);
         gl.drawArrays(gl.POINTS,0,goin.length/3)
          

        
           goin12 = [
                -0.01,0.66,0.0,

                -0.01,0.58,0.0,
                
              ]
              
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin12), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINES, 0,goin12.length/3);
        
         goin12 = [
                0.01,0.66,0.0,
                0.1,0.66,0.0,
                0.01,0.58,0.0,
                0.1,0.58,0.0
    
                
              ]
       
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin12), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin12.length/3);


        goin1 = [
                  0.3,0.60,0.0,

                  0.3,0.50,0.0,
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin1), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin1.length/3);
        goin2 = [
                 0.45,0.39,0.0,
                 0.55,0.39,0.0,
                 0.45,0.29,0.0,
                 0.55,0.29,0.0  
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);

        goin2 = [
                 0.55,0.15,0.0,
                 0.65,0.15,0.0,
                 0.55,0.05,0.0,
                 0.65,0.05,0.0, 
                 0.65, -0.03,0.0,
                 0.55, -0.03,0.0,                   
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);

         goin2 = [
                 0.51,-0.15,0.0,
                 0.51,-0.25,0.0,
                 0.6,-0.25,0.0,
                 0.6,-0.15,0.0, 
                 0.6,-0.33,0.0,                    
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);
   
         goin2 = [
                 0.31,-0.40,0.0,
                 0.41,-0.40,0.0,
                 0.31,-0.41,0.0,
                 0.31,-0.50,0.0,
                 0.41,-0.50,0.0, 
                 0.41,-0.53,0.0,
                 0.31,-0.53,0.0                   
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3); 

        goin2 = [
                  0.1,-0.54,0.0,
                 0.0,-0.54,0.0,
                 0.0,-0.59,0.0,
                 0.1,-0.62,0.0,
                 0.0,-0.64,0.0,
                 0.0,-0.59,0.0,                     
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);  

          
            goin2 = [
                  -0.32,-0.50,0.0,
                  -0.21,-0.50,0.0,
                  -0.28,-0.60,0.0                    
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);  

            goin2 = [
                   -0.39,0.57,0.0,
                    -0.38,0.44,0.0,
                   -0.32,0.59,0.0,
                    -0.32,0.46,0.0                   
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINES, 0,goin2.length/3);  

           goin2 = [
                   -0.57,0.37,0.0,
                    -0.57,0.22,0.0,                 
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINES, 0,goin2.length/3);
        goin2 = [
                   -0.47,0.37,0.0,
                    -0.47,0.22,0.0, 
                     -0.37,0.22,0.0,
                     -0.47,0.37,0.0                 
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);  

              goin2 = [
                     -0.59,0.1,0.0,
                     -0.65,-0.05,0.0,
                     -0.59,-0.05,0.0,
                      -0.59,0.1,0.0,
                       -0.59,-0.15,0.0                 
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINE_STRIP, 0,goin2.length/3);  

           goin2 = [
                    -0.57,-0.2,0.0,
                    -0.57,-0.4,-0.0                  
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINES, 0,goin2.length/3); 

        goin2 = [
                    -0.47,-0.2,0.0,
                    -0.47,-0.4,-0.0,
                    -0.57,-0.2,0.0,
                    -0.47,-0.2,0.0,
                    -0.57,-0.3,0.0,
                    -0.47,-0.3,0.0,
                    -0.57,-0.4,0.0,
                    -0.47,-0.4,0.0                    
                ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin2), gl.STATIC_DRAW); 
        gl.drawArrays(gl.LINES, 0,goin2.length/3);  

                          
         // Draw the triangle
           
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goin3), gl.STATIC_DRAW);
          gl.drawArrays(gl.LINES, 0, goin3.length/3);
     
          gl.drawArrays(gl.POINTS, 0, goin.length/3);  
           //calculation for x,y of line
            if(k1 == 15){bol = 1}
            if(k1 == -14){bol = -1} 
             
             goin3[3]  =   bol*((Math.sqrt(r1*r1 - k1*k1))/r1)*0.7;
             goin3[4]  =  (k1/r1)*0.7;
             theta1    =  theta1 + 6;
              k1 = k1 -bol;
              if(step1 == 60){
               k1h = k1h - bolh;
               goin3[9]  =   bolh*((Math.sqrt(r1h*r1h - k1h*k1h))/r1h)*0.38;
               goin3[10]  =  (k1h/r1h)*0.38; 
               if(k1h == 15){  bolh  = 1;}
               if(k1h == -14){ bolh = -1;} 
              }
              if (theta1 == 360){
       
              k1m = k1m - bolm;
              goin3[15]  =   bolm*((Math.sqrt(r1m*r1m - k1m*k1m))/r1m)*0.56;
              goin3[16]  =  (k1m/r1m)*0.56; 
              if(k1m == 15){bolm = 1;}
              if(k1m == -14){bolm = -1;}
              step1 = step1 + 1;
              theta1 = 0;  
             } 
           
              gl.drawArrays(gl.LINES, 0, goin3.length/3);
       
         
           
      },1000)
