import { useNavigate } from "react-router";

useNavigate;

interface Children {
  text: string;
}

export function Button({ text }: Children) {
  const navigate = useNavigate();

  return (
    <button className='text-xl' onClick={() => navigate('difficulty')}>
      {text}
    </button>
  );
}
