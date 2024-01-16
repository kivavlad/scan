export function validateInn(num: string) {
    let modifiedNumber = num.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
    let firstNumbers = modifiedNumber.slice(0, 7);
    let lastNumbers = modifiedNumber.slice(14, 19);

    return firstNumbers + ' ' + lastNumbers;
}