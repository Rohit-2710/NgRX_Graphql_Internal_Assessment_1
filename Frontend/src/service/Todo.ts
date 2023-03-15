export interface Todo{
    _id?:string
    todo:string
    due:string
    status:string
}
export interface ListTodo{
    data:{todos:Todo[]}
}
export interface AddTodo{
    data:{todos:Todo}
}