import styles from './MovieActors.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// @ts-ignore
import 'swiper/css'
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'
import type { Actor } from '@/entitites/actor/model/types'
import ActorItem from '@/entitites/actor/UI/ActorItem/ActorItem'

interface MovieActorsProps {
    actors: Actor[] | undefined
    title: string
}

const MovieActors: React.FC<MovieActorsProps> = ({ actors, title }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1440 })

    return (
        <>
            <motion.section
                className={styles.actors}
                initial={{ top: -100, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
            >
                <div className="container">
                    <h2 className={styles.actors__title}>{title}</h2>
                    <ul className={styles.actors__list}>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={
                                isSmallScreen ? 4 : isMediumScreen ? 5 : 7
                            }
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop
                        >
                            {actors &&
                                actors.map((actor: Actor) => (
                                    <SwiperSlide key={actor.staffId}>
                                        <ActorItem actor={actor} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </ul>
                </div>
            </motion.section>
        </>
    )
}

export default MovieActors
