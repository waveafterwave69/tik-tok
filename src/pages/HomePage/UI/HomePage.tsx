import { useEffect, lazy, Suspense } from 'react'
import Promo from '../../../widgets/promo/UI/Promo/Promo'
import Trends from '../../../widgets/films/UI/Trends/Trends'
import NewFilms from '../../../widgets/films/UI/NewFilms/NewFilms'
import Collection from '@/widgets/collections/UI/Collection/Collection'
import CategoryFilms from '@/widgets/films/UI/CategoryFilms/CategoryFilms'

const LazyNewsPromo = lazy(
    () => import('../../../widgets/news/UI/NewsPromo/NewsPromo')
)
const LazyFamily = lazy(
    () => import('../../../widgets/family/UI/Family/Family')
)

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <Promo />
                <Trends />
                <CategoryFilms />
            </div>
            <Suspense fallback={<div>Loading News...</div>}>
                <LazyNewsPromo />
            </Suspense>
            <div className="container">
                <NewFilms />
                <Collection />
            </div>
            <Suspense fallback={<div>Loading Family...</div>}>
                <LazyFamily />
            </Suspense>
        </>
    )
}

export default HomePage
