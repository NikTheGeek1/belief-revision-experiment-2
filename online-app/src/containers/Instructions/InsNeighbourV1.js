import React, { useEffect } from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instructions/InsNeighbourV1.module.scss';
import ntwData from '../../constants/draw-network/network_variables';

const w = window;

const InsNeighbourV1 = props => {
    useEffect(() => {
        w.generate_network('network_graph2', 125, 75, ntwData.nodes[1], ntwData.vs[0], ntwData.legs[2], ntwData.legs[3], ntwData.arms[3], ntwData.arms[4], ntwData.bodies[1], ntwData.lines[1], ntwData.arrows[1], 1, 'test', 'Alice');
    }, [])
    return (

        <div className={Classes.InsNeighbourV1}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Belief sharing</h1>
                <p><b>Alice</b> is a likely fellow townsfolks who have also formed an opinion about
                Avery (the main character in the story you just read), but she also knows Avery's motives behind their decision. </p>
                <br />
                <p>She knows that Avery decided to lower employees' wages and to to keep the new, lower wage as the standard wage, 
                    which in turn will save the company more money in the long term. </p>
                <br />

                <div className={Classes.CanvasContainer}>
                    <canvas id="network_graph2" height="150" width="500"></canvas>
                </div>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsNeighbourV1;