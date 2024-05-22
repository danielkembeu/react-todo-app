import React from 'react';
import './style.css';

export default function Input() {
    return (
        <form className='formulaire'>
            <input className='text_field' placeholder='Nouvelle tâche...' />
            <button className='submit_button' type='submit'>Créer</button>
        </form>
    );
}