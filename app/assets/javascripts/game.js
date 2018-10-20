class Game {
	constructor(screenHeight, screenWidth){
		this.screenHeight = screenHeight;
		this.screenWidth = screenWidth;
		this.timer;
		this.numObstacles = 20;
		this.numRewards = 3;
		this.obstacles = [];
		this.rewards = [];
		this.score = 0;
		this.time = 0;
		this.colected = 0;
		this.id = 0;
		this.recursoTotal = 0;
	}

	start() {

	}

	controllerPlayer(player) {
		player.move();
		return player;
	}

	createObstacles(){
		for(var i = 0; i < this.numObstacles; i++) {
			this.obstacles[i] = new Asteroid(this.screenHeight, this.screenWidth);
			this.obstacles[i].start();
		}
	}

	controllerObstacles(){
		for(i in this.obstacles){
			this.obstacles[i].move();
			if (this.collisionObstacle(this.obstacles[i])) {
				this.obstacles[i].crash();
				player.hp --;
			}
		}
	}

	createRewards(){
		for(var i = 0; i < this.numRewards; i++) {
			this.rewards[i] = new Reward(this.screenHeight, this.screenWidth);
			this.rewards[i].start();
		}
	}

	controllerRewards(){
		for(var i = 0; i < this.numRewards; i++) {
			if (this.collisionReward(this.rewards[i])) {
				this.rewards[i].colect();
				this.colected += this.rewards[i].value;
				this.pontuation();
			}
		}
	}

	collisionObstacle(element){
		var playerRight = (player.x + player.width);
		var playerBottom = (player.y + player.height);

		var elementRight = (element.x + element.width);
		var elementBottom = (element.y + element.height);

		var tmp = false;

		if(//player X
			playerBottom > element.y && playerBottom < elementBottom ||
			player.y < element.y && playerBottom > elementBottom
		){
			tmp = playerRight > element.x && playerRight < elementRight ||
						player.x < elementRight && player.x > element.x
		}

		if(//player Y
			playerRight > element.x && playerRight < elementRight ||
			player.x < element.x && player.x > elementRight
		){
			tmp = tmp || playerBottom > element.y && playerBottom < elementBottom ||
						player.y < elementBottom && player.y > element.y
		}

		return tmp;
	}

	collisionReward(element){
		var playerRight = (player.x + player.width);
		var playerBottom = (player.y + player.height);

		var elementRight = (element.x + element.width);
		var elementBottom = (element.y + element.height);

		var tmp = false;

		//element X
		if(
			element.y > player.y && element.y < playerBottom ||
			elementBottom < player.y && elementBottom > playerBottom
		){
			tmp = elementRight > player.x && element.x < playerRight ||
						element.x < playerRight && element.x > player.x;
		}

		//element Y
		if(
			elementRight > player.x && element.x < playerRight ||
			element.x < playerRight && element.x > player.x
		){
			
			tmp = tmp || elementBottom > player.y && elementBottom < playerBottom ||
						element.y > player.y && element.y < playerBottom;
		}

		return tmp;
	}

	pontuation(){
		this.score = ((this.time * ((this.colected/50) + 1))) / ((1 + player.hp)/player.hpMax);
	}

	end(){
		if(player.hp <= 0){
			this.pontuation();
			return true;
		}
		return false;
	}
}