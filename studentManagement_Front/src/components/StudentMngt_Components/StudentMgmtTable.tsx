interface Column<T> {
  header: string;
  accessor: keyof T | "action";
  render?: (
    value: any,
    row: T,
    handlers?: { edit: (row: T) => void; delete: (row: T) => void }
  ) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  handlers?: { edit: (row: T) => void; delete: (row: T) => void };
}

const Table = <T,>({ columns, data, handlers }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left font-medium uppercase text-sm tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b ${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              {columns.map((column, colIndex) => {
                let cellValue: any =
                  column.accessor === "action"
                    ? null
                    : (row[column.accessor as keyof T] as unknown);

                return (
                  <td
                    key={colIndex}
                    className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap"
                  >
                    {column.render
                      ? column.render(cellValue, row, handlers)
                      : typeof cellValue === "boolean" ||
                        typeof cellValue === "string" ||
                        typeof cellValue === "number"
                      ? cellValue.toString()
                      : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
