import { Dashboard } from 'components'
import { BrowserRouter, IndexRoute } from 'react-router-dom'

export default (
    <BrowserRouter>
        <IndexRoute component={Dashboard} />
    </BrowserRouter>
)