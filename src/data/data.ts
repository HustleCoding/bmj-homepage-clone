import reportImg from "./../images/no_one_listening_report_screenshot.png";
import recoveryImg from "./../images/therecovery_promo.jpeg";
import researchImg from "./../images/covid_pfizer_vaccine_vial_PA-57612798.jpeg";
import newsImg from "./../images/group_weight_counselling_iStock-942265536.jpeg";
import researchImage from "./../images/facial_recognition_ai_iStock-1199708194.jpeg";
import commentImage from "./../images/OxyContin_opioid_spl_C0279987.jpeg";
import educationImage from "./../images/coronavirus_ward_team.jpeg";
import podcastImg from "./../images/recov_small.jpeg";
import podcastImage from "./../images/recovery_orrow_350.jpeg";

export const articlesData = [
  {
    id: 0,
    title:
      "Sickle cell disease: inquiry finds serious care failings and racism towards patients",
    description:
      "Patients with sickle cell disease attending hospital in England face substandard care and negative attitudes, with some exposed to blatant racism, an inquiry has found",
    articleType: "News",
    date: "Nov 16",
    img: reportImg,
    sign: "|",
  },
  {
    id: 1,
    title: "The Recovery—a podcast about action for sustainable healthcare",
    description:
      "A new podcast series explores ways to wind back medical excess and make health systems healthier in the long run",
    articleType: "Opinion",
    date: "Nov 16",
    img: recoveryImg,
    sign: "|",
  },
  {
    id: 2,
    title:
      "Covid-19: Researcher blows the whistle on data integrity issues in Pfizer’s vaccine trial",
    description:
      "Evidence from a whistleblower engaged in Pfizer’s pivotal covid-19 vaccine trial raises serious questions about data integrity and regulatory oversight",
    articleType: "Feature",
    date: "Nov 2",
    img: researchImg,
    sign: "|",
  },
];

export const rightSideArticles = [
  {
    id: 0,
    title: "Give people choice of treatment options for depression, says NICE",
    articleType: "News",
    date: "Nov 23",
    sign: "|",
  },
  {
    id: 1,
    title: "Cradle to grave general practice: the family doctor",
    articleType: "Careers",
    date: "Nov 23",
    sign: "|",
  },
  {
    id: 2,
    title: "Sixty seconds on . . . wine, chocolate, and coffee",
    articleType: "News",
    date: "Nov 22",
    sign: "|",
  },
  {
    id: 3,
    title:
      "Dudley trust fined £2.5m over deaths of two patients from infection",
    articleType: "News",
    date: "Nov 22",
    sign: "|",
  },
  {
    id: 4,
    title:
      "A record 100 000 people in the US died from overdoses in 12 months of the pandemic, says CDC",
    articleType: "News",
    date: "Nov 22",
    sign: "|",
  },
  {
    id: 5,
    title: "Covid-19: Austria enters lockdown as cases surge across Europe",
    articleType: "News",
    date: "Nov 19",
    sign: "|",
  },
  {
    id: 6,
    title: "Reverse cuts to children’s centres, peers urge government",
    articleType: "News",
    date: "Nov 19",
    sign: "|",
  },
];

export const LatestArticlesNewsData = [
  {
    title: "News",
    img: newsImg,
    description:
      "Health and Care Bill fails to tackle workforce problems and risks outsourcing to private providers, BMA warns",
  },
  {
    description: "Sixty seconds on . . . wine, chocolate, and coffee",
  },
  {
    description:
      "Covid-19: Austria enters lockdown as cases surge across Europe",
  },
  {
    description:
      "Covid-19: AstraZeneca says its antibody drug AZD7442 is effective for preventing and reducing severe illness",
  },
  {
    description:
      "Covid-19: Doctors will refuse to limit use of antiviral drug to unvaccinated patients, say ethicists",
  },
  {
    description:
      "Covid-19: Antimicrobial misuse in Americas sees drug resistant infections surge, says WHO",
  },
  {
    description: "Farah Jameel elected as chair of BMA’s England GP committee",
  },
];

export const LatestArticlesResearchData = [
  {
    title: "Research",
    img: researchImage,
    description:
      "Prescription opioid treatment and initiation of injection drug use and Care Bill fails to tackle workforce problems and risks outsourcing to private providers, BMA warns",
  },
  {
    description:
      "Sex differences in mortality among binational cohort of people with chronic kidney disease",
  },
  {
    description:
      "Effect of nutritionally modified infant formula on academic performance",
  },
  {
    description:
      "Exercise versus usual care after non-reconstructive breast cancer surgery",
  },
  {
    description:
      "Epinephrine before defibrillation in patients with shockable in-hospital cardiac arrest",
  },
  {
    description:
      "Use of whole genome sequencing to determine genetic basis of suspected mitochondrial disorders",
  },
  {
    description: "Mapping conflict of interests: scoping review",
  },
];

export const LatestArticlesCommentData = [
  {
    title: "Comment",
    img: commentImage,
    description:
      "Moving beyond tokenism in our approach to human rights in digital health",
  },
  {
    description:
      "Unless we address the inequity in global health, the world will not be prepared for the next pandemic",
  },
  {
    description: "Covid-19 caseload in the UK—assessments and mitigations",
  },
  {
    description:
      "Investing in public health is our best route to sustainable healthcare",
  },
  {
    description: "Should all babies have their genome sequenced at birth?",
  },
  {
    description:
      "Fat shaming is stopping doctors from helping overweight patients—here’s what medical students can do about it",
  },
  {
    description:
      "David Oliver: UK trained doctors, “part time” working, and ongoing commitment to the NHS",
  },
  {
    description: "How can we relieve current pressures on NHS hospitals?",
  },
];

export const LatestArticlesEducationData = [
  {
    title: "Education",
    img: educationImage,
    description:
      "Group programmes for weight loss may be more effective than one-to-one sessions",
  },
  {
    description:
      "What support do young people affected by adverse childhood experiences need?",
  },
  {
    description:
      "Is cerclage safe and effective in preventing preterm birth in women presenting early in pregnancy with cervical dilatation?",
  },
  {
    description:
      "Self-testing for HIV could increase diagnoses in the trans community",
  },
  {
    description: "Advances in systemic therapy for non-small cell lung cancer",
  },
  {
    description:
      "Obstructive sleep apnoea/hypopnoea syndrome and obesity hyperventilation syndrome in over 16s: summary of NICE guidance",
  },
];

export const PodcastData = [
  {
    description: "How doctors are betraying the Hippocratic oath",
    articleType: "Opinion",
    date: "Nov 16",
    sign: "|",
  },
  {
    description: "First, do no harm—the dangers of medical excess",
    date: "Nov 19",
  },
  {
    description: "What does sustainable healthcare mean?",
    date: "Nov 19",
  },
  {
    description:
      "Remembering the mission on healthcare’s path to decarbonisation",
    articleType: "Opinion",
    date: "Nov 19",
    sign: "|",
  },
];

export const PodcastDataLeft = [
  {
    title: "The Recovery—a podcast about action for sustainable healthcare",
    description:
      "Patients with sickle cell disease attending hospital in England face substandard care and negative attitudes, with some exposed to blatant racism, an inquiry has found",
    articleType: "News",
    date: "Nov 16",
    img: podcastImg,
    sign: "|",
  },
  {
    title: "Designing an ecological approach to health",
    description:
      "Gillian Orrow describes how we can cultivate personal, population, and planetary health",
    articleType: "News",
    date: "Nov 16",
    img: podcastImage,
    sign: "|",
  },
];
