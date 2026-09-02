import type { CollectionConfig } from "payload";
import { adminFieldOnly, adminOnly, roleOptions } from "../access/roles.ts";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    create: adminOnly,
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "role",
      type: "select",
      label: "Perfil de acesso",
      defaultValue: "admin",
      access: {
        create: adminFieldOnly,
        update: adminFieldOnly,
      },
      admin: {
        description:
          "Controla o acesso editorial no CMS. Apenas administradores podem alterar perfis.",
        position: "sidebar",
      },
      options: [...roleOptions],
    },
  ],
};
