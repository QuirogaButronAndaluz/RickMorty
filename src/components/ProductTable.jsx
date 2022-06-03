import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { CategoryProductRow2 } from './CategoryProductRow2'
import { sportsList, electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'

function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const [dataLocation,setDataLocation]=useState([])
    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        response.json().then(response => setDataCharacters(response.results))
        const loc=await fetch('https://rickandmortyapi.com/api/location')
        loc.json().then(loc=> setDataLocation(loc.results))
    }
    useEffect(() => {
        fetchCharacters()
    }, [])

    // console.log(dataCharacters)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>'Rick & Morty'</span>

            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Characters' list={dataCharacters} />
                <CategoryProductRow2 title='Location' list={dataLocation} />
                
            </div>
        </div>
    )
}

export { ProductTable }