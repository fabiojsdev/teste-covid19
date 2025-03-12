import React from 'react';

interface DataTableProps {
  data: Array<{ [key: string]: string | number | boolean | undefined }>; 
  columns: string[]; 
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
                {column}
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
                  {row[column] || '-'} 
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