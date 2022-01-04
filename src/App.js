import React, { useState, useEffect } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

import photo from './img/korova.jpg' // relative path to image

import calendar from './img/calendar.jpg'
import r1 from './img/r1.png'
import r2 from './img/r2.png'
import r3 from './img/r3.png'
import postimg from './postimg.jpg'

import post1 from './img/favpost1.jpg' // relative path to image
import post2 from './img/favpost2.jpg' // relative path to image
import post3 from './img/favpost3.jpg' // relative path to image


const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function NumberList(props) {
  const listElmts = props.numbers;
  const listItems = listElmts.map((e) =>
    <ListGroup.Item className="m-1">{e}</ListGroup.Item>
  );
  return (
    <ListGroup>{listItems}</ListGroup>
  );
}

function PostsList(props) {
  const listElmts = props.listElmts;
  const listItems = listElmts.map((e) =>
    <div class="m-1 col-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={postimg} />
        <Card.Body>
          <Card.Title>{e['id']}</Card.Title>
          <Card.Text>
            {e['text']}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
  return (
    <>
      <div class='d-flex flex-wrap'>
        {listItems}
      </div>
      
    </>
    
  );
}

function Carusel () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={post1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={post2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={post3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

const App = () => {
  const [data, setData] = useState('title');
  const [Contetnt, setContetnt] = useState('main');
  const [listPosts, setListPosts] = useState([
    {'id': 1, 'text': 'O, its very interesting subject! Lets game quickly until free', 'author': 'Jonny'},
    {'id': 1, 'text': 'O, its very interesting subject! Lets game quickly until free', 'author': 'Jonny'},
    {'id': 1, 'text': 'O, its very interesting subject! Lets game quickly until free', 'author': 'Jonny'},
    {'id': 1, 'text': 'O, its very interesting subject! Lets game quickly until free', 'author': 'Jonny'},
    {'id': 1, 'text': 'O, its very interesting subject! Lets game quickly until free', 'author': 'Jonny'},
    {'id': 1, 'text': 'O, its very interesting subject! Lets game quickly until free', 'author': 'Jonny'},
  ])
  

  useEffect(() => {
    console.log('data')
    fetch('http://161.35.199.108/profile/44296578', {headers: {"Accept": "application/json"}})
        .then(response => response.json())
        .then((data) => {
            setData(data)
           } );
    // Обновляем заголовок документа с помощью API браузера
    document.title = 'TG';
    //alert('9')
  }, []);


  return (
  <>
    <Stack direction="horizontal" gap={2}>
      <Stack className="position-absolute top-40 start-0">
          <Container className='mb-5'>
            <button type="button" class="mybutton" 
                  onClick={() => {
                    setContetnt('main')
                  }}
            >
              <p class='vertical-text mytext'>{'Мой профиль'}</p>
            </button>
          </Container>
          <Container className='my-5'>
            <button type="button" class="mybutton" 
                  onClick={() => {
                    setContetnt('feed')
                  }}
            >
              <p class='vertical-text mytext'>{'Лента'}</p>
            </button>
          </Container>
          <Container className='mt-5'>
            <button type="button" class="mybutton" 
                  onClick={() => {
                    setContetnt('main')
                  }}
            >
              <p class='vertical-text mytext'>{'Лидеры'}</p>
            </button>
          </Container>
      </Stack>

      <Container>
        <Container className="p-0">
          <Row lg={11} className="m-0 my-2 d-flex justify-content-center">
            <Col lg={3} className='border-end border-2 border-dark'>
              <button type="button" class="mybutton" 
                onClick={() => {
                  setContetnt('channels')
                }}
              >
                <p class='mytext'>{'Каналы'}</p>
              </button>
            </Col>
            <Col lg={3} className='border-end border-2 border-dark d-flex justify-content-center'>
              <button type="button" class="mybutton" 
                onClick={() => {
                  setContetnt('chats')
                }}
              >
                <p class='mytext'>{'Чаты'}</p>
              </button>
            </Col>
            <Col lg={2}>
              <button type="button" class="mybutton" 
                onClick={() => {
                  //setContetnt('chats')
                }}
              >
                <p class='mytext'>{'Поиск'}</p>
              </button>
            </Col>
            <Col lg={3}>
              <button type="button" class="mybutton" 
                onClick={() => {
                  setContetnt('main')
                }}
              >
                <p class='mytext'>{data['first_name'] + ' ' + data['last_name']}</p>
              </button>
              
            </Col>
          </Row>
        </Container>

        {/* PROFIL MAIN */}
        {(Contetnt == 'main') ? (<Container className="">
          <Row className='m-0 d-flex justify-content-center'>
            {/* block 1 */}
            <Col lg={8} className="mr-3 bg-danger rounded-3" >
              <Row>
                <Col lg={4}>
                  <Stack gap={3} className="m-1">
                    <div>{'Рефералы'}</div>
                    <NumberList numbers={[1, 2, 3, 4, 5]}/>
                    <p>{'Майанский календарь'}</p>
                    <Image src={calendar} rounded />
                  </Stack>
                </Col >
                <Col lg={6}>
                  <Stack gap={3} className="m-1">
                    <div>{'Рейтинг'}</div>
                    <Container className='bg-light p-2'>
                      <Row>
                        <Col lg={3} className='mb-4'>
                          <Image fluid={true} src={r1}/>
                        </Col>
                        <Col lg={5} className='fs-6 fw-bold'>
                          {'Сегодня'}
                        </Col> 
                      </Row>
                      <Row>
                        <Col lg={3} className='mb-4'>
                          <Image fluid={true} src={r2}/>
                        </Col>
                        <Col lg={5} className='fs-6 fw-bold'>
                          {'За неделю'}
                        </Col> 
                      </Row>
                      <Row>
                        <Col lg={3} className='mb-4'>
                          <Image fluid={true} src={r3}/>
                        </Col>
                        <Col lg={5} className='fs-6 fw-bold'>
                          {'Выполненных подписок'}
                        </Col> 
                      </Row>
                    </Container>
                    <Row>
                      <Col>
                        <p>{'Добавить'}</p>
                        <p>{'Канал'}</p>
                        <p>{'Чат'}</p>
                      </Col>
                      <Col>
                        <p>{'Избранные посты'}</p>
                        <Carusel/>
                      </Col>
                    </Row>
                  </Stack>
                </Col>
              </Row>
            </Col>

            {/* block 2 */}
            <Col lg={3} className="d-flex align-items-center">
              <Stack gap={3} className="col-lg-6">
                <Image src={photo} rounded />
                <p style={{fontSize: 14, alignSelf: 'center'}}>{'Пользователь      зарегестрирован    с    ' + data['registration_date']}</p>
                <Stack direction="horizontal" className='d-flex justify-content-between'>
                  <div style={{fontSize: 14}} class="col-5 border-bottom border-dark border-1">
                    {data['first_name'] + ' ' + data['last_name']}
                  </div>
                  <div class="col-5 fs-6 border-bottom border-dark border-1 d-flex justify-content-end">
                    {data['birthdate'] != null ? data['birthdate']: '01.01.1900' + '  birthtime'}
                  </div>
                </Stack>
                <div class="col-5 fs-6 border-bottom border-dark border-1 d-flex justify-content-start">
                  {data['phone'] == null ? '8900-00-00-000': data['phone']}
                </div>
                <div class="col-12 fs-6 border-bottom border-dark border-1 d-flex justify-content-start">
                  {'email'}
                </div>
                <div>
                  {'Рейтинг'}
                </div>
                <div class='h-25 col-12 border border-1 d-flex justify-content-center align-items-center'>
                  {'46'}
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>): null}

        {/* PROFIL CHANNELS */}
        {(Contetnt == 'channels') ? (<Container className="">
          <p>{'У вас еще нет каналов'}</p>
        </Container>): null}

        {/* FEED */}
        {(Contetnt == 'feed') ? (
        <Container className="">
          <PostsList listElmts={listPosts}/>
        </Container>): null}

      </Container>
    </Stack>
  </>
)}

export default App;
