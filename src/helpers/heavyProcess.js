export const heavyProcess = ( iterations ) => {
    for( let i = 0; i < iterations ; i++ ){
        console.log('Iteration number:',i);
    }
    return `${ iterations } iterations processed`;
}