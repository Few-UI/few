import { ComponentDef } from '../types';

import ViewExample from './ViewExample';
import FragmentExample from './FragmentExample';
// import PropsSubscriptionExample from '../../test/components/PropsSubscriptionExample';

export default {
    name: 'EntryComponent',
    // h( 'div', null, 'current number: ', model.name ) is working too, but
    // it is not friendly for jsbeautify
    // https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
    view: h => (): JSX.Element =>
        <div>
            {/*
            // @ts-ignore */}
            <ViewExample />
            {/*
            // @ts-ignore */}
            <FragmentExample />
        </div>,
    init: () => ( {} )
} as ComponentDef;

/*
const h = '3';
const Test = ( props: object ) => ( {
    type: 'button',
    props: null as object,
    key: 3
} );
<Test />;
*/
