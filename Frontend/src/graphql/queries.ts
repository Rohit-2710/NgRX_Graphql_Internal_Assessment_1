import { gql } from "apollo-angular";
export const LIST_TODOS=gql`
query listTodos{
    todos{
        _id
        todo
        status
        due
    }
}`

