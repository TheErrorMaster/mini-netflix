import { useStore } from '../components/MovieStoreProvider';
import { useRouter } from 'next/router';

export default function Movie() {
    const router = useRouter();
    const {id} = router.query;
    const store = useStore();

  return <div>About {id}</div>
}
