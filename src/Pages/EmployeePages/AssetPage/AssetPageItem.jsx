import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const AssetPageItem = ({ item }) => {
    const { _id, name, date, image, price, quantity } = item || {};


    return (
        <div>
            <Card className="h-[420px] mt-6 p-3 relative">
                <CardHeader color="blue-gray" className="relative  mb-3">
                    <img className="h-[200px] mx-auto"
                        src={image}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography>
                        Date : {date}
                    </Typography>
                    <Typography className="flex justify-between mt-1">
                        <p> Price : {price} k </p>
                        <p> Quantity : {quantity} </p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-4 absolute bottom-5 flex justify-center items-center w-full">
                    <Link to={`/requestPage/${_id}`}>
                        <Button className="text-black shadow-xl bg-gray-100"> Request  </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AssetPageItem;