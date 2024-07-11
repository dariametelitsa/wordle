export function getRandom(min = 0, max = 100) {
    if(min > max){
        [min, max] = [max, min];
    }
    let res = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(res);
}
