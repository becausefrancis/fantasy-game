/*-------------------------------- Constants --------------------------------*/

const weapons  = {
    type: ['sword', 'staff', 'bow', 'dagger'],
    class: ['melee', 'ranged'],
};

/*---------------------------- Variables (state) ----------------------------*/

let inventory = [];
let HP = 100;
let MP = 100;

/*------------------------ Cached Element References ------------------------*/

const imageDisplayEl = document.querySelector('#image');
const storyDisplayEl = document.querySelector('#story');
const resultDisplayEl = document.querySelector('#message');

/*-------------------------------- Functions --------------------------------*/

const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice}.`
};

const addToInventory = () => {
    inventory.push()
};

const startGame = () => {
    imageDisplayEl.src = 'https://images.unsplash.com/photo-1507707161256-bbcd7fe3359e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    storyDisplayEl.textContent = 'You woke up in a cave. Right in front of you are four weapons. What are you choosing to start your journey outside?';
    document.getElementById('A').style.visibility = 'visible';
    document.getElementById('B').style.visibility = 'visible';
    document.getElementById('C').style.visibility = 'visible';
    document.getElementById('D').style.visibility = 'visible';
    document.getElementById('startbutton').style.visibility = 'hidden';
};

/* function chooseWeapon(sword, staff, bow, dagger) {
    let sword = document.querySelector('#A');
    let staff = document.querySelector('#B');
    let bow = document.querySelector('#C');
    let dagger = document.querySelector('#D');
    document.querySelectorAll('.btn').addEventListener('click', addToInventory);          // make sure to add a function to add the weapon to the list
};

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#startbutton').addEventListener('click', startGame);

