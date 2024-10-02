function InstructionMCBlock({ instructionData, formConfig }) {
    let byte = instructionData.address;
    let word = Math.floor(byte / formConfig.wordSize);
    let blockSizeInWords = formConfig.blockSize / formConfig.wordSize;
    let MMWord = word % blockSizeInWords;
    let MMBlock = Math.floor(word/blockSizeInWords)
    let setAmount = 8 / formConfig.cacheType;
    let tag = Math.floor(MMBlock / setAmount);
    let block = MMBlock%8;
    return (
    
            <td>{block}</td>
            
        
    );
}

export default InstructionMCBlock;