//event handler on deposit-button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit amount
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

    //update deposit amount
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositInputAmount;

    //clear deposit input field
    depositInput.value = '';

    // update balance increase 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositInputAmount;

    //optional: adding message after finished deposit process
    const h = document.createElement('h6');
    h.classList.add('message');
    h.innerText = 'Deposit updated successfully';
    const parent = document.getElementById('message-div');
    parent.appendChild(h);
    const h6 = document.getElementsByTagName('h6');
    for (const heading of h6) {
        heading.style.textAlign = 'center';
        heading.style.color = 'black';
        heading.style.fontSize = '20px';
        heading.style.marginTop = '10px';
    }


})

//event handler on withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // update withdraw input 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawInputAmount + withdrawTotalAmount;

    //clear withdraw input field
    withdrawInput.value = '';

    //update balance decrease
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;

    //optional: adding message after finished withdraw process
    const h = document.createElement('h6');
    h.classList.add('message');
    h.innerText = 'Withdraw processed successfully';
    const parent = document.getElementById('message-div');
    parent.appendChild(h);
    const h6 = document.getElementsByTagName('h6');
    for (const heading of h6) {
        heading.style.textAlign = 'center';
        heading.style.color = 'black';
        heading.style.fontSize = '20px';
        heading.style.marginTop = '10px';
    }
})

//delete confirmation button
document.getElementById('delete-button').addEventListener('click', function () {

    const messages = document.getElementsByClassName('message');
    for (const message of messages) {
        message.style.display = 'none';
    }

})
document.getElementById('input-delete').addEventListener('keyup', function (event) {
    const deleteButton = document.getElementById('delete-button');
    if (event.target.value == 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }

})
document.getElementById('input-delete').addEventListener('blur', function () {
    const inputField = document.getElementById('input-delete');
    inputField.value = '';

})
