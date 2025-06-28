"use client";

import { useFormContext } from "react-hook-form";
import { FormErrorMessage, Input } from "@/shared/ui";
import { SectionTitle } from "@/widgets/invoice-create-form/ui/section-title/section-title";
import styles from "./bussiness-info-section.module.css";

type Props = {};

export function BussinessInfoSection({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <SectionTitle>Bussiness Information</SectionTitle>
      <Input label="Name" {...register("businessInfo.name")} />
      <FormErrorMessage name="businessInfo.name" errors={errors} />
      <Input label="Email" {...register("businessInfo.email")} />
      <FormErrorMessage name="businessInfo.email" errors={errors} />
      <Input label="Address" {...register("businessInfo.address")} />
      <FormErrorMessage name="businessInfo.address" errors={errors} />
      <Input label="Phone" {...register("businessInfo.phone")} />
      <FormErrorMessage name="businessInfo.phone" errors={errors} />
    </>
  );
}
