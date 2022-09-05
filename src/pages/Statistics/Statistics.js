import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import api from '../../utils/api'

const Statistics = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/")
    }
  })

  async function getStatistics() {
      try {
        const response = await api(`/statistics`, {
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
        })
        console.log('res', response)
      } catch (err) {
        console.log(err)
      }
    }

  return (
    <>
    <div>Statistics</div>
    <button onClick={() => getStatistics()}>click</button>
    </>
  )
}

export default Statistics