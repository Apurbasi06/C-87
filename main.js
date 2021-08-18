     var canvas = new fabric.Canvas('myCanvas');

     player_x = 10;
     player_y = 10;

     block_image_width = 30;
     bloack_image_height = 30;

     var player_object = "";
     var block_image_objects = "";

     function player_update()
     {
         fabric.block_image_objects.fromURL("player.png", function(Img)
         {
             player_object = Img;

             player_object.scaleToWidth(150);
             player_object.scaleToHeight(140);

             player_object({
             top:player_y,
             left:player_x
             });
             canvas.add(player_object);
         });

     }

     function new_image(get_image)
     {
             fabric.Image.fromURL(get_image, function(Img)
             {

                block_image_objects = Img;

                block_image_objects.scaleToWidth(block_image_width);
                block_image_objects.scaleToHeight(bloack_image_height);

                block_image_objects.scaleToHeight({
                    top:player_y,
                    left:player_x
                });
                
                canvas.add(block_image_objects);

             });
     }

     window.addEventListener("keydown", my_keydown);

     function my_keydown(e)
     {
         keyPressed = e.keyCode;
         console.log(keyPressed);
     if(e.shiftKey == true && keyPressed == '80')
         {
         console.log("p and shift pressed together");
         block_image_width = block_image_width + 5;
         block_image_height = block_image_height + 5;
         document.getElementById("current_width").innerHTML = block_image_width;
         document.getElementById("current_height").innerHTML = block_image_height;
         }

         if(e.shiftKey && keyPressed == '77')
         {
         console.log("m and shift pressed together");
         block_image_width = block_image_width - 5;
         block_image_height = block_image_height - 5;
         document.getElementById("current_width").innerHTML = block_image_width;
         document.getElementById("current_height").innerHTML = block_image_height;
         }

         if(keyPressed == '38')
         {
             up();
             console.log("up");
         }

         if(keyPressed == '40')
         {
             down();
             console.log("down");
         }

         if(keyPressed == '39')
         {
             left();
             console.log("left");
         }

         if(keyPressed == '37')
         {
             right();
             console.log("right");
         }

         if(keyPressed == '87')
         {
             new_image('wall.jpg');
             console.log("w");
         }

         if(keyPressed == '84')
         {
             new_image('trunk.jpg');
             console.log("t");
         }

         if(keyPressed == '68')
         {
             new_image('dark_green.jpg');
             console.log("d");
         }

         if(keyPressed == '76')
         {
             new_image('light_green.jpg');
             console.log("l");
         }

         if(keyPressed == '71')
         {
             new_image('ground.jpg');
             console.log("g");
         }

         if(keyPressed == '89')
         {
             new_image('yellow_wall.jpg');
             console.log("y");
         }

         if(keyPressed == '82')
         {
             new_image('roof.jpg');
             console.log("r");
         }

         if(keyPressed == '67')
         {
             new_image('cloud.jpg');
             console.log("c");
         }

         if(keyPressed == '85')
         {
             new_image('unique.jpg');
             console.log("u");
         }


     }
