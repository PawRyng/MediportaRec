import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, Paper, Box, Skeleton } from '@mui/material';
import { PropTypes } from 'prop-types';

const SkeletonListing = ({perPage})=>{
    return(
        <Box
      width={500}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      gap={4}
      my={4}
      mx="auto"
      >  
       <Skeleton variant="rounded" width={210} height={60} />
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Tag</TableCell>
                    <TableCell align="center">Related posts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.from({ length: perPage }, (_, index) => (
                    <TableRow key={index}>
                      <TableCell align="center"><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                      <TableCell align="center"><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Box>          
    )
}

SkeletonListing.propTypes = {
  perPage: PropTypes.number
}

export default SkeletonListing