
import { Input, Text } from './Filter.styled'

const ContactFilter = ({ filter, setFilter }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>    
            <Text>
                <p>Find contacts by name</p>
            </Text>
            <Input
                type="text"
                name='filter'
                value={filter}
                onChange={handleFilterChange}

            />
        </>
            );
}

export default ContactFilter