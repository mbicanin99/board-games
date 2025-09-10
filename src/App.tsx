import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BoardGamesPage } from './pages/board-games-page/BoardGamesPage.tsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoardGamesPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
