class Asteroid{
	constructor(screenHeight, screenWidth){
		this.height = 100;
    this.width = 100;
    this.y = 0;//posição 'y' inicial
    this.x = 0;//posição 'x' inicial
    this.vel = 1;
    this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;
    this.way = [];
	}

	crash(){
		this.start();
	}

	start(){
		var temp = parseInt(Math.random()*4);
		switch(temp){
			case 0:
				this.y = -100;
				this.x = parseInt(Math.random()*(this.screenWidth - this.width));
				break;
			case 1:
				this.y = this.screenHeight;
				this.x = parseInt(Math.random()*(this.screenWidth - this.width));
				break;
			case 2:
				this.y = parseInt(Math.random()*(this.screenHeight - this.height));
				this.x = -100;
				break;
			case 3:
				this.y = parseInt(Math.random()*(this.screenHeight - this.height));
				this.x = this.screenWidth;
				break;
		}

		this.direction();
	}

	direction(){
		var temp = parseInt(Math.random()*8);
		switch(temp){
			case 0://top-left
				this.way[0] = - this.vel;//y
				this.way[1] = - this.vel;//x
				break;
			case 1://bottom-left
				this.way[0] = this.vel;
				this.way[1] = - this.vel;
				break;
			case 2://top-right
				this.way[0] = - this.vel;
				this.way[1] = this.vel;
				break;
			case 3://bottom-right
				this.way[0] = this.vel;
				this.way[1] = this.vel;
				break;
			case 4://top
				this.way[0] = - this.vel;//y
				this.way[1] = 0;//x
				break;
			case 7://bottom
				this.way[0] = this.vel;
				this.way[1] = 0;
				break;
			case 6://left
				this.way[0] = 0;
				this.way[1] = - this.vel;
				break;
			case 7://right
				this.way[0] = 0;
				this.way[1] = this.vel;
				break;
		}
	}

	move(){
		this.y += this.way[0];
		this.x += this.way[1];

		if(this.y < -100){
			this.y = this.screenHeight;
			this.direction();
		}

		if(this.y > this.screenHeight){
			this.y = -100;
			this.direction();
		}

		if(this.x < -100){
			this.x = this.screenWidth;
			this.direction();
		}

		if(this.x > this.screenWidth){
			this.x = -100;
			this.direction();
		}
	}
}