import React from 'react';
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'
import MenuItem from './MenuItem'

describe(`Note component`, () => {

    it('renders a Comment', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <MenuItem />
            </BrowserRouter>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})