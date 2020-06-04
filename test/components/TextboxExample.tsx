import {
    ComponentDef
} from '../../src/types';


const ViewExample: ComponentDef = {
    name: 'ViewExample',
    view: h => ( props, { model, actions } ): JSX.Element =>
        <div>
            <input id='text' value={model.name as string} onChange={actions.updateName} />
            <div id='result'>{model.name}</div>
        </div>,
    init: () => ( {
        name: 'Monster Hunter'
    } ),
    actions: {
        updateName: ( { dispatch }, e ): void => {
            dispatch( 'name', e.target.value );
        }
    }
};

export default ViewExample;
