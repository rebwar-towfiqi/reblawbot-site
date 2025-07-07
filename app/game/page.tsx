'use client';

export default function GamePage() {
  return (
    <main className='w-full h-screen bg-black flex items-center justify-center'>
      <iframe
        src='/game/index.html'
        className='w-full h-full border-0'
        title='RebLaw Legal Game'
        allowFullScreen
      />
    </main>
  );
}
