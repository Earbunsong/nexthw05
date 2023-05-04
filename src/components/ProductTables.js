import axios from 'axios';
import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {Button} from "react-bootstrap";


export const ProductTables = () => {
    const [search, setSearch] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilterCountries] = useState([]);

    const getCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all')
            setCountries(response.data);
            setFilterCountries(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            name: "Country Name",
            selector: (row) => row.name
        },
        {
            name: "Country Native Name",
            selector: (row) => row.NativeName
        },
        {
            name: "Country Capital",
            selector: (row) => row.capital
        },
        {
            name: "Country Flag",
            selector: (row) => <img width={50} height={50} src={row.flag}/>
        },
        {
            name: 'Action',
            selector: row => row.action,
            maxWidth : '200',
            cell : row => (
                <div className={"d-flex gap-2"} >
                    <Button size={"sm"} type={"button"} variant={"primary"}>Edit {row.id}</Button>
                    <Button size={"sm"} type={"button"} variant={"danger"}>Deleted</Button>
                </div>
            )
        }
    ];


    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        const result = countries.filter(country =>{
            result.country.name.toLowerCase().match(search.toLowerCase());
        } );

        setFilterCountries(result);
    }, [search]);

    return <DataTable columns={columns} data={countries} pagination
                      subHeaderComponents ={
                          <input
                              onChange={(e) => setSearch(e.target.value)}
                          />
                      }
    />;

};

export default ProductTables