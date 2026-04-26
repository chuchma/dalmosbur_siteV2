"use client";

import SectionContainer from "@/components/layout/sectionContainer";
import Header2 from "@/components/UI/header2";
import Form from "@/components/UI/form/form";
import { formActionUrl } from "@/config/form";
import type { Field } from "@/components/UI/form/form";

const contactFields: Field[] = [
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
  // honeypot для защиты от спама
  {
    name: "checkbox",
    label:
      "Я согласен на обработку персональных данных",
    type: "checkbox",
    required: true,
  },
];

export default function ContactsPage() {
  return (
    <SectionContainer>
      <Header2
        title="Контакты"
        header="Свяжитесь с ООО «Дальмосбур»"
        btnText="Написать нам"
        hideBtn
      />
      <div className="grid gap-fluid-2xlarge md:grid-cols-2 items-start">
        <div className="space-y-4 text-body-medium">
          <p className="text-title-large-semiBold text-[var(--secondary-accent)]">
            Мы готовы обсудить ваши задачи по буровым и буро-взрывным работам,
            горным проектам и комплексным услугам.
          </p>
          <p>
            Оставьте заявку через форму, и специалист свяжется с вами в
            рабочее время для уточнения деталей проекта, сроков и технических
            требований.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Телефон:</span>{" "}
              <a
                href="tel:+79821542545"
                className="text-[var(--primary-accent)] hover:text-[var(--primary-accent-hover)] transition"
              >
                +7 982 154 25 45
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:dalmosbur@gmail.com"
                className="text-[var(--primary-accent)] hover:text-[var(--primary-accent-hover)] transition"
              >
                dalmosbur@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Адрес:</span> г. Москва, ул. Новый
              Арбат, 145
            </p>
          </div>
        </div>
        <div className="bg-[var(--primary-white)] border border-[var(--secondary-lightGrey)] rounded-fluid-lg px-fluid-large py-fluid-xlarge shadow-sm">
          <Form
            fields={contactFields}
            formAction={formActionUrl}
            buttonText="Отправить запрос"
          />
        </div>
      </div>

    </SectionContainer>
  );
}

