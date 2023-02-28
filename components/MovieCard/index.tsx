import { useStore } from '../../components/MovieStoreProvider';
import { isEmpty, map, find } from 'lodash';
import { observer } from "mobx-react";
import ReactLoading from "react-loading"
import styles from '@/styles/sass/Home.module.scss'
import { SingleMovieProps } from '@/enum';

export const MovieCard = observer((props: SingleMovieProps) => {
    const {id} = props;
    const store = useStore();
    const currentMovie = find(store?.movie, x => x?.Title === id) || {};
    return (
        <> 
        {(isEmpty(currentMovie) ? <ReactLoading width={'50%'} height={'10%'} /> : (
            <>
            <div className={styles?.top}>
                <img src={currentMovie?.Poster} alt="movie"
                    width={200} height={"100%"}
                />
                <div className={styles?.right}>
                    <h2 className={styles?.title}>{currentMovie?.Title}</h2>
                    <p>{currentMovie?.Plot}</p>
                    <p>{currentMovie?.Metascore}/100</p>
                </div>
            </div>
            </>
        ))}
        </>
    );
})