import { CHANGE_PHASE, PHASES } from '../actions/gamePhase';

const initialState = {
    [PHASES.ethics]: false,
    [PHASES.notes]: false,
    [PHASES.instructions]: true,
    [PHASES.experiment]: false,
    [PHASES.debrief]: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PHASE:
            const newState = {
                [PHASES.ethics]: false,
                [PHASES.notes]: false,
                [PHASES.instructions]: false,
                [PHASES.experiment]: false,
                [PHASES.debrief]: false
            };
            return { ...newState, [action.phase]: true }
        default:
            return state;
    }
};

export default reducer;