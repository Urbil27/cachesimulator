function calculateWord(address){
    return Math.floor(address/wordSize);
}
function calculateMMBlock(address){
    return calculateWord(address)%blockSize;
}
function calculateMMWord(address){
    return Math.floor(calculateWord(address)/blocksize);
}
function calculateTag(address){
    return Math.floor(calculateMMBlock(address)/cacheType);
}
function calculateSet(address){
    return calculateMMBlock%cacheType;
}