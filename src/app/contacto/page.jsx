//link contacto
import Contact from '../components/Contact/Contact'
import React from 'react';
import Symbols from '../components/Symbols/Symbols';
import './contactStyles.css'


export default function ContactPage() {
    return (
        <main className='contacts__container'>
            <section>
                <h1>Envia tu mensaje al Doctor</h1>
                { <Symbols/>}
            </section>
            <aside>
                <Contact to= '#' text = 'Send' />
            </aside>
        </main>
    );
};
