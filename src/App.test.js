import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={pub + 'cloud9.png'} alt="poster" />
//           <p>
//            Learning how to do this.
//           </p>
//           <a className="App-link" href="http://www.bufubyusforus.com/" target="_blank" rel="noopener noreferrer">~~Learning~~
//           </a>
//         </header>
//       </div>
//     );
//   }



                // <div>
                //     <ol>
                //     {
                //         records.map(record => (
                //             <li key={record.id} align="start">
                //                 <div>
                //                     <p className="title">{record.title}</p>
                //                     <p className="body">{record.body}</p>
                //                 </div>
                //             </li>
                //         ))
                //     }
                //     </ol>
                // </div>