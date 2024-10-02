import { useState } from "react";



function InstructionForm({addInstruction, addBlockToDirectTable}) {
  const [address, setAddress] = useState(0);
  const [instruction, setInstruction] = useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    addInstruction({address:address,instruction:instruction});
  }
    return (
        
        <form className="form-inline" >
        <div className="row">
        <div className="col">
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Address" aria-describedby="basic-addon1" onChange={(e)=> setAddress(e.target.value)}/>
          </div>

        </div>
        <div className="col">
          <select className="form-select" aria-label="Default select example" onChange={(e)=> setInstruction(e.target.value)}>
            <option value="1">LD</option>
            <option value="2">ST</option>
          </select>
        </div>
        <div className="col">
          <button onClick={handleSubmit} className="btn btn-outline-primary"><i className="bi bi-play"></i></button>

        </div>
      </div>
      </form>
      
    );
  }
  
  export default InstructionForm;