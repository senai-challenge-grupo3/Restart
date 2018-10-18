class Keyboard{
  constructor(){
    this.up = 38;//up arrow
    this.down = 40;//down arrow
    this.left = 37;//left arrow
    this.right = 39;//right arrow
    this.config = 27;//config
    this.press = [];
  }

  keyPressed(e, value) {
    this.press[e.which] = value;
  }

  //Abre as configurações do jogo 
  changeKeyboard(){
    if(this.up == 87){
      this.defaultKeyboard();
    }else{
      this.modelKeyboard1();
    }
  }

  defaultKeyboard(){
    this.up = 38;//up arrow
    this.down = 40;//down arrow
    this.left = 37;//left arrow
    this.right = 39;//right arrow
  }

  //Muda as teclas de ação do teclado
  modelKeyboard1(){
    this.up = 87;//W
    this.down = 83;//S
    this.left = 65;//A
    this.right = 68;//D    
  }
}


