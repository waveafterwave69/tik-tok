import { apiKey, instance } from '@/app/api/api'
import axios from 'axios'

export const getAllFilms = async (page: number) => {
    try {
        const response = await instance.get('/collections', {
            params: {
                type: 'TOP_250_MOVIES',
                page: page,
            },
            headers: {
                'X-API-KEY': apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}
