class Particle {
    constructor(x,y,width,height) {
      var options = {
        restitution = 0.4
      }
      this.r = r;

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
    }
    
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);

      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
      pop();

      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      this.body = Bodies.circke(x, y, this.r, options);
      this.color = (color(random(0,255)), color(random(0,255)), color(random(0,255)));
    }
  };
