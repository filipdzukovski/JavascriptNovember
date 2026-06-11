export const sayHello = () => { //<-- Action Creator
    return {
        type: 'SAY_HELLO',
        payload: 'Hi and welcome to my app'  //<-- Action
    }
}

export const sayGoodbye = () => { //<-- Action Creator
    return {
        type: 'SAY_GOODBYE',
        payload: 'Thanks for visiting my app'  //<-- Action
    }
}