import React from 'react';
import BlogContent from './BlogContent';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'


const props = {
        match: {params: {id: 1}, isExact: true, path: "", url: ""},
    }

test('renders learn react link', () => {
      const wrapper = shallow(
        <BrowserRouter>
            <BlogContent {...props} />
        </BrowserRouter>
      )
      expect(toJson(wrapper)).toMatchSnapshot()
});