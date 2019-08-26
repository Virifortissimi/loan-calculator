//Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function (e) {

    //Hide result section
    document.querySelector('#results').style.display = 'none';

    //Show loader
    document.querySelector('#loading').style.display = 'block'; 

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults() {
    //Get values in variables
    const amountValue = document.querySelector('#amount').value;
    const interestValue = document.querySelector('#interest').value;
    const yearsValue = document.querySelector('#years').value;

     //Assign variables to result section
     const monthlyPay = document.querySelector('#monthly-payment');
     const totalPay = document.querySelector('#total-payment');
     const totalInt = document.querySelector('#total-interest');


    //Get total interest
    const totalInterest = ((parseFloat(amountValue) * parseFloat(interestValue) * parseFloat(yearsValue))/100);
    //Get total Payment
    const totalPayment = parseFloat(totalInterest) + parseFloat(amountValue);
    //Get monthly Payment
    const monthlyPayment = totalPayment/(yearsValue * 12);

    if (isFinite(monthlyPayment)) {
        //Make visible result section
        document.querySelector('#results').style.display = 'block';
        //Hide loader
        document.querySelector('#loading').style.display = 'none'; 

        //Show result
        monthlyPay.value = monthlyPayment.toFixed(2);
        totalPay.value = totalPayment.toFixed(2);
        totalInt.value = totalInterest.toFixed(2);
    } else {
        // console.log('Calculating.....')
        showError('Please Check Your Numbers!!!');
    }
    // console.log(totalInterest);
    // console.log(totalPayment);
    // console.log(monthlyPayment);
    // e.preventDefault();
}

function showError (error) {

    //Hide loader
    document.querySelector('#loading').style.display = 'none';
    
    const cardDiv = document.querySelector('.card');
    const headingDiv = document.querySelector('.heading');

    //create error div
    const errorDiv = document.createElement('div');

    //add classes
    errorDiv.className = 'alert alert-danger';

    //append text content
    errorDiv.appendChild(document.createTextNode(error));

    //insert error div
    cardDiv.insertBefore(errorDiv, headingDiv);

    // console.log(errorDiv);

    //remove error div
    setTimeout(clearErrorDiv, 3000);
}

//remove error div
function clearErrorDiv () {
    document.querySelector('.alert').remove();
}