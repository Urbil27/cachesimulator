function InstructionTag({ instructionData, formConfig}) {
    let byte = instructionData.address;
    let word = Math.floor(byte / formConfig.wordSize);
    let blockSizeInWords = formConfig.blockSize / formConfig.wordSize;
    let MMBlock = Math.floor(word/blockSizeInWords)
    let setAmount = 8 / formConfig.cacheType;

    let tag = Math.floor(MMBlock / setAmount);


    if(setAmount != 8){ //Check if we are in a Direct cache
        tag = Math.floor(MMBlock / setAmount);
    }
    else{
        tag = Math.floor(MMBlock / 8);

    }
    
    return (
    
            <td>{tag}</td>
            
        
    );
}

export default InstructionTag;