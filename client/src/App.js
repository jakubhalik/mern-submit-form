import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const [state, setState] = useState ({
    name: '',
    email: '',
    enquiry: ''
  });

  useEffect(() => {
    getSubmitForm();
  }, []);

  const getSubmitForm = () => {
    axios.get('./api')
    .then((response) => {
      const data = response.data;
      setState({ posts: data });
      console.log('Data received');
    })
    .catch(() => {
      alert('Error retrieving data man');
    });
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value
    })
  };

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      name: state.name,
      email: state.email,
      enquiry: state.enquiry
    };
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data are on their way to da server my bro');
      resetSubmitForm();
      getSubmitForm();
    })
    .catch(() => {
      console.log('Data got lost ups');
    });
  };
  
  const resetSubmitForm = () => {
    setState({
      name: '',
      email: '',
      enquiry: ''
    });
  };


  return (
    <div>
      <form onSubmit={submit}>
          <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
          <input type="text" name="enquiry" placeholder="Enquiry" value={state.enquiry} onChange={handleChange} />
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
