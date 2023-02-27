
import { useStore } from '../components/MovieStoreProvider';
import { useEffect } from 'react'

export const IndexData = () => {
  const store = useStore();

  const fetchData = async () => {
    const listMovies = [
      `http://www.omdbapi.com/?t=iron+man&apikey=${process.env.API_KEY}`,
      `http://www.omdbapi.com/?t=iron+man+2&apikey=${process.env.API_KEY}`,
      `http://www.omdbapi.com/?t=iron+man+3&apikey=${process.env.API_KEY}`,
      `http://www.omdbapi.com/?t=thor&apikey=${process.env.API_KEY}`,
      `http://www.omdbapi.com/?t=hulk&apikey=${process.env.API_KEY}`,
      `http://www.omdbapi.com/?t=doctor+strange&apikey=${process.env.API_KEY}`,
    ]
    try {
      let res = await Promise.all(listMovies.map(x => fetch(x)));
      let resJson = await Promise.all(res?.map(x => x?.json()));
      store?.addMovie(resJson);
    } catch (e) {
      console.log('error', e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return {
    fetchData,

  };
}
