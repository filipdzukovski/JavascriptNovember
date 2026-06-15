import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstants";
const initialState = {
    cakes: 10
    //da se dodade varijabla koja
    //koga ke se kliknat poveke torti od sto imame
    // ke se prikaze greska
    //odnosno na primer
    //klik na buy 3 cakes a ima samo 2 vo stock
    //poraka: not Enough Cakes only 2 left !!!
}

const CakeReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_CAKE:
            return {
                ...state,
                cakes: state.cakes - action.payload
            }           //10            //1

        case RESTOCK_CAKES:
            return {
                ...state,
                cakes: action.payload
            }

        default: return state;
    }

}

export default CakeReducer;