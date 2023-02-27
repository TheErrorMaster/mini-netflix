import { useRouter } from "next/router";
import { useStore } from '../../components/MovieStoreProvider';
import { isEmpty, map, find } from 'lodash';
import { observer } from "mobx-react";
import ReactLoading from "react-loading"
import styles from '@/styles/Home.module.css'

interface SingleMovieProps {
    id: string;
}

export const MovieCard = observer((props: SingleMovieProps) => {
    const {id} = props;
    const router = useRouter();
    const store = useStore();
    const currentMovie = find(store?.movie, x => x?.Title === id) || {};
    console.log("id", id, currentMovie)
    return (
        <> 
        {(isEmpty(currentMovie) ? <div>Sorry Something went wrong</div> : (
            <>
            <div className={styles?.outer}>
                <img src={currentMovie?.Poster} alt="movie"
                    width={200} height={"100%"}
                />
                <div style={{ padding: 20}}>
                    <div className={styles?.title}>{currentMovie?.Title}</div>
                    <div>Plot: </div>
                    <div>{currentMovie?.Plot}</div>
                </div>
            </div>
            <div className={styles?.outerTwo}>
                <div>Director: {currentMovie?.Director}</div>
                <div>Genre: {currentMovie?.Genre}</div>
            </div>
            </>
        ))}
        </>
    );
})