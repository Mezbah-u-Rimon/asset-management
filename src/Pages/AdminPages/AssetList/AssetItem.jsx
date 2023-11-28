import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxiosAdmin from "../../../Hooks/useAxiosAdmin";
import { Link } from "react-router-dom";

const AssetItem = ({ item, refetch }) => {
    const { _id, name, date, image, price, quantity } = item || {};
    const axiosAdmin = useAxiosAdmin()


    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosAdmin.delete(`/addItems/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                <CardFooter className="pt-4 absolute bottom-5 flex justify-around items-center w-full right-0">
                    <Link to={`/updateItem/${_id}`}>
                        <Button className="text-black shadow-xl bg-gray-100"> Update </Button>
                    </Link>
                    <Button onClick={() => handleDeleteItem(_id)} className="text-black shadow-xl bg-gray-100"> Delete </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AssetItem;