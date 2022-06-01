import { Text  } from "native-base";
import React, { useEffect, useContext} from "react";
import { MainContext } from "../../context";


const Test = () => {
    const { getData } = useContext(MainContext);
    useEffect(()=>{
        getData();
    }, [])

    return (
        <Text>Hello</Text>
    )
}

export default Test;