/* eslint-env node */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.ts',
    output: {
        file: 'public/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        // https://github.com/rollup/rollup/issues/487
        replace( {
            'process.env.NODE_ENV': JSON.stringify( production ? 'production' : 'development' )
        } ),
        typescript(),
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs( { // converts date-fns to ES modules
            // special setup for react
            // https://zh4ui.net/post/2018-12-23-rollup-typescript-react/
            namedExports: {
                'node_modules/react/index.js': [
                    'createElement',
                    // basic hook
                    'useState',
                    'useEffect',
                    'useContext',
                    // advance hook
                    'useReducer',
                    'useCallback',
                    'useMemo',
                    'useRef',
                    'useImperativeHandle',
                    'useLayoutEffect',
                    'useDebugValue'
                ],
                'node_modules/react-dom/index.js': [
                    'render'
                ]
            }
        } ),
        production && terser(), // minify, but only in production
        !production && serve( {
            contentBase: 'public',
            host: '0.0.0.0',
            port: 8080
        } )
    ]
};
