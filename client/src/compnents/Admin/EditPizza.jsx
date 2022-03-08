import React,{useState, useEffect} from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById, updatePizza } from '../../actions/pizzaAction'
import Loader from '../Loader'
import Error from '../Error'
import Success from '../Success'

const EditPizza = ({match}) => {
  const [name, setname] = useState('')
  const [smallPrice, setsmallPrice] = useState()
  const [largePrice, setlargePrice] = useState()
  const [mediumPrice, setmediumPrice] = useState()
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const dispatch = useDispatch()
  const getPizzaByState = useSelector(state => state.getPizzaByIdReducer)
  const {loading, error, pizza} = getPizzaByState
  const updatePizzaState = useSelector(state => state.updatePizzaByIdReducer)
  const {updateloading, updatesuccess, updateerror} = updatePizzaState

  useEffect(() => {
    if(pizza){if(pizza._id === match.params.pizzaId){
      setname(pizza.name)
      setdescription(pizza.description);
        setcategory(pizza.category);
        setimage(pizza.image);
        setsmallPrice(pizza.prices[0]["small"]);
        setmediumPrice(pizza.prices[0]["medium"]);
        setlargePrice(pizza.prices[0]["large"]);
    }else{
     dispatch(getPizzaById(match.params.pizzaId))
    }}else{
      dispatch(getPizzaById(match.params.pizzaId))
    }
  }, [pizza,dispatch]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: match.params.pizzaId,name, image, description, category, prices: { small: smallPrice, medium: mediumPrice, large: largePrice }
    }
    // console.log(pizza);
     dispatch(updatePizza(updatedPizza))
  }
  
  return (
    <div>
      {updateloading && (<Loader />)}
      {error && (<Error error="add new pizza error" />)}
      {/* {success && (<Success success="pizza added successfully" />)} */}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={e => setname(e.target.value)} placeholder="Enter Name" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small</Form.Label>
              <Form.Control type="text" value={smallPrice} onChange={e => setsmallPrice(e.target.value)} placeholder="Enter Small Price" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium</Form.Label>
              <Form.Control type="text" value={mediumPrice} onChange={e => setmediumPrice(e.target.value)} placeholder="Enter Medium Price" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large</Form.Label>
              <Form.Control type="text" value={largePrice} onChange={e => setlargePrice(e.target.value)} placeholder="Enter Large Price" />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" value={image} onChange={e => setimage(e.target.value)} placeholder="Add Image Url" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} onChange={e => setdescription(e.target.value)} placeholder="Enter Description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={category} onChange={e => setcategory(e.target.value)} placeholder="Enter Category" />
        </Form.Group>

        <Button variant="primary" type='submit'>
          Update Pizza
        </Button>
      </Form>
    </div>
  )
}

export default EditPizza