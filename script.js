let tipsform = document.querySelector('.tipsForm');
let totalTip = document.querySelector('#totalTip');
let tip = document.querySelector('#tip');
let each = document.querySelector('#each');
let bill = document.querySelector('#bill');
let serviceQuality = document.querySelector('#serviceQuality');
let numOfPeople = document.querySelector('#people');
let btnSubmit = document.querySelector('.formSubmit');


function calculateTip(event) {
    event.preventDefault();

    if (bill.value == '' || serviceQuality.value == '') {
        return;
    }

    if (numOfPeople.value === '' || numOfPeople.value <= 1) {
        numOfPeople.value = 1;
        each.classList.add('none');
    } else {
        each.classList.remove('none');
    }

    let total = (bill.value * serviceQuality.value) / numOfPeople.value;
    total = total.toFixed(2);
    tip.innerHTML = total;
    totalTip.classList.remove('none');

    bill.value = '';
    serviceQuality.value = '';
    numOfPeople.value = 1;
}


totalTip.classList.add('none');

tipsform.addEventListener('submit', calculateTip);