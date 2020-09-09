import { STORE_PRIOR } from '../actions/participantData';

const initialState = {
    prior: {
        meanRaw: null,
        mean: null,
        varRaw: null,
        var: null,
        a: null,
        b: null,
    }, 
    posterior: {
        meanRaw: null,
        mean: null,
        varRaw: null,
        var: null,
        a: null,
        b: null,
    }
}


export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_PRIOR:
            const prior = {
                meanRaw: action.priorData.meanRaw,
                mean: action.priorData.mean,
                varRaw: action.priorData.varRaw,
                var: action.priorData.var,
                a: action.priorData.a,
                b: action.priorData.b
            };
            return { ...state, prior: prior};
        default:
            return state;
    }
}