import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Show = (props) => {
    const { author , price, title, img } = props.course;
    return (
        <div className="float-left pl-4 pr-4 pb-3">
            {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p><strong>By:</strong> {author}</p>
                            <p><strong>Price:</strong> <span>$</span>{price}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
                    </Card.Body>
                </Card>
            }
        </div>
    );
};

export default Show;