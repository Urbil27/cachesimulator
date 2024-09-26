import DirectTable from './tables/DirectTable.js';
import TwoWayTable from './tables/TwoWayTable.js';
import FourWayTable from './tables/FourWayTable.js';
import FullTable from './tables/FullTable.js';
function Table({formConfig}) {

  console.log(formConfig.cacheType);
  var component = <FullTable/>;
  if (formConfig.cacheType === 0){
    component = <></>;
  }
  else if(formConfig.cacheType === 1){
    component = <DirectTable/>;
  }
  else if (formConfig.cacheType === 2){
    component = <TwoWayTable/>;
  }
  else if (formConfig.cacheType === 4 ){
    component = <FourWayTable/>;
  }
  return component;

  }
  
  export default Table;