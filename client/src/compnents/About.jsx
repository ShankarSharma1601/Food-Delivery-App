import React from 'react'
import {Container,Row,Col } from  'react-bootstrap'
import Footer from "./Footer";

const About = () => {
  return (
    <>
        <Container style={{marginTop: '50px'}}>
            <h1 >Who We Are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non ex, inventore laudantium, modi soluta aut rerum ad quo a corrupti? Voluptate!</p>
            <h1>Our Speciality</h1>
            <Row>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugit labore nemo necessitatibus! Soluta labore sunt, beatae sed hic totam repellendus odio eligendi similique molestias porro! Laborum voluptatum doloremque optio tempora in maxime saepe commodi! Accusamus expedita blanditiis porro magnam, maiores aspernatur. Rem consectetur recusandae voluptate adipisci ipsum nesciunt dolores facere id, dolorem minima ducimus blanditiis ipsam culpa odio quibusdam, dolore saepe esse, perspiciatis eum fugit quidem? Quidem labore earum non doloremque. Explicabo tempora unde, aliquid eius ipsam repellat veritatis impedit perferendis totam est cumque nisi. Hic facere dignissimos ullam maxime perspiciatis fugit fuga rem omnis quidem, distinctio, inventore dolore!</p>
                </Col>
                <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugit labore nemo necessitatibus! Soluta labore sunt, beatae sed hic totam repellendus odio eligendi similique molestias porro! Laborum voluptatum doloremque optio tempora in maxime saepe commodi! Accusamus expedita blanditiis porro magnam, maiores aspernatur. Rem consectetur recusandae voluptate adipisci ipsum nesciunt dolores facere id, dolorem minima ducimus blanditiis ipsam culpa odio quibusdam, dolore saepe esse, perspiciatis eum fugit quidem? Quidem labore earum non doloremque. Explicabo tempora unde, aliquid eius ipsam repellat veritatis impedit perferendis totam est cumque nisi. Hic facere dignissimos ullam maxime perspiciatis fugit fuga rem omnis quidem, distinctio, inventore dolore!</p>
                </Col>
            </Row>
            <Row>
                <h1>Our Chef</h1>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, impedit quo consectetur at aliquam asperiores. At, a id dolores beatae sit minima, eius placeat voluptates possimus, veniam quis. Repudiandae doloribus nesciunt velit facilis iste cumque dicta! Sit aut omnis, deleniti consequatur harum soluta quisquam nobis obcaecati quod saepe, quam odit?</Col>
                <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, inventore minus. Quam nobis nulla omnis accusamus consectetur, assumenda earum. Aspernatur, perferendis magni. Repudiandae consectetur asperiores provident tempora ad iure voluptatibus, accusantium illum deserunt est molestias necessitatibus, quaerat deleniti expedita reiciendis? Libero doloremque perferendis officiis labore, voluptates nisi praesentium perspiciatis pariatur.</Col>
                <Col md={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero ducimus officiis totam explicabo illum, tempore incidunt adipisci dolorem vel impedit odit, dolore qui aperiam deserunt id fugiat! Numquam molestiae veniam tenetur, eos similique alias neque officiis reiciendis. Vero alias, eius pariatur saepe nam minima numquam blanditiis hic at facilis.</Col>
                <Col md={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam et at laborum dolore mollitia magnam eos illum maxime nam facilis, tempora hic tenetur explicabo cumque natus dolorem exercitationem officia vero error perferendis animi incidunt recusandae eaque? Cupiditate debitis, a necessitatibus nulla qui aliquam minima dolor, omnis distinctio possimus et?</Col>
            </Row>
        </Container>
        <Footer/>
    </>
  )
}

export default About