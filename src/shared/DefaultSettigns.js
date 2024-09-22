//Replacement policy types
const LRU = 1;
const FIFO = 2;
//Cache association types
const DIRECT = 1;
const TWOWAY = 2;
const FOURWAY = 4;
const FULL = 8;
//DefaultSettigs
var wordSize = 4;
var blockSize = 32;
var cacheType = DIRECT;
var replacementPolicy = LRU;