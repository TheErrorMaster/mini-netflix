import { useRouter } from "next/router";
import { useStore } from '../../components/MovieStoreProvider';
import { isEmpty, map } from 'lodash';
import { observer } from "mobx-react";
import ReactLoading from "react-loading"
import styles from '@/styles/Home.module.css'

export const Gallery = observer(() => {
    const router = useRouter();
    const store = useStore();
    return (
        <>
            {/* show loading screen if empty */}
            {(isEmpty(store?.movie?.[0]?.Title)) ? <ReactLoading width={'50%'} height={'10%'} /> : (map(store?.movie, x => {
                return (
                    <div className={styles?.card}
                        onClick={() => router?.push(`/movie?id=${x?.Title}`)}>
                        <img src={x?.Poster} alt="movie"
                            width={200} height={"100%"}
                        />
                        <div>Rating {x?.Metascore} / 100</div>
                        <div>{x?.Title}</div>
                    </div>
                )
            }))}
        </>
    );
})