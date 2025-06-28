"use client";

import { FormErrorMessage, Input } from "@/shared/ui";
import { SectionTitle } from "../section-title/section-title";
import { useFieldArray, useFormContext } from "react-hook-form";

type Props = {};

export function InvoiceItemsSection({}: Props) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "lineItems",
  });

  return (
    <>
      <SectionTitle>Invoice Items</SectionTitle>
      {fields.map((item, index) => (
        <div key={item.id} style={{ marginBottom: 16 }}>
          <Input
            label="Description"
            {...register(`lineItems.${index}.description`)}
          />
          <FormErrorMessage
            name={`lineItems.${index}.description`}
            errors={errors}
          />
          <Input
            label="Quantity"
            {...register(`lineItems.${index}.quantity`, {
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage
            name={`lineItems.${index}.quantity`}
            errors={errors}
          />
          <Input
            label="Rate"
            type="number"
            {...register(`lineItems.${index}.rate`, {
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage name={`lineItems.${index}.rate`} errors={errors} />
          <Input
            label="Total Amount"
            {...register(`lineItems.${index}.totalAmount`)}
          />
          <FormErrorMessage
            name={`lineItems.${index}.totalAmount`}
            errors={errors}
          />
          <Input
            label="Subtotal"
            {...register(`lineItems.${index}.subtotal`)}
          />
          <FormErrorMessage
            name={`lineItems.${index}.subtotal`}
            errors={errors}
          />
        </div>
      ))}
    </>
  );
}
