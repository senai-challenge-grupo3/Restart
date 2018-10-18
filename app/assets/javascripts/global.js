function init() {//loop
  $(document).keydown(function(e){
    player.keyPressed(e, true);
  });

  $(document).keyup(function(e){
    player.keyPressed(e, false);
  });
}

function inicio() {
  $("#game").html("");
  player = new Player($("#game").height(), $("#game").width());
  game = new Game($("#game").height(), $("#game").width());
  reward = new Reward($("#game").height(), $("#game").width());
  asteroid = new Asteroid($("#game").height(), $("#game").width());

  timerGame();

  showNav();


  generateElement(player, "player", "");
  updateElement(player, "player");

  //rewards
  game.createRewards();
  generateListElements(game.rewards, "prise","reward");
  
  //obstacles
  game.createObstacles();
  generateListElements(game.obstacles, "asteroid", "obstacle");
}

function loop(){
  player = game.controllerPlayer(player);
  updateElement(player, "player");
  
  game.controllerObstacles();
  updateListElement(game.obstacles, "asteroid");

  game.controllerRewards();
  updateListElement(game.rewards, "prise");

  if(player.press[player.config]){
    showConfig();
  }

  if(game.end()){
    end();
  }
  showNav();
  game.time++;
}

function generateElement(element, name, classe){
  id = name;
  gameHtml = $("#game");
  idHtml = $("#"+id);

  gameHtml.html(gameHtml.html() + "<div id="+id+"></div>");
  updateElement(element ,id);
}

function generateListElements(elementList, name, classe){
  for(i = 0; i < elementList.length; i++){
    id = name + i;
    gameHtml = $("#game");
    idHtml = $("#"+id);

    gameHtml.html(gameHtml.html() + "<div class="+classe+" id="+id+"></div>");
    updateElement(elementList[i] ,id);
  }
}

function updateElement(element, name){
  //player
  var html = $("#"+name);
  html.css("height", element.height);
  html.css("width", element.width);
  html.css("top", element.y);
  html.css("left", element.x);
}

function updateListElement(elementList ,name){
  for(i = 0; i < elementList["length"]; i++){
    idHtml = $("#"+name+i);

    idHtml.css("height", elementList[i].height);
    idHtml.css("width", elementList[i].width);
    idHtml.css("top", elementList[i].y);
    idHtml.css("left", elementList[i].x);
  }
}

function end(){
  showEnd();
}

function showEnd(){
  block = true;
  timerGame();
  $(".end").css("z-index", 1);
  $(".result").html("<br>Recursos: "+parseInt(game.colected)+"<br>"+"Score: "+parseInt(game.score));
}

function showConfig(){
  block = true;
  timerGame();
  $(".config").css("z-index", 1);
  $(".result").html("<br>Recursos: "+parseInt(game.colected)+"<br>"+"Score: "+parseInt(game.score));
}

function hideConfig(){
  block = false;
  $(".config").css("z-index", -1);
  timerGame();
}

function timerGame(){
  if(!block){
    game.timer = setInterval(loop, 1);
  }else{
    clearInterval(game.timer);
  }
}

function showNav(){
  $(".pride").html("Recursos: "+parseInt(game.colected));
  $(".score").html("Score: "+parseInt(game.score));
  $(".hp").html("Vidas(s): "+parseInt(player.hp));
}
