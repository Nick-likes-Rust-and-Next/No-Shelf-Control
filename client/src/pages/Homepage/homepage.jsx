import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import './homepage.scss';
import { Timeline } from 'react-twitter-widgets';
import { Button } from '@mui/material';


function Homepage() {
  const popularBooks = ['Very Popular Book', 'Slightly Less Popular Book', 'Moderately Popular Book', 'Still Kinda Popular Book']
  const popularBadges = ['Bacon', 'Book', 'Toast', 'Eggs'];
  const popularGenres = ['Mystery', 'Action', 'SciFi', 'Romance', 'History']


  return (
    <div className='homepage-page'>
      <div className='buttons-container'>
        <Button
          variant='outlined'
          onClick={() => location.href = '/createaccount'}
        >
          Create Account
        </Button>
      </div>
      <div className='logo-container'>
        <img src='/images/NSClogo.png'/>
      </div>
      <div className='popular-books-container'>
        <h3>Popular Books</h3>
        <ul>
          {popularBooks.map((book) => (
            <li style={{ listStyle: 'none' }}>{book}</li>
          ))}
        </ul>
      </div>
      <div className='smaller-card-container'>
        <div className='popular-badges'>
            <h3>Popular Badges</h3>
            <ul>
              {popularBadges.map((badge) => (
                <li style={{ listStyle: 'none' }}>{badge}</li>
              ))}
            </ul>
        </div>
        <div className='popular-genres'>
            <h3>Popular Genres</h3>
            <ul>
              {popularGenres.map((genre) => (
                <li style={{ listStyle: 'none' }}>{genre}</li>
              ))}
            </ul>
        </div>
        <div className='twitter-feed'>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'twitterbooks'
              }}
              options={{
                width: '300',
                height: '600',
                borderRadius: '10px',
              }}
            />
        </div>
      </div>
    </div>
  )
}

export default Homepage;