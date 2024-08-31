import { useState } from 'react';

const SelectInput = ({ items }) => {
    const [selectedId, setSelectedId] = useState('');

    const handleChange = (e) => {
        setSelectedId(e.target.value);
    };

    return (
        <select
            value={selectedId}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
            <option value="">Select an item</option>
            {items.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;
