import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "./components/Loader";
import { lazy, Suspense } from "react";

const WhitePage = lazy(() => import("./components/white-page/WhitePage"));
const AulaGratis = lazy(() => import("./components/aula-gratis/AulaGratis"));
const Obrigado = lazy(() => import("./components/obrigado/Obrigado"));
const Completo = lazy(() => import("./components/completo/Completo"));
const TermosDeUso = lazy(() => import("./components/termos-de-uso/TermosDeUso"));
const PoliticasDePrivacidade = lazy(() => import("./components/politicas-de-privacidade/PoliticasDePrivacidade"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
    React.useLayoutEffect(() => {
        // Disable F12 and Right-Click
        document.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        }, false);

        // Disable some specific keys
        document.addEventListener("keydown", function (event) {
            event = (event || window.event);
            
            if (["F12", "[", "]", "u", "p", "i"].includes(event.key)) {
                event.preventDefault();
                return false;
            }
        });
    }, []);

    return (
        <div className="App">
            {/* routing */}
            <Routes>
                {/* homepage */}
                <Route index path="/" element={
                    <Suspense fallback={<Loader />}>
                        <WhitePage />
                    </Suspense>
                } />

                {/* white-page redirect to homepage */}
                <Route path="/white-page" element={<Navigate to="/" replace />} />

                {/* aula-gratis page */}
                <Route path="/aula-gratis" element={
                    <Suspense fallback={<Loader />}>
                        <AulaGratis />
                    </Suspense>
                }/>

                {/* obrigado page */}
                <Route path="/obrigado" element={
                    <Suspense fallback={<Loader />}>
                        <Obrigado />
                    </Suspense>
                } />

                {/* completo page */}
                <Route path="/completo" element={
                    <Suspense fallback={<Loader />}>
                        <Completo />
                    </Suspense>
                } />

                {/* termos-de-uso page */}
                <Route path="/termos-de-uso" element={
                    <Suspense fallback={<Loader />}>
                        <TermosDeUso />
                    </Suspense>
                } />

                {/* politicas-de-privacidade page */}
                <Route path="/politicas-de-privacidade" element={
                    <Suspense fallback={<Loader />}>
                        <PoliticasDePrivacidade />
                    </Suspense>
                } />
            </Routes>

            {/* page footer */}
            <Suspense fallback={<Loader />}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
