import axios from "axios";

export default function Difficulty() {
  const  handleClick = async () => {
    const response = await axios.get('http://localhost:3000/');
    console.log(response.data)
  };

  return (
    <div className='flex flex-col min-h-dvh items-center justify-center'>
      <h1 className='text-center text-7xl'>Select Difficulty</h1>
      <select className='w-64 outline-solid' name='' id=''>
        <option></option>
        <option>easy</option>
        <option>normal</option>
        <option>hard</option>
      </select>
      <button onClick={handleClick}>Start Game</button>
    </div>
  );
}
