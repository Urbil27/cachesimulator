function InstructionTag({ instructionData, formConfig, addBlockToDirectTable}) {
    let byte = instructionData.address;
    let word = Math.floor(byte / formConfig.wordSize);
    let blockSizeInWords = formConfig.blockSize / formConfig.wordSize;
    let MMBlock = Math.floor(word/blockSizeInWords)
    let setAmount = 8 / formConfig.cacheType;

    let tag = Math.floor(MMBlock / setAmount);

    console.log(instructionData);

    if(setAmount != 8){ //Check if we are in a Direct cache
        tag = Math.floor(MMBlock / setAmount);
        console.log("MAYOOOOR");
    }
    else{
        tag = Math.floor(MMBlock / 8);
        console.log("MENOOOOR");

    }
    
    return (
    
            <td>{tag}</td>
            
        
    );
}

export default InstructionTag;