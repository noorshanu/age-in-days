function ageInDay() {
    var birth = prompt('waht is your age?');
    var ageInDays = birth* 365;
    var h1 = document.createElement('h1');
    var ans = document.createTextNode('you are  '+ ageInDays + ' days old');
    h1.setAttribute('id' , 'ageinday');
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageinday').remove();
}
