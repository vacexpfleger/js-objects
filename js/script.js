const pancake = {
    flour: '100',
    egg: '1',
    milk: '200'
}

let userInput = {
    flour: '0',
    egg: '0',
    milk: '0',

howManyPancakes: function() { //funkce zjistí, kolik palačinek můžeme se zadanými surovinami připravit
    let flourMax = Math.floor(this.flour / pancake.flour);
    let eggMax = Math.floor(this.egg / pancake.egg);
    let milkMax = Math.floor(this.milk / pancake.milk);
    //každá z těchto 3 promměných nese počet porcí, který lze z jednotlivých surovin připravit

    let pancakeMax = Math.min(flourMax, eggMax, milkMax);
    return pancakeMax;
    }
}

document.getElementById('calc').addEventListener('click', function() {
    userInput.flour = document.getElementById('flour-input').value;
    userInput.egg = document.getElementById('egg-input').value;
    userInput.milk = document.getElementById('milk-input').value;
    
    console.log(userInput.howManyPancakes());
    let vysledek = document.getElementById('result');
    vysledek.innerHTML = "<h3>Ze zadaného počtu surovin můžete připravit až<h3><h1>" + userInput.howManyPancakes() + "</h1><h3>porcí palačinek.</h3>";
});