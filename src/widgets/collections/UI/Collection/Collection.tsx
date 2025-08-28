import styles from './Collection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
// @ts-ignore
import 'swiper/css'
import { useMediaQuery } from 'react-responsive'
import { collections } from '@/entitites/category/api/categoryApi'
import type { Theme } from '@/entitites/category/model/types'
import CollectionItem from '@/entitites/collection/UI/CollectionItem/CollectionItem'

const Collection: React.FC = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 475 })
    const isMediumScreen = useMediaQuery({ maxWidth: 1440 })

    return (
        <>
            <motion.section
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.collection}
            >
                <h2 className={styles.collection__title}>Коллекции</h2>
                <ul className={styles.collection__list}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={
                            isSmallScreen ? 3 : isMediumScreen ? 4 : 6
                        }
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                    >
                        {collections.map((el: Theme) => (
                            <SwiperSlide key={el.name}>
                                <CollectionItem collection={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </motion.section>
        </>
    )
}

export default Collection
