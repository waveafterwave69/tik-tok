import { routesConfig } from '../routes/routesConfig'
import type { IRoutes } from '@/shared/types'
import { Routes, Route } from 'react-router'

const BaseLayout: React.FC = () => {
    return (
        <>
            <Routes>
                {routesConfig.map(({ page, url }: IRoutes) => (
                    <Route path={url} element={page} />
                ))}
            </Routes>
        </>
    )
}

export default BaseLayout
