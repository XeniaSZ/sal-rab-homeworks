function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    let message;
    message = productName;
    message += ' ';
    message += 'за';
    message += ' ';
    message += productPrice;
    message += ' ';
    message += 'теперь в корзине!';

    console.log(message);

    return message;
}

function addInCartCountChange(value) {

    let oldValue = value;

    let newValue;
    newValue = oldValue;
    newValue = oldValue + 1;

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum;
    newSum = oldSum + difference;

    let newSumText = newSum + ' ₽';
    newSumText = `${newSum} ₽`

    return newSumText;
}

