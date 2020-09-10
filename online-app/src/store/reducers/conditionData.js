import Scenarios from '../../constants/Data/SCENARIOS';
import { INCREMENT_CONDITION } from '../actions/conditionData';
import shuffle from '../../utils/shuffleArray';

const scenarioInstance = new Scenarios();

// for 3 scenarios
const motives = [shuffle(['good', 'bad'])[0], shuffle(['good', 'bad'])[0], shuffle(['good', 'bad'])[0]];
const conditions = shuffle(['independent', 'shared', 'sequential']);
const neighbourBeliefs = {
    // positive beliefs
    positive: [
        { a: 30, b: 80 },
        { a: 20, b: 50 }
    ],
    // negative beliefs
    negative: [
        { a: 80, b: 30 },
        { a: 50, b: 20 }
    ]
};
const neighbourBeliefsPosNegIndex = [shuffle(['positive', 'negative'])[0], shuffle(['positive', 'negative'])[0], shuffle(['positive', 'negative'])[0]];
const neighbourBeliefsOrder = [shuffle(neighbourBeliefs[neighbourBeliefsPosNegIndex[0]]), shuffle(neighbourBeliefs[neighbourBeliefsPosNegIndex[1]]), shuffle(neighbourBeliefs[neighbourBeliefsPosNegIndex[2]])];
const names = shuffle([0, 1, 2, 3]);
const neighbour1Names = shuffle([0, 1, 2, 3]);
const neighbour2Names = shuffle([0, 1, 2, 3]);
const scenariosOrder = shuffle([0, 1, 2]); 
const conditionData = [
    scenarioInstance.generateScenario(scenariosOrder[0], names[0], neighbour1Names[0], neighbour2Names[0], 'A', motives[0], neighbourBeliefsOrder[0], conditions[0]),
    scenarioInstance.generateScenario(scenariosOrder[1], names[1], neighbour1Names[1], neighbour2Names[1], 'A', motives[1], neighbourBeliefsOrder[1], conditions[1]),
    scenarioInstance.generateScenario(scenariosOrder[2], names[2], neighbour1Names[2], neighbour2Names[2], 'A', motives[2], neighbourBeliefsOrder[2], conditions[2]),
];

const initialState = {
    neighbourBeliefsPosNegIndex: neighbourBeliefsPosNegIndex,
    namesIdx: names,
    conditions: conditions,
    neighbour1NamesIdx: neighbour1Names,
    motivesIdx: motives,
    conditionNumber: 0, // running number, the only that gets changed while in experiment
    conditionData: conditionData,
    scenariosOrder: scenariosOrder,
    neighbourBeliefsOrder: neighbourBeliefsOrder
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CONDITION:
            const oldState = { ...state };
            return { ...state, conditionNumber: oldState.conditionNumber + 1 };

        default:
            return state;
    }
};

export default reducer;