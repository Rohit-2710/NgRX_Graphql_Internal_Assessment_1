import { gql } from "apollo-angular";

export const ADD_TODO=gql`
mutation addTodo($input:AddTodoInput!){
    addTodo(input:$input){
        _id
        todo
        due
        status
    }
}
`
export const DELETE_TODO=gql`
mutation deleteTodo($id: String!){
  deleteTodo(_id: $id) {
    _id
    todo
    due
    status
    
  }
}
`