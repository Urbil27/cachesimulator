import {cacheType, DIRECT, TWOWAY, FOURWAY } from  '../shared/DefaultSettigns.js'
import DirectTable from './tables/DirectTable.js';
import TwoWayTable from './tables/TwoWayTable.js';
import FourWayTable from './tables/FourWayTable.js';
import FullTable from './tables/FullTable.js';
function Table() {
  let content;
  if(cacheType === DIRECT){
    
     content = <DirectTable/>;
  
  }
  else if(cacheType === TWOWAY){
    
    content = <TwoWayTable/>;
    
  }
    
  return(content);
  }
  
  export default Table;