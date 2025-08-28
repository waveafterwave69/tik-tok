import { getAllFilms } from '@/entitites/films/api/filmsApi'
import type { Films } from '@/shared/types'
import { useEffect, useState } from 'react'

const useGetFilms = () => {
    const [films, setFilms] = useState<Films[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getAllFilms(1)
                setFilms(data?.data.items)
                setIsLoading(false)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return { films, isLoading }
}

export default useGetFilms
