import { animeAtom } from '@/app/page';
import { useSetAtom } from 'jotai';

const AddAnimeButton = () => {
  const setAnimes = useSetAtom(animeAtom)

  return (
    <button className='bg-slate-800 text-white p-4 rounded-lg' onClick={() => {
      setAnimes((animes) => [
        ...animes,
        {
          title: 'Cowboy Bebop',
          year: 1998,
          watched: false
        }
      ])
    }}>
      Add Cowboy Bebop
    </button>
  )
}
export default AddAnimeButton