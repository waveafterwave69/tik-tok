import { useEffect, useState } from 'react'
import useGetUserFilms from '../userHooks/useGetUserFilms'
import type { FilmFactss, Actor } from '@/entitites/actor/model/types'
import type { ScreenShots } from '@/entitites/movie/model/types'
import { getReview } from '@/entitites/movie/api/reviewsApi'
import {
    getOneFilm,
    getFilmBg,
    getFilmVideo,
    getFilmsFacts,
    getFilmsActors,
    getSameFilms,
    getSequelPrequelFilm,
} from '@/entitites/films/api/filmsApi'
import type { Films, FilmWatch, Review } from '@/shared/types'

const useGetOneFilm = (id: string | undefined) => {
    const { filmsFav, filmsLike, filmsDisLike } = useGetUserFilms()

    const [film, setFilm] = useState<Films>()
    const [currFilm, setCurrFilm] = useState<string>()
    const [filmBg, setFilmBg] = useState<ScreenShots[]>()
    const [filmWatch, setFilmWatch] = useState<FilmWatch[]>()
    const [filmFacts, setFilmFacts] = useState<FilmFactss[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [actors, setActors] = useState<Actor[]>()
    const [sameFilms, setSameFilms] = useState<Films[]>()
    const [sequalPrequal, setSequalPrequal] = useState<Films[]>()
    const [userReview, setUserReview] = useState<Review[]>()

    const [favColor, setFavColor] = useState<Films[] | undefined | boolean>(
        false
    )
    const [likeColor, setLikeColor] = useState<Films[] | undefined | boolean>(
        false
    )
    const [dislikeColor, setDislikeColor] = useState<
        Films[] | undefined | boolean
    >(false)

    useEffect(() => {
        if (film) {
            const fav =
                filmsFav &&
                filmsFav.filter(
                    (el: Films) => el.film.kinopoiskId === film.kinopoiskId
                )

            setFavColor(fav)

            const like =
                filmsLike &&
                filmsLike.filter(
                    (el: Films) => el.film.kinopoiskId === film.kinopoiskId
                )

            setLikeColor(like)

            const dislike =
                filmsDisLike &&
                filmsDisLike.filter(
                    (el: Films) => el.film.kinopoiskId === film.kinopoiskId
                )

            setDislikeColor(dislike)
        }
    }, [film])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getOneFilm(id)
                const data2 = await getFilmBg(id)
                const data3 = await getFilmVideo(id)
                const data4 = await getFilmsFacts(id)
                const data5 = await getFilmsActors(id)
                const data6 = await getSameFilms(id)
                const data7 = await getSequelPrequelFilm(id)
                const data8 = await getReview(id)
                setFilm(data?.data)
                setFilmBg(data2?.data.items)
                setCurrFilm(data2?.data?.items[0]?.imageUrl)
                setFilmWatch(data3?.data.items)
                setFilmFacts(data4?.data.items)
                setActors(data5?.data)
                setSameFilms(data6?.data.items)
                setSequalPrequal(data7?.data)
                setUserReview(data8?.data.items)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return {
        film,
        filmBg,
        currFilm,
        setCurrFilm,
        filmWatch,
        isLoading,
        filmFacts,
        actors,
        sameFilms,
        sequalPrequal,
        userReview,
        favColor,
        likeColor,
        dislikeColor,
    }
}

export default useGetOneFilm
