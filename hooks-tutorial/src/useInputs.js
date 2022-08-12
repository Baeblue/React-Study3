import { useReducer } from 'react'

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

export default function useInputs(initialForm) {
  // initialForm 이 필요
  const [state, dispatch] = useReducer(reducer, initialForm)
  const onChange = (e) => {
    dispatch(e.target)
  }
  return [state, onChange]
}
