import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromFavorites} from '../redux/actions'

const Favourites = () => {
  const favourites = (useSelector((state) => state.favs.favs))

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites ? (favourites.map((fav, i) => (
                <ListGroupItem key={i}>
                  <StarFill
                    className="mr-2"
                    onClick={() =>
                      dispatch(removeFromFavorites(fav))
                    }
                  />
                  <Link to={'/' + fav}>{fav}</Link>
                </ListGroupItem>
              ))):(<h2>No favourites selected!</h2>)}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
