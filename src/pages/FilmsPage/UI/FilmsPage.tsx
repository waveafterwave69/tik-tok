import FilmPagePromo from '@/entitites/films/UI/FilmPagePromo/FilmPagePromo'
import { useEffect } from 'react'

const FilmsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <FilmPagePromo />
            </div>
        </>
    )
}

export default FilmsPage
