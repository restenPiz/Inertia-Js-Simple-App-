import React from "react";
import Sidebar from "../Components/Sidebar";
import ParkTable from "./parkTable";
import { useForm } from '@inertiajs/inertia-react';

export default function Park({ parks }) {
    const { data, setData, post, reset } = useForm({
        Park_name: "",
        Park_location: "",
        Park_capacity: "",
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setData(key, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post('/parkStore', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    }

    return (
        <>
            <Sidebar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Park Management</h1>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <form className="bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="Park_name" className="block text-sm font-medium leading-6 text-gray-900">
                                Park Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Park_name"
                                    name="Park_name"
                                    placeholder="Ex: Mabocoto"
                                    type="text"
                                    value={data.Park_name}
                                    onChange={handleChange}
                                    className="w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="Park_location" className="block text-sm font-medium leading-6 text-gray-900">
                                Park Location
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Park_location"
                                    name="Park_location"
                                    placeholder="Ex: Manica"
                                    type="text"
                                    value={data.Park_location}
                                    onChange={handleChange}
                                    className="w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="Park_capacity" className="block text-sm font-medium leading-6 text-gray-900">
                                Total Park Capacity
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Park_capacity"
                                    name="Park_capacity"
                                    placeholder="Total Park Capacity"
                                    type="text"
                                    value={data.Park_capacity}
                                    onChange={handleChange}
                                    className="w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </form>

                <div className="bg-white p-6 rounded-lg shadow">
                    <ParkTable parks={parks} />
                </div>
            </div>
        </>
    );
}
