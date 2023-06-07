import PropTypes from 'prop-types'

import GreetingCard from '../GreetingCard';

import { greetingList } from './GreetingList.module.css';

function GreetingList({ greetings = [] }) {
    const listItems = [];

    for (const {id, text} of greetings) {
        listItems.push(
            <li key={id}>
                <GreetingCard text={text} />
            </li>
        )
    }

    return (
        <ul className={greetingList}>
            {listItems}
        </ul>
    )
}

GreetingList.propTypes = {
  greetings: PropTypes.arrayOf({ id: PropTypes.number, text: PropTypes.string })
}

export default GreetingList
