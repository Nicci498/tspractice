import React, {useRef, useState} from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob:string) => string;
    obj: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<Props> = ({handleChange}) =>{
    //const [count, setCount] = useState(5); // infers state as number type
    const [count, setCount] = useState<number | null | undefined>(5) // allows for null as well
    const inputRef = useRef<HTMLInputElement>(null); //found by hovering on the ref in 'ref ={}' 
    //Type 'HTMLInputElement | undefined' is not assignable to type 'HTMLInputElement | null'.
    const divRef = useRef<HTMLDivElement>(null); 
    return(
        <div ref = {divRef}>
            <input ref = {inputRef} onChange = {handleChange} />
        </div> 
    );
};


// export const TextField: React.FC<{text: string}> = () =>{
//     return(
//         <div>
//             <input />
//         </div>
//     );
// };



// function TextField(){
//     return(
//         <h3>
//             <input />
//         </h3>)
// }

// export default TextField;