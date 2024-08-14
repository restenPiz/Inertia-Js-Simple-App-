import React from "react";
import Sidebar from "../Components/Sidebar";
import Table from "../Components/MainTable";
import { useState } from "react";

export default function Truck() {

    const [values, setValues] = useState({
        Truck_name: "",
        Truck_weight: "",
        Driver_name: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/truck', values)
    }

    return (
        <>
            <Sidebar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Truck Management</h1>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Início do formulário */}
                <form className="bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="truck-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Truck Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    placeholder="Ex: Scania MP300"
                                    type="text" value={values.Truck_name}
                                    autoComplete="given-name" onChange={handleChange}
                                    className="block w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="truck-weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Truck Weight
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    placeholder="Ex: 300kg"
                                    type="text" value={values.Truck_weight}
                                    autoComplete="given-name" onChange={handleChange}
                                    className="block w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Park Location
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Manica</option>
                                    <option>Sofala</option>
                                    <option>Tete</option>
                                    <option>Zambezia</option>
                                    <option>Nampula</option>
                                    <option>Cabo Delgado</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="truck-weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Driver's Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    placeholder="Ex: Mauro Peniel"
                                    type="text" value={values.Driver_name}
                                    autoComplete="given-name" onChange={handleChange}
                                    className="block w-full p-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

                {/* Tabela ao lado do formulário */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <Table />
                </div>
            </div>
        </>
    );
}
