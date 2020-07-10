// default export
export default 1;

// default import
import xx from '.x/js'

// named export 
export const a = function() {};
const b = 2
export {
    b
}
export default {
    a:1,
    b:2
}

import {a, b} from '../js';

