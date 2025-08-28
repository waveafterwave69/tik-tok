import { randomId, getOneFilm } from '@/entitites/films/api/filmsApi'
import type { Films } from '@/shared/types'
import { useEffect, useState } from 'react'

const useGetRandomFilms = () => {
    const [film, setFilm] = useState<Films>()

    useEffect(() => {
        const fetchData = async () => {
            const id = await randomId()
            const data = await getOneFilm(id)
            setFilm(data?.data)
        }

        fetchData()
    }, [])

    return { film }
}

export default useGetRandomFilms
