import PropTypes from 'prop-types'

import { card } from './GreetingCard.module.css' 

function GreetingCard({ text }) {
    return (
        <article className={card}>
            <h1>{text}</h1>
        </article>
    )
}

GreetingCard.propTypes = {
    text: PropTypes.string
}

export default GreetingCard
