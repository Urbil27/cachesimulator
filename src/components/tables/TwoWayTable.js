import InstructionWord from "./tableSubComponents/InstructionWord";
import InstructionByte from "./tableSubComponents/InstructionByte";
import InstructionMMBlock from "./tableSubComponents/InstructionMMBlock";
import InstructionTag from "./tableSubComponents/InstructionTag";
function FourWayTable({instructionList,formConfig}) {
    return (
      <div className="row">
      <table className="table">
      <thead>
            <tr>
              <th scope="col">@Byte</th>
              {
                instructionList.map(
                  (instruction) =>
                    <InstructionByte  instructionData={instruction} formConfig={formConfig}/>
                )
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">@Word</th>
              {
                instructionList.map(
                  (instruction) =>
                    <InstructionWord  instructionData={instruction} formConfig={formConfig}/>
                )
              }
            </tr>
            <tr>
              <th scope="row">MM Block</th>
              {
                instructionList.map(
                  (instruction) =>
                    <InstructionMMBlock  instructionData={instruction} formConfig={formConfig}/>
                )
              }
            </tr>
            <tr>
              <th scope="row">Tag</th>
              {
                instructionList.map(
                  (instruction) =>
                    <InstructionTag  instructionData={instruction} formConfig={formConfig}/>
                )
              }
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