import InstructionWord from "./tableSubComponents/InstructionWord";
import InstructionByte from "./tableSubComponents/InstructionByte";
import InstructionMMBlock from "./tableSubComponents/InstructionMMBlock";
import InstructionTag from "./tableSubComponents/InstructionTag";
function DirectTable({instructionList, formConfig}) {

    console.log(instructionList)

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
            <th scope="row">000</th>
  
          </tr>
          <tr>
            <th scope="row">001</th>
  
          </tr>
          <tr>
            <th scope="row">010</th>
  
          </tr>
          <tr>
            <th scope="row">011</th>
  
          </tr>
          <tr>
            <th scope="row">100</th>
  
          </tr>
          <tr>
            <th scope="row">101</th>
  
          </tr>
          <tr>
            <th scope="row">110</th>
  
          </tr>
          <tr>
            <th scope="row">111</th>
  
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
  
  export default DirectTable;