function FourWayTable() {
    return (
        <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">@Byte</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">@Word</th>
          
            </tr>
            <tr>
              <th scope="row">MM Block</th>
              
            </tr>
            <tr>
              <th scope="row">Tag</th>
    
            </tr>
            <tr>
              <th scope="row">Memory state:</th>
    
            </tr>
            <tr>
              <th scope="row" rowspan="2">SET 00</th>
    
            </tr>
            <tr>
              <th scope="row" rowspan="2">SET 01</th>
    
            </tr>
            <tr>
              <th scope="row" rowspan="2">SET 10</th>
    
            </tr>
            <tr>
              <th scope="row" rowspan="2">SET 11</th>
    
            </tr>
        
            <tr>
              <th scope="row">Miss/Hit</th>
    
            </tr>
            <tr>
              <th scope="row">Cycles</th>
    
            </tr>
            <tr>
              <th scope="row">Traffic</th>
    
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default FourWayTable;