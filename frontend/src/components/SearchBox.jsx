import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline='true'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        className='ml-sm-5 mr-sm-2 corner-rounded'
        style={{ width: 'auto', display: 'inline-block' }}
        placeholder='Search Products...'></Form.Control>

      <Button type='submit' variant='outline-success' className='p-2 corner-rounded'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
