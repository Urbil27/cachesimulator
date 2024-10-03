import InstructionWord from "./tableSubComponents/InstructionWord";
import InstructionByte from "./tableSubComponents/InstructionByte";
import InstructionMMBlock from "./tableSubComponents/InstructionMMBlock";
import InstructionMCBlock from "./tableSubComponents/InstructionMCBlock";
import InstructionTag from "./tableSubComponents/InstructionTag";
import MissOrHit from "./tableSubComponents/MissOrHit";

import { toBeDisabled } from "@testing-library/jest-dom/matchers";
function DirectTable({instructionList, formConfig,blockLists, missAndHitList}) {
    
    
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
              <th scope="row">MC Block</th>
              {
                instructionList.map(
                  (instruction) =>
                    <InstructionMCBlock  instructionData={instruction} formConfig={formConfig}/>
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
            {
                blockLists.b0.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">001</th>
            {
                blockLists.b1.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">010</th>
            {
                blockLists.b2.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">011</th>
            {
                blockLists.b3.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">100</th>
            {
                blockLists.b4.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">101</th>
            {
                blockLists.b5.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">110</th>
            {
                blockLists.b6.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">111</th>
            {
                blockLists.b7.map(
                  (block) =>
                   <td>
                    {block}
                   </td>
                    
                )
              }
          </tr>
          <tr>
            <th scope="row">Miss/Hit</th>

            {
              missAndHitList.map(
                (hit) =>
                    <MissOrHit hit={hit}/>                 
              )
            }
              
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