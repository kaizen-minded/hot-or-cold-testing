import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Game from './game';

describe('<Game />', () => {    
    it('Renders without crashing', () => {
        render(<Game />)
    });
})