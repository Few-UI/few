import { defineComponent } from '@/utils';
import ViewExample from './ViewExample';
import SlotExample from './SlotExample';
// import PropsSubscriptionExample from '../../test/components/PropsSubscriptionExample';

export default defineComponent( {
    name: 'EntryComponent',
    // h( 'div', null, 'current number: ', model.name ) is working too, but
    // it is not friendly for jsbeautify
    // https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
    view: h => (): JSX.Element =>
        <div>
            <ViewExample />
            <SlotExample />
        </div>,
    init: () => ( {} )
} );
