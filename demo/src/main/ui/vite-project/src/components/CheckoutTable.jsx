import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function CheckoutTable({props}) {
    const itemList = props;
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("cart")));
    useEffect(() => {
        calculateTotal()
    }, []);

    function calculateTotal() {
        let sum = 0;
        items.map((item) => sum += item.price * item.count);
        return sum
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Item(s) Price</th>
                <th>Count</th>
            </tr>
            </thead>
            <tbody>
            {itemList?.map((item, index) => {
                const actualArray = items.filter((e) => e.id.toString() == item.id.toString());
                const actualCount = actualArray[0].count;
                return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{actualCount * item.price}</td>
                    <td>{actualCount}</td>
                </tr>
            })}
            <tr>
                <th colSpan={4}>Total Price: {calculateTotal()} Huf</th>
            </tr>
            </tbody>
        </Table>
    );
}
