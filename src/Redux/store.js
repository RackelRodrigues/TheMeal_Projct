import { createStore} from 'redux'
import  rootReduce from './root-reducer'


const Store = createStore(rootReduce)

export default Store;