import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {

    const [formData, setFormData] = useState(initState);

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return {
        ...formData,
        handleChange
    };
}