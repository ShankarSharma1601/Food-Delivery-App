import React from 'react'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Contact</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro ut architecto natus quisquam labore fugiat voluptatem? Ducimus tempora odio minus nostrum facere doloribus aperiam sed exercitationem eos autem blanditiis veniam inventore illum corporis at magnam, atque sequi! Eveniet, in alias ducimus quod nisi iste voluptas asperiores temporibus quisquam, cupiditate deleniti praesentium sed doloremque earum dicta fuga itaque rerum voluptates. Culpa, tempora perspiciatis in amet ex nisi tenetur nihil quidem natus laborum. Quod mollitia dolor nostrum rem ipsum adipisci esse illo veniam officiis tempora! Illum adipisci quia vero quisquam incidunt maxime corporis ea molestiae perferendis neque dolorem sed atque, sapiente, inventore dicta necessitatibus provident voluptates, sit esse! Cupiditate aperiam perspiciatis ipsam sequi quisquam adipisci temporibus, dicta saepe nemo sint fugiat vitae eveniet reprehenderit nobis? Obcaecati laboriosam fuga ex, saepe neque alias soluta earum inventore, cumque autem, at beatae harum voluptatem repellat illum mollitia fugit tempore facilis perferendis accusamus dolore quam omnis nam. Quo alias maxime, vel repellendus porro recusandae nemo laudantium, nostrum, accusantium eius eveniet ab. At quod sint quisquam itaque ad illo, iure eligendi nesciunt aliquid voluptatibus iusto iste repellendus suscipit doloremque, pariatur aspernatur! Voluptatem accusamus blanditiis perferendis numquam, ducimus assumenda fugiat quam distinctio aperiam corporis illo alias nihil.</p>
                        <Table striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center' colSpan={3}>---- Contact Details-----</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FiPhoneCall/></td>
                                    <td>Phone</td>
                                    <td>1234567890</td>
                                </tr>
                                <tr>
                                    <td><ImMobile/></td>
                                    <td>Call</td>
                                    <td>1234567890</td>
                                </tr>
                                <tr>
                                    <td><AiOutlineMail/></td>
                                    <td>Email</td>
                                    <td>help@domain.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image src='images/farmhouse.jpg' style={{width:'100%', height:'80%'}}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Contact;


//FiPhoneCall