function calcularReal() {
    var real = document.getElementById('real').value;
    var conversao = real / 5;

    document.getElementById('resultado').innerHTML = 
    conversao.toFixed(1);
}

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})