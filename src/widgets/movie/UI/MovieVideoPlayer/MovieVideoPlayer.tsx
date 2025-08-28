import styles from './MovieVideoPlayer.module.css'
import type { FilmWatch } from '../../../../shared/types'
import { motion } from 'motion/react'
import useVideo from '@/features/hooks/videoHooks/useVideo'
import Spinner from '@/shared/UI/Spinner/Spinner'

interface MovieVideoPlayerProps {
    filmWatch: FilmWatch[] | undefined
}

const MovieVideoPlayer: React.FC<MovieVideoPlayerProps> = ({ filmWatch }) => {
    const { videoContainerRef, scriptLoaded } = useVideo()

    return (
        <>
            <motion.section
                initial={{ top: -100, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.video}
            >
                <h2 className={styles.title__error}>
                    {'К сожалению, видеоплеер временно не работает :('}
                </h2>
                <div
                    className="uitools"
                    id="videoplayers"
                    ref={videoContainerRef}
                >
                    {!scriptLoaded?.current && <Spinner />}
                </div>
                {filmWatch && filmWatch?.length > 0 && (
                    <div className={styles.video__platforms}>
                        <div className="container">
                            <h2 className={styles.platforms__title}>
                                Другие платформы для просмотра:
                            </h2>
                            <ul className={styles.platform__list}>
                                {filmWatch.map(
                                    ({ logoUrl, platform, url }, id) => (
                                        <motion.li
                                            key={id}
                                            whileHover={{ scale: 1.06 }}
                                            className={styles.list__item}
                                        >
                                            <a
                                                href={url}
                                                target="_blank"
                                                className={styles.item__link}
                                            >
                                                <img
                                                    src={logoUrl}
                                                    alt="platform"
                                                    className={styles.item__img}
                                                />
                                            </a>
                                            <p className={styles.item__text}>
                                                {platform}
                                            </p>
                                        </motion.li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </motion.section>
        </>
    )
}

export default MovieVideoPlayer
