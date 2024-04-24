import Hello from './Blockchain';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

function Tdl (){
    const [inputValue, setInputValue] = useState<string>('');
    const [inputList, setInputList] = useState<string[]>([]);
    const myStringArray: string[] = [];
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          const inputText = (event.target as HTMLInputElement).value;
          console.log('Input captured:', inputText);
          // You can perform any further processing here
          setInputValue(''); // Optionally, clear the input field after capturing the input
          //myStringArray = [inputList,inputText]
          inputList.push(inputText);
          setInputList([...inputList, inputText])
          setInputList(prev => ([...prev, inputText]))
          //setInputList(inputList)
          console.log(inputList);
        }
      };
      const delete_row = (index:number) => {
        //const text_to_dlt = (event.target as HTMLInputElement).value;
       // const indexToDelete = inputList.indexOf(text_to_dlt);
       const updatedList = inputList.filter((_, i) => i !== index);//inputList.splice(index, 1);
        
        console.log(updatedList);
        setInputList(updatedList)
        console.log(inputList);
      };


    return(
        <div>
    <h1> todolist</h1>
    <TextField id="outlined-basic" 
               variant="outlined" 
               label="מלא כאן" 
               value={inputValue}
               onChange={(event) => setInputValue(event.target.value)}
               onKeyPress={handleKeyPress}/>
               <table>
                {inputList.map((input,index)=> (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{input}</td>
                        <td><button onClick={(event) => delete_row(index)}>
                            delete</button></td>
                            </tr>
                ))}
               </table>

    </div>
    
    )
}

export default Tdl;