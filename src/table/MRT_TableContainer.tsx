import React, { FC } from 'react';
import { Paper, TableContainer } from '@mui/material';
import { useMaterialReactTable } from '../useMaterialReactTable';
import { MRT_Table } from './MRT_Table';
import { MRT_Toolbar } from '../toolbar/MRT_Toolbar';

interface Props {}

export const MRT_TableContainer: FC<Props> = () => {
  const { muiTableContainerProps, hideToolbar } = useMaterialReactTable();

  return (
    <TableContainer component={Paper} {...muiTableContainerProps}>
      {!hideToolbar && <MRT_Toolbar />}
      <MRT_Table />
    </TableContainer>
  );
};