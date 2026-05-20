import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS \`EventLead\` (
        \`id\`          VARCHAR(191) NOT NULL,
        \`event\`       VARCHAR(191) NOT NULL DEFAULT 'parakou-juillet-2026',
        \`name\`        VARCHAR(191) NOT NULL,
        \`phone\`       VARCHAR(191) NOT NULL,
        \`email\`       VARCHAR(191)          DEFAULT NULL,
        \`service\`     VARCHAR(191) NOT NULL,
        \`price\`       INT          NOT NULL,
        \`date\`        VARCHAR(191)          DEFAULT NULL,
        \`stepReached\` INT          NOT NULL DEFAULT 2,
        \`paid\`        TINYINT(1)   NOT NULL DEFAULT 0,
        \`paymentId\`   VARCHAR(191)          DEFAULT NULL,
        \`createdAt\`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        \`updatedAt\`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `;
    return NextResponse.json({ ok: true, message: "Table EventLead créée ou déjà existante." });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
