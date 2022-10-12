import React, {useMemo, useCallback, useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";
import ItemsList from "./ItemsList";
import Main from "./Main";
import Alert from "./Alert/Alert";
import {AlertProvider} from "./Alert/AlertContext";

export const AlertContext = React.createContext()
//функцию позволяющую менять видимость  алерта
export default function App() {


    return (
        <AlertProvider>
            <div className={'container'}>
                <Alert/>
                <Main toggle={() =>{}}/>
            </div>
        </AlertProvider>
    );
}