import React from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok: boolean;
    i: number;
    fn: (bob:string) => string;
    obj: Person
}

export const TextField: React.FC<Props> = () =>{
    return(
        <div>
            <input />
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