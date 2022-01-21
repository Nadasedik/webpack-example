import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "and this is second demo";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());