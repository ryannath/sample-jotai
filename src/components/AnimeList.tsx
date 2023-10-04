import { animeAtom } from '@/app/page';
import { useAtomValue } from 'jotai';

const AnimeList = () => {
  const animes = useAtomValue(animeAtom);

  return (
    <ul className='flex flex-col gap-4 mb-8'>
      {animes.map((item: any) => (
        <li className='bg-blue-200 rounded-lg py-2 px-4' key={item.title}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};
export default AnimeList;
