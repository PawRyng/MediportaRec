import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Item = ({name, count})=>{

    return(
        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          <TableCell align="center">{name}</TableCell>
          <TableCell align="center">{count}</TableCell>
        </TableRow>

    )
}
export default Item