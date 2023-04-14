
export const editData = ( inputs ) => {

    inputs.forEach( input => {
        input.readOnly = false;
        input.style.background = 'hsl(0, 0%, 85%)';
        input.style.borderBottom = '1px solid gray';
    });
}
