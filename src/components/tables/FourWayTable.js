function FourWayTable() {
    return (
      <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">@Byte</th>
            <td>hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">@Word</th>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">MM Block</th>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Tag</th>
            <td>hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
          <tr>
            <th scope="row" rowSpan={3}>SET 00</th>
           
          </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
          </tr>
          <tr>
          <td>Hola</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          
          <tr>
            <th scope="row"rowSpan={3} >SET 01</th>
            
          </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"rowSpan={3} >SET 10</th>
            
          </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"rowSpan={3} >SET 11</th>
            
          </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
          <tr>
            <td>Hola</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
      
          <tr>
            <th scope="row">Miss/Hit</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Cycles</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Traffic</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
  
  export default FourWayTable;