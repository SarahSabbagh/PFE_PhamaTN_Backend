import * as React from "react";
import { Collapse, TableRow, Typography } from "@mui/material";
import { CustomizedTableRowProps } from "./CustomizedTableRow.types";
import {
  StandardCell,
  StatusCell,
  ActionsCell,
  ActivationCell,
  ExpandCell,
} from "./customizedTableCell/CustomizedTableCell";
import { ITableHead } from "../tableHead/TableHead.types";
import { stockItemColumns } from "../../../../core/constants/tableColumns/stockColumn";
import { transformedStockItemData } from "../../../../core/utils/stockDataFormat";
import {
  ItransformedElementData,
  ItransformedStockElementData,
} from "../../../../redux/api/types/IStock";
import { CustomTableContainer } from "../tableContainer/TableContainer";
import {
  CollapseTableCell,
  CollapseTablePaper,
} from "./customizedTableCell/CustomizedTableCell.style";

export const CustomizedTableRow: React.FC<CustomizedTableRowProps> = (
  props
) => {
  const {
    item,
    columns,
    deleteAction,
    editAction,
    title,
    nestedAction,
    handleActivationMode,
    handleUpdateUserStatus,
  } = props;
  const [expand, setExpand] = React.useState(false);
  const handleExpand = () => setExpand(!expand);

  function instanceOfStock(
    object: any
  ): object is ItransformedStockElementData {
    return "lots" in object;
  }
  return (
    <>
      <TableRow>
        {columns.map(
          (col: ITableHead) =>
            (col.accessor === "status" && (
              <StatusCell
                key={col.accessor}
                accessor={col.accessor}
                item={item}
                title={title}
                element={item[col.accessor]}
                id={item.id}
                handleUpdateUserStatus={handleUpdateUserStatus}
                expand={expand}
              />
            )) ||
            (col.accessor === "active" && (
              <ActivationCell
                key={col.accessor}
                accessor={col.accessor}
                item={item}
                title={title}
                element={item[col.accessor]}
                handleActivationMode={handleActivationMode}
                id={item.id}
                expand={expand}
              />
            )) ||
            (col.label === "ACTIONS" && (
              <ActionsCell
                accessor={col.accessor}
                item={item}
                key={col.accessor}
                id={item.id}
                title={title}
                editAction={editAction}
                deleteAction={deleteAction}
                expand={expand}
              />
            )) ||
            (col.label === "EXPAND" && (
              <ExpandCell
                handleExpand={handleExpand}
                key={col.label}
                expand={expand}
              />
            )) || (
              <StandardCell
                id={item.id}
                title={title}
                accessor={col.accessor}
                key={col.accessor}
                element={item[col.accessor]}
                expand={expand}
              />
            )
        )}
      </TableRow>
      {instanceOfStock(item) && (
        <TableRow>
          <CollapseTableCell colSpan={stockItemColumns.length}>
            <Collapse in={expand} timeout="auto" unmountOnExit>
              <CollapseTablePaper elevation={1}>
                <Typography variant="h3" gutterBottom>
                  Lots
                </Typography>
                <CustomTableContainer<ItransformedElementData[]>
                  data={item.lots && transformedStockItemData(item.lots)}
                  title={title}
                  count={item.lots.length}
                  columns={stockItemColumns}
                  actions={nestedAction}
                  isError={false}
                />
              </CollapseTablePaper>
            </Collapse>
          </CollapseTableCell>
        </TableRow>
      )}
    </>
  );
};
