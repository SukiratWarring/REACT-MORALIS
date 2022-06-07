import PropTypes from 'prop-types'
import { Button } from './Button'
const Header = ({title,onAdd,showAdd}) => {

  return (
    <header className='header'>
        <h1 style={headingstyle}>{title}</h1>
        <Button color={showAdd ? 'red' :'green'} text ={showAdd ? 'Close':'Add'} onClick={onAdd}/>
    </header>
    

  )
}
Button.defaultProps={
    color:"steelblue"
}
Header.defaultProps={
    title:'Task manager',
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
const headingstyle={
    // color:'red',
    // backgroundColor:'black'
}

export default Header