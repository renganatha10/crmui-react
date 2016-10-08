import {
        ADD_FIELD, ADD_SECTION, REORDER_SECTION
        } from './action';


export function indexOfObject(myArray, searchTerm, property) {
  for (let i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}


const sectionBiodata = {
    id : 0,
    fieldName : 'BioData',
    fields : [{ id : 0 , name : 'FirstName'},
              { id : 1 , name : 'Date Of Birth'},{ id : 2 , name : 'Father`s Name'},
              { id : 3 , name : 'Languages'},{ id : 4 , name : 'Contact Number'},
              { id : 5 , name : 'Email ID'},
              { id : 6 , name : 'Contact Address'},{ id : 7 , name : 'FaceBook ID'}]
}


const sectionEducation = {
    id : 1,
    fieldName : 'Education',
    fields : [{ id : 0 , name : 'Course'},
              { id : 1 , name : 'Branch'},{ id : 2 , name : 'Specilization'},
              { id : 3 , name : 'University'},{ id : 4 , name : 'Somehtin'}, { id : 5 , name : 'Fucl'}]
}


const initialState = [sectionBiodata,sectionEducation]

export default function(state = initialState,action) {
    switch (action.type){
        case ADD_FIELD:
            const section = state.find(item => item.id===action.field.sectionId);
            const index = indexOfObject(state,action.field.sectionId, 'id');
            const newField = { id : section.fields.length, ...action.field  }
            const modiFiedSection = { ...section , fields : [ ...section.fields , newField ] };
            return  [...state.slice(0,index),
                    modiFiedSection , ...state.slice(index + 1)]
        case ADD_SECTION:
            const newSection = { id: state.length, fieldName : action.section.name, fields:[]}
            const Index = indexOfObject(state,action.section.id, 'id');
            if(action.section.position === 'BELOW'){
                return [...state.slice(0,Index),
                    state[Index],
                    newSection,
                    ...state.slice(Index + 1)]
            }
            return [...state.slice(0,Index),
                newSection,
                state[Index],
                ...state.slice(Index + 1)]
        case REORDER_SECTION:
        if(Math.abs(action.section.from - action.section.to) === 1){
          const temp = state[action.section.from];
          const temp2 = state[action.section.to];
          state[action.section.to] = temp
          state[action.section.from] = temp2
          return [...state];
        } else {
          if(action.section.from > action.section.to){
            return [ ...state.slice(0,action.section.to),
              state[action.section.from],
              ...state.slice(action.section.to,action.section.from),
                  ...state.slice(action.section.from + 1),
                   ]
          } else {
            const a = action.section.from + 1;
            const b = action.section.to + 1;
            return [ ...state.slice(0,action.section.from),
              ...state.slice(a,b),
               state[action.section.from],
                  ...state.slice(action.section.to + 1),
                   ]
          }
        }


        default:
            return state;
    }
}
