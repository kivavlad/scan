export const currentInnNumber = (value: string): boolean => {
    if (value.length !== 10) return false;
    const num = Array.from(value).map(Number);
  
    if ((num[9] === ((
        2 * num[0]
        + 4 * num[1]
        + 10 * num[2]
        + 3 * num[3]
        + 5 * num[4]
        + 9 * num[5]
        + 4 * num[6]
        + 6 * num[7]
        + 8 * num[8]) % 11) % 10))
        return true;
    else {
        return false;
    }
};

export const comparisonWithStartDate = (dateStr: string): boolean => {
    const dateObj = new Date(dateStr);
    const nowDate = new Date();
    
    if (nowDate > dateObj) return true;

    return false;
}

export const validateDateRange = (startDate: string, endDate: string): boolean => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (startDateObj < endDateObj) return true;

    return false;
}

export const formattedDate = (dateStr: string) => {
    const postDate = new Date(dateStr);
    const day = postDate.getDate();
    const month = postDate.getMonth() + 1;
    const year = postDate.getFullYear() % 100;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedYear = year < 10 ? `0${year}` : year;
    
    return `${formattedDay}.${formattedMonth}.20${formattedYear}`;
}

export function transformWords(num: number, words: any) {  
	let n = num % 10;

	if (num > 10 && num < 20) {
        return `${num} ${words[2]}`;
    }

	if (n > 1 && n < 5) {
        return `${num} ${words[1]}`;
    }

	if (n === 1) {
        return `${num} ${words[0]}`;
    } 

	return `${num} ${words[2]}`;
}