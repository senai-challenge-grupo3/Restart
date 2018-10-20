class Save{
	constructor(){
		this.felicidade;
		this.recurso;
		this.casaLv;
		this.oficinaLv;
		this.fabricaLv;
		this.vida;
		this.id;
	}

	attVars(save){
		this.felicidade = save[0];
		this.recurso = save[1];
		this.casaLv = save[2];
		this.oficinaLv = save[3];
		this.fabricaLv = save[4];
		this.vida = save[5];
		this.id = save[6];
	}

	attNav(){
		$(".rec").html("Recursos: "+this.recurso);
		$("#vidaHtml").html(this.vida);
		$("#felicidadeHtml").html(this.felicidade);
	}

	upgradeOficina(){
		var resp = confirm("Oficina para o nivel: "+(this.oficinaLv+1)+"\nValor: "+(2000*this.oficinaLv));
		if (this.oficinaLv <= 5) {
			if(this.recurso >= 2000*this.oficinaLv){
				if(this.fabricaLv > this.oficinaLv){
					if(resp){
						this.recurso -= 2000*this.oficinaLv;
						this.oficinaLv ++;
						this.attNav();
					}
				}else{
					alert("Você deve melhorar sua fabrica primeiro!");
				}
			}else{
				alert("Você não tem recursos suficientes!");
			}
		}else{
			alert("Você alcansou o nivel máximo de upgrades de Oficina");
		}
	}

	upgradefabrica(){
		var resp = confirm("Fabrica para o nivel: "+(this.fabricaLv + 1)+"\nValor: "+(2000*this.fabricaLv)+"\n\n*obs: Isso irá aumentar a quantidade de felicidade perdida por missão.");
		if (this.fabricaLv <= 5) {
			if(this.recurso >= 2000*this.fabricaLv && this.fabricaLv <= 5){
				if(resp){
					this.recurso -= 2000*this.fabricaLv;
					this.fabricaLv ++;
					this.attNav();
				}
			}else{
				alert("Você não tem recursos suficientes!");
			}
		}else{
			alert("Você alcansou o nivel máximo de upgrades de fabrica");
		}
	}

	diminuiFelicidade(){
		if(this.felicidade - (this.fabricaLv * 2) > 0){
			this.felicidade -= (this.fabricaLv * 2);
		}else{
			this.felicidade = 0;
			this.recurso = this.recurso / 2;
			this.felicidade = 100;
			this.AtualizarAjax();
			this.endGame();
			this.attNav();
		}
	}

	aumentarFelicidade(){
		var resp = confirm("Aumentar felicidade: em 45%\nValor: "+( 500*this.fabricaLv));

		if(this.felicidade + 45 <= 100){
			if(this.recurso >= 500*this.fabricaLv){
				if(resp){
					this.recurso -= 500*this.fabricaLv;
					this.felicidade += 45;
					this.attNav();
				}
			}else{
				alert("Você não tem recursos suficientes!");
			}
		}else{
			if(this.felicidade < 100){
				if(this.recurso >= 500*this.fabricaLv){
					if(resp){
						this.recurso -= 500*this.fabricaLv;
						this.felicidade = 100;
						this.attNav();
					}
				}else{
					alert("Você não tem recursos suficientes!");
				}
			}else{
				alert("A felicidade já esta maximizada!");
			}
		}
	}

	aumentarVida(){
		var resp = confirm("Aumentar a vida de sua nave para: "+(this.vida+1)+"\nValor: "+(100*this.vida));

		if(this.recurso >= 100*this.vida){
			if (this.vida <= 3 + this.oficinaLv) {
				if(resp){
					this.recurso -= 100*this.vida;
					this.vida++;
					this.attNav();
				}
			}else{
				alert("Você alcansou o nivel máximo de upgrades de vida");
			}
		}else{
			alert("Você não tem recursos suficientes!");
		}
	}

	salvar(){
		this.AtualizarAjax();
		alert("Jogo salvo!");
	}

	AtualizarAjax(){
	  $.ajax({
	    url: "/saves/"+this.id+".json",
	    method: "PUT",
	    dataType: "JSON",
	    data: {save_id: this.id, felicidade: this.felicidade, recurso: this.recurso, casa_lv: this.casaLv, oficina_lv: this.oficinaLv, fabrica_lv: this.fabricaLv, vida: this.vida}
	  });
	}

	endGame(){
		alert("Os cidadãos da sua Côlonia sentem-se extremamente tristes, nós intervimos e pegamos metade de seus recursos como multa, tente cuidar melhor dos abitantes de sua colonia!");
	}
}

function initColonia(save){
	let update = new Save();
	update.attVars(save);
	update.attNav();
	update.diminuiFelicidade();
	return update;
}
