import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import pic1 from '../Image/img.png'
import pic2 from '../Image/img (1).png'
import pic3 from '../Image/img (2).png'
import pic4 from '../Image/img (3).png'

const TeamDeata = [
   {
      img: pic1,
      post: 'FOUNDER',
      name: "Andrew Power",
      icons: {
         Twitter: <FaTwitter />,
         Instagram: <FaInstagram />,
         Linkedin: <FaLinkedinIn />
      }
   },
   {
      img: pic2,
      post: 'MANAGER',
      name: "Theresa Webb",
      icons: {
         Twitter: <FaTwitter />,
         Instagram: <FaInstagram />,
         Linkedin: <FaLinkedinIn />
      }
   },
   {
      img: pic3,
      post: 'PROJECT LEAD',
      name: "Esther Howard",
      icons: {
         Twitter: <FaTwitter />,
         Instagram: <FaInstagram />,
         Linkedin: <FaLinkedinIn />
      }
   },
   {
      img: pic4,
      post: 'HUMAN RESOURCES',
      name: "Jenny Wilson",
      icons: {
         Twitter: <FaTwitter />,
         Instagram: <FaInstagram />,
         Linkedin: <FaLinkedinIn />
      }
   },
]

export default TeamDeata