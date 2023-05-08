import { Avatar, Typography } from '@mui/material';
import './dashboard.scss';
import { faBacon, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Bookshelf from '../../components/Bookshelf/Bookshelf';

function Dashboard() {
  // Placeholder content for the starred books that user will choose to feature from their collection
  const starredBooks = ['book1', "book2", "book3", "book4", "book5"]
  const currentlyReading = "currently reading"

  return (
    <div className='container dashboard-container'>
      <Link className='profile-container'>
        <div className='row1'>
          <div className='profile-picture-container'>
          <Avatar alt='profile picture' src='' sx={{ bgcolor: "red", width: 150, height: 150 }}></Avatar>
          </div>
          <div className='currently-reading-container'>
          <Typography variant='h4'>
              Currently Reading
          </Typography>
          <Typography>
                {currentlyReading}
          </Typography>
        </div>
        </div>
        <div className='row2'>
          <div className='badges-container'>
            <Typography variant='h4'>
                Badges
            </Typography>
            <FontAwesomeIcon id='faBacon' icon={faBacon} color='#000'/>
            <FontAwesomeIcon id='faBacon' icon={faBookOpen} color='#000'/>
          </div>
          <div className='featured-books-container'>
            <Typography variant='h4'>
              Featured Books
            </Typography>
            <ul>
              {starredBooks.map((book)=>
                (
                  <li style={{ listStyle: 'none' }}>{book}</li>
                )
              )}
            </ul>
          </div>
        </div>    
      </Link>
      <div className='bookshelf-container'>
        <h1>
        BOOKS
        </h1>
        <Bookshelf />
      </div>
    </div>
  )
}

export default Dashboard