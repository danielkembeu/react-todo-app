import React from 'react';
import './style.css';

export default function Input({ value, setValue }) {

    // A chaque soumission du formulaire, nous devons créer une nouvelle tâche.
    // C'est la raison de cette fonction.
    // le paramètre 'event' contient toutes les informations sur notre formulaire.
    function createTask(event) {

        // Annuler le comportement par défaut du formulaire, qui est
        // de recharger la page après l'avoir soumit.
        event.preventDefault();

    }

    return (
        <form className='formulaire' onSubmit={createTask}>
            <input className='text_field' placeholder='Nouvelle tâche...' />
            <button className='submit_button' type='submit'>Créer</button>
        </form>
    );
}