import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Circles } from "react-loader-spinner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AllRequestTable from "./AllRequestTable";


const AllRequestPage = () => {
    const [search, setSearch] = useState("");
    const axiosPublic = useAxiosPublic()


    const { data: requestItems = [], isPending, refetch, } = useQuery({
        queryKey: ['requestItems'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/requestItem?search=${search}`)
            return res.data;
        }
    })
    refetch()

    return (
        <div className="mt-20 mb-36">
            <Helmet>
                <title> Asset Management || Requester Page Admin </title>
            </Helmet>
            <h1 className="text-4xl font-bold text-indigo-500 text-center mt-10 mb-14">
                All Asset Request List
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-5 mb-14">
                {/* search section  */}
                <div className="flex w-72 flex-col items-end gap-6">
                    <Input onChange={(e) => setSearch(e.target.value)} value={search}
                        size="lg" label="Search The Item Name" type="search" className="shadow-lg border-2" />
                </div>

            </div>

            {
                isPending && <div className="flex justify-center items-center w-full h-[300px] bg-white">
                    <Circles
                        height="80"
                        width="80"
                        color="indigo"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> </div>
            }

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name </th>
                            <th>Type </th>
                            <th>Requester Email </th>
                            <th>Requester Name </th>
                            <th>Request Date  </th>
                            <th>Additional Note </th>
                            <th> Status </th>
                            <th> Approve </th>
                            <th> Reject </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestItems?.map((item, idx) => <AllRequestTable key={item._id} item={item} idx={idx} refetch={refetch}></AllRequestTable>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequestPage;