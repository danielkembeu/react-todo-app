
// Implémentation de notre fonction reducer qui sera utilisée par le dispatch.
function reducerFn(state, action) {
    switch (action.type) {
        case 'INCREMENTER':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENTER':
            return { ...state, counter: state.counter - 1 };
        default:
            return { ...state };
    }
}


export default function ReducerHookExample() {

    // Valeur initiale de notre state.
    let initialValue = { counter: 0 };

    // Définit le useReducer.
    const [counterState, dispatchCounter] = React.useReducer(reducerFn, initialValue);

    // Fonction pour décrémenter.
    const remove = () => {
        dispatchCounter({ type: 'DECREMENTER' });
    };

    // Fonction pour incrémenter.
    const add = () => {
        dispatchCounter({ type: 'INCREMENTER' });
    }

    return (
        <div>
            <h3>{counterState.counter}</h3>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
            }}>
                <button onClick={remove}>Décrementer</button>
                <button onClick={add}>Incrémenter</button>
            </div>
        </div>
    );
}