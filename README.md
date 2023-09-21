# Cheese Clicker

  

[Click here to see deployed game](https://thomasdmnc.github.io/cheese-clicker/)

  

## Description

Cheese clicker is a copycat of Cookie Clicker ([which is way better](https://orteil.dashnet.org/cookieclicker/)).

You click on a cheese to get points.

You can use those points to buy tools.

Those tools are going to create new points for you without clicking.

  

Each tool has its own price, points rate.

The more you buy a tool, the more its price goes up.

  

## MVP backlog:

- Made the clicker game working:

- Implement clicking function to add +1 to general counter. ✅
	
	- Buying tools will increase your general creation rate. ✅

	- Preventing players to buy tools if they don't have enough points in the general counter.

- Showing the number of tools bought in the middle panel. ✅

- Implementing Win or Lose logic by default (win: +1000 points in the general counter, lose: if you don't every 20s on the cheese). ✅

	- Implementing a setting feature to prevent the Win or Lose logic in the game. ✅	

  
  

## Nice-to-have backlog:

- Using LocaleStorage to create saves of game:

	- Saving the game every 60 sec. ✅

	- Reaccessing previous save when reloading the tab. ✅

	- Being able to delete previous save before starting the game. ✅

- "Animation":

	- Adding a new image tool every time a new tool is bought. ✅

	- Falling cheese in the background. ✅

- User can choose his own cheese to click on with some hidden key inputs 😉 ✅

- Achievements based on the numbers of camemberts made. ❌

- Add-ons in the Store: for 1000 camemberts your cows are *2 more efficients. etc. ❌

- Random “events”: A camembert is showing on your screen giving your camembert production a boost for XX secs. ❌

  

## Data structure

- Script.js
	-	startGame()
	-	A bunch of events listener in order to handle Tool buying, cheese clicking and some easter eggs :)
- Game - Class
	- constructor()
	- gameLoop()
	- createParticle()
	- particlesLoop()
	- winLoseSettings()
	- startLocalStorage()
	- loadLocalStorage()
	- reloadImage()
	- UpdateAllPrices()
	- stopGame()
	- gameWon()
	- start()
	- clickAddCounter()
	- addImage()
	- replaceRate()
	
	For each tool:
	- buyTool()
	- updateToolPrice()
- Particle - Class
	- constructor()
	- descend()

  
  

## States and States Transitions

- Start Screen

- Game Screen

- Game Over Screen

  
  

## Links


- [Slides Link](https://docs.google.com/presentation/d/1rsjQs_KHnhbM-oGiN_Vo_EZZyG0F7RXqFWDS1kITXXs/edit?usp=sharing)

- [Github repository Link](https://github.com/ThomasDmnc/cheese-clicker)

- [Deployment Link](https://thomasdmnc.github.io/cheese-clicker/)