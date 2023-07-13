import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Chip, Rating, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Game } from '@/types'

interface GameCardProps {
  game: Game
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

export default function GameCard({ game }: GameCardProps) {
  const [userRating, setUserRating] = React.useState(0)

  const handleRatingChange = () => {
    setUserRating(userRating === 4 ? 0 : userRating + 1)
  }

  return (
    <Card
      sx={{
        borderRadius: 5,
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={game.thumbnail}
        title={game.title}
      />
      <CardContent
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6">{game.title}</Typography>
          <Typography variant="subtitle2">{game.publisher}</Typography>
          <Typography variant="overline">{game.release_date}</Typography>
        </Box>
        <Chip label={game.genre} color="primary" />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', paddingX: 2 }}>
        <Button onClick={handleRatingChange} id="rating">
          <Rating
            name="user-rating"
            value={userRating}
            max={4}
            readOnly
            id="star"
          />
        </Button>
        <StyledRating
          id="heart"
          name="customized-color"
          max={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </CardActions>
    </Card>
  )
}
