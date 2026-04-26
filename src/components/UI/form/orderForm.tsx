'use client'

import { orderFormFields, formActionUrl } from "@/config/form"
import Form from "./form"

export default function OrderForm() {
    return (
        <Form
            className="w-full"
            fields={orderFormFields}
            formAction={formActionUrl}
            buttonText="Отправить"
        />
    )
}