function billAmount(bill,service){
    if (service === 'good') {
        return 'The total bill is $' + bill * 1.20
    } else if (service === 'fair') {
        return 'The total bill is $' + bill * 1.15
    } else if (service === 'bad') {
        return 'The total bill is $' + bill * 1.10
    } else {
        return 'Enter good, fair, or bad';
    }
}

console.log(billAmount(100,'good'));