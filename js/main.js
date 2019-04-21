'use strict';
	



	function main () {
	  const mainElement = document.querySelector('main');
	
	  function buildDom(html){
	    mainElement.innerHTML = html;
	    return mainElement;
	  }
	
	  function buildSplashScreen() {
	  const splashScreen = buildDom(`
	  <section>
	   <h1>CROSS THE RAMBLAS IN SUMMER</h1>
	   <button class="start-button">Start</button>
	  </section>
	  `)
	  const startButton = document.querySelector('.start-button');
	  startButton.addEventListener('click', buildGameScreen);
			
		// let starMusic = new Audio();
		// starMusic.src = "../music/index-music.mp3";
		// starMusic.play();

			
	  }
	
	  function buildGameScreen() {

			

			
	    console.log('game screen');
		 const gameScreen = buildDom(`
		 
		 <section id="timer"></section>
     <section class="game-container">
     <canvas id="canvas"></canvas>
	   </section>
		 `)
		 

		//  let music = new Audio();
		//  music.src = "../music/game-music.mp3";
		//  music.play();

	   const gameContainer = document.querySelector('.game-container');
	
	   const width = gameContainer.offsetWidth; // sets width to parent width
	   const height = gameContainer.offsetHeight; // sets height to parent height
	
	   const canvasElement = document.querySelector('canvas');
	   canvasElement.setAttribute('width', width);
	   canvasElement.setAttribute('height', height);
	
	   const game = new Game(canvasElement);
	   game.startLoop();
		 game.setGameOverCallback(buildGameOverScreen);
		 game.setWinCallback(buildGameWinScreen);
	
	   document.addEventListener("keydown", function(event){
	    switch (event.keyCode){
	      case 37:
	        game.player.setXDirection(-1);
	      break;
	      case 38:
	        game.player.setYDirection(-1);
	      break;
	      case 39:
	        game.player.setXDirection (1);
	      break;
	      case 40:
	        game.player.setYDirection (1) ;
	      break;
	    } 
			})
		}


	
		// we select the <section> that will contain our timer
    


    
    // we create a function that will subtract from our game.timeRemaining 
	
		function buildGameOverScreen() {

			

			const gameOverScreen = buildDom (`
			<section>
			 <h1>Game Over</h1>
			 <button class="restart-button">Restart</button>
			</section>
			`)
			 const restartButton = document.querySelector('.restart-button');
			 restartButton.addEventListener('click', buildGameScreen);

			
			//  let failMusic = new Audio();
			// 	failMusic.src = "../music/gameover.mp3";
			// 	failMusic.play();

				
					
				

		 }
		 buildSplashScreen();




    
	  function buildGameWinScreen() {
	   const winScreen = buildDom (`
	   <section>
	    <h1>You win! </h1>
	    <button class="restart-button">Restart</button>
	   </section>
	   `)
	    const restartButton = document.querySelector('.restart-button');
	    restartButton.addEventListener('click', buildGameScreen);
	  }
	  buildSplashScreen();
	}
	
	window.addEventListener('load', main); // only executes code once page is loaded  
	