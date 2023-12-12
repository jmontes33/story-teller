'use client';
import { useValueStore } from '@/app/store/valueStore';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

interface HistoryProps {
  title: string;
  story: string;
}

function HistoryReader() {
  const { history, loading } = useValueStore((state) => ({
    history: state.history,
    loading: state.loading,
  }));
  const [key, setKey] = useState(0);
  const [historyJson, setHistoryJson] = useState<HistoryProps | null>(null);
  useEffect(() => {
    setKey(key + 1);
    setHistoryJson(JSON.parse(history));
  }, [history]);

  return (
    <div className='bg-[#C1E3D6] h-[100%] w-[100%] rounded-3xl p-5 shadow-2xl'>
      <h1 className='acorn text-6xl text-center text-[#36A57C] mb-16'>
        Historia
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-10'>
          <div>
            {historyJson && (
              <div className='flex flex-col gap-5'>
                <h1 className='text-4xl text-center font-bold'>
                  {historyJson.title}
                </h1>
                <Typewriter
                  key={key}
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(30)
                      .typeString(historyJson.story)
                      .callFunction(() => {})
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryReader;
