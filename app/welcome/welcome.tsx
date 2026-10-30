import { Button } from "./button";

export function Welcome() {
  return (
    <div className='flex flex-col min-h-dvh justify-center'>
      <h1 className="text-center text-7xl">Guess Game</h1>
      <Button text="Start Game"/>
      <Button text="Join Game"/>
    </div>
  );
}