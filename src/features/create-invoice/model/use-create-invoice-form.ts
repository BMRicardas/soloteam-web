import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createInvoiceSchema,
  CreateInvoiceData,
} from "@/entities/invoice/model/types";

const emptyDefaults: CreateInvoiceData = {
  businessInfo: {
    name: "",
    address: "",
    email: "",
    phone: "",
  },
  clientInfo: {
    clientId: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    contactPerson: "",
  },
  invoiceNumber: "",
  issueDate: new Date(),
  dueDate: new Date(),
  paymentTerms: "Net 30",
  currency: "USD",
  taxRate: 0,
  lineItems: [
    {
      description: "",
      quantity: 1,
      rate: 0,
      total: 0,
    },
  ],
  paymentMethods: [],
  paymentDetails: "",
};

export function useCreateInvoiceForm({
  defaultValues,
}: { defaultValues?: Partial<CreateInvoiceData> } = {}) {
  return useForm<CreateInvoiceData>({
    resolver: zodResolver(createInvoiceSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      ...emptyDefaults,
      ...defaultValues,
    },
  });
}
