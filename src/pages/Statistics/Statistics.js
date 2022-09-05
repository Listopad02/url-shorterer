import React from 'react'
import api from '../../utils/api'

const Statistics = () => {
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