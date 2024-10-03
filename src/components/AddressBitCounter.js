import React from 'react';

function getSetOrBlock(formConfig){
  if (formConfig.cacheType == 1){
    return "Block";
  }
  else{
    return "Set"
  }
}
function AddressBitCounter({formConfig}) {
    let addressBits = Math.log2(formConfig.mainMemorySize);
    let byte =  Math.log2(formConfig.wordSize);
    let word = Math.log2(formConfig.blockSize/formConfig.wordSize);
    let block = Math.log2(8 / formConfig.cacheType)
    let tag = addressBits - byte - word -block;

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
            <th>{tag}</th>
            <td id="set">{block}</td>
            <td id="word">{word}</td>
            <td id="">{byte}</td>
          </tr>
         </tbody>
         
      </table>
      
      </>
      
    );
  }
  
  export default AddressBitCounter;