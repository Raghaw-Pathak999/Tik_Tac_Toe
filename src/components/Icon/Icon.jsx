import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';

export function Icon ( {name} ){
    if(name === "circle") {

        return <FaRegCircle/>

    } else if (name === "cross") {

        return <FaTimes/>

    } else {

        return <FaPen/>

    }

}