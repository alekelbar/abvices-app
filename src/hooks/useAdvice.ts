import { useEffect, useState } from "react";
import { Slip } from "../interfaces/slip_interface";
import { api } from "../api/instance";

interface AdviceData {
    loading: boolean;
    data: Slip | undefined;
}

export const useAdvice = () => {

    const [AdviceData, setAdviceData] = useState<AdviceData>({
        loading: true,
        data: undefined
    });

    const loadAbvice = async () => {
        setAdviceData(e => ({ ...e, loading: true }));

        const data = (await api.get("/advice")).data;
        setAdviceData({
            data: data.slip,
            loading: false,
        })
    }

    useEffect(() => {
        loadAbvice();
    }, [])

    return {
        AdviceData,
        loadAbvice
    }
}
