import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getJobsAsync} from '../redux/actions'
import Job from './Job'
import {Spinner} from 'react-bootstrap'
import { GET_JOBS } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const loader = useSelector((state) => state.jobs.isLoading)
  const jobsFromStore = useSelector((state) => state.jobs.listing.data)

  const navigate = useNavigate()

  useEffect(() => {
  dispatch({
    type: GET_JOBS,
    payload: [],
  })
}, [dispatch])
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAsync(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loader && <Spinner animation='border' variant='info' />}
          {jobsFromStore ? (jobsFromStore.map((jobData, i) => (
            <Job key={jobData._id} i={i} data={jobData} />
          ))) : (<h2>Loading jobs</h2>)}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch