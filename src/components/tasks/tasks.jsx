import React from 'react';
import './style.css';
import { IoMdClose, IoMdCheckmark } from 'react-icons/io';


function Task({ title, done, tache }) {
    return (
        <div className='task'>
            <span style={{
                textDecorationLine: done && 'line-through'
            }}>{title || 'Apprendre le hook useState de ReactJS'}</span>
            <div className='button_group'>
                <div className='button_icon' style={{
                    backgroundColor: 'rgb(164, 85, 243)'
                }}>
                    <IoMdCheckmark size={24} color='white' />
                </div>

                <div className='button_icon'>
                    <IoMdClose size={24} color='rgb(164, 85, 243)' />
                </div>
            </div>
        </div>
    );
}

export default function TasksContainer({ tache }) {

    const [tachesLocales, setTachesLocales] = React.useState([]);

    return (
        <div className='container'>
            <h3>Liste des tâches ({tachesLocales.length})</h3>

            {/* Si la taille du tableau est supérieure à 1 (Il y'a au moins un element dans le 
        tableau), alors, on l'affiche. Sinon, on affiche le message: 'Aucune tâche à faire pour
        le moment. */}
            {
                tachesLocales.length > 0 ? (
                    <div className='tasks_container'>
                        <Task tache={tache} />
                    </div>
                ) : (
                    <h3 style={{
                        color: '#888',
                        fontWeight: 'normal'
                    }}>Aucune tâche à faire pour le moment</h3>
                )
            }
        </div>
    );
}