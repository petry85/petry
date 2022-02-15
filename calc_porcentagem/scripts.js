function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let porcentagem = document.getElementById('porcentagem').value;


    if (bill == '' | porcentagem == '') {
        alert('Favor preencher os valores')
        return;
    }


    let total = (bill * porcentagem) / 100;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('tipsForm').addEventListener('submit', calculateTip);