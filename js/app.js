/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let msg;

/*------------------------ Cached Element References ------------------------*/

const bodyEl = document.querySelector('body');
const imageDisplayEl = document.getElementById('image');
const storyDisplayEl = document.getElementById('story');
const choiceOneEl = document.getElementById('A');
const choiceTwoEl = document.getElementById('B');
const restartButtonEl = document.getElementById('restartbutton');

/*-------------------------------- Functions --------------------------------*/

const dontPress = () => {
    restartButtonEl.textContent = `Wow. You're bad at instructions.`;
    restartButtonEl.style.visibility = 'hidden';
    restartButtonEl.style.opacity = 0;
    restartButtonEl.style.transition = 'visibility 0s 4s, opacity 4s linear';
};

const startGame = () => {
    imageDisplayEl.src = 'https://images.unsplash.com/photo-1507707161256-bbcd7fe3359e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    storyDisplayEl.innerHTML = `You wake up in a cave without any memory of how you got there.<br>
        Your head aches and you are famished. You start looking around you and notice a torch by you. (Thank goodness, there's at least light.)<br>
        You suddenly hear the thunderstorm outside and you really need to eat something. There is an apple underneath the torch and while it looks riveting,
        it raises your suspicion. Are you going to eat it?`;
    document.getElementById('startbutton').style.visibility = 'hidden';
    restartButtonEl.style.visibility = 'hidden';
    choiceOneEl.style.visibility = 'visible';
    choiceOneEl.textContent = 'OMG, 🍎!!! Yes.';
    choiceTwoEl.style.visibility = 'visible';
    choiceTwoEl.textContent = `No, I'm not Snow White.`;
    partOne();
};

function youDied() {
    imageDisplayEl.src ='https://plus.unsplash.com/premium_photo-1687487403886-2a350e159059?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    restartButtonEl.style.visibility = 'visible';
    restartButtonEl.textContent = `You died from ${msg}. Restart?`;
    storyDisplayEl.remove();
    choiceOneEl.remove();
    choiceTwoEl.remove();
    restartButtonEl.addEventListener('click', () => {
        document.location.href="https://becausefrancis.github.io/fantasy-game/";
    });
};

const partOne = () => {
    choiceOneEl.addEventListener('click', youDied);
    msg = 'poison. ☠️';
    choiceTwoEl.addEventListener('click', () => {
        storyDisplayEl.innerHTML = `Well you really need to eat soon. You might die of hunger. If not hunger, then thirst! <br>
            You remember about hearing the thunder so that means it's raining outside. Perhaps, you can drink rainwater?`;
        choiceOneEl.textContent = 'Go outside under the ⛈️';
        choiceTwoEl.textContent = 'Stay inside and find something else.';
        partTwo(); 
    });
};
 
const partTwo = () => {
    choiceOneEl.addEventListener('click', youDied);
    msg = 'a lightning strike. ⚡';
    choiceTwoEl.addEventListener('click', () => {
        imageDisplayEl.src = 'https://images.unsplash.com/photo-1605671086496-47bfef8d7191?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        storyDisplayEl.innerHTML = `You try walking around the cave and found nothing to consume. <br>
            You tell yourself you will eat a bug even if you have to. Unfortunately, there really is nothing here. <br> 
            Well...except for that apple. (That apple is getting more scrumptious by the second.) <br>
            Wipe that drool and decide fast!`;
        choiceOneEl.textContent = `Fine. I'll eat it.`
        choiceTwoEl.textContent = `No. It's 100% poisoned.`
        partThree();
    }); 
}; 

const partThree = () => {
    choiceTwoEl.addEventListener('click', youDied);
    msg = 'hunger';
    choiceOneEl.addEventListener('click', () => {
        imageDisplayEl.src = 'https://images.unsplash.com/photo-1554894872-4e447dadac68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        storyDisplayEl.innerHTML = `That was satisfying. For some reason, your thirst is quenched and your hunger is gone. <br>
            With your sanity back, you saw a piece of envelope lying on the floor. It says "DO NOT OPEN!" <br>
            What are you going to do?`; 
        choiceOneEl.textContent = `Nobody tells me what to do. (Open)`;
        choiceOneEl.textContent = `Nah. I could die from a papercut.`;
        partFour();
    });
};
 
const partFour = () => {
    choiceOneEl.addEventListener('click', () => {
        storyDisplayEl.innerHTML = `The letter says: "Ah! You must be awake. Inside this envelope is a key. <br>
            Find the keyhole within this cave. Good luck!" <br><br>
            You have so many questions in your head right now but at this point, you just want to get out of here. <br>
            So you start feeling the walls, looking for a keyhole. <br><br>
            After 15 minutes, you found two keyholes! Which one will you insert the key to?`;
        choiceOneEl.textContent = '♠️';
        choiceTwoEl.textContent = '♣️';
    });
};




/*----------------------------- Event Listeners -----------------------------*/

document.getElementById('startbutton').addEventListener('click', startGame);
document.getElementById('restartbutton').addEventListener('click', dontPress);