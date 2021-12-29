'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


const displayMovements = (movements) => {
    containerMovements.innerHTML = ''
    movements.forEach((mov, idx) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${idx + 1
            } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}

// displayMovements(account1.movements)

// computing usernames for each account

const displayUserNames = (accounts) => {
    accounts.forEach((acc, i) => {
        // console.log(acc.owner.toLowerCase().split(" ").map((name) => name[0]).join(""));
        acc.username =
            acc.owner
                .toLowerCase() //returns a new string
                .split(" ") //returns a array
                .map((name) => name[0]) //returns array
                .join("")
    })
}

displayUserNames(accounts)

// displaying balance

const displayBalance = (movements) => {
    const balance = movements.reduce((acc, mov) => acc + mov, 0)
    labelBalance.textContent = `${balance} € `
}

// displayBalance(account1.movements)

// display summary

const displaySummary = (account) => {
    const incomes =
        account.movements
            .filter((mov) => mov > 0)
            .reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes} € `

    const out =
        account.movements
            .filter((mov) => mov < 0)
            .reduce((acc, mov) => acc + mov, 0)
    labelSumOut.textContent = `${Math.abs(out)} € `

    const interest =
        account.movements
            .filter((mov) => mov > 0)
            .map((mov) => mov * account.interestRate / 100)
            .filter((intst, i, arr) => {
                // console.log(arr);
                return intst >= 1
            })
            .reduce((acc, mov) => acc + mov, 0)
    labelSumInterest.textContent = `${interest} € `
}

// displaySummary(account1.movements)

// login feature
let loggedInUser;

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const username = inputLoginUsername.value
    const pin = +inputLoginPin.value
    // console.log(username, typeof pin);
    loggedInUser = accounts.find((acc) => acc.username === username)
    // console.log(loggedInUser);
    if (loggedInUser?.pin === pin) {
        // welcome message
        labelWelcome.textContent = `welocome back ${loggedInUser.owner.split(" ")[0]}`
        containerApp.style.opacity = '1'
        // showing the UI
        displayMovements(loggedInUser.movements)
        displaySummary(loggedInUser)
        displayBalance(loggedInUser.movements)
        // clear the input fields
        inputLoginUsername.value = inputLoginPin.value = ''
        // to loose focus from pin input field
        inputLoginPin.blur()
    }
})
