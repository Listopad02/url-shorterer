import React, {useEffect, useState} from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import Table from '../../components/Table/Table';
import api from '../../utils/api'
import './Statistics.css'
import {Skeleton} from "@mui/material";
import {useDebounce} from "../../hooks/debounce";



const Statistics = () => {
    const navigate = useNavigate()
    const [result, setResult] = useState([])
    const [offset, setOffset] = useState(0)

    const debounceOffset = useDebounce(offset)

    useEffect(() => {
        let ignore = false

        async function getStatistics() {

            try {
                const response = await api(`/statistics?&offset=${debounceOffset}&limit=10`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    },
                })

                return await response
            } catch (err) {
                console.log(err)
            }
        }

        getStatistics().then(data => {
          if (!ignore) {
              setResult(data.map(item => {
                  item.short = 'http://79.143.31.216/s/' + item.short
                  return item
              }))
          }
        })

        if (!localStorage.getItem("access_token")) {
          navigate("/")
        }

        return () => {
            ignore = true;
        };
    }, [navigate, debounceOffset])


    return (
        <div className='statistics'>
            <div className="statistics-container">
                <div className="statistics-title">
                    <h1 className='statistics-title__head'>Your account statistics</h1>
                    <h2 className='statistics-title__text'>That table represents some detailed info: <br /> Original link, short link and number of clicks on each of the short links.</h2>
                </div>
                <div className="statistics-table__container">
                    {
                        result.length === 0 ?
                            <>
                                <Skeleton variant="rectangular" width={210} height={80} style={{margin: '20px auto'}} />
                                <Skeleton variant="rectangular" width={210} height={20} style={{margin: '0 auto'}} />
                            </> :
                            <Table result={result} setOffset={setOffset} />
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