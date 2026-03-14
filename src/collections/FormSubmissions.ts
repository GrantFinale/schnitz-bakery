import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'contactName',
    defaultColumns: ['contactName', 'organizationName', 'email', 'status', 'submittedAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'organizationName',
      type: 'text',
      label: 'Organization Name',
    },
    {
      name: 'contactName',
      type: 'text',
      label: 'Contact Name',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'deliveryAddress',
      type: 'text',
      label: 'Delivery Address',
    },
    {
      name: 'organizationType',
      type: 'text',
      label: 'Organization Type',
    },
    {
      name: 'loavesPerOrder',
      type: 'text',
      label: 'Loaves Per Order',
    },
    {
      name: 'deliveryFrequency',
      type: 'text',
      label: 'Delivery Frequency',
    },
    {
      name: 'additionalNotes',
      type: 'textarea',
      label: 'Additional Notes',
    },
    {
      name: 'submittedAt',
      type: 'date',
      label: 'Submitted At',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Converted', value: 'converted' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
