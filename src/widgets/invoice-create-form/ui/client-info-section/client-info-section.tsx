"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { FormErrorMessage, Input, Radio, Select } from "@/shared/ui";
import { SectionTitle } from "@/widgets/invoice-create-form/ui/section-title/section-title";
import styles from "./client-info-section.module.css";

type Props = {};

export function ClientInfoSection({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const mode = useWatch({
    name: "clientInfo.mode",
    defaultValue: "select", // was "existingClient"
  });

  console.log({ mode });

  return (
    <>
      <SectionTitle>Client Information</SectionTitle>
      <Radio
        label="Do you want to select an existing client or create a new one?"
        options={[
          {
            value: "select",
            label: "Existing Client",
          },
          {
            value: "create",
            label: "New Client",
          },
        ]}
        {...register("clientInfo.mode")}
      />
      {mode === "select" ? (
        <>
          <Select
            label="Select Client"
            {...register("clientInfo.existingClientId")}
            options={[
              { value: "client1", label: "Client 1" },
              { value: "client2", label: "Client 2" },
              { value: "client3", label: "Client 3" },
            ]}
          />
          <FormErrorMessage
            name="clientInfo.existingClientId"
            errors={errors}
          />
        </>
      ) : (
        <>
          <Input label="Name" {...register("clientInfo.name")} />
          <FormErrorMessage name="clientInfo.name" errors={errors} />
          <Input label="Email" {...register("clientInfo.email")} />
          <FormErrorMessage name="clientInfo.email" errors={errors} />
          <Input label="Address" {...register("clientInfo.address")} />
          <FormErrorMessage name="clientInfo.address" errors={errors} />
          <Input label="Phone" {...register("clientInfo.phone")} />
          <FormErrorMessage name="clientInfo.phone" errors={errors} />
          <Input
            label="Contact Person"
            {...register("clientInfo.contactPerson")}
          />
          <FormErrorMessage name="clientInfo.contactPerson" errors={errors} />
        </>
      )}
    </>
  );
}
