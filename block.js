class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("block.png");
        World.add(world, this.body);
        this.visibility=255;
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();

          this.visibility=this.visibility-5;
          tint (255,this.visibility);
          image( this.image,this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }
      }
      score(){
        if(this.visibility<0&&this.visibility>-50){
          score=score+1;
        }
      }
    }