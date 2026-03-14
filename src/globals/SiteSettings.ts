import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Site Name',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'announcementBanner',
      type: 'group',
      label: 'Announcement Banner',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enabled',
          defaultValue: false,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'body',
          type: 'richText',
          label: 'Body',
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'address',
          type: 'text',
          label: 'Address',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Hours',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'YouTube', value: 'youtube' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'shopUrl',
      type: 'text',
      label: 'Shop URL',
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
    },
  ],
}
