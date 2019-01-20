import content from './src/content';

var root = document.querySelector('#root');

var State = {
    'active': 'content'
}

function render(state){
    var equalizer = ''
}

root.innerHTML = `
        ${content(state)}
    `;

render(state)
    