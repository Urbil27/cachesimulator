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
function getSetBits(setAmount){
  return Math.log2(setAmount);
}
function getAddressBits(mmSize){
  return Math.log2(mmSize)
}
function getTagBits(mmSize, setBits,wordBits,byteBits){
  return getAddressBits(mmSize)-setBits-wordBits-byteBits;
}
function AddressBitCounter({formConfig}) {
  //Inicializamos las variables
const [tagBits, setTagBits] = React.useState(0); 
const [setBits, setSetBits] = React.useState(0);
const [wordBits, setWordBits] = React.useState(0);
const [byteBits, setByteBits] = React.useState(0);

console.log(formConfig);
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
            <th scope="col">Set</th>
            <th scope="col">Word</th>
            <th scope="col">Byte</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" id="tag">{getTagBits(formConfig.mainMemorySize,getSetBits(formConfig.cacheType),getWordBits(formConfig.wordSize,formConfig.blockSize),getByteBits(formConfig.wordSize))}</th>
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