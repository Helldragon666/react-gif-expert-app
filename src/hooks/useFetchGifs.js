import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                //setTimeout(() => {

                    setstate({
                        data: imgs,
                        loading: false
                    });

                //}, 2000);

            })

    }, [category]); //se va ejecutar una unica vez


    return state; //{data: [], loading: true}

}