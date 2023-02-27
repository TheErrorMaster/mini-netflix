import { MoviesProps } from "@/pages";
import { useRouter } from "next/router";
// import styles from './styles.module.scss';

interface GalleryProps {
    movie: MoviesProps;
}

export default function Gallery(props: GalleryProps) {
    const { movie } = props || {};
    const { Title, Poster: img } = movie || {};
    const router = useRouter()
    return (
        <div style={{ overflow: 'hidden', textAlign: 'center', position: 'relative', width: 400, height: 400, borderRadius: 50 }}
            onClick={() => router?.push(`/movie?id=${Title}`)}>
            <div style={{ paddingLeft: 20 }}>
                <img src={img} alt="movie"
                    style={{ padding: 10 }}
                    width={200} height={"100%"}
                ></img>
            </div>
        </div>
    );
}