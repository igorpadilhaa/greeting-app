
import PropTypes from 'prop-types'

function GreetingList({ greetings = [] }) {
    const listItems = [];

    for (const {id, text} of greetings) {
        listItems.push(<li key={id}>{text}</li>)
    }

    return (
        <ul>
            {listItems}
        </ul>
    )
}

GreetingList.propTypes = {
  greetings: PropTypes.arrayOf({ id: PropTypes.number, text: PropTypes.string })
}

export default GreetingList
