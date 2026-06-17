import { NextResponse } from "next/server";
import { getSession, hasPerm } from "@/lib/auth";
import { getSiteSettings } from "@/lib/settings";

export async function GET() {
  try {
    const settings = await getSiteSettings();
    return NextResponse.json({
      maintenanceMode: settings.maintenanceMode,
      disabledPages: JSON.parse(settings.disabledPages || "[]"),
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur de chargement" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!hasPerm(session, "parametres")) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 403 });
  }

  try {
    const { pageNames } = await req.json();
    const settings = await getSiteSettings();
    const response = NextResponse.json({ success: true });

    // Set cookie for maintenance mode
    if (settings.maintenanceMode === "on") {
      response.cookies.set("maintenanceMode", "on", {
        maxAge: 86400 * 365, // 1 year
        path: "/",
      });
    } else {
      response.cookies.delete("maintenanceMode");
    }

    return response;
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}