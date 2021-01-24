/* GLOBAL VARIABLES */
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [

]



// ---------------------------------------------------------------------------------



/* FUNCTIONS */

// fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000)
    }

    addData(newUser);
}

// double everyones money
function doubleMoney() {
    data = data.map((user) => {
        return {
            ...user, money: user.money * 2 
        }
    })

    updateDOM();
}

// sorts and shows only millionaires 
function showMillionaires() {
    data.sort((a, b) => b.money - a.money);

    updateDOM();
}

function filterMillionaires() {
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

// calculate weatlh
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

// add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
}

// update DOM
function updateDOM(providedData = data) {
    // clear the main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> $${formatMoney(item.money)}`;
        main.appendChild(element);
    })
}

// format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


// ---------------------------------------------------------------------------------
/* FUNCTION INVOCATIONS */
getRandomUser()
getRandomUser()
getRandomUser()

// ---------------------------------------------------------------------------------



/* EVENT LISTENERS */
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', filterMillionaires);
sortBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth)

// ---------------------------------------------------------------------------------

