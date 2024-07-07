import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Table } from "react-bootstrap";
import styles from "../css/Detail.module.css";
function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null); // 영화 정보를 저장할 상태 변수
    const getMovie = async () => {
        try {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setMovie(json.data.movie); // 영화 정보를 업데이트하는 부분
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    useEffect(() => {
        getMovie();
    }, []);
    return ! movie ? (
        <div className={`${styles.detailContainer} ${styles.loadingMessage}`}>
            Loading...
        </div>
    ) : (
        <div className={styles.detailContainer}>
            <h1 className={styles.pageTitle}>Movie Details</h1>
            <hr/>
            <div className={styles.movieInfo}>
                <div className={styles.movieImage}>
                    <img src={movie.large_cover_image} alt={movie.title} />
                </div>
                <div className={styles.movieDescription}>
                    <Table striped bordered hover className={styles.movieTable}>
                        <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{movie.title}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{movie.year}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{movie.description_full}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>{movie.genres.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Ratings</td>
                            <td>{movie.rating}/10</td>
                        </tr>
                        <tr>
                            <td>Running Time</td>
                            <td>{movie.runtime} minutes</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
export default Detail;