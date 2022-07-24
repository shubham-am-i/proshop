import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) navigate('/shipping')

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <h1>Payment Method</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col className='m-3'>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='PaymentMethod'
              value='PayPal'
              checked
              onChanged={(e) => setPaymentMethod(e.target.value)}></Form.Check>
            <br></br>

            <Form.Check
              type='radio'
              label='UPI'
              id='UPI'
              name='PaymentMethod'
              value='UPI'
              onChanged={(e) => setPaymentMethod(e.target.value)}></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary' className='button'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
