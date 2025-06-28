import { z } from "zod";

export const businessInfoSchema = z.object({
  name: z.string().min(1, "Business name is required"),
  email: z.string().email("Valid email is required"),
  address: z.string().min(1, "Business address is required"),
  phone: z.string().min(1, "Phone number is required"),
});

const clientInfoSelectSchema = z.object({
  mode: z.literal("select"),
  clientId: z.string().min(1, "Client selection is required"),
  name: z.string().optional(),
  email: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  contactPerson: z.string().optional(),
});

const clientInfoCreateSchema = z.object({
  mode: z.literal("create"),
  clientId: z.string().optional(),
  name: z.string().min(1, "Client name is required"),
  email: z.string().email("Valid email is required"),
  address: z.string().min(1, "Client address is required"),
  phone: z.string().min(1, "Client phone number is required"),
  contactPerson: z.string().optional(),
});

export const clientInfoSchema = z.discriminatedUnion("mode", [
  clientInfoSelectSchema,
  clientInfoCreateSchema,
]);

export const paymentTermsSchema = z.enum([
  "Net 15",
  "Net 30",
  "Due on Receipt",
  "Net 60",
]);

export const lineItemSchema = z.object({
  description: z.string().min(1, "Service description is required"),
  quantity: z.number().min(0.01, "Quantity must be greater than 0"),
  rate: z.number().min(0, "Rate cannot be negative"),
  total: z.number().min(0, "Line total cannot be negative"),
});

export const invoiceSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),

  invoiceNumber: z.string().min(1, "Invoice number is required"),
  issueDate: z.date(),
  dueDate: z.date(),
  paymentTerms: paymentTermsSchema,
  currency: z.string().min(1, "Currency is required"),
  taxRate: z
    .number()
    .min(0, "Tax rate cannot be negative")
    .max(100, "Tax rate cannot exceed 100%"),
  notes: z.string().optional(),

  businessInfo: businessInfoSchema,
  clientInfo: clientInfoSchema,

  lineItems: z
    .array(lineItemSchema)
    .min(1, "At least one service/product is required"),
  subtotal: z.number().min(0, "Subtotal cannot be negative"),
  totalAmount: z.number().min(0, "Total amount cannot be negative"),

  paymentMethods: z
    .array(z.string())
    .min(1, "At least one payment method required"),
  paymentDetails: z.string().optional(),
});

export type BusinessInfo = z.infer<typeof businessInfoSchema>;
export type ClientInfo = z.infer<typeof clientInfoSchema>;
export type PaymentTerms = z.infer<typeof paymentTermsSchema>;
export type LineItem = z.infer<typeof lineItemSchema>;
export type Invoice = z.infer<typeof invoiceSchema>;

export const createInvoiceSchema = invoiceSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  subtotal: true,
  totalAmount: true,
});

export type CreateInvoiceData = z.infer<typeof createInvoiceSchema>;
