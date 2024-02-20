import {Button, Card} from "react-bootstrap";

export function ItemCard({item}) {
    const {name, price, description, pictureUrl} = item;

    return (
        <Card className="m-1" style={{ width: '18rem', minHeight: "fit-content" }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {price} HUF
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}
