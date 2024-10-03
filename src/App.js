
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import Modal from './components/Modal';
import Nav from './components/Nav';
import InstructionForm from './components/InstructionForm';
import Table from './components/Table';
import AddressBitCounter from './components/AddressBitCounter';
import { useState } from 'react';






function App() {
  const [formConfig,setFormConfig] = useState({mainMemorySize:0,wordSize:0,blockSize:0,cacheType:0,replacementPolicy:0});
  const [instruction,emulateInstruction]= useState({address:0,instruction:0});
  const [instructionList, setInstructionList] = useState([]);
  const [missAndHitList, setMissAndHitList] = useState([]);
  const addInstruction = (newInstruction)=>{
    setInstructionList([...instructionList,newInstruction])
    addBlockToDirectTable(newInstruction.address);
    addMissOrHitToDirectTable(newInstruction.address);

  }

   
  const [blockLists, setBlockList] = useState({b0:[],b1:[],b2:[],b3:[],b4:[],b5:[],b6:[],b7:[]});

  const addMissOrHitToDirectTable =(instruction)=>{
    let hit = false;
    let byte = instruction;
    let word = Math.floor(byte / formConfig.wordSize);
    let blockSizeInWords = formConfig.blockSize / formConfig.wordSize;
    let MMBlock = Math.floor(word/blockSizeInWords)
    let block = MMBlock%8;

    if(block==0){
      if(blockLists.b0[blockLists.b0.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==1){
      if(blockLists.b1[blockLists.b1.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==2){
      if(blockLists.b2[blockLists.b2.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==3){
      if(blockLists.b3[blockLists.b3.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==4){
      if(blockLists.b4[blockLists.b4.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==5){
      if(blockLists.b5[blockLists.b5.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==6){
      if(blockLists.b6[blockLists.b6.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }
    }
    if(block==7){
      if(blockLists.b7[blockLists.b7.length-1] == MMBlock){
          setMissAndHitList([...missAndHitList,true])
      }
      else{
        setMissAndHitList([...missAndHitList,false])

      }

    }

  }
  const addBlockToDirectTable = (instruction)=>{
    
    let byte = instruction;
    let word = Math.floor(byte / formConfig.wordSize);
    let blockSizeInWords = formConfig.blockSize / formConfig.wordSize;
    let MMBlock = Math.floor(word/blockSizeInWords)

    let block = MMBlock%8;
   
    if(block==0){
      setBlockList({...blockLists,b0:[...blockLists.b0,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
      
    }
    if(block==1){
      setBlockList({...blockLists,b1:[...blockLists.b1,MMBlock],
        b1: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
    }
    if(block==2){
      setBlockList({...blockLists,b2:[...blockLists.b2,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b0: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
    }
    if(block==3){
      setBlockList({...blockLists,b3:[...blockLists.b3,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b0: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
    }
    if(block==4){
      setBlockList({...blockLists,b4:[...blockLists.b4,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b0: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
    }
    if(block==5){
      setBlockList({...blockLists,b5:[...blockLists.b5,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b0: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
    }
    if(block==6){
      setBlockList({...blockLists,b6:[...blockLists.b6,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b0: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        b7: [...blockLists.b7,blockLists.b7[blockLists.b7.length-1]],
        });
    }
    if(block==7){
      
      setBlockList({...blockLists,b7:[...blockLists.b7,MMBlock],
        b1: [...blockLists.b1,blockLists.b1[blockLists.b1.length-1]],
        b2: [...blockLists.b2,blockLists.b2[blockLists.b2.length-1]],
        b3: [...blockLists.b3,blockLists.b3[blockLists.b3.length-1]],
        b4: [...blockLists.b4,blockLists.b4[blockLists.b4.length-1]],
        b5: [...blockLists.b5,blockLists.b5[blockLists.b5.length-1]],
        b6: [...blockLists.b6,blockLists.b6[blockLists.b6.length-1]],
        b0: [...blockLists.b0,blockLists.b0[blockLists.b0.length-1]],
        });
    }

  }

  return (
    <>
    <Modal setFormConfig={setFormConfig}/>
    <Nav/>
    <div className="container mt-4">
      <AddressBitCounter formConfig={formConfig}/>
      <InstructionForm addInstruction={addInstruction} addBlockToDirectTable={addBlockToDirectTable}/>
      <Table formConfig={formConfig} instructionList={instructionList} blockLists={blockLists} missAndHitList={missAndHitList}/>
    </div>
    </>
  );
}

export default App;
