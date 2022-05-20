import React,{useState,useEffect} from 'react'

function Counter() {
  const [count,setCount]= useState(0)
  const[count2,setCount2]= useState(0)
  useEffect(()=>{
     
      console.log('Mounting...');
      console.log('count1...'+count);
      console.log('count2...'+count2)
      return ()=>{
          console.log('clean up'+count);

      }

  },[count,count2])

  
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
        <h1>Hello i am component: {count}</h1>

        <button onClick={()=>setCount2(count2+1)}>increment</button>
        <h1>Hello i am component: {count2}</h1>
    </div>
  )
}

export default Counter