
import { Input } from './Filter.styled'

const ContactFilter = ({ filter, setFilter }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Input
            type="text"
            name='filter'
            placeholder="Search by name"
            value={filter}
            onChange={handleFilterChange}

        />
    );
}

export default ContactFilter