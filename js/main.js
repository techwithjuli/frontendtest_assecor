// Abzurufene Daten über ids
let button          = document.querySelector('#button')
let name            = document.querySelector('#name')
let height          = document.querySelector('#height')
let mass            = document.querySelector('#mass')
let birthYear       = document.querySelector('#birth-year')
let hairColor       = document.querySelector('#hair-color')
let eyeColor        = document.querySelector('#eye-color')
let gender          = document.querySelector('#gender')
let films           = document.querySelector('#films')


// API
function getInfo() {
    updateWithLoading()
    let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber
    // let homeApi = 'https://swapi.co/api/planets/'
    let filmApi = 'https://swapi.co/api/films/'

    /* axios.get(homeApi).then(response => {
        updateInfo(response.data)
    }) */ 

    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateInfoWithError()
    })
}

// Data functions 
function updateInfo(data) {
    name.innerText          = data.name
    height.innerText        = `Größe: ${data.height}`
    mass.innerText          = `Gewicht: ${data.mass}`
    birthYear.innerText     = `Geburtstag: ${data.birth_year}`
    hairColor.innerText     = `Haarfarbe: ${data.hair_color}`
    eyeColor.innerText      = `Augenfarbe: ${data.eye_color}`
    gender.innerText        = `Geschlecht: ${data.gender}`
    // films.innerText         = `Filme: ${data.films}`
}

function filmInfo(data) {

}

function updateInfoWithError(data) {
    name.innerText          = 'Ups, dieser Charakter ist momentan nicht verfügbar!'
    height.innerText        = ''
    mass.innerText          = ''
    birthYear.innerText     = ''
    hairColor.innerText     = ''
    eyeColor.innerText      = ''
    gender.innerText        = ''
    // films.innerText         = ''
}

function updateWithLoading(data) {
    name.innerHTML          = '<i class="fa fa-circle-o-notch fa-spin"></i>'
    height.innerText        = ''
    mass.innerText          = ''
    birthYear.innerText     = ''
    hairColor.innerText     = ''
    eyeColor.innerText      = ''
    gender.innerText        = ''
    // films.innerText         = ''
}



button.addEventListener('click', getInfo)