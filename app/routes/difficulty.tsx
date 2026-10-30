import { Button } from "../welcome/button";

export default function Difficulty() {
  return (
    <div className='flex flex-col min-h-dvh justify-center'>
      <h1 className='text-center text-7xl'>Select Difficulty</h1>
      <Button text='Start Game' />
    </div>
  );
}
