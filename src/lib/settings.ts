import { db, ensureDatabase } from "@/db";
import { siteSettings } from "@/db/schema";
import { eq } from "drizzle-orm";

export type SiteSettings = {
  logoUrl: string;
  siteName_fr: string;
  siteName_ar: string;
  tagline_fr: string;
  tagline_ar: string;
  banner_fr: string;
  banner_ar: string;
  navHome_fr: string;
  navHome_ar: string;
  navAbout_fr: string;
  navAbout_ar: string;
  navDirectory_fr: string;
  navDirectory_ar: string;
  navNews_fr: string;
  navNews_ar: string;
  navRegister_fr: string;
  navRegister_ar: string;
  navContact_fr: string;
  navContact_ar: string;
  aboutTitle_fr: string;
  aboutTitle_ar: string;
  aboutSubtitle_fr: string;
  aboutSubtitle_ar: string;
  aboutIntro_fr: string;
  aboutIntro_ar: string;
  aboutWhoTitle_fr: string;
  aboutWhoTitle_ar: string;
  aboutWhoText_fr: string;
  aboutWhoText_ar: string;
  directoryTitle_fr: string;
  directoryTitle_ar: string;
  directorySubtitle_fr: string;
  directorySubtitle_ar: string;
  newsTitle_fr: string;
  newsTitle_ar: string;
  newsSubtitle_fr: string;
  newsSubtitle_ar: string;
  registerTitle_fr: string;
  registerTitle_ar: string;
  registerSubtitle_fr: string;
  registerSubtitle_ar: string;
  registerInfoText_fr: string;
  registerInfoText_ar: string;
  formLinksTitle_fr: string;
  formLinksTitle_ar: string;
  formLinksText_fr: string;
  formLinksText_ar: string;
  formLinks: string;
  contactTitle_fr: string;
  contactTitle_ar: string;
  contactSubtitle_fr: string;
  contactSubtitle_ar: string;
  heroTitle_fr: string;
  heroTitle_ar: string;
  heroSubtitle_fr: string;
  heroSubtitle_ar: string;
  heroImage: string;
  homeMissionsTitle_fr: string;
  homeMissionsTitle_ar: string;
  homeMissionsSubtitle_fr: string;
  homeMissionsSubtitle_ar: string;
  homeMissionsText_fr: string;
  homeMissionsText_ar: string;
  coveredProfessionsTitle_fr: string;
  coveredProfessionsTitle_ar: string;
  coveredProfessionsText_fr: string;
  coveredProfessionsText_ar: string;
  aboutImage: string;
  footerAbout_fr: string;
  footerAbout_ar: string;
  address_fr: string;
  address_ar: string;
  phone: string;
  email: string;
  hours_fr: string;
  hours_ar: string;
  maintenanceMode: "off" | "on";
  maintenanceTitle_fr: string;
  maintenanceTitle_ar: string;
  maintenanceMessage_fr: string;
  maintenanceMessage_ar: string;
  maintenanceImage: string;
  disabledPages: string;
};

