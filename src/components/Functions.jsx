import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

//&larr; hace referencia al simbolo "<-" para borrar en la calc

const Functions = ({onContentClear, OnDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="Clear" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={OnDelete}/>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired, 
    OnDelete: PropTypes.func.isRequired
}

export default Functions