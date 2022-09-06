import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import Table from '../../components/Table/Table';
import api from '../../utils/api'
import './Statistics.css'

const Statistics = () => {
    const navigate = useNavigate()
    const [result, setResult] = useState('')

    useEffect(() => {
      getStatistics()
        if (!localStorage.getItem("access_token")) {
          navigate("/")
        }
    }, [navigate])

    async function getStatistics() {
      try {
        const response = await api(`/statistics`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        setResult(response)
      } catch (err) {
        console.log(err)
      }
    }

    console.log('res', result)

    return (
        <div className='statistics'>
            <div className="statistics-container">
                <div className="statistics-title">
                    <h1 className='statistics-title__head'>Your account statistics</h1>
                    <h2 className='statistics-title__text'>That table represents some detailed info: <br /> Original link, short link and number of clicks on each of the short links.</h2>
                </div>
                <div className="statistics-table__container">
                  {
                    result !== '' ?
                    result.map((item) => {
                      console.log('i', item)
                      return (
                        <div className="statistics-table">
                          <div className="statistics-table__item">{item.counter}</div>
                          <div className="statistics-table__item">{item.short}</div>
                          <div className="statistics-table__item">{item.target}</div>
                        </div>
                      )
                    }) : null
                  }
                </div>
                <div className="statistics-logout">
                    <p className='statistics-options__text'>
                        Want to create some more short links? <NavLink to={'/service'}><span className='link'>Click</span></NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Statistics