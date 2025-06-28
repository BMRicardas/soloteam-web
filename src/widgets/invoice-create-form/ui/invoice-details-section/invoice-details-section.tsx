"use client";

import { DateInput, FormErrorMessage, Input, Select } from "@/shared/ui";
import { SectionTitle } from "@/widgets/invoice-create-form/ui/section-title/section-title";
import { useFormContext } from "react-hook-form";

type Props = {};

export function InvoiceDetailsSection({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <SectionTitle>Invoice Details</SectionTitle>
      <Input label="Invoice Number" {...register("invoiceNumber")} />
      <FormErrorMessage name="invoiceNumber" errors={errors} />
      <DateInput label="Invoice Date" {...register("issueDate")} />
      <FormErrorMessage name="issueDate" errors={errors} />
      <DateInput label="Due Date" {...register("dueDate")} />
      <FormErrorMessage name="dueDate" errors={errors} />
      <Input label="Payment Terms" {...register("paymentTerms")} />
      <FormErrorMessage name="paymentTerms" errors={errors} />
      <Input label="Currency" {...register("currency")} />
      <FormErrorMessage name="currency" errors={errors} />
      <Select
        label="Payment Methods"
        multiple
        options={[
          { value: "bank_transfer", label: "Bank Transfer" },
          { value: "credit_card", label: "Credit Card" },
          { value: "paypal", label: "PayPal" },
          { value: "cash", label: "Cash" },
        ]}
        {...register("paymentMethods", {
          setValueAs: (value) =>
            Array.isArray(value) ? value : value ? [value] : [],
        })}
      />
      <FormErrorMessage name="paymentMethods" errors={errors} />
      <Input
        label="Tax Rate"
        type="number"
        {...register("taxRate", { valueAsNumber: true })}
      />
      <FormErrorMessage name="taxRate" errors={errors} />
      <Input label="Notes" {...register("notes")} />
      <FormErrorMessage name="notes" errors={errors} />
    </>
  );
}
