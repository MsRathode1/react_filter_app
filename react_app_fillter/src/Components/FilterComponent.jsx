import React from 'react';
import Search from './Search';

const FilterComponent = ({ filters, setFilters, filterData }) => {
    const handleToggle = (filterName, value) => {
        const updatedFilters = { ...filters };

        if (Array.isArray(updatedFilters[filterName])) {
            const index = updatedFilters[filterName].indexOf(value);
            if (index === -1) {
                updatedFilters[filterName].push(value);
            } else {
                updatedFilters[filterName].splice(index, 1);
            }
        } else {
            updatedFilters[filterName] = [value];
        }

        setFilters(updatedFilters);
    };

    return (
        <div style={{ display: "flex", width: "90%", justifyContent: "space-between" }}>
            {Object.keys(filterData).map(filterName => (
                <div key={filterName}>
                    <h3>{filterName}</h3>
                    {filterData[filterName].map((option, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                checked={Array.isArray(filters[filterName]) ? filters[filterName].includes(option) : false}
                                onChange={() => handleToggle(filterName, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            
        </div>
    );
};

export default FilterComponent;
