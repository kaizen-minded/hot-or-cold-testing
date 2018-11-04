import React from 'react';
import { shallow, mount } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    let wrapper;
    it('Should render TopNav', () => {
        shallow(<TopNav />);
    });
    it('Shoud have clearfix class', () => {
        wrapper = shallow(<TopNav />);
        expect(wrapper.find('ul').hasClass('clearfix')).toEqual(true);
    })
    it('Should call the function onGenerateAuralUpdate', () => {
        const callback = jest.fn();
        wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
        wrapper.find('a.status-link').simulate('click');
        expect(callback).toHaveBeenCalled();
    })
    it('Should call the function onRestartGame', () => {
        const callback = jest.fn();
        wrapper = mount(<TopNav onRestartGame={callback} />);
        wrapper.find('a.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    })
})