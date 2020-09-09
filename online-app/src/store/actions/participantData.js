export const STORE_PRIOR = 'STORE_PRIOR' ;

const w = window;

export const storePrior = priorData => {
    const meanRaw = priorData.mean;
    const mean = priorData.mean / 100;
    const varRaw = priorData.var;
    const variance = w.log_slider(w.transform_con_slider_pos(priorData.var));
    const [a, b] = w.est_beta_par(mean, variance);

    return { type: STORE_PRIOR, priorData: {mean: mean, meanRaw: meanRaw, varRaw: varRaw, var: variance, a: a, b: b}};
};