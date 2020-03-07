import React from 'react';
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'
import Comment from './Comment'

describe(`Note component`, () => {

    it('renders a Comment', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <Comment />
            </BrowserRouter>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    // it('renders the Note given props', () => {
    //   const wrapper = shallow(<Note {...props} />)
    //   expect(toJson(wrapper)).toMatchSnapshot()
    // })
})