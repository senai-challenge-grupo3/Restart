class Player extends Keyboard{
  constructor (screenHeight, screenWidth) {
    super();
    this.hpMax = 5;
    this.hp = 5;
    this.height = 49;
    this.width = 49;
    this.y = screenHeight - this.height -200;//posição 'y' inicial
    this.x = (screenWidth / 2) - this.width;//posição 'x' inicial
    this.vel = 1;
    this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;
  }
  
  move(){
    if(this.press[this.up]){
      if(this.y - this.vel > 0){
        this.y -= this.vel;
      }else{
        this.y = 0;
      }
    }

    if(this.press[this.down]){
      if((this.y + this.vel + this.height) < this.screenHeight){
        this.y += this.vel;
      }else{
        this.y = this.screenHeight - this.height;
      }
    }

    if(this.press[this.left]){
      if (this.x - this.vel > 0) {
        this.x -= this.vel;
      }else{
        this.x = 0;
      }
    }

    if(this.press[this.right]){
      if (this.x + this.vel + this.width < this.screenWidth ) {
        this.x += this.vel;
      }else{
        this.x = this.screenWidth - this.width;
      }
    }
  }
}

