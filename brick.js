class Brick {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            friction: 0.00050
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity=255;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height)     
         }
      };

  