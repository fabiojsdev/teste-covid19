import React from 'react';

// Exporte a interface Column
export interface Column {
  Header: string;
  accessor: keyof DataRow;
  Cell?: ({ value }: { value: string | number | boolean | undefined }) => React.ReactNode;
}

interface DataRow {
  [key: string]: string | number | boolean | undefined;
}

interface DataTableProps {
  data: DataRow[];
  columns: Column[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  if (!data || data.length === 0) {
    return <p className="text-red-500">Nenhum dado disponível.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700"
                >
                  {column.Cell
                    ? column.Cell({ value: row[column.accessor] })
                    : (row[column.accessor] !== undefined ? String(row[column.accessor]) : '-')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;