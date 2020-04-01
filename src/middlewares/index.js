import { applyMiddleware} from 'redux'
import logger from './logger'
import thunk from 'redux-thunk'
import authenticateUser from './authenticateUser'

export default applyMiddleware (
    thunk, 
    logger,
    authenticateUser,
)