export const DEFAULT_SETTINGS: SiteSettings = {
  logoUrl: "",
  siteName_fr: "Ordre National des Professions de Santé",
  siteName_ar: "الهيئة الوطنية للمهن الصحية",
  tagline_fr: "RÉPUBLIQUE ISLAMIQUE DE MAURITANIE",
  tagline_ar: "الجمهورية الإسلامية الموريتانية",
  banner_fr: "République Islamique de Mauritanie — Honneur • Fraternité • Justice",
  banner_ar: "الجمهورية الإسلامية الموريتانية — شرف • إخاء • عدل",
  navHome_fr: "Accueil",
  navHome_ar: "الرئيسية",
  navAbout_fr: "L'Ordre",
  navAbout_ar: "الهيئة",
  navDirectory_fr: "Annuaire",
  navDirectory_ar: "الدليل",
  navNews_fr: "Actualités",
  navNews_ar: "الأخبار",
  navRegister_fr: "Inscription",
  navRegister_ar: "التسجيل",
  navContact_fr: "Contact",
  navContact_ar: "اتصل بنا",
  aboutTitle_fr: "L'Ordre National des Professions de Santé",
  aboutTitle_ar: "الهيئة الوطنية للمهن الصحية",
  aboutSubtitle_fr: "Institution de droit public au service de la santé des Mauritaniens.",
  aboutSubtitle_ar: "مؤسسة قانون عام في خدمة صحة الموريتانيين.",
  aboutIntro_fr: "La structure du corps se compose de plusieurs organes. Le corps national est organisé par le décret 83/88 et comprend le Bureau national, le Conseil d'arbitrage et les coordinations régionales. Le corps dispose également d'un dispositif éthique qui encadre la conduite de ses membres.",
  aboutIntro_ar: "تتكون هيكلة السلك من عدة هيئات. السلك الوطني منظم بموجب المرسوم 83/88 ويضم المكتب الوطني، مجلس التحكيم، والمنسقيات الجهوية. كما يتوفر السلك على منظومة أخلاقية تحدد وتضبط سلوك منتسبيه.",
  aboutWhoTitle_fr: "Qui sommes-nous ?",
  aboutWhoTitle_ar: "من نحن؟",
  aboutWhoText_fr: "L'Ordre National des Professions de Santé (ONPS) de Mauritanie est une institution dotée de la personnalité morale, regroupant obligatoirement l'ensemble des professionnels de santé habilités à exercer sur le territoire national.\n\nPlacé sous la tutelle du Ministère de la Santé, l'Ordre est chargé de veiller au maintien des principes de moralité, de probité et de dévouement indispensables à l'exercice des professions de santé.\n\nL'inscription au tableau de l'Ordre est une condition légale obligatoire pour l'exercice de toute profession de santé en Mauritanie.",
  aboutWhoText_ar: "الهيئة الوطنية للمهن الصحية في موريتانيا مؤسسة تتمتع بالشخصية المعنوية، تضم وجوباً جميع المهنيين الصحيين المرخص لهم بالممارسة على التراب الوطني.\n\nتخضع الهيئة لوصاية وزارة الصحة، وهي مكلفة بالسهر على الحفاظ على مبادئ الأخلاق والنزاهة والتفاني الضرورية لممارسة المهن الصحية.\n\nالتسجيل في جدول الهيئة شرط قانوني إلزامي لممارسة أي مهنة صحية في موريتانيا.",
  directoryTitle_fr: "Annuaire des professionnels",
  directoryTitle_ar: "دليل المهنيين الصحيين",
  directorySubtitle_fr: "Vérifiez l'inscription au tableau de l'Ordre d'un professionnel de santé exerçant en Mauritanie.",
  directorySubtitle_ar: "تحقق من تسجيل أي مهني صحي يمارس في موريتانيا في جدول الهيئة.",
  newsTitle_fr: "Actualités & communiqués",
  newsTitle_ar: "الأخبار والبلاغات",
  newsSubtitle_fr: "Suivez les annonces officielles, événements et décisions de l'Ordre.",
  newsSubtitle_ar: "تابع الإعلانات الرسمية وأنشطة وقرارات الهيئة.",
  registerTitle_fr: "Inscription au tableau de l'Ordre",
  registerTitle_ar: "التسجيل في جدول الهيئة",
  registerSubtitle_fr: "L'inscription au tableau est obligatoire pour exercer une profession de santé en Mauritanie. Déposez votre demande en ligne.",
  registerSubtitle_ar: "التسجيل في الجدول إلزامي لممارسة أي مهنة صحية في موريتانيا. قدم طلبك عبر الإنترنت.",
  registerInfoText_fr: "Le dépôt physique du dossier complet s'effectue au siège de l'Ordre à Nouakchott ou auprès du conseil régional de votre wilaya. Le délai moyen d'instruction est de 30 jours.",
  registerInfoText_ar: "يتم إيداع الملف الكامل في مقر الهيئة بنواكشوط أو لدى المجلس الجهوي لولايتك. متوسط مدة دراسة الملف 30 يوماً.",
  formLinksTitle_fr: "Formulaires de l'Ordre",
  formLinksTitle_ar: "استمارات الهيئة",
  formLinksText_fr: "Cliquez sur le formulaire correspondant pour déposer votre demande en ligne.",
  formLinksText_ar: "اضغط على الاستمارة المناسبة لإيداع طلبك عبر الإنترنت.",
  formLinks: "Demande d'inscription (Adhésion) | طلب التسجيل (الانخراط) | https://ee.kobotoolbox.org/x/edjwyxMh",
  contactTitle_fr: "Nous contacter",
  contactTitle_ar: "اتصل بنا",
  contactSubtitle_fr: "Une question sur l'inscription, la déontologie ou l'exercice professionnel ? Notre équipe vous répond.",
  contactSubtitle_ar: "سؤال حول التسجيل أو آداب المهنة أو الممارسة المهنية؟ فريقنا في خدمتك.",
  heroTitle_fr: "Ordre National des Professions de Santé",
  heroTitle_ar: "الهيئة الوطنية للمهن الصحية",
  heroSubtitle_fr: "Garantir l'éthique, la compétence et la déontologie des professionnels de santé au service de la population mauritanienne.",
  heroSubtitle_ar: "ضمان الأخلاقيات والكفاءة وآداب المهنة لدى العاملين في القطاع الصحي خدمةً للشعب الموريتاني.",
  heroImage: "https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  homeMissionsTitle_fr: "Nos missions",
  homeMissionsTitle_ar: "مهامنا",
  homeMissionsSubtitle_fr: "L'Ordre exerce des missions de service public au bénéfice des patients et des professionnels de santé.",
  homeMissionsSubtitle_ar: "تمارس الهيئة مهام المرفق العام لصالح المرضى والمهنيين الصحيين.",
  homeMissionsText_fr: "📜 | Tenue du tableau de l'Ordre | Inscription et suivi de tous les professionnels de santé autorisés à exercer sur le territoire national.\n⚖️ | Éthique & déontologie | Veiller au respect des codes de déontologie et statuer sur les manquements disciplinaires.\n🎓 | Formation continue | Promouvoir le développement professionnel continu et la qualité des soins.\n🤝 | Défense de la profession | Représenter et défendre les intérêts moraux et matériels des professions de santé.\n🏥 | Santé publique | Contribuer aux politiques nationales de santé et à la protection des populations.\n🌍 | Coopération internationale | Coopérer avec les ordres et institutions de santé régionaux et internationaux.",
  homeMissionsText_ar: "📜 | مسك جدول الهيئة | تسجيل ومتابعة جميع المهنيين الصحيين المرخص لهم بالممارسة على التراب الوطني.\n⚖️ | الأخلاقيات وآداب المهنة | السهر على احترام مدونات آداب المهنة والبت في الإخلالات التأديبية.\n🎓 | التكوين المستمر | تعزيز التطوير المهني المستمر وجودة الخدمات الصحية.\n🤝 | الدفاع عن المهنة | تمثيل المهن الصحية والدفاع عن مصالحها المعنوية والمادية.\n🏥 | الصحة العمومية | المساهمة في السياسات الوطنية للصحة وحماية السكان.\n🌍 | التعاون الدولي | التعاون مع الهيئات والمؤسسات الصحية الإقليمية والدولية.",
  coveredProfessionsTitle_fr: "Les professions actuellement couvertes par le corps professionnel sont les suivantes",
  coveredProfessionsTitle_ar: "المهن التي يشملها السلك حتى الآن",
  coveredProfessionsText_fr: "Section (A)\nProfesseurs techniques à tous les niveaux\nTechniciens supérieurs dans toutes les spécialités\nIngénieurs biomédicaux principaux\n\nSection (B)\nSages-femmes\n\nSection (C)\nInfirmiers à tous les niveaux\nTechniciens de la santé dans toutes les spécialités",
  coveredProfessionsText_ar: "الفئة (أ)\nالأساتذة الفنيون بجميع مستوياتهم\nالفنيون العاليون بجميع تخصصاتهم\nالمهندسون البيوطبيون الرئيسيون\n\nالفئة (ب)\nالقابلات\n\nالفئة (ج)\nالممرضون بجميع مستوياتهم\nالفنيون الصحيون بجميع تخصصاتهم",
  aboutImage: "https://images.pexels.com/photos/7648226/pexels-photo-7648226.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  footerAbout_fr: "L'Ordre National des Professions de Santé veille à la régulation, à l'éthique et à la déontologie des professions de santé en Mauritanie, au service de la protection de la santé publique.",
  footerAbout_ar: "تسهر الهيئة الوطنية للمهن الصحية على تنظيم المهن الصحية وأخلاقياتها وآدابها في موريتانيا، خدمةً لحماية الصحة العمومية.",
  address_fr: "Avenue Gamal Abdel Nasser, Nouakchott, Mauritanie",
  address_ar: "شارع جمال عبد الناصر، نواكشوط، موريتانيا",
  phone: "+222 45 25 00 00",
  email: "contact@onps.mr",
  hours_fr: "Dim – Jeu : 8h00 – 16h00",
  hours_ar: "الأحد – الخميس : 8:00 – 16:00",
  maintenanceMode: "off",
  maintenanceTitle_fr: "Site en maintenance",
  maintenanceTitle_ar: "الموقع قيد الصيانة",
  maintenanceMessage_fr: "Nous sommes actuellement en maintenance. Veuillez revenir bientôt.",
  maintenanceMessage_ar: "نحن حاليا قيد الصيانة. يرجى العودة قريبا.",
  maintenanceImage: "",
  disabledPages: "[]",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    await ensureDatabase();
    const [row] = await db
      .select()
      .from(siteSettings)
      .where(eq(siteSettings.key, "site"))
      .limit(1);
    if (!row) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(row.value) as Partial<SiteSettings>;
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function saveSiteSettings(value: Partial<SiteSettings>) {
  await ensureDatabase();
  const current = await getSiteSettings();
  const merged = { ...current, ...value };
  const json = JSON.stringify(merged);
  const [existing] = await db
    .select({ id: siteSettings.id })
    .from(siteSettings)
    .where(eq(siteSettings.key, "site"))
    .limit(1);
  if (existing) {
    await db
      .update(siteSettings)
      .set({ value: json, updatedAt: new Date() })
      .where(eq(siteSettings.key, "site"));
  } else {
    await db.insert(siteSettings).values({ key: "site", value: json });
  }
  return merged;
}

export async function isPageDisabled(pageName: string): Promise<boolean> {
  const settings = await getSiteSettings();
  try {
    const disabledPages = JSON.parse(settings.disabledPages) as string[];
    return disabledPages.includes(pageName);
  } catch {
    return false;
  }
}