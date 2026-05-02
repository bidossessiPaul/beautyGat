interface Props {
  // schema must come from trusted internal data only, never from user input
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ schema }: Props) {
  // JSON.stringify produces safe JSON — no HTML injection possible inside <script type="application/ld+json">
  const json = JSON.stringify(schema)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
