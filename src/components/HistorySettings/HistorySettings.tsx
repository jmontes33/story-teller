'use client';
import { ChangeEvent, useState } from 'react';
import { useValueStore } from '@/app/store/valueStore';

function CreateHistory() {
  const { setHistory, setLoading } = useValueStore((state) => ({
    setHistory: state.setHistory,
    setLoading: state.setLoading,
  }));
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [duration, setDuration] = useState('');

  const ageOptions = ['2', '3', '4', '5', '6', '7'];
  const genderOptions = ['ciencia ficcion', 'fantasia', 'comedia'];
  const durationOptions = ['120', '240'];

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          age: age,
          gender: gender,
          duration: duration,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setHistory(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='bg-[#C1E3D6] h-[100%] w-[100%] rounded-3xl p-5 shadow-2xl overflow-hidden'>
      <h1 className='acorn text-6xl text-center text-[#36A57C] mb-16'>
        Crea una historia
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <h1 className='acorn text-[#36A57C] text-4xl mb-5'>¿Para qué edad?</h1>
        <select
          value={age}
          onChange={handleChange(setAge)}
          className='bg-[#ffffffb4] p-3 rounded-lg text-black font-bold'
        >
          {ageOptions.map((option) => (
            <option key={option} value={option}>
              {`${option} años`}
            </option>
          ))}
        </select>
        <h1 className='acorn text-[#36A57C] text-4xl mb-5 mt-10'>
          Género de la historia
        </h1>
        <select
          value={gender}
          onChange={handleChange(setGender)}
          className='bg-[#ffffffb4] p-3 rounded-lg text-black font-bold'
        >
          {genderOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <h1 className='acorn text-[#36A57C] text-4xl mb-5 mt-10'>
          Duración de la historia
        </h1>
        <select
          value={duration}
          onChange={handleChange(setDuration)}
          className='bg-[#ffffffb4] p-3 rounded-lg text-black font-bold'
        >
          {durationOptions.map((option) => (
            <option key={option} value={option}>
              {`${option} segundos`}
            </option>
          ))}
        </select>

        <button
          type='submit'
          className='bg-[#ffffffb4] p-3 rounded-[100px] mt-8 w-[400px] m-auto acorn text-[#36A57C] text-4xl py-5'
        >
          Generar historia
        </button>
      </form>
    </div>
  );
}

export default CreateHistory;
