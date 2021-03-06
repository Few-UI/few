// https://medium.com/@mickey.vip/an-approach-to-nested-reusable-view-functions-in-elm-a1531b9abaf3
import { defineComponent } from '@/utils';
import { wait } from '../../src/utils';

const PropSubscriptionWidget = defineComponent<{
    firstName: string;
    lastName: string;
}>( {
    name: 'PropSubscriptionWidget',
    view: h => ( { props: { firstName, lastName }, model: { address } } ): JSX.Element =>
        <div>
            <div>Name: {firstName || 'Jane'} {lastName || 'Dole'}</div>
            <div>Address: {address}</div>
            {/*
                <div>{( actions.getAddress(), '' )}</div>
            */}
        </div>,
    init: () => ( {
        address: 'undefined'
    } ),
    watchers: ( { props, actions } ) => {
        return [ {
            watch: props.lastName,
            action: actions.getAddress
        } ];
    },
    actions: {
        getAddress: async( { props: { lastName }, dispatch } ): Promise<void> => {
            dispatch( { path: 'address', value: 'loading...' } );
            await wait( 1000 );
            if ( lastName === 'Stark' ) {
                dispatch( { path: 'address', value: 'winter fall' } );
            } else if ( lastName === 'Tully' ) {
                dispatch( { path: 'address', value: 'river run' } );
            }
        }
    }
} );

export default defineComponent<{
    lastName: string;
}>( {
    name: 'PropSubscriptionExample',
    init: () => ( {
        lastName: 'Stark'
    } ),
    // elm style of upedate
    actions: {
        changeFamily: ( { model, dispatch } ) => void
            dispatch( { path: 'lastName', value: model.lastName === 'Stark' ? 'Tully' : 'Stark' } )
    },
    view: h => ( { model, actions } ): JSX.Element =>
        h( 'div', null,
            h( PropSubscriptionWidget, {
                firstName: 'Ed',
                lastName: model.lastName
            } ),
            h( 'button', {
                id: 'changeFamily',
                onClick: actions.changeFamily
            }, 'change' )
        )
} );

