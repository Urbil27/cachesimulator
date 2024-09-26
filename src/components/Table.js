import DirectTable from './tables/DirectTable.js';
import TwoWayTable from './tables/TwoWayTable.js';
import FourWayTable from './tables/FourWayTable.js';
import FullTable from './tables/FullTable.js';
function Table({formConfig}) {

  console.log(formConfig.cacheType);
  if (formConfig.cacheType == 0){
    return <></>;
  }
  else if(formConfig.cacheType == 1){
    return <DirectTable/>;
  }
  else if (formConfig.cacheType == 2){
    return <TwoWayTable/>;
  }
  else if (formConfig.cacheType == 4 ){
    return <FourWayTable/>;
  }
  return <FullTable/>;
  }
  
  export default Table;