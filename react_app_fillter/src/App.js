import React, { useState } from 'react';
import FilterComponent from './Components/FilterComponent';
import DataTable from './Components/DataTable';
import Data from './data';
import Search from './Components/Search';

const App = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState()
  const [searchQurryArry, setsearchQurryArry] = useState()

  const generateFilterData = (data) => {
    const filterData = {};
    data.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'id' && key !== 'name' && key !== "mall") { // Exclude 'id' and 'name'
          if (!filterData[key]) {
            filterData[key] = [];
          }
          if (!filterData[key].includes(item[key])) {
            filterData[key].push(item[key]);
          }
        }
      });
    });
    return filterData;
  };

  const filterData = generateFilterData(Data);

  const filteredData = Data.filter(item => {
    for (let filterKey in filters) {
      if (Array.isArray(filters[filterKey])) {

        if (!filters[filterKey].includes(item[filterKey])) {
          return false;
        }
      } else {

        if (filters[filterKey] !== item[filterKey]) {
          return false;
        }
      }
    }
    return true;
  });

  // const SearchQ = () => {
  //   let searcharr = Data.filter((el) => {
  //     return el.name === searchQuery.toLowerCase()
  //   })
  //   setsearchQurryArry(searcharr)
  // }


  return (
    <div >
      <FilterComponent filters={filters} setFilters={setFilters} filterData={filterData} />
      <Search searchQuery={searchQuery} setSearchQuery={searchQuery} />
      <DataTable data={Data} filters={filters} filteredData={filteredData} />
    </div>
  );
};

export default App;
