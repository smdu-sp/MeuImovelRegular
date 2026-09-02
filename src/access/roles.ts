import type { Access, FieldAccess } from "payload";

export const roleOptions = [
  { label: "Administrador", value: "admin" },
  { label: "Editor", value: "editor" },
] as const;

export type UserRole = (typeof roleOptions)[number]["value"];

type UserWithRole = {
  id?: number | string;
  role?: UserRole | null;
};

export const getUserRole = (user?: UserWithRole | null): UserRole | null =>
  user?.role === "admin" || user?.role === "editor" ? user.role : null;

export const isAdmin = (user?: UserWithRole | null): boolean => {
  if (!user) {
    return false;
  }

  const role = getUserRole(user);
  return role === "admin" || role === null;
};

export const isEditor = (user?: UserWithRole | null): boolean =>
  getUserRole(user) === "editor";

export const canEditContent = (user?: UserWithRole | null): boolean =>
  isAdmin(user) || isEditor(user);

const accessUser = (user: unknown): UserWithRole | null | undefined =>
  user as UserWithRole | null | undefined;

export const adminOnly: Access = ({ req }: Parameters<Access>[0]) =>
  isAdmin(accessUser(req.user));

export const adminOrEditor: Access = ({ req }: Parameters<Access>[0]) =>
  canEditContent(accessUser(req.user));

export const publishedOrLoggedIn: Access = ({ req }: Parameters<Access>[0]) => {
  if (canEditContent(accessUser(req.user))) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};

export const adminFieldOnly: FieldAccess = ({ req }: Parameters<FieldAccess>[0]) =>
  isAdmin(accessUser(req.user));
