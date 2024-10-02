import DirectTable from './tables/DirectTable.js';
import TwoWayTable from './tables/FourWayTable.js';
import FourWayTable from './tables/TwoWayTable.js';
import FullTable from './tables/FullTable.js';
import { useState } from 'react';
function Table({formConfig,instructionList,blockLists}) {
 
  console.log(blockLists);
  var component = <FullTable formConfig={formConfig} instructionList={instructionList}/>;

  if (formConfig.cacheType == 0){
    component = <></>;
  }
  else if(formConfig.cacheType == 1){
    component = <DirectTable formConfig={formConfig} instructionList={instructionList}  blockLists = {blockLists}/>;
  }
  else if (formConfig.cacheType == 2){
    component = <TwoWayTable formConfig={formConfig} instructionList={instructionList}/>;
  }
  else if (formConfig.cacheType == 4 ){
    component = <FourWayTable formConfig={formConfig} instructionList={instructionList}/>;
  }
  return component;

  }
  
  export default Table;