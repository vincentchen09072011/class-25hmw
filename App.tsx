import { useState } from 'react'
import './App.css'
/*interface Todo {
  text:string;
  complete?:boolean;
  editing?: boolean;
  editInputValue:string
}

function App() {
  const [todo,setTodo] = useState<Todo[]>([
    {
      text:'learn react',

      editInputValue: '',
    },
    {
      text:'meet friend for lunch',

      editInputValue: '',
    },
    {
      text:'build todo app',

      editInputValue: '',
    },
  ])

  const [inputvalue,setinputvalue] = useState('')
  const handleAddTodo = () => {
    if (!inputvalue) return;
    const nextTodo = [...todo, {text:inputvalue, complete:false, editInputValue:''}]
    setTodo(nextTodo)
    setinputvalue('')
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)
  }
  const handleEditInputChange = (index:number,value:string) => {
    const nextTodo = [...todo]
    nextTodo[index].editInputValue = value;
    setTodo(nextTodo)
  }
  const handleStartEdit = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].editing = true
    if (nextTodo[index].editInputValue === '') (
      nextTodo[index].editInputValue = nextTodo[index].text
    )
    setTodo(nextTodo)

  }
  const handleStopEdit = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].editing= false;
    setTodo(nextTodo)
  }
  const handleCompleteEditing = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].editing = false;
    nextTodo[index].text = nextTodo[index].editInputValue
    setTodo(nextTodo)
    nextTodo[index].editInputValue = ''
  }
  return (
    <div>
      <ul>
        {todo.map((todo,index) => {
          return <li key = {index}>
            {
              todo.editing ? (
                <input value={todo.editInputValue}
                onChange={(e)=>handleEditInputChange(index,e.target.value)}
                autoFocus={todo.editing}
                onBlur={() => handleStopEdit(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') (
                    handleCompleteEditing(index)
                  )
                }}/>
              ) : (
                <span onClick={() => handleStartEdit(index)}>{todo.text}{' '}</span>
              )
            }
            <button onClick={() => handleDeleteTodo(index)}>x</button>
          </li>
        })}
      </ul>
      <input type="text" onChange={(event) => setinputvalue(event.target.value)}/>
      <button onClick={handleAddTodo}>+</button>
    </div>
  )
}*/

interface Todo {
  text:string;
  complete?:boolean;
  editing?:boolean;
  editInputValue:string;
}
function App() {
  const [todo,setTodo] = useState<Todo[]>([
    {
      text:'learn react',
      editInputValue:''
    },
    {
      text:'meet friend for lunch',
      editInputValue:''
    },
    {
      text:'build a todo app',
      editInputValue:''
    },
    
  ])
  const [inputvalue,setinputvalue] = useState('')
  const handleAddTodo = () => {
    if (inputvalue === '') return;
    const nextTodo = [...todo,{text: inputvalue, complete:false, editInputValue:''}]
    setTodo(nextTodo)
    setinputvalue('')
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo =[...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)

  }
  const handleEditInputChange = (index:number, value:string) => {
    const nextTodo = [...todo]
    nextTodo[index].editInputValue = value
    setTodo(nextTodo)
  }
  const handleStartEdit = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].editing = true;
    if (nextTodo[index].editInputValue === '') (
      nextTodo[index].editInputValue = nextTodo[index].text
    )
  }
  const handleCompleteEditing = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].editing = false;
    nextTodo[index].text = nextTodo[index].editInputValue;
    setTodo(nextTodo)
    nextTodo[index].editInputValue = ''
  }
  const handleStopEdit = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].editing = false;
    setTodo(nextTodo)
  }
  return (
  <div>
    <ul>
      {todo.map((todo,index) => {
        return <li>
          {
            todo.editing ? (
              <input value={todo.editInputValue}
              onChange={(e) => handleEditInputChange(index,e.target.value)}
              autoFocus={todo.editing}
              onBlur={() => handleStopEdit(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') (
                  handleCompleteEditing(index)
                )
              }}
              />
            ) : (
              <span onClick={() => handleStartEdit}>{todo.text}{' '}</span>
            )
          }
          <button onClick={() => handleDeleteTodo(index)}>x</button>
        </li>
      })}
    </ul>
    <input type="text" onChange={(event) => setinputvalue(event.target.value)}/>
    <button onClick={handleAddTodo}>+</button>
  </div>)
}


export default App
