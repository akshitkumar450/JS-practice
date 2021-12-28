const renderCountry = (data) => {
    // console.log(data);
    const html = `
    <div style="display: flex; align-items: center;justify-content: space-around; margin:10px 0;">
        <img width='200' style='border:1px solid black' src="${data?.flags?.png}"/>
        <h3 style='margin:0 20px'>capital 
        (${data?.capital && data?.capital[0]})</h3>
    </div>
    `
    document.getElementById('formContainer').insertAdjacentHTML('afterend', html)
}

const inputValue = document.getElementById('input')

// promises

const country = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => {
            // console.log(res);
            if (!res.ok) throw new Error('country not found')
            return res.json()
        })
        .then((data) => {
            // console.log(data[0])
            // if (!data)
            renderCountry(data[0])
            const border = data[0]?.borders[0]
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        })
        .then((res) => {
            if (!res.ok) throw new Error('country not found')
            return res.json()
        })
        .then((data) => {
            // console.log(data[0])
        })
        .catch((err) => alert(err.message))
    // .finally(() => {
    //     document.getElementById('input').value = ''
    // })
}

// async await

const country1 = async (name) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        console.log(res);
        const data = await res.json()
        console.log(data[0]);
        if (!data[0]) throw new Error('country not found')
        renderCountry(data[0])
        return 'akshit'
    }
    catch (err) {
        alert(err.message)
        throw err
    }

}
// async functions return promises

// const returnedAns = country1('india')
// console.log(returnedAns);
// country1('india')
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))

// (async function () {
//     try {
//         const data = await country1('india')
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err.message);
//     }

// })()

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    country1(inputValue.value)
    inputValue.value = ''
})

// creating our own promise

// const win = () => {
//     return 'i win'
// }
// const loose = () => {
//     return new Error('i loose')
// }

// const myPromise = new Promise((resolve, reject) => {
//     // console.log('first');
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve(win())
//         } else {
//             reject(loose())
//         }
//     }, 200)
// })

// myPromise
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err.message))


// geolocation api
function success(position) {
    console.log(position);
    const { latitude: lat, longitude: lng } = position.coords
    console.log(lat, lng);
}

function error() {
    console.error('unable to find location');
}

// navigator.geolocation.getCurrentPosition(success, error)

// intersection observer api
const nav = document.getElementById('nav')
const ul = document.getElementById('ul')
const boxs = document.querySelectorAll('.box')

function callback(entries, observer) {
    const [entry] = entries
    // console.log(entry.isIntersecting);
    console.log(entry);
    if (entry.isIntersecting)
        entry.target.textContent = entry.target.dataset.name
}
// function callback(entries) {
// entries are the array of threshold
//     const [entry] = entries
//     // console.log(entry);
//     if (entry.isIntersecting)
//         nav.classList.add('fixed')
//     else
//         nav.classList.remove('fixed')
// }

const options = {
    root: null, //viewport
    threshold: 0.9
}
// const box = document.querySelector('.box')
const observer = new IntersectionObserver(callback, options)

boxs.forEach((box) => {
    // the call back function will run each time our target (box) will intersect each time on scrolling in/out of the viewport (root) with our (root i.e, viewport)
    // observer.observe(box)
})

// smooth scrolling behaviour

const h1 = document.getElementById('heading')
const box2 = document.getElementById('box2')
h1.addEventListener('click', () => {
    box2.scrollIntoView({ behavior: "smooth" })
})

// show and hide element on scrolling
h1.classList.add('animate')
window.addEventListener('scroll', () => {
    h1.classList.remove('animate')
})

// DOM Travsersal
const dom = document.getElementById('dom')

// selecting child (going downwards)

// querySelector works on both document and elements
console.log(dom.querySelectorAll('span'));
console.log(dom.children); //direct childs only
console.log(dom.firstElementChild.textContent); //select only first child
console.log(dom.lastElementChild.textContent); //select only first child
console.log(dom.firstChild);

// goind upward (parent)

// console.log(dom.parentNode);
// console.log(dom.parentElement);
console.log(dom.closest('#domContainer')); //returns the closest parent

//selecting siblings

const hide = document.querySelector('.hide')
console.log(hide.previousElementSibling); //previous direct sibling
console.log(hide.nextElementSibling); //next element sibling