class Reward{
	constructor (screenHeight, screenWidth) {
		this.height = 25;
		this.width = 25;
		this.x = 0;
		this.y = 0;
		this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;
    this.value = 50;
	}

	start(){
		this.y = parseInt(Math.random()*(this.screenHeight - this.height));
		this.x = parseInt(Math.random()*(this.screenWidth - this.width));
	}

	colect(){
		this.start();
	}
}