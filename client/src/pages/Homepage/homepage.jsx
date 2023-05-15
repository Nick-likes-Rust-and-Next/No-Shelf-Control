import React from 'react';
import './homepage.scss';
import { Timeline } from 'react-twitter-widgets';
import { Button } from '@mui/material';


function Homepage() {
  const popularBooks = [
    {
      title: 'Dune',
      image: '/images/dune.png'
    }, 
    {
      title: 'Eragon',
      image: '/images/eragon.png'
    }, 
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      image: '/images/hppa.png'
    }, 
    {
      title: 'Homeland',
      image: '/images/homeland.png'
    }
  ]
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
        <h3 style={{ fontFamily: "Bukhari Script" }}>Popular Books</h3>
          <ul div className='popular-book-contents'>
            {popularBooks.map((book) => (
              <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                <li style={{ listStyle: 'none' }}>{book.title}</li>
                <img src={book.image} height={200} width={150}/>
              </div>
            ))}
          </ul>
      </div>
      <div className='smaller-card-container'>
        <div className='popular-badges'>
            <h3 style={{ fontFamily: "Bukhari Script" }}>Popular Badges</h3>
            <ul>
              {popularBadges.map((badge) => (
                <li style={{ listStyle: 'none' }}>{badge}</li>
              ))}
            </ul>
        </div>
        <div className='popular-genres'>
            <h3 style={{ fontFamily: "Bukhari Script" }}>Popular Genres</h3>
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