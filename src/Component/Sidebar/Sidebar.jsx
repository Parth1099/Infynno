import React from 'react'
import { BsPeople } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiDownload ,FiSettings} from 'react-icons/fi';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
        <div id='main-sidebar'>
            <div><a href='#'><BsPeople /></a></div>
            <div><a href='#'><AiOutlineUnorderedList /></a></div>
            <div><a href='#'><FiDownload /></a></div>
            <div><a href='#'><FiSettings /></a></div>
        </div>
    </div>
  )
}

export default Sidebar