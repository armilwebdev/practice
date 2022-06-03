import {useState} from 'react';

const Blogs = () => {
  // const [name, setName] = useState('Mario');
  // const [age, setAge] = useState(32);
    const [name, setName] = useState('Tom Cruise');
    const [age, setAge] = useState(45);

  const handleClick = () =>{
    setName('Luigi');
    setAge(25);

    console.log(name);
  }

  return (
  <>
    <div className="bg-stone-200 h-screen page-body">
      <h1 className="text-2xl font-bold">Blogs</h1>
<table className="mt-8 table-auto bg-stone-100 border-separate w-full text-left p-6 rounded-lg">
  <thead>
    <tr className="">
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-stone-400">
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr className="hover:bg-stone-400">
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr className="hover:bg-stone-400">
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>      
<div>
  <button 
    onClick={handleClick}
    className = "bg-stone-500 px-2 text-stone-200 mt-2 rounded-sm uppercase"
    >Click me</button>

    <p>{name} is { age } years old</p>
</div>
    </div>
  </>

  );};

export default Blogs;