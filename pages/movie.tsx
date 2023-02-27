import { useRouter } from 'next/router';
import { MovieCard } from '@/components/MovieCard';

export default function Movie() {
    const router = useRouter();
    const {id} = router?.query;
  return (
    <>
      <MovieCard id={id || ''}/>
    </>
  )
}
