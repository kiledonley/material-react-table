import React from 'react';
import { Meta, Story } from '@storybook/react';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_ColumnDef,
} from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Features/Search Examples',
};

export default meta;

const columns: MRT_ColumnDef<typeof data[0]>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
  {
    header: 'Phone Number',
    accessorKey: 'phoneNumber',
  },
];

const data = [...Array(200)].map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  phoneNumber: faker.phone.number(),
  age: +faker.datatype.float({ min: 0, max: 100 }),
}));

export const SearchEnabledDefault: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable columns={columns} data={data} />
);

export const SearchGlobalFilterModes: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable columns={columns} data={data} enableGlobalFilterModes />
);

export const SearchRankedResultsEnabledByDefault: Story<
  MaterialReactTableProps
> = () => <MaterialReactTable columns={columns} data={data} enableRowNumbers />;

export const SearchDisableRankedResults: Story<
  MaterialReactTableProps
> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    enableRowNumbers
    enableGlobalFilterRankedResults={false}
  />
);

export const ShowSearchRightBoxByDefault: Story<
  MaterialReactTableProps
> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
  />
);

export const ShowSearchBoxLeftByDefault: Story<
  MaterialReactTableProps
> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
    positionGlobalFilter="left"
  />
);

export const ShowSearchBoxLeftByDefaultWithSelection: Story<
  MaterialReactTableProps
> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    enableRowSelection
    initialState={{ showGlobalFilter: true }}
    positionGlobalFilter="left"
  />
);

export const JustASearchBox: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
    enableToolbarInternalActions={false}
  />
);

export const SearchDisabled: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    enableGlobalFilter={false}
  />
);

export const CustomizeSearchTextBox: Story<MaterialReactTableProps> = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ showGlobalFilter: true }}
    muiSearchTextFieldProps={{
      variant: 'outlined',
      placeholder: 'Search 100 rows',
      label: 'Search',
      InputLabelProps: { shrink: true },
    }}
  />
);
