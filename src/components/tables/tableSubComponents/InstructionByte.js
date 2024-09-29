function InstructionByte({ instructionData, formConfig }) {
    let byte = instructionData.address;
    let word = Math.floor(byte / formConfig.wordSize);
    let blockSizeInWords = formConfig.blockSize / formConfig.wordSize;
    let MMBlock = word % blockSizeInWords;
    let setAmount = 8 / formConfig.cacheType;
    let tag = Math.floor(MMBlock / setAmount);
    return (
    
            <td>{byte}</td>
            
        
    );
}

export default InstructionByte;