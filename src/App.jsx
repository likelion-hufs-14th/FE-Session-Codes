// App.jsx (DetailPage 라우트 추가)
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import data from './dummy/data';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage posts={data} />} />
                <Route path="/detail/:id" element={<DetailPage posts={data} />} />
            </Routes>
        </>
    );
}

export default App;
