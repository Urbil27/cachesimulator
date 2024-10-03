import React from 'react';
function getWordBits(wordSize, blockSize){
return Math.log2(blockSize/wordSize);
}
function getByteBits(wordSize){
  if(wordSize!=null){
    return Math.log2(wordSize);
  }
  return Math.log2(0);

  
}
function getSetBits(way){
 return Math.log2(8/way);
}
function getAddressBits(mmSize){
  return Math.log2(mmSize)
}
function getTagBits(cacheType,mmSize, setBits,wordBits,byteBits){
  if(cacheType!=1){//Checking the cache type
    return getAddressBits(mmSize)-setBits-wordBits-byteBits;

  }
  else{
    return getAddressBits(mmSize)-wordBits-byteBits;

  }

  
}
function getSetOrBlock(formConfig){
  if (formConfig.cacheType == 1){
    return "Block";
  }
  else{
    return "Set"
  }
}
function AddressBitCounter({formConfig}) {


    return (
        <>

        <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Address interpreter</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">Tag</th>
            <th scope="col">{getSetOrBlock(formConfig)}</th>
            <th scope="col">Word</th>
            <th scope="col">Byte</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" id="tag">{getTagBits(formConfig.cacheType,formConfig.mainMemorySize,getSetBits(formConfig.cacheType),getWordBits(formConfig.wordSize,formConfig.blockSize),getByteBits(formConfig.wordSize))}</th>
            <td id="set">{getSetBits(formConfig.cacheType)}</td>
            <td id="word">{getWordBits(formConfig.wordSize,formConfig.blockSize)}</td>
            <td id="">{getByteBits(formConfig.wordSize)}</td>
          </tr>
         </tbody>
         
      </table>
      
      </>
      
    );
  }
  
  export default AddressBitCounter;