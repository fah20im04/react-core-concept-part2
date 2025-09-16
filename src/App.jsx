import Batsman from './Batsman';
import './App.css'
import Users from './users'
import Counter from './counter';
import { Suspense } from 'react';
import Friends from './friends';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())

 const fetchFriends = async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      return res.json();
 }

function App() {

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('I am clicked')
  }
  const handleClick3 = () => {
    alert(' i am clicked 3')
  }
  const addNum = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }
  return (
    <>
      <h3>Vite + React</h3>
      {/* <Suspense fallback={<h3>LOading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming for treat</h3>}>
         <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>
      {/* <button onClick="handleClick()"> Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => addNum(5)}>Click me 4</button>
      <button onClick={function handleClick2() {
        alert("i am clicked2")
      }}>Click me 2</button>


    </>
  )
}

export default App
