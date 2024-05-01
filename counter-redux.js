
const redux= require('redux');

const counterReducer=(state= {counter: 0}, action) => {
    if(action.type === 'increment') {
        return{
            counter: state.counter +1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter -1
        };
    }
    return state;
};


const store= redux.createStore(counterReducer);

console.log(store.getState());
const counterSubscriber= ()=>{
    //inside the suscribe function we can reach out to store and getState
    const latestState=  store.getState();
    console.log(latestState);
};
 //the above function should  be executed when state changes and new state is form-
 //for this we reach to store to get suscribe method

 store.subscribe(counterSubscriber);

 store.dispatch({type: 'increment'});

 store.dispatch({type: 'decrement'});

