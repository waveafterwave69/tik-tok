import type { Review } from '../../../../shared/types'
import styles from './MovieReviews.module.css'
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Navigation } from 'swiper/modules'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import { useRef } from 'react'
import arrowRight from '../../../../img/arrow-right.png'
import arrowLeft from '../../../../img/arrow-left.png'
import ReviewsItem from '@/entitites/movie/UI/ReviewsItem/ReviewsItem'

interface MovieReviewsProps {
    userReview: Review[] | undefined
}

const MovieReviews: React.FC<MovieReviewsProps> = ({ userReview }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1024 })
    const swiperRef = useRef<SwiperRef>(null)

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev()
        }
    }

    return (
        <>
            <motion.section
                className={styles.reviews}
                initial={{ top: -100, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
            >
                <div className="container">
                    <h2 className={styles.reviews__title}>
                        Оценки пользователей
                    </h2>

                    <div className={styles.swiperContainer}>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={
                                isSmallScreen ? 1 : isMediumScreen ? 2 : 3
                            }
                            loop
                            modules={[Navigation]}
                            navigation={false}
                            className={styles.swiper}
                            ref={swiperRef}
                        >
                            {userReview &&
                                userReview.map((review: Review) => (
                                    <SwiperSlide key={review.kinopoiskId}>
                                        <ReviewsItem review={review} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                        <div className={styles.swiper__buttons}>
                            <button
                                onClick={goPrev}
                                className={styles.swiper__button}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    src={arrowLeft}
                                    alt="left"
                                />
                            </button>
                            <button
                                onClick={goNext}
                                className={styles.swiper__button}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    src={arrowRight}
                                    alt="right"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default MovieReviews
