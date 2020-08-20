# Slot Machine Simulation
A HTML5, CSS3, and Vanilla Javascript Slot Machine. This app has several features including an animated slot reel, with 6 items per reel and 3 reels. User can bet min or max and have their total update.

**Link to project:** https://codepen.io/ShawnBasquiat/full/JjXGoqd

![alt tag](https://i.imgur.com/2Awex23.png)

## How It's Made:

**Tech used:** HTML5, CSS3, JavaScript

My learning was focused on animation versus setInterval() function performance. I made a sliding reel animation using a setInterval() instead of a standard transformation or animation. Required alot more math than the standard route, but still worked.

## Optimizations

Using setInterval() to create an animation effect seems to not only stall some of my later functions but also, clearing the interval and getting the effect to stop was imprecise. Would probably go with a standard transformation if I was coding this again.

## Lessons Learned:

Don't reinvent the wheel. SetInterval() can be used to update content position, but it would probably be more customizable if a transformation or animation was implemented.
