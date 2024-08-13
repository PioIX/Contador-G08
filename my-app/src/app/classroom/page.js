"use client"

import Button from "@/components/button";
import Header from "@/components/Header"

export default function Home() {
    
    function hist(){
        location.href = "http://localhost:3000/classroom/historia"
    }

    function leng(){
        location.href = "http://localhost:3000/classroom/lengua"
    }

    function produ(){
        location.href = "http://localhost:3000/classroom/proyecto"
    }


    //Siempre un componente tiene que devolver una etiqueta html
    return(
        <>
            <Header></Header>   
            <Button onClick={hist} text="Historia"/> 
            <Button onClick={leng} text="Lengua"/> 
            <Button onClick={produ} text="Proyecto de Produccion"/> 
        </>
    )
}