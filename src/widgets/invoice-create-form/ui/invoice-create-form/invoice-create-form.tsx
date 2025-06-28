"use client";

import { InvoiceDetailsSection } from "../invoice-details-section/invoice-details-section";
import { InvoiceItemsSection } from "../invoice-items-section/invoice-items-section";
import { Button } from "@/shared/ui";
import styles from "./invoice-create-form.module.css";
import { BussinessInfoSection } from "../business-info-section/business-info-section";
import { ClientInfoSection } from "../client-info-section/client-info-section";
import { useCreateInvoiceForm } from "@/features/create-invoice/model/use-create-invoice-form";
import { FormProvider } from "react-hook-form";

type Props = {};

export function InvoiceCreateForm({}: Props) {
  const methods = useCreateInvoiceForm();

  console.log(methods.formState.errors);

  const handleSubmit = methods.handleSubmit((data) => {
    // TODO: Replace with your actual submit logic (e.g., API call, PDF generation)
    // Always document business logic for the next developer!
    console.log("Invoice data submitted:", data);
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Invoice</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <BussinessInfoSection />
          <ClientInfoSection />
          <InvoiceDetailsSection />
          <InvoiceItemsSection />
          <Button type="submit">Create Invoice</Button>
        </form>
      </FormProvider>
    </div>
  );
}
