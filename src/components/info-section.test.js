import React from 'react';
import { shallow, mount } from 'enzyme';

import InfoSection from './info-section';

describe(<InfoSection/>, () => {
    let wrapper;
    it('Should render without crashing', () => {
        shallow(<InfoSection />)
    });

    it("Should contain the correct text", () => {
        wrapper = shallow(<InfoSection />);
        expect(wrapper.contains([<h2>What do I do?</h2>,
             <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>])).toEqual(true);
        expect(wrapper.find('li').length).toEqual(3);
    })
})