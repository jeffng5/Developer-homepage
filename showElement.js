let span= document.createElement('span')
const parent = document.getElementsByClassName('desc')




const object = {
    'jwt': 'Experience with JWT in News Aggregator using it to keep user data private and its payload to secure routes',
    'bcrypt' : 'Bcrypt was used in Movie Recommender and News Aggregator to authenticate, login, and register users into app',
    'selenium' : 'I used Selenium as a webscraper on the Tmdb API to get 50,000+ movie synopsis, movie images and other data',
    'tensorflow' : 'Gained Experience in DL/Tensorflow and Keras through Earthquake Predictor project',
    'pandas': 'Used Pandas in DS and also building a dataframe for SpaCy do calculations and recommendations',
    'postgresql': 'PostgreSQL experience gained in News Aggregator backend, and doing Leetcode problems',
    'spacy' : 'Used SpaCy library to make word embeddings for movie summaries in recommendations',
    'express' :  'Experience with Express backend framework through Jobly and News Aggregator projects'
    }


console.log(object['jwt'].toString())




function addingElements(obj) {
    console.log(span)
    span.innerText = object[`${obj}`].toString()
    parent[0].appendChild(span) 
    
    

}

function showTech()
    const bttn = document.getElementsByTagName('button')
    console.log(bttn)

    let jwt = document.getElementById('jwt');
    console.log(jwt)
    bttn[0].addEventListener('click', addingElements('jwt'));

    let bcrypt = document.getElementById('bcrypt');
    bttn[1].addEventListener("click", addingElements('bcrypt'));
    
    let selenium = document.getElementById('selenium');
    bttn[2].addEventListener('click', addingElements('selenium'));
    
    let tensorflow = document.getElementById('tensorflow')
    tensorflow.addEventListener('click', addingElements('tensorflow'))
    
    let pandas = document.getElementById('pandas') 
    pandas.addEventListener('click', addingElements('pandas')) 
    
    let postgresql = document.getElementById('postgresql') 
    postgresql.addEventListener('click', addingElements('postgresql'))
    
    let spacy = document.getElementById('spacy') 
    spacy.addEventListener('click', addingElements('spacy'))
    
    let express = document.getElementById('express')
    express.addEventListener('click', addingElements('express'))





showTech()
// cleanup()