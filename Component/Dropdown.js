// import { Fragment, useState } from 'react'
// import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronDownIcon, SelectorIcon } from '@heroicons/react/solid'


// export default function Dropdown({make}) {
//     const people = Object.keys(make)
//     const [selected, setSelected] = useState([])
//     const [rote, setRote] = useState(false);


//     function rotate() {
//         if (rote) {
//             setRote(false)
//         }
//         else {
//             setRote(true)
//         }
//     }


//     return (
//         <div className="">
//             <Listbox value={selected} onChange={setSelected}>
//                 <div className="relative mt-1">
//                     <Listbox.Button onClick={() => rotate()} className="relative w-[280px] h-[48px] cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-[#e4e4eb]">
//                         <span className="block truncate">{selected.name}</span>
//                         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">

//                             <ChevronDownIcon className={`h-5 w-5 text-gray-400 ${rote ? "rotate-180" : ""}`} aria-hidden="true" />
//                         </span>
//                     </Listbox.Button>
//                     <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                             {people.map((person, personIdx) => (
//                                 <Listbox.Option
//                                     key={personIdx}
//                                     className={({ active }) =>
//                                         `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
//                                         }`
//                                     }
//                                     value={person}
//                                 >
//                                     {({ selected }) => (
//                                         <>
//                                             <span
//                                                 className={`block truncate ${selected ? 'font-medium' : 'font-normal'
//                                                     }`}
//                                             >
//                                                 {person}
//                                             </span>

//                                         </>
//                                     )}
//                                 </Listbox.Option>
//                             ))}
//                         </Listbox.Options>
//                     </Transition>
//                 </div>
//             </Listbox>
//         </div>
//     )
// }


import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, getMakedata, getmodelCar, getPagination } from "../store/homePageslice";




const MultiSelectDropDown = ({ make }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPersons, setSelectedPersons] = useState([]);
    const [rotated, setRotate] = useState(false);
    const dispatch = useDispatch();



    // console.log(make,"Make")

    const people = Object.keys(make)

    function rotate() {
        console.log("clickeddd");
        if (rotated) {
            setRotate(false);
        } else {
            setRotate(true);
        }
    }

    function isSelected(value) {
        return selectedPersons.find((el) => el === value) ? true : false;
    }

    function handleSelect(value) {
        if (!isSelected(value)) {
            const selectedPersonsUpdated = [
                ...selectedPersons,
                people.find((el) => el === value),
            ];
            setSelectedPersons(selectedPersonsUpdated);
            dispatch(getMakedata(selectedPersonsUpdated))
            dispatch(getmodelCar([]))
            dispatch(fetchCars())
        } else {
            handleDeselect(value);
        }
        setIsOpen(true);
    }

    function handleDeselect(value) {
        const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
        setSelectedPersons(selectedPersonsUpdated);
        dispatch(getMakedata(selectedPersonsUpdated));
        dispatch(getmodelCar([]))

        dispatch(fetchCars());
        setIsOpen(true);
    }
    return (
        <div className="">
            <div className="w-full max-w-xs mx-auto">
                <Listbox
                    as="div"
                    className="space-y-1"
                    value={selectedPersons}
                    onChange={(value) => handleSelect(value)}
                    open={isOpen}
                >
                    {() => (
                        <>
                            {/* <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                Assigned to
              </Listbox.Label> */}
                            <div className="relative">
                                <span className="inline-block w-full rounded-md shadow-sm">
                                    <Listbox.Button
                                        className="relative w-[280px] h-[48px] cursor-default rounded-[10px] bg-white py-2 pl-3 pr-10 text-left border border-solid border-[#E4E4EB] hover:border-[#FF8800] focus:border-[#E63535] sm:text-sm"
                                        onClick={() => setIsOpen(!isOpen)}
                                        open={isOpen}
                                    >
                                        <span className="block truncate">
                                            {selectedPersons.length < 1
                                                ? "Select Make"
                                                : `${selectedPersons}`}
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <ChevronDownIcon
                                                className={`h-5 transition-all duration-500 w-5 text-gray-400 ${rotated ? "rotate-180" : ""
                                                    }`}
                                                onClick={() => rotate()}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                </span>

                                <Transition
                                    unmount={false}
                                    show={isOpen}
                                    enter="transition duration-300 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-300 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <div
                                        className={`${isOpen
                                            ? "w-[1520px] h-[150vh] bg-transparent absolute left-[-80px] top-[-425px]"
                                            : ""
                                            } `}
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    ></div>
                                    <Listbox.Options
                                        static
                                        className="absolute top-[-280px] mt-1 h-[90vh] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    >
                                        {people.map((person) => {
                                            const selected = isSelected(person);
                                            return (
                                                <Listbox.Option key={person} value={person}>
                                                    {({ active }) => (
                                                        <div
                                                            className={`hover:bg-[#FAFAFC] ${active ? "bg-[#FFF3EB]" : ""
                                                                } cursor-default select-none relative `}
                                                        >
                                                            <span
                                                                className={`block py-2 pl-10 pr-4 truncate${selected
                                                                    ? "font-semibold bg-[#FFF3EB]"
                                                                    : "font-normal"
                                                                    } block truncate`}
                                                            >
                                                                {person}
                                                            </span>
                                                            {selected && (
                                                                <span
                                                                    className={`${active ? "text-white" : "text-blue-600"
                                                                        } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                                ></span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Listbox.Option>
                                            );
                                        })}
                                    </Listbox.Options>
                                </Transition>

                            </div>
                        </>
                    )}
                </Listbox>
            </div>
        </div>
    );
};

export default MultiSelectDropDown;