import styles from './MovieScreenShots.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// @ts-ignore
import 'swiper/css'
import { useMediaQuery } from 'react-responsive'
import type { ScreenShots } from '@/entitites/movie/model/types'
import ScreenShotItem from '@/entitites/movie/UI/ScreenShotItem/ScreenShotItem'

interface MovieScreenShotsProps {
    films: ScreenShots[] | undefined
    setCurrFilm: (arg: string) => void
}

const MovieScreenShots: React.FC<MovieScreenShotsProps> = ({
    films,
    setCurrFilm,
}) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1440 })

    return (
        <>
            <section className={styles.screenshots}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={isSmallScreen ? 2 : isMediumScreen ? 4 : 5}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {films &&
                        films.map((screen: ScreenShots) => (
                            <SwiperSlide key={screen.imageUrl}>
                                <ScreenShotItem
                                    screen={screen}
                                    setCurrFilm={setCurrFilm}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </section>
        </>
    )
}

export default MovieScreenShots
