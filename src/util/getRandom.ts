function getRandomInRange(indexStart:string, indexEnd:string) {
    if (typeof indexStart !== 'number' || typeof indexEnd !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }

    if (indexStart > indexEnd) {
        throw new Error('indexStart must be less than or equal to indexEnd.');
    }

    return Math.floor(Math.random() * (indexEnd - indexStart + 1)) + indexStart;
}
  