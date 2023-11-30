import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Packages = () => {
    return (
        <div className="mt-14 mb-24">
            <h1 className="text-4xl font-bold text-center pt-10"> Our <span className="text-indigo-500">Packages</span> </h1>
            <p className="md:w-[450px] pt-3 text-center mx-auto pb-10">Comprehensive services and enhanced features for bigger organizations.Offers expanded services and support for growing businesses.</p>
            <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-center">
                <div>
                    <Card className="mt-6 p-7 text-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-black">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2  font-bold">
                                Maximum 5 employees
                            </Typography>
                            <Typography className="font-bold">
                                Price : $5
                            </Typography>
                        </CardBody>
                        <CardFooter className="py-3">
                            <Link to='/payment'>
                                <Button className="text-black"> Select Package </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="mt-6 p-7 text-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2 text-black font-bold">
                                Maximum 10 employees
                            </Typography>
                            <Typography className="font-bold text-black">
                                Price : $8
                            </Typography>
                        </CardBody>
                        <CardFooter className="py-3">
                            <Link to="/payment">
                                <Button className="text-black"> Select Package </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="mt-6 p-7 text-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-black">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2  font-bold">
                                Maximum 20 employees
                            </Typography>
                            <Typography className="font-bold">
                                Price : $15
                            </Typography>
                        </CardBody>
                        <CardFooter className="py-3">
                            <Link to="/payment">
                                <Button className="text-black"> Select Package </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Packages;