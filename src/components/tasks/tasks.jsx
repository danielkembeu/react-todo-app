import React from 'react';
import './style.css';
import { IoMdClose, IoMdCheckmark } from 'react-icons/io';


export default function TasksContainer() {
    return (
        <div className='container'>
            <h3>Liste des tâches (1)</h3>

            <div className='tasks_container'>
                <div className='task'>
                    <span>Apprendre React</span>
                    <div className='button_group'>
                        <div className='button_icon' style={{
                            backgroundColor: '#45F833 '
                        }}>
                            <IoMdCheckmark size={24} color='green' />
                        </div>

                        <div className='button_icon' style={{
                            backgroundColor: '#F84633 '
                        }}>
                            <IoMdClose size={24} color='red' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}