import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Layout from './components/layout';

export default function Home() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="page1" element={<h1>Page 1</h1>} />
                    <Route path="page2" element={<h1>Page 2</h1>} />
                    <Route path='page3' element={<h1>Page 3</h1>} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Router>
    )
}