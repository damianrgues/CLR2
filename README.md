# CROSS LAS RAMBLAS IN SUMMER

## Description

You have to cross Las Ramblas in the shortest possible time among all its ecosystem of different characters.


## MVP (DOM - CANVAS)
*CANVAS*, The mvp is a game where the player can move and dodge enemies.
.


## Backlog
- Enemies
- Sprites
- Moving platforms
- Multiple levels


## Data structure
### game.js
```
Game(){
this.canvas;
this.ctx;
}

Game.prototype.startGame(){
}

Game.prototype.startLoop(){
loop()
}

Game.prototype.updateAll(){
}

Game.prototype.clearAll(){
}

Game.prototype.renderAll(){
}

Game.prototype.checkAllCollisons(){
}

Game.prototype.finishGameCallback(){
}
```

### character.js
```
Character(){
this.x;
this.y;
this.size;
this.canvas;
this.ctx;
}

Character.prototype.update(){
}

Character.prototype.render(){
}

Character.prototype.move(){
}

Character.prototype.checkCollisionWithEnemy(enemy){
}

Character.prototype.death(){
}

Character.prototype.win(){
}





```

### enemy.js
```
Enemy(){
this.x;
this.y;
this.size;
this.canvas;
this.ctx;
}

Enemy.prototype.render(){
}
```


## States y States Transitions
```
- splashScreen()
- destroyGameOver(if)
- buildSplash()
- addEventListener(startGame)


- starGame()
- destroySplash()
- destroyGameOver()
- create new Game()
- game.start()


- gameOver()
- destroyGame()
- buildGameOver()
- addEventListener( if splashScreen, else startGame) 
```

## Task
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Main - 3 states transitions
- Game - buildDom
- Game - TimeOut test
- Game - 3 states transitions
- Main - GameWon
- Main - destroy Game
- Main - GameWon RESTART
- Main - removeGameWon
- Game - restartGame
- Game - addEventListener
- Enemy - create
- Game - create player
- Player - create
- Player - move
- Player - collision
- Game - check win

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/damianrgues)
[Link Deploy]()


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
