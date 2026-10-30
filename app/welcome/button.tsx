interface Children {
    text: string;
}

export function Button({text}: Children) {
  return (
    <button className="text-xl">{text}</button>
  );
}