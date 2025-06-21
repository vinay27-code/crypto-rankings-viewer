import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./slice";
import { useSelector } from "react-redux";
import CoinCard from "./CoinCard";

export default function CoinCreate(){

    const dispatch=useDispatch();
    const {data, loading, error} = useSelector((state)=>state.fetchSlice);

        useEffect(()=>{
            dispatch(fetchData(50)); //display info of 20 items
        },[])

        if(loading==true)
        {
            return(
                <h1>Data is loading</h1>
            )
        }
        if(error){
            return <h1>Error has occurred</h1>
        }

        return(
            <>
                <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                   {data.map((value)=><CoinCard key={value.id} coin={value}/>)}
                </div>
            </>
        )
}