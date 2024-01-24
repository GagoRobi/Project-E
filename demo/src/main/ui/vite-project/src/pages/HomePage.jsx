import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import {Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import backdrop from "bootstrap/js/src/util/backdrop.js";

function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Card className="opacity-75">
                <CardHeader><CardTitle>Lorem Ipsum</CardTitle> </CardHeader>
                <br/>
                <CardSubtitle>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</CardSubtitle>
                <CardBody >
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo volutpat, pharetra
                        diam quis, finibus quam. Aliquam luctus lectus vel pretium dignissim. Donec consequat rhoncus
                        est, nec egestas sem aliquam semper. Nullam tempor, purus id luctus molestie, ligula tellus
                        sagittis nisl, in dictum nisi nisi in ipsum. Etiam suscipit eu elit id posuere. Vivamus
                        imperdiet consectetur felis a imperdiet. In ut porta quam. Phasellus quam nunc, consequat sit
                        amet lectus non, pretium egestas massa.

                        Cras blandit, quam eu vestibulum pretium, felis neque finibus tellus, commodo tristique nisl
                        augue a urna. Phasellus mauris purus, dictum nec arcu quis, consequat facilisis mauris. Maecenas
                        feugiat orci lacus, vel tincidunt libero auctor congue. Integer ultricies viverra tempor.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam scelerisque nisi ac tellus
                        lobortis interdum. Nullam est metus, tempus eget consectetur condimentum, maximus et felis.
                        Nulla id risus mauris. Proin eu vulputate lectus, id bibendum metus. Nam ac purus lobortis,
                        vulputate dui ut, varius turpis. Nam ultricies at orci sed consectetur. Morbi ac fermentum ante,
                        egestas sollicitudin urna.

                        Duis sit amet diam orci. Fusce lacus urna, commodo eu arcu vitae, ullamcorper ornare diam.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Donec id quam vitae dolor hendrerit bibendum. Morbi est ante, cursus eget aliquet ac, aliquet
                        dapibus leo. Mauris at purus diam. Duis rutrum magna urna, eget pharetra nunc accumsan sit amet.
                        Nulla tempus et tellus vitae rutrum. Vivamus lectus neque, sodales non nisi et, dapibus
                        tincidunt nisi. Ut eleifend scelerisque mauris id sodales. Praesent aliquet mollis hendrerit.

                        Nam in mi condimentum, finibus velit sed, blandit arcu. Sed ullamcorper nisl lorem, ut ultrices
                        ipsum elementum ut. Suspendisse sapien metus, pharetra ac sem a, finibus aliquam eros. Nunc
                        scelerisque felis eu pellentesque tempus. Nulla ornare blandit nulla et tempus. Donec in nibh
                        cursus, tempus nulla id, sodales velit. Aenean tincidunt egestas euismod. Ut tempor imperdiet mi
                        non venenatis. Integer eget erat quis arcu cursus varius. Cras elementum arcu ac nibh cursus
                        vestibulum. Vestibulum ut felis felis. Mauris aliquet iaculis erat eget auctor. Proin a elit
                        tristique, suscipit nisl id, faucibus sem. Vivamus egestas mauris vitae leo fringilla euismod.
                        Nunc ultrices lectus tempus, porta nunc non, congue mauris.

                        Mauris maximus mauris at ligula tincidunt, eu hendrerit erat sodales. Curabitur ut lacus ut
                        nulla mollis semper. Donec finibus imperdiet commodo. Quisque urna massa, pharetra ut sagittis
                        a, dignissim vitae odio. Nulla ut pharetra risus. Donec cursus odio eget turpis rhoncus, sit
                        amet auctor mauris vulputate. Aenean sed urna justo. Proin finibus arcu et sapien consequat
                        convallis. Suspendisse finibus eget neque eu rutrum. Phasellus eget mi cursus, feugiat neque
                        nec, auctor purus.
                    </CardText>
                </CardBody>

            </Card>
        </>
    )
}

export default HomePage
