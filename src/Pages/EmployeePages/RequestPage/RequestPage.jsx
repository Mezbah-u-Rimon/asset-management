import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosEmployee from "../../../Hooks/useAxiosEmployee";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";


const RequestPage = () => {
    const { id } = useParams();
    const axiosEmployee = useAxiosEmployee();
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { refetch, data: items = {} } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosEmployee.get(`/addItems/${id}`)
            return res.data;
        }
    })

    refetch();

    const onSubmit = async (data) => {
        const productName = data.productName;
        const productCategory = data.productType;
        const type = data.type;
        const price = parseFloat(data.price);
        const image = data.image;
        const whyYouNeed = data.whyYouNeed;
        const information = data.information;
        const pending = true;
        const approved = false;
        const date = new Date();
        const requesterEmail = user.email;
        const requesterName = user.displayName;
        const approvalDate = "";

        //patch the addItems  collection
        const quantity = items.quantity - 1;
        const name = items.name;
        const productType = items.productType;


        const totalQuantity = {
            name,
            image,
            price,
            quantity,
            productType,
            type,
        }

        // console.log(1, productName, 2, image, 3, productCategory, 4, price, 5, date, 6, type, 7, whyYouNeed, 8, information, 9, pending, 10, approved, 11, requesterName, 12, requesterEmail);

        const requestInfo = {
            productName,
            image,
            productCategory,
            price,
            date,
            type,
            whyYouNeed,
            information,
            approved,
            pending,
            requesterName,
            requesterEmail,
            approvalDate
        }


        refetch()

        if (items.quantity > 0) {

            axiosEmployee.post('/requestItem', requestInfo)
                .then(async (res) => {
                    if (res.data.insertedId) {
                        //update admin route
                        const addItemResult = await axiosEmployee.patch(`/addItems/${id}`, totalQuantity);
                        if (addItemResult.data.modifiedCount > 0) {
                            reset();
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: `${productName} requested product Successfully`,
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }

                    }
                })
                .catch(err => {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: err.message,
                        showConfirmButton: false,
                        timer: 2500
                    });
                });
        }
    }

    return (
        <div className="md:px-8 md:my-10 my-5 px-4">
            <Helmet>
                <title> Asset Management || Request Asset </title>
            </Helmet>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="flex-1">
                    <img src="https://i.ibb.co/MRQ6mcy/undraw-product-iteration-kjok.png" alt="" />
                </div>

                <div className="relative mt-8 lg:mt-8 flex-1 flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none ml-5">
                    <h4 className="block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Request an Asset Product
                    </h4>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 mb-2  w-3/4 ">
                        <div className="mb-4 flex flex-col gap-6">

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input defaultValue={items?.name}
                                    type="text"                        {...register("productName", { required: true })}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                                {errors.name && <span className="text-red-600 mt-1">Product Name is required</span>}

                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Product Name
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input defaultValue={items?.price}
                                    type="text"                        {...register("price", { required: true })}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                />
                                {errors.price && <span className="text-red-600 mt-1">Product price is required</span>}

                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Product Price
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input defaultValue={items?.image}
                                    type="text"
                                    {...register("image", { required: true })}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                                {errors.image && <span className="text-red-600 mt-1">Product Image is required</span>}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Product Image
                                </label>
                            </div>

                            <div className="relative w-full min-w-[200px]">
                                <select defaultValue={items?.productType}  {...register("productType", { required: true, })} className="py-3 border-2 w-full px-3 rounded-lg">
                                    <option disabled value='default'>Select a Product Category </option>
                                    <option value="Phone" > Mobile phone </option>
                                    <option value="Television"> Television
                                    </option>
                                    <option value="Laptop">Laptop
                                    </option>
                                    <option value="Refrigerator">Refrigerator
                                    </option>
                                    <option value="Camera">Camera
                                    </option>
                                    <option value="Watch">Watch
                                    </option>
                                    <option value="Monitor"> Monitor
                                    </option>
                                    <option value="Speaker">Speaker
                                    </option>
                                    <option value="Bike"> Bike
                                    </option>
                                    <option value="Furniture"> Furniture
                                    </option>

                                </select>
                            </div>
                            <div className="relative w-full min-w-[200px]">
                                <select defaultValue={items?.type}  {...register("type", { required: true, })} className="py-3 border-2 w-full px-3 rounded-lg">
                                    <option disabled value='default'>Select a Product Type </option>
                                    <option value="Returnable" > Returnable  </option>
                                    <option value="Non-Returnable"> Non Returnable
                                    </option>

                                </select>
                            </div>


                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"                        {...register("whyYouNeed")}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                />

                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Why you need this
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"                        {...register("information")}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                />

                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Additional Information
                                </label>
                            </div>
                        </div>

                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Request
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default RequestPage;