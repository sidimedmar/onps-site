import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function MaintenancePage() {
  const settings = await getSiteSettings();
  const lang = "fr";

  const title =
    lang === "fr" ? settings.maintenanceTitle_fr : settings.maintenanceTitle_ar;
  const message =
    lang === "fr"
      ? settings.maintenanceMessage_fr
      : settings.maintenanceMessage_ar;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 to-slate-800"
      dir={lang as "ltr" | "rtl"}
    >
      <div className="text-center max-w-md">
        {settings.maintenanceImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={settings.maintenanceImage}
            alt="Maintenance"
            className="w-32 h-32 mx-auto mb-6 object-cover rounded-lg"
          />
        )}

        {!settings.maintenanceImage && (
          <div className="w-32 h-32 mx-auto mb-6 bg-slate-700 rounded-lg flex items-center justify-center text-6xl">
            🔧
          </div>
        )}

        <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>

        <p className="text-lg text-slate-300 mb-6">{message}</p>

        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Nous travaillons pour améliorer votre expérience
        </div>

        {settings.email && (
          <p className="mt-8 text-xs text-slate-500">
            Besoin d'aide ? Contactez-nous à{" "}
            <a href={`mailto:${settings.email}`} className="text-emerald-400 hover:underline">
              {settings.email}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}