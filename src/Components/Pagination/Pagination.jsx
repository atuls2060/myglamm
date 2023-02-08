import React, { useState } from 'react'
import { HStack, IconButton } from '@chakra-ui/react'
import Button from './Button';
import Cell from './Cell'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({currPage,totalPage,setCurrPage}) => {
  let cells = [];

  for (let i = 1; i <= totalPage; i++) {
    cells.push(i)
  }

  return (
    <HStack justifyContent="center">
      <Button onClick={() => setCurrPage(currPage - 1)} disabled={currPage <= 1}>
        <FiChevronLeft />
      </Button>
      {
        cells.map((pageNo) => {
          return <Cell currPage={currPage} pageNo={pageNo} />
        })
      }
      <Button onClick={() => setCurrPage(currPage + 1)}  disabled={currPage >= totalPage}>
        <FiChevronRight/>
      </Button>
    </HStack>
  )
}

export default Pagination