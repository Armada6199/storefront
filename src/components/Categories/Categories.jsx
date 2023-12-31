import { Button, ButtonGroup, Stack } from '@mui/material'

import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';

import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import { setActiveCategory } from '../../Reducers/CategoryReducer';
import { connect } from 'react-redux';


function Categories(props) {

    function handleCategoryChange(e) {
        let value = e.target.value
        props.setActiveCategory(value);
    }
    return (
        <Stack direction={'row'} spacing={4} justifyContent={'around'} marginY={'60px'} marginX={'50px'} paddingX={'50px'}>
            <ButtonGroup variant='text' color={'primary'}>
                {props.productManager.categoryReducer.categories.map(category => <Button key={category['_id']} value={category.name} onClick={handleCategoryChange} startIcon={category.name === 'electronics' ? <CableOutlinedIcon /> : category.name === 'food' ? <FastfoodOutlinedIcon /> : category.name === 'games' ? <SportsEsportsOutlinedIcon /> : <MilitaryTechOutlinedIcon />}>{category.name}</Button>)}
            </ButtonGroup>
        </Stack>
    )
}


const mapStateToProps = state => ({
    productManager: state
})
const mapDispatchToProps = {
    setActiveCategory,

}
export default connect(mapStateToProps, mapDispatchToProps)(Categories)