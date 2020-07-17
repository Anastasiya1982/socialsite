import React from 'react';
import ReactDOM from 'react-dom';
import MainAppComponent from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('render without crashing',()=>{
  const div=document.createElement('div');
  ReactDOM.render(<MainAppComponent/>,div);
  ReactDOM.unmountComponentAtNode(div);
}
);