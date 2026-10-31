export default function WordInput() {
  let wordCount: number[] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <h1 className='mb-3 text-center'>Word Input</h1>
      <form className='flex flex-col content-center items-center'>
        {wordCount.map((x, _index: number) => (
          <input
            className='resize-none border-2 h-10 w-48 rounded-2xl mb-3'
            key={_index}
            minLength={3}
            maxLength={10}
            required
          />
        ))}
        <input type='submit' />
      </form>
    </>
  );
}
