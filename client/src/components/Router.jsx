import { Route, Routes } from 'react-router-dom'
import Result from './Result'
import App from '../App'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<Result/>}/>
    </Routes>
    </>
  )
}

export default Router;