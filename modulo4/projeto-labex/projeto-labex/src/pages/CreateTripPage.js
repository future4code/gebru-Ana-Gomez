import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage';


function CreateTripPage() {

  useProtectedPage();

  return (
    <div>CreateTripPage</div>
  )
}

export default CreateTripPage