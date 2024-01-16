// async await
const root=document.querySelector('#root')
const all=document.getElementById('all')
const input=document.querySelector('input')
const random=document.getElementById('random')

const url='https://restcountries.com/v3.1/name/'
const allUrl='https://restcountries.com/v3.1/all'

async function getCountry(name){
    const responce=await fetch(url+name)
    const data= await responce.json()
    showCountry(data)
}

function showCountry(arr){
    root.innerHTML=''
    for (const obj of arr) {
        root.innerHTML+=`
        <h4>${obj.name.common}</h4>
        <h4>столица: ${obj.capital}</h4>
        <img src='${obj.flags.png}'/>
        `
    }
}

input.onchange=()=>{
    getCountry(input.value)
}

async function getCountries(){
    const responce=await fetch(allUrl)
    const data= await responce.json()
    showCountry(data)
}

all.onclick=()=>{
    getCountries()
}

random.onclick=async()=>{
    const randomMath=Math.floor(Math.random()*250);
    const response=await fetch(allUrl);
    const data = await response.json();

    const randomCountry=data[randomMath]
    showCountry([randomCountry]);
};