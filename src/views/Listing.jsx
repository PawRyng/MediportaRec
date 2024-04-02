import { useParams, useLoaderData, useNavigate  } from 'react-router-dom';
import { useState } from 'react';

import Pagination from '../components/PaginationComponent';

import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Element from '../components/Element'

const Listing = ({perPage, setPerPage})=>{
    let { page } = useParams(); 
    const navigate = useNavigate();
    const [ perPagePom, setPerPagePom ] = useState(perPage);

    if(!page){
        page = 1;
    }


    const { tags } = useLoaderData()
    const handleChange = (event) => {
        setPerPagePom(event.target.value);
    };
    const backToHomeHandle = e => {
        e.preventDefault()
        setPerPagePom(20)
        setPerPage(20);
        navigate('/1');
    }
    const handleBlur = () => {
        setPerPage(perPagePom);
        navigate('/1');
    };
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
       
        <TextField
          id="outlined-password-input"
          label="Tags per site"
          type="tel"
          InputLabelProps={{
            shrink: true,
          }}
          value={perPagePom}
          onBlur={handleBlur}
          onChange={handleChange}
        />
    
    {tags && tags.data ? (
    <>
        <Pagination page={page}/>
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Tag</TableCell>
                    <TableCell align="center">Related posts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {tags.data.items.map((item, index) => (
                      <Element key={index} name={item.name} count={item.count} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
        ) : (
            <Box
            width="100%"
            textAlign="center"
            
            >
                <p>{tags.tags.status} - {tags.tags.statusText}</p>
                <Link href="#"
                 onClick={backToHomeHandle}
                 >Back to Home</Link>
            </Box>
        )}

        {
            
        }
        </Box>          
    )
}
export default Listing