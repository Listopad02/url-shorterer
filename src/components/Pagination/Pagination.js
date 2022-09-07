import React, {useState} from 'react';
import Pag from '@mui/material/Pagination';
import {useEffect} from "react";
import api from "../../utils/api";


const Pagination = ({setOffset}) => {
    const [page, setPage] = useState(1)

    const [countPage, setCountPage] = useState(1)

    useEffect(() => {
        let ignore = false

        async function getCountPage() {
            try {
                const response = await api(`/statistics`, {
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

        getCountPage().then(data => {
            if (!ignore) {
                setCountPage(Math.round(data.length / 10))
            }
        })

        return () => {
            ignore = true;
        };
    }, [])

    const handleChange = (e, value) => {
        setOffset(10*(value-1))
        setPage(value)
    }

    return (
        <Pag count={countPage < 1 ? 1 : countPage} page={page} onChange={handleChange} />
    );
};

export default React.memo(Pagination);
