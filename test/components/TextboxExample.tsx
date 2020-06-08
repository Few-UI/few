import { ComponentDef } from '../../src/types';

export default {
    name: 'ViewExample',
    view: h => ( _, { model, actions } ): JSX.Element =>
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
} as ComponentDef;