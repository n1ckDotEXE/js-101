function tipAmount(bill,service){
    if (service === 'good') {
        return 'The tip is $' + bill * .20
    } else if (service === 'fair') {
        return 'The tip is $' + bill * .15
    } else if (service === 'bad') {
        return 'The tip is $' + bill * .10
    } else {
        return 'Enter good, fair, or bad';
    }
}

console.log(tipAmount(100,'good'));