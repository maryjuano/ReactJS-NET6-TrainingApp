import React from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Top from './components/Navigation';
import Voter from './components/Voter';
import VoterForm from './components/Voter/VoterForm';

export default function App() {
    return (
        <>
            <Top />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="voters" element={<Voter />} />
                    <Route path="voters/new" element={<VoterForm />} />
                    <Route path="voters/:id" element={<VoterForm />} />
                </Routes>
            </Container>
        </>
    )
}


function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

