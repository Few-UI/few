import {
    Component,
    ComponentDef
} from '../types';


const ActionExample: ComponentDef = {
    name: 'ActionExample',
    init: () => ( {
        value: 7
    } ),
    // elm style of upedate
    actions: {
        plusOne: ( component: Component ): void => {
            const { model, dispatch } = component;
            dispatch( 'value', model.value as number + 1 );
        }
    },
    // eslint-disable-next-line react/display-name
    view: ( { model, actions, h }: Component ) =>
        <div>
            <div>current number: {model.value}</div>
            {/*
                https://github.com/apollographql/react-apollo/issues/1841
                h function has loose signature as Functon, which doesn't have
                issue above
            */}
            <button onClick={(): void => actions.plusOne()}>+1</button>
        </div>
};

export default ActionExample;