import React from 'react'

type TableViewProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const TableView = ({ id,setIsModalNewTaskOpen }: TableViewProps) => {
  return (
    <div>TableView</div>
  )
}

export default TableView