import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../redux/actions'

const Job = ({ data}) => {
  const favourite = useSelector((state) => state.favs.favs) 
  const dispatch = useDispatch()
  let isFavourite = favourite.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        {isFavourite ? (
          <StarFill
            color="red"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch(removeFromFavorites(data.company_name))
            }
          />
        ) : (
          <Star
            color="red"
            size={16}
            className="mr-2 my-auto"
            onClick={() => dispatch(addToFavorites(data.company_name))}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job