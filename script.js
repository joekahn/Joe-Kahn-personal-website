const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";

document.querySelector("body").appendChild(h2);

function sayHello(name) {

    console.log(`hello ${name}`);

}
 

return sayHello(“Stanley”)