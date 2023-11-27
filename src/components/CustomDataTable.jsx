import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

function DataTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filters, setFilters] = useState([]);
  const [editor, setEditor] = useState('');
  // Rows
  const rows = [
    { key: 'userId', value: 'User ID', disabled: true },
    { key: 'firstName', value: 'Firstname' },
    { key: 'lastName', value: 'Lastname' },
    { key: 'emailAddress', value: 'Email' },
    { key: 'gender', value: 'Gender' },
    { key: 'phoneNumber', value: 'Phone' },
  ];
  const [users, setUsers] = useState([
    {
      userId: 1,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 2,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 3,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 4,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 5,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 6,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 7,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 8,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 9,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 10,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 11,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
    {
      userId: 12,
      firstName: 'Cort',
      lastName: 'Tosh',
      emailAddress: 'ctosh0@github.com',
      gender: 'Male',
      phoneNumber: '327-626-5542',
    },
  ]);

  const getRowDetail = (id) => {
    let rows = [...selectedRows];
    if (rows.includes(id)) {
      rows = rows.filter((row) => row !== id);
    } else {
      rows.push(id);
    }
    setSelectedRows(rows);
  };

  const selectAllCheckbox = (event) => {
    const columns = document.querySelectorAll('.rowCheckbox');
    const rows = [];
    columns.forEach((column) => {
      column.checked = event.target.checked;
      if (event.target.checked) {
        rows.push(parseInt(column.name));
      }
    });
    setSelectedRows(rows);
  };

  const handleOnChangeFilter = ({ target: { value } }) => {
    setFilters(typeof value === 'string' ? value.split(',') : value);
  };
  const handleOnChangeCell = (event, user, value) => {
    // 수정 기능

    const temp = users.map((item) => {
      if (item.userId === user.userId) {
        return {
          ...item,
          [value.key]: value.value,
        };
      }
      return item;
    });

    event.target.disabled = true;
    event.target.value = value.value;
    setUsers(temp);
  };
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl py-4 border-b mb-10">Data Table</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="relative md:w-1/3">
          <input
            type="search"
            className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Search..."
          />

          <div className="absolute top-1/2 -translate-y-1/2 left-0 inline-flex items-center p-2">
            <FaSearch />
          </div>
        </div>

        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">필터</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={filters}
              onChange={handleOnChangeFilter}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}>
              {rows.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                  <Checkbox checked={filters.indexOf(item.key) > -1} />
                  <ListItemText primary={item.value} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div
        className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
        style={{ height: '405px' }}>
        <CustomDataTable className="table-striped">
          <CustomTableHead>
            <CustomTableHeadRow className="text-center">
              <CustomTableHeadCell className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
                <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox focus:outline-none focus:shadow-outline"
                    onClick={(e) => selectAllCheckbox(e)}
                  />
                </label>
              </CustomTableHeadCell>

              {rows.map((heading) => {
                if (filters.indexOf(heading.key) > -1) return;
                return (
                  <CustomTableHeadCell
                    key={heading.key}
                    className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                    <div className={'flex flex-row gap-[10px]'}>
                      {heading.value}
                      <FaArrowUp className={'hover:bg-[gray] transition-all'} />
                    </div>
                  </CustomTableHeadCell>
                );
              })}
            </CustomTableHeadRow>
          </CustomTableHead>
          <CustomTableBody>
            {users.map((user) => (
              <CustomTableHeadRow key={user.userId}>
                <td className="border-dashed border-t border-gray-200 px-3">
                  <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
                      name={user.userId}
                      onClick={() => getRowDetail(user.userId)}
                    />
                  </label>
                </td>

                {rows.map((heading) => {
                  if (filters.indexOf(heading.key) > -1) return;

                  return (
                    <td
                      key={heading.key}
                      className={`border-dashed relative border-t border-gray-200 ${heading.key}`}>
                      <span className="text-gray-700 px-6 py-3 flex items-center">
                        <input
                          type="text"
                          className={
                            'absolute  w-full h-full disabled:bg-[red]'
                          }
                          disabled={heading?.disabled}
                          onDoubleClick={({ target }) => {
                            target.disabled = !target.disabled;
                            if (!target.disabled) return target.focus();
                          }}
                          defaultValue={user[heading.key]}
                          onBlur={({ target }) => {
                            target.value = user[heading.key];
                          }}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter')
                              handleOnChangeCell(event, user, {
                                key: heading.key,
                                value: editor,
                              });
                          }}
                          onChange={({ target: { value } }) => setEditor(value)}
                        />
                      </span>
                    </td>
                  );
                })}
              </CustomTableHeadRow>
            ))}
          </CustomTableBody>
        </CustomDataTable>
      </div>
    </div>
  );
}

export default DataTable;

const CustomDataTable = styled.table`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  table-layout: auto;
  text-indent: 0;
  white-space: nowrap;
`;

const CustomTableHead = styled.thead``;
const CustomTableBody = styled.tbody``;
const CustomTableHeadRow = styled.tr``;
const CustomTableHeadCell = styled.th``;
