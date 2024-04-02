import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';

const Pagination = ({page})=>{

    return(
        <div className="pagination">
            {
                page > 1 && (
                    <Link to={`/${parseInt(page) - 1}`}>
                        <ArrowBackIosIcon/>
                    </Link>
                )
            }
            <Link to={`/${parseInt(page) + 1}`}>
                <ArrowForwardIosIcon/>
            </Link>

        </div>
    )
}
export default Pagination