import {
    Component,
    ComponentDef
} from '../types';


const AsyncExample: ComponentDef = {
    name: 'AsyncExample',
    init: () => ( {
    } ),
    // elm style of upedate
    actions: {
        setValue1: ( component: Component ): void => {
            const { dispatch } = component;
            dispatch( 'value1', 'value1' );
        },
        setValue2: ( component: Component ): void => {
            const { dispatch } = component;
            dispatch( 'value2', 'value2' );
        },
        setValue3: ( component: Component ): void => {
            const { dispatch } = component;
            setTimeout( ()=>dispatch( 'value3', 'value3' ), 5000 );
        }
    },
    // eslint-disable-next-line react/display-name
    view: ( { model, actions, h }: Component ) =>
        <div>
            <button onClick={(): void => actions.setValue1()}>value1</button>
            <div>{model.value1}</div>
            <button onClick={(): void => actions.setValue2()}>value2</button>
            <div>{model.value2}</div>
            <button onClick={(): void => actions.setValue3()}>value3</button>
            <div>{model.value3}</div>
        </div>
};

export default AsyncExample;
