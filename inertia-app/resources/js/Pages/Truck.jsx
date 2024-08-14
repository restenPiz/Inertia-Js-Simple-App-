import React from "react";
import Sidebar from "../Components/Sidebar";
import Table from "../Components/MainTable";

export default function Truck() {
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
                <form className="bg-white p-6 rounded-lg shadow">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="truck-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Truck Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="truck-name"
                                    name="truck-name"
                                    type="text"
                                    placeholder="Ex: Scania M399"
                                    className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="truck-weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Truck Weight
                            </label>
                            <div className="mt-2">
                                <input
                                    id="truck-weight"
                                    name="truck-weight"
                                    type="text"
                                    placeholder="Ex: 300kg"
                                    className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="truck-weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Driver's Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="truck-weight"
                                    name="truck-weight"
                                    type="text"
                                    placeholder="Ex: Mauro Peniel"
                                    className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
