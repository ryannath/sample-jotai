'use client';
import AddAnimeButton from '@/components/AddAnimeButton';
import AnimeList from '@/components/AnimeList';
import { atom, useAtom } from 'jotai';
import Image from 'next/image';
import { useRef } from 'react';

export const animeAtom = atom([
  {
    title: 'Ghost in the Shell',
    year: 1995,
    watched: true,
  },
  {
    title: 'Serial Experiments Lain',
    year: 1998,
    watched: false,
  },
]);

export default function Home() {
  const [animes, setAnimes] = useAtom(animeAtom);
  return (
    <main className='max-w-2xl mx-auto mt-4'>
      <h1 className='text-3xl uppercase font-bold mb-8'>Anime List</h1>
      <AnimeList />
      <AddAnimeButton />
    </main>
  );
}
