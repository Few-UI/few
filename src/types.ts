
/**
 * https://github.com/SunshowerC/blog/issues/7
 * https://github.com/microsoft/TypeScript/issues/1897
 * https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#type
 * https://stackoverflow.com/questions/53718296/index-d-ts-vs-normal-type-file
 *
 * // for now just sit on react
 */

// Model
export interface Model {
    [key: string]: object | string | number | boolean;
}

// View
export type View = ( Component ) => JSX.Element;

// ComponentDef
export interface ComponentDef {
    name: string;
    init: () => Model;
    update?: Function;
    actions?: {
        [key: string]: Function;
    };
    view: View;
}

// Component
export interface Component {
    model: Model;
    dispatch: Function;
    h: Function;
    actions?: object;
}

// Route
export interface RouteState {
    id: string;
    path: string;
    parent: string;
    enter: Function;
    leave: Function;
    data?: object;
    params?: object;
}

export interface RouteTransition {
    prevState: RouteState;
    currState: RouteState;
}

export interface RoutStateMap {
    [key: string]: RouteState;
}
