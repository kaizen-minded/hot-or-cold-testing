import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from './guess-count';

describe('< GuessCount />', () => {
    // let wrapper;
    it(' should render the GuessCount component', () =>{
        shallow(<GuessCount />)
    })

    it('should have a prop', () => {
        const wrapper = mount(<GuessCount guessCount= {5} />);
        expect(wrapper.props().guessCount).toEqual(5)
    })

    it('should work a test', () => {
        const wrapper = mount(<GuessCount guessCount={2} />)
        expect(wrapper.prop('guessCount')).toEqual(2)
    })
})