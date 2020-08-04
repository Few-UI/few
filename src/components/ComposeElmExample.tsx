import type { Model, DispatchInput, Component } from '@/types';
import { defineComponent, get } from '@/utils';

const mapDispatch = ( dispatch: Function, scope: string ) =>
    ( { path, value }: DispatchInput ): void =>
        dispatch( {
            path: `${scope}.${path}`,
            value
        } );

const mapAction = ( action: Function, scope: string ) =>
    ( { model, dispatch }: Component<unknown> ): void => action( {
        model: get( model, scope ),
        dispatch: mapDispatch( dispatch, scope )
    } );

const Counter = defineComponent( {
    name: 'Counter',
    init: () => ( {
        val: 3
    } ),
    actions: {
        plusOne: ( { model, dispatch } ) => void
            dispatch( { path: 'val', value: model.val as number + 1 } )
    },
    view: h => ( { model, actions, dispatch } ): JSX.Element =>
        <div>
            {model.val}
            <button onClick={actions.plusOne}>+</button>
            <button onClick={() => void
                dispatch( { path: 'val', value: model.val as number - 1 } )
            }>-</button>
        </div>
} );

const CounterGroup = defineComponent( {
    name: 'CounterGroup',
    init: () => ( {
        uid: 1,
        counters: [ {
            id: 0,
            counter: Counter.init()
        } ]
    } ),
    actions: {
        // local msg
        insert: ( { model, dispatch } ): void => {
            dispatch( {
                path: 'counters',
                value: ( model.counters as Model[] ).concat( [ {
                    id: model.uid,
                    counter: Counter.init()
                } ] )
            } );
            dispatch( {
                path: 'uid',
                value: ( model.uid as number )++
            } );
        },
        remove: ( { model, dispatch } ): void => {
            dispatch( {
                path: 'counters',
                value: ( ( model.counters as Model[] ).splice( -1, 1 ), model.counters )
            } );
            dispatch( {
                path: 'uid',
                value: ( model.uid as number )--
            } );
        }
    },
    view: h => ( { model, actions, dispatch } ): JSX.Element =>
        <>
            <button onClick={actions.insert}>Insert</button>
            <button onClick={actions.remove}>Remove</button>
            { ( model.counters as Model[] ).map( ( _, idx ) =>
                h( null, { key: idx }, Counter.view( h )( {
                    model: get( model, `counters[${idx}].counter` ) as Model,
                    actions: {
                       plusOne: mapAction( Counter.actions.plusOne, `counters[${idx}].counter` ).bind( null, {
                           model,
                           dispatch
                       } )
                    },
                    dispatch: mapDispatch( dispatch, `counters[${idx}].counter` )
                } ) )
            )}
        </>
} );

export default defineComponent( {
    name: 'CounterGroupExample',
    view: h => (): JSX.Element =>
        <>
            <CounterGroup />
        </>
} );
