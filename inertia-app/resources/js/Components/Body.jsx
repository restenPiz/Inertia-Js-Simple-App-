import React from "react";
import BarChart from "./BarChart";
import MainTable from "./MainTable";

export default function Body() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Truck Parking</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* <h1>My Content</h1> */}
                    <div className="flex flex-row gap-x-6">
                        <div className="basis-1/2">
                            <BarChart />
                        </div>
                        <div className="basis-1/2">
                            <MainTable />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}