import React from 'react'
import Categories from '../../components/Categories/Categories'

import ProductList from '../../components/Products/ProductList'
import CurrentCat from '../../components/Categories/CurrentCat'
import TemporaryDrawer from '../../components/SideDrawer/SideDrawer'


export default function ProductsPage() {

    return (
        <div>
            <Categories />
            <TemporaryDrawer />
            <CurrentCat />
            <ProductList />
        </div>
    )
}
