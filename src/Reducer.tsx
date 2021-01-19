import {useReducer} from 'react';

type Action = 
 | { type: "add"; text: string;}
 | { type: "remove"; index: number};

 interface ToDo {
     text: string;
     complete: boolean;
 }

 type State = ToDo[];

 const ToDoReducer = (state: State, action: Action) => {
     switch(action.type) {
         case "add":
             return [...state, {text: action.text, complete:false}];
        case "remove":
            return state.filter((_, i) => action.index !== i);
        default:
            return state;
     }
 }

 export const Reducer: React.FC = () =>{
     const [todos, dispatch] = useReducer(ToDoReducer, []);

     return(
         <>
         {JSON.stringify(todos)}
            <button
            onClick = {() => {
                dispatch({type: 'add', text: "..."})               
            }}> 
            + 
            </button>
        </>
     );
 };