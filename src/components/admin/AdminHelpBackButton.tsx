"use client";

import { useRouter } from "next/navigation";

export function AdminHelpBackButton() {
  const router = useRouter();

  return (
    <button
      aria-label="Voltar"
      className="admin-help__back-button"
      onClick={() => router.back()}
      type="button"
    >
      <span aria-hidden="true">&larr;</span>
    </button>
  );
}
