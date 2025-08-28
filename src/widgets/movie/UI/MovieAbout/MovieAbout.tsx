import type { Films } from '../../../../shared/types'
import styles from './MovieAbout.module.css'

interface MovieAboutProps {
    film: Films | undefined
}

const MovieAbout: React.FC<MovieAboutProps> = ({ film }) => {
    return (
        <>
            <section className={styles.about}>
                <div className="container">
                    <h2 className={styles.about__title}>
                        Про фильм "{film?.nameRu}"
                    </h2>
                    <p className={styles.about__short}>
                        {film?.slogan} {film?.shortDescription}
                    </p>
                    <p className={styles.about__long}>{film?.description}</p>
                </div>
            </section>
        </>
    )
}

export default MovieAbout
