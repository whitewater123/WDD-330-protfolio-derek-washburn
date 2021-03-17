const myForm = document.forms['search'];

const input = myForm.elements.searchInput;
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
input.addEventListener('change', () => alert('changed'), false);
input.value = 'Search Here';
form.addEventListener ('submit', search, false);
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

function makeHero(event) {
    event.preventDefault(); 
    const hero = {}; 
    hero.name = form.heroName.value; 
    hero.realName = form.realName.value;
    hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
    alert(JSON.stringify(hero)); 
    return hero;
}