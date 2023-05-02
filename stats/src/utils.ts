export const dateFromString = (dateString: string): Date => {
    const dateParts = dateString
        .split("/")
        .map((part: string): number => {return parseInt(part)});
    return new Date(dateParts[2], dateParts[1], dateParts[0]);
}