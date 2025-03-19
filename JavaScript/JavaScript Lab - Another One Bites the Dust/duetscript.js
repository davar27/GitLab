const lyrics = [
  /*U{ time: 0, text: "[Intro: Wyclef Jean (& Freddie Mercury)]", singer: "Wyclef" },*/
  { time: 0, text: "(Are you ready, hey, are you ready for this?)", singer: "Freddie" },
  { time: 3, text: "(Are you hanging on the edge of your seat?)", singer: "Freddie" },
  { time: 4, text: "I need a break beat, uh", singer: "Wyclef" },
  { time: 5, text: "(Are you ready, hey, are you ready for this?)", singer: "Freddie" },
  { time: 7, text: "(Are you hanging on the edge of your seat?)", singer: "Freddie" },
  { time: 9, text: "I need a break beat, uh" , singer: "Wyclef"},
  { time: 10, text: "(Are you ready, hey, are you ready for this?)", singer: "Freddie" },
  { time: 11, text: "(Are you hanging on the edge of your seat?)", singer: "Freddie" },
  { time: 13, text: "I need a break beat, uh", singer: "Wyclef" },
  { time: 14, text: "(Outta the doorway the bullets rip)" },
  { time: 16, text: "(Repeating to the sound of the beat, hey)", singer: "Freddie" },

  /*{ time: 24, text: "[Verse 1: Wyclef Jean (& Freddie Mercury)]" },*/
  { time: 18, text: "Yo, a for the kids in the club that's ready to get bugged", singer: "Wyclef" },
  { time: 20, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 22, text: "And for the thugs with the burners that wanna blast off", singer: "Wyclef" },
  { time: 25, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 27, text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!", singer: "Wyclef" },
  { time: 30, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 32, text: "(And another one gone)", singer: "Freddie"},
  { time: 33, text: "Wyclef", singer: "Wyclef"},
  { time: 34, text: "(And another one gone)", singer: "Freddie"},
  {time:  34, text:  "Dirty Cash", singer: "Wyclef" },
  { time: 35, text: "(Another one bites the dust)", singer: "Freddie"},
   {time: 36, text:  "Young Free, Freddie where you at?", singer: "Wyclef" },

  /* { time: 44, text: "[Verse 2: Wyclef Jean (& Freddie Mercury)]" },*/
  { time: 37, text: "(Steve walks wearily down the street)", singer: "Freddie" },
  { time: 39, text: "(With the brim pulled way down low)", singer: "Freddie" },
  { time: 41, text: "Some cat up in Brooklyn just got robbed with a Kangol", singer: "Wyclef" },
  { time: 45, text: "(Are you ready, hey, are you ready for this?)", singer: "Freddie" },
  { time: 47, text: "(Are you hanging on the edge of your seat?)", singer: "Freddie" },
  { time: 50, text: "(Out of the doorway, the bullets rip)", singer: "Freddie" },
  { time: 52, text: "(Repeating to the sound of the beat, hey)", singer: "Freddie" },
  { time: 55, text: "My man got shot, and the block got hot", singer: "Wyclef" },
  { time: 57, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 58, text: "Yo, hey I hear more shots, this is like Fort Knox, kid", singer: "Wyclef" },
  { time: 61, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 63, text: "Yo, hold your breath", singer: "Wyclef"},
  { time: 63, texy: "(And another one gone)", singer: "Freddie" },
  { time: 64, text: "Hold your breath", singer: "Wyclef"},
  {time: 64, text:  "(And another one gone)" , singer: "Freddie"},
  { time: 65, text: "Hold your breath", singer: "Wyclef"},
  {time: 65, text: "(Another one bites the dust)" , singer: "Freddie"},
  { time: 67, text: "Yo, check it" , singer: "Wyclef"},

 /* { time: 76, text: "[Verse 3: Wyclef Jean (& Freddie Mercury)]" },*/
  { time: 68, text: "If you're a soldier at ease", singer: "Wyclef" },
  { time: 70, text: "My military style is known to murder Nazis", singer: "Wyclef" },
  { time: 72, text: "Brooklyn to Germany come on", singer: "Wyclef" },
  { time: 73, text: "(Oh yeah)", singer: "Freddie" },
  { time: 74, text: "My kamikaze will blow the U2", singer: "Wyclef" },
  { time: 75, text: "They hire Idi Amin in Timbuktu" , singer: "Wyclef"},
  { time: 77, text: "Whether you Hindu, or do the Voodoo", singer: "Wyclef" },
  { time: 80, text: "You can't foresee this unless I bring the previews, yeah, yeah", singer: "Wyclef" },
  { time: 83, text: "Yo, it's the number one rappin' band (Come on)" , singer: "Wyclef"},
  { time: 86, text: "Yo, this review will be critically acclaimed" , singer: "Wyclef"},
  { time: 89, text: "Leave you in critical pain, clinically insane" , singer: "Wyclef"},
  { time: 91, text: "The name Wyclef Jean, with a yes, yes y'all", singer: "Wyclef" },
  { time:  93, text: "Better have a vest y'all, I'll blast, and bless y'all (Oh yeah)" , singer: "Wyclef"},
  { time: 95, text: "F-y'all, the mark of the beast, the triple six", singer: "Wyclef" },
  { time: 98, text: "Time running out, listen to the tick (Oh yeah)", singer: "Wyclef" },
  { time: 100, text: "If you see what I saw, then you seen what I seen" , singer: "Wyclef"},
  { time: 102, text: "If you know what I know, you know what I mean (Oh yeah)" , singer: "Wyclef"},
  { time: 104, text: "Commanding officer of the Navy SEAL team" , singer: "Wyclef"},
  { time: 107, text: "Once I give the orders, you feel the infrared beam (Oh yeah) Blaow!" , singer: "Wyclef"},
  { time: 109, text: "For all you critics, sayin' \"another remake\"" , singer: "Wyclef"},
  { time: 112, text: "(Another one bites the dust)" , singer: "Wyclef"},
  { time: 113, text: "Yo, if you know the deal, this is the master reel, kid" , singer: "Wyclef"},
  { time: 116, text: "(Another one bites the dust)" , singer: "Wyclef"},
   { time: 116, text: "(Oh yeah)" , singer: "Freddie"},
  { time: 118, text: "(And another one gone) Right", singer: "Freddie" },
  { time: 119, text: "(And another one gone) Right" , singer: "Freddie"},
  { time: 120, text: "(Another one bites the dust, hey)", singer: "Freddie" },
  { time: 121, text: "Freddie Mercury, where you at yo?", singer: "Wyclef" },

/*  { time: 128, text: "[Verse 4: Wyclef Jean (& Freddie Mercury)]" },*/
  { time: 123, text: "(How do you think I'm gonna get along)", singer: "Freddie" },
  { time: 125, text: "(Without you when you're gone) (Oh yeah)", singer: "Freddie" },
  { time: 126, text: "I need a break yo" , singer: "Wyclef"},
  { time: 128, text: "If you're ready for the first of the month", singer: "Wyclef" },
  { time: 129, text: "For that welfare check, come on (Kicked me out on my own)", singer: "Freddie" },
  { time: 130, text: "I need a break beat", singer: "Wyclef" },
  { time: 131, text: "(Are you happy, are you satisfied?)", singer: "Freddie" },
  { time: 133, text: "(How long can you stand the heat?)" , singer: "Freddie"},
  { time: 135, text: "I need a break beat", singer: "Wyclef" },
  { time: 136, text: "(Outta the doorway, the bullets rip)", singer: "Freddie" },
  { time: 138, text: "(To the sound of the beat, look out)" , singer: "Freddie"},
  { time: 140, text: "Yo, bulletproof vests, like the wild, wild west", singer: "Wyclef" },
  { time: 143, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 145, text: "Yo, this is a stickup, now take off your Rolex" , singer: "Wyclef"},
  { time: 148, text: "(Another one bites the dust)", singer: "Freddie" },
  { time: 150, text: "Yo, dirty money, good money, yo it's all money-money" , singer: "Wyclef"},
  { time: 152, text: "(Another one bites the dust)" , singer: "Freddie"},
  { time: 153, text: "Yo, Dirty Cash (And another one gone)", singer: "Wyclef" },
  { time: 154, text: "Dirty Cash (And another one gone)" , singer: "Freddie"},
  { time: 156, text: "The adventures of Dirty Cash (Another one bites the dust)" , singer: "Freddie"},

/*  { time: 170, text: "[Verse 5: Pras (& Freddie Mercury)]" },*/
  { time: 158, text: "Yo, for the love for the cash, I'll blast you in my path" , singer: "Wyclef"},
  { time: 161, text: "Keep my eyes on the math, you cats don't know the half (Oh yeah)" , singer: "Wyclef"},
  { time: 163, text: "As far as I'm concerned, you cats can burn in flames", singer: "Wyclef" },
  { time: 165, text: "This ain't no game, I'mma start callin' names (Oh yeah)" , singer: "Wyclef"},
  { time: 167, text: "So come get me, if you know the one-fifty", singer: "Wyclef" },
  { time: 170, text: "A million refugees ready to bust with me (Oh yeah)" , singer: "Wyclef"},
  { time: 172, text: "Bloody, filthy, in this rap shhh—" , singer: "Wyclef"},
  { time: 175, text: "You gonna have to kill me, since you can't beat me (Oh yeah)" , singer: "Wyclef"},
  { time: 177, text: "Pras, Dirty, Cash, you're the greedy" , singer: "Wyclef"},
  { time: 179, text: "Believe me, you gotta let me fly like R. Kelly (Oh yeah)" , singer: "Wyclef"},
  { time: 181, text: "Bite another dust with my man Freddie Mercury" , singer: "Wyclef"},
  { time: 184, text: "What height nineties got ya cash, wannabe crazy (Oh yeah/Navy SEAL!)" , singer: "Wyclef"},


 /* { time: 222, text: "[Verse 6: Free (& Freddie Mercury)]" },*/
  { time: 186, text: "Practically, I tactically destroy", singer: "Wyclef" },
  { time: 188, text: "Deploy more decoys than a presidential convoy (Oh yeah)", singer: "Wyclef" },
  { time: 191, text: "My whole envoy stay camouflaged out", singer: "Wyclef" },
  { time: 193, text: "And when I walk the street, I take the refugee route (Oh yeah)" , singer: "Wyclef"},
  { time: 195, text: "This one go out to all my thugs in the borough", singer: "Wyclef" },
  { time: 197, text: "Soldiers stay thorough, like Kilamanjaro (Oh yeah)", singer: "Wyclef" },
  { time: 200, text: "Split it with an arrow, my girl platoon roll" , singer: "Wyclef"},
  { time: 202, text: "Outta control, the female Mandingos (Oh yeah)" , singer: "Wyclef"},
  { time: 204, text: "Free, I evolve from the egg of a seminarian" , singer: "Wyclef"},
  { time: 207, text: "Don't go down, 'cause I'm a vegetarian (Oh yeah)" , singer: "Wyclef"},
  { time: 209, text: "And when I bust, it ain't \"in God we trust\"", singer: "Wyclef" },
  { time: 211, text: "And if you bring a gun, you better bring a black tusk (Oh yeah)", singer: "Wyclef" },

  /*{ time: 248, text: "[Outro: Wyclef Jean, The Product G&B (& Freddie Mercury)]" },*/
  { time: 213, text: "She looked into my eyes and said FBI", singer: "Wyclef" },
  { time: 215, text: "(Another one bites the dust) (Oh yeah)", singer: "Wyclef" },
  { time: 217, text: "She said she loved me, she was a spy who lied" , singer: "Wyclef"},
  { time: 220, text: "(Another one bites the dust) Right", singer: "Wyclef" },
  { time: 223, text: "I could relate, could you relate?" , singer: "Wyclef"},
  { time: 225, text: "(Another one bites the dust)" , singer: "Freddie" },
  { time: 227, text: "Jerry \"Wonda\", The Product", singer: "Wyclef"}, 
  {time: 228, text: "(Oh-oh) (Another one bites the dust)" , singer: "Freddie"},
  { time: 231, text: "Yo, Canibus, John Forté", singer: "Wyclef"},
   {time: 232, text: "(Don't you know we coming for you?)", singer: "Freddie" },
  { time: 234, text: "(Another one bites the dust)" ,  singer: "Freddie" },
  { time: 234, text: "Yo, Dirty Cash, and baby Free", singer: "Wyclef" },
  { time: 238, text: "(Another one bites the dust)", singer: "Freddie"},
  { time: 240, text: "(And another one gone)", singer: "Freddie"},
  { time: 241, text:  "Wyclef Jean" , singer: "Wyclef"},
  { time: 241, text: "(And another one gone)", singer: "Freddie"},
  { time: 241, text: "Freddie Mercury, ha-ha" , singer: "Wyclef"},
  { time: 243, text: "(Another one bites the dust, yeah)" , singer: "Wyclef"},



 ];
   let currentLyricIndex = 0;
   const audio = document.getElementById("audio");
   const lyricFreddie = document.getElementById("lyric-freddie");
   const lyricOthers = document.getElementById("lyric-others");

   audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100);
   }); 


   function displayLyrics() {
    const currentTime = audio.currentTime;
    if (
    currentLyricIndex < lyrics.length &&
    currentTime >= lyrics[currentLyricIndex].time
    ) {
     if (lyrics[currentLyricIndex].singer === "Freddie") {
      lyricFreddie.textContent = lyrics[currentLyricIndex].text;
    } else if (lyrics[currentLyricIndex].singer === "Wyclef") {
      lyricOthers.textContent = lyrics[currentLyricIndex].text;
    }
    currentLyricIndex++;
    }
   } 
