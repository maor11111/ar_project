 import propsHello from '../types'

 function Blockchain(props : propsHello):JSX.Element {
    console.log('qqqq');
    const name:string = props.name;
    return <h2>Blockchainqqqqqq {name} </h2>
   }

   export default Blockchain;

