import {
    ComponentDef
} from './types';


const SecondComponent: ComponentDef = {
    name: 'SecondComponent',
    // h( 'div', null, 'current number: ', model.name ) is working too
    view: ( { model, dispatch, h } ) =>
        h( 'div', null, [
            h( 'div', null, [
                'current number: ',
                model.value
            ] ),
            h( 'button', {
                onClick: () => dispatch( 'value', model.value as number + 1 )
            }, [
                '+1'
            ] )
        ] ),
    init: () => ( {
        value: 7
    } )
};

export default SecondComponent;
