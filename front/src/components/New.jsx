import React, { useState } from 'react';
import FormBody from './Form';
import { createPost } from '../lib/api/post';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [value, setValue] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createPost(value)
      console.log(res)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType='登録'
      />
  )
};
export default New;