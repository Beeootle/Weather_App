let search_icon;
let search_input;
let search_results;
let search_name

// search_icon = document.getElementById('search-icon');
search_icon = document.querySelector('#search-icon');
search_input = document.getElementById('search-input');
search_name = document.querySelector('#search-name');
search_results = document.getElementById('search-results');


search_icon.addEventListener('click', () => {
    document.querySelector('#search-name').style.setProperty('display', 'none', 'important');
    search_input.style.setProperty('display', 'inline', 'important');
    document.querySelector('#close-icon').style.setProperty('display', 'inline', 'important');
    search_icon.style.setProperty('display', 'none', 'important');
})

document.querySelector('#close-icon').addEventListener('click', () => {
    document.querySelector('#search-name').style.setProperty('display', 'inline', 'important');
    search_input.style.setProperty('display', 'none', 'important');
    document.querySelector('#close-icon').style.setProperty('display', 'none', 'important');
    search_icon.style.setProperty('display', 'inline', 'important');
})


// document.addEventListener('DOMContentLoaded', function() {} );