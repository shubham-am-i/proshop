import axios from 'axios'
import { logout } from './userActions'

export const listProducts =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_LIST_REQUEST' })

      const { data } = await axios.get(`/api/products?keyword=${keyword}`)
      // console.log(data)

      dispatch({
        type: 'PRODUCT_LIST_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_LIST_FAIL',
        Payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      })
    }
  }

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAILS_REQUEST' })

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: 'PRODUCT_DETAILS_SUCCESS',
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DETAILS_FAIL',
      Payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'PRODUCT_DELETE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/productS/${id}`, config)

    dispatch({
      type: 'PRODUCT_DELETE_SUCCESS',
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'PRODUCT_DELETE_FAIL',
      payload: message,
    })
  }
}

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'PRODUCT_CREATE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/products`, {}, config)

    dispatch({
      type: 'PRODUCT_CREATE_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'PRODUCT_CREATE_FAIL',
      payload: message,
    })
  }
}

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'PRODUCT_UPDATE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/products/${product._id}`, product, config)
    dispatch({
      type: 'PRODUCT_UPDATE_SUCCESS',
      payload: data,
    })
    dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: data })
  } catch (error) {
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  if (message === 'Not authorized, token failed') {
    dispatch(logout())
  }
  dispatch({
    type: 'PRODUCT_UPDATE_FAIL',
    payload: message,
  })
  }
}

export const createProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'PRODUCT_CREATE_REVIEW_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)
    dispatch({
      type: 'PRODUCT_CREATE_REVIEW_SUCCESS',
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'PRODUCT_CREATE_REVIEW_FAIL',
      payload: message,
    })
  }
}
