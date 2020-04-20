function billAmount(bill, service, people) {
    if (service === 'good') {
        total = bill * 1.20;
        splitCost = total / people;
        return 'The total bill per person is $' + splitCost
    } else if (service === 'fair') {
        total = bill * 1.15;
        splitCost = total / people;
        return 'The total bill per person is $' + splitCost
    } else if (service === 'bad') {
        total = bill * 1.10;
        splitCost = total / people;
        return 'The total bill per person is $' + splitCost
    } else {
        return 'Enter good, fair, or bad';
    }
}

console.log(billAmount(100, 'good', 5));