import { useState } from "react";
import { Input } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AssetTable from "./AssetTable";
import { Circles } from "react-loader-spinner";


const MyAssetPage = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()


    const { data: requestItems = [], isPending, refetch, } = useQuery({
        queryKey: ['requestItems'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/requestItem/${user.email}?search=${search}&filter=${filter}`)
            return res.data;
        }
    })
    refetch()


    return (
        <div className="mt-20 mb-36">
            <h1 className="text-4xl font-bold text-indigo-500 text-center mt-10 mb-14">
                My Asset Request List
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-5 mb-14">
                {/* search section  */}
                <div className="flex w-72 flex-col items-end gap-6">
                    <Input onChange={(e) => setSearch(e.target.value)} value={search}
                        size="lg" label="Search The Item Name" type="search" className="shadow-lg border-2" />
                </div>

                {/* filter quantity */}
                <div className="relative w-[250px] ">
                    <select onChange={(e) => setFilter(e.target.value)} defaultValue='default' className="py-3 border-2 w-full px-3 rounded-lg">
                        <option disabled value='default'>Filter Product Type  </option>
                        <option value="Returnable" > Returnable </option>
                        <option value="Non-Returnable"> Non-Returnable
                        </option>
                    </select>
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
                            <th>
                                #
                            </th>
                            <th>Image </th>
                            <th>Name </th>
                            <th>Request Date  </th>
                            <th>Approval Date </th>
                            <th> Status </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestItems?.map((item, idx) => <AssetTable key={item._id} item={item} idx={idx} refetch={refetch}></AssetTable>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssetPage;