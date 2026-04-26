import { Field } from "@/components/UI/form/form";

// Адрес API для отправки формы
export const formActionUrl = "/api/contact";

export const contactFormFields: Field[] = [
  {
    name: "name",
    label: "Имя",
    type: "text",
    required: true,
    placeholder: "Ваше имя",
  },
  {
    name: "phone",
    label: "Телефон",
    type: "tel",
    required: true,
    placeholder: "+7 999 000 00 00",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "example@mail.ru",
  },
  {
    name: "message",
    label: "Сообщение",
    type: "textarea",
    rows: 4,
    required: true,
    placeholder: "Кратко опишите задачу или вопрос",
  },
  {
    name: "checkbox",
    label: "Я согласен на обработку персональных данных",
    type: "checkbox",
    required: true,
  },
];

export const orderFormFields: Field[] = [
  {
    name: "name",
    label: "Имя",
    type: "text",
    required: true,
    placeholder: "Ваше имя",
  },
  {
    name: "phone",
    label: "Телефон",
    type: "tel",
    required: true,
    placeholder: "+7 999 000 00 00",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "example@mail.ru",
  },
  {
    name: "message",
    label: "Комментарий",
    type: "textarea",
    rows: 4,
    required: true,
    placeholder: "Детали заказа",
  },
  {
    name: "checkbox",
    label: "Я согласен на обработку персональных данных",
    type: "checkbox",
    required: true,
  },
];