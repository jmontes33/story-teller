'use client';
import CreateHistory from '@/components/HistorySettings/HistorySettings';
import HistoryReader from '@/components/HistoryReader/HistoryReader';

function Page() {
  return (
    <main className='h-[100%] flex gap-5 items-center p-5'>
      <CreateHistory />
      <HistoryReader />
    </main>
  );
}

export default Page;
