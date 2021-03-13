import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


//DRY : Don't repeat yourself

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = OnClickNumber => {
    const renderButton = number => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={OnClickNumber} 
        />
    )
    return numbers.map(renderButton)
}


const Numbers = ({ OnClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(OnClickNumber)
        }
    </section>
)

Numbers.propTypes = {
OnClickNumber: PropTypes.func.isRequired,
}

export default Numbers