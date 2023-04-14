
export const cancelData = ( inputs ) => {
    
    inputs.forEach( input => {
        input.readOnly = true;
        input.style.background = 'none';
        input.style.borderBottom = 'none';
        
    });
    
}
