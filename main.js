/*
 * Note to self: DO NOT IMPORT REACT HERE!
 * Importing react into the main file with
 *
 * import React from 'react';
 *           - OR -
 * import * as React from 'react';
 *
 * Will result in `React__default = React['default']` being declared as
 * react which _is not a thing_. Instead, react is loaded directly via external
 * resources instead of being bundles.
 */
import { Message } from './components/Message.jsx';
import { CardWrapper } from './components/ui-elements.jsx';

const rootNode = document.querySelector('main');
ReactDOM.render(<CardWrapper source={data} />, rootNode);
// ReactDOM.render(<Message />, rootNode);
