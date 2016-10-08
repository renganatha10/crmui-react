export const ADD_SECTION = "ADD_SECTION";
export const EDIT_SECTION = "EDIT_SECTION";
export const REORDER_SECTION = "REORDER_SECTION";
export const ADD_FIELD = "ADD_FIELD";

export function addSection(section){
  return{
    type : ADD_SECTION,
    section
  }
}

export function editSection(section){
  return{
    type : EDIT_SECTION,
    section
  }
}

export function reorderSection(section){
  return{
    type : REORDER_SECTION,
    section
  }
}

export function addField(field){
  return{
      type : ADD_FIELD,
      field
    }
}
