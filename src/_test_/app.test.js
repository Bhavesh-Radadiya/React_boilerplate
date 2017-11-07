import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import App from '../components/app';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });

test('Check application status', () => {
  const app = shallow(<App />);
  expect(app.length).toBe(1);
});
