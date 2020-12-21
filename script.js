// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

let p = document.createElement('p');
p.textContent = "Hey I'm red";
p.style = 'color:red';
container.appendChild(p);

let h3 = document.createElement('h3');
h3.textContent = 'I’m a blue h3!';
h3.style = 'color:blue';
container.appendChild(h3);

let div = document.createElement('div');
div.style = 'background-color:pink; border:black;';

let h1 = document.createElement('h1');
h1.textContent = 'I’m in a div';

let p2 = document.createElement('p');
p2.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);
