const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = document.querySelectorAll(".reveal");

const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");

const zh = {
  brand_field: "轨道结构动力学",
  menu: "菜单",
  nav_about: "关于我",
  nav_education: "教育经历",
  nav_publications: "学术成果",
  nav_projects: "项目经历",
  nav_honors: "荣誉奖励",
  nav_services: "学术服务",
  selected_work: "代表成果",
  google_scholar: "谷歌学术",
  affiliation: "所在单位",
  csu: "中南大学",
  based_in: "所在城市",
  changsha: "中国长沙",
  sit: "上海应用技术大学",
  current_focus: "当前研究",
  civil_school: "土木工程学院",
  profile_phd: "在读博士生",
  portrait: "照片位置",
  profile_role: "轨道交通工程 · 中南大学",
  scholar_short: "学术主页",
  email: "邮箱",
  about_title: "关于我",
  about_lead: "我目前是中南大学土木工程学院的博士生，主要方向是铁路及城市轨道交通结构力学特性数值仿真、轨道减振降噪及相关试验研究、损伤识别监测。",
  about_contact: "欢迎随时给我发邮件，寻求合作。",
  research_exp_title: "铁路及城市轨道交通结构力学",
  research_exp_text: "面向铁路与城市轨道交通结构，开展力学特性数值仿真与响应分析。",
  research_modal_title: "轨道减振降噪与试验研究",
  research_modal_text: "研究轨道结构振动传递、动力响应及减振降噪，并开展相关模型与现场试验。",
  research_shm_title: "损伤识别与状态监测",
  research_shm_text: "基于结构响应与损伤敏感特征，开展轨道基础设施损伤识别和服役状态监测。",
  education_title: "教育经历",
  present: "至今",
  school_label: "学院",
  program_label: "专业",
  degree_label: "学历",
  advisor_label: "导师",
  to_add: "待补充",
  railway_engineering: "铁道工程",
  phd_candidate: "博士研究生",
  shanghai: "中国上海",
  rail_school: "轨道交通学院",
  advisor_zeng: "曾志平",
  advisor_li: "李培刚",
  master_engineering: "工学硕士",
  bachelor_engineering: "工学学士",
  publications_title: "学术成果",
  view_profile: "查看完整学术主页",
  pub_english: "英文论文",
  pub_chinese: "中文论文",
  pub_other: "专著、专利及其他",
  chinese_placeholder_title: "中文论文将在这里补充。",
  chinese_placeholder_text: "后续收到论文链接或 PDF 后，将按照与英文论文一致的详细格式整理。",
  other_placeholder_title: "专著、专利、标准及其他成果。",
  other_placeholder_text: "待获得可核实的资料后，将在此处补充完整记录。",
  projects_title: "项目经历",
  project_metro_test_title: "地铁运营线路减振测试",
  project_metro_test_text: "深圳地铁7号线、6号线，西安地铁4号线等运营线路减振测试。",
  project_taiping_title: "池黄高铁太平湖特大桥轨道结构监测",
  project_taiping_text: "中国安徽池黄高铁太平湖特大桥轨道结构监测。",
  project_crec_title: "中国中铁股份有限公司科技研究开发计划项目",
  project_crec_text: "项目编号：2022-重大-14。",
  project_gmdi_title: "不同应用场景下嵌入式轨道系统开发与关键设备研究",
  project_gmdi_text: "广州地铁设计研究院股份有限公司科技开发计划项目（KY-2022-121）。",
  project_laos_title: "“一带一路”中老铁路工程国际联合实验室",
  project_laos_text: "项目编号：21210750300。",
  project_maglev_title: "中低速磁浮梁力学性能试验",
  project_maglev_text: "中铁二十三局集团轨道交通工程有限公司科研项目。",
  project_self_sensing_title: "铁路工程混凝土结构自感知技术应用研究",
  project_self_sensing_text: "中国国家铁路集团有限公司重大科研项目（K2020G031）。",
  project_full_scale: "足尺试验",
  project_photo: "项目照片",
  project_impact_title: "嵌入式轨道落轴冲击试验",
  project_impact_text: "设计并分析足尺嵌入式轨道模型在完好、单杆失效和双杆失效工况下的冲击试验，研究振动传递、频率重分布及跨结构层的紧凑损伤敏感特征。",
  tag_impact: "冲击响应",
  tag_time_frequency: "时频分析",
  tag_damage: "损伤识别",
  ongoing: "进行中",
  project_modal_analysis: "模态分析",
  project_modal_title: "嵌入式轨道多参考模态识别",
  project_modal_text: "建立嵌入式轨道系统多参考模态识别与近频模态分离的试验分析流程。",
  tag_modal: "模态识别",
  tag_close_modes: "近频模态",
  tag_signal: "信号处理",
  in_progress: "正在进行",
  project_collab: "合作研究",
  project_sensing_title: "轨道部件传感与受力监测",
  project_sensing_text: "参与钢轨扣件反力与结构响应的传感研究，将部件级应变测量与实际轨道状态评估相结合。",
  tag_strain: "应变传感",
  tag_fastening: "扣件系统",
  tag_monitoring: "状态监测",
  honors_title: "荣誉与奖励",
  honor_scholarship_title: "学业奖学金",
  honor_csu_scholarship_text: "中南大学（奖学金金额：",
  honor_sit_scholarship_text: "上海应用技术大学（奖学金金额：",
  honor_internet_title: "第八届中国国际“互联网+”大学生创新创业大赛市级优胜奖",
  honor_internet_text: "2023年市级赛事获奖。",
  honor_student_title: "学生荣誉与表彰",
  honor_student_text: "优秀学生、优秀学生干部、优秀共产党员等荣誉证书。",
  honor_service_title: "志愿服务与公益实践",
  honor_service_text: "参加中国力学大会志愿服务、联合国儿童基金相关公益活动及其他社会实践。",
  services_title: "学术服务",
  service_affiliations_title: "专业组织",
  service_cces: "中国土木工程学会（CCES）会员",
  service_crs: "中国铁道学会（CRS）会员",
  service_asce: "美国土木工程师学会（ASCE）会员",
  service_bei: "Bridge Engineering Institute（BEI）会员",
  service_collab_title: "科研合作",
  service_collab_text: "围绕轨道传感、结构响应分析与状态监测，与试验和工程团队开展合作研究。",
  contact_title: "联系与合作",
  contact_text: "欢迎就联合培养、试验结构动力学、轨道监测及科研合作与我联系。",
  back_to_top: "返回顶部",
  contact_note: "学术联系：",
  footer_focus: "轨道结构 · 传感 · 动力学",
  footer_updated: "更新于 2026 年 11 月"
};

const defaultText = new Map();
document.querySelectorAll("[data-i18n]").forEach((element) => {
  if (!defaultText.has(element.dataset.i18n)) {
    defaultText.set(element.dataset.i18n, element.textContent.trim());
  }
});

const readStoredLanguage = () => {
  try {
    return localStorage.getItem("siteLanguage");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("siteLanguage", language);
  } catch {
    // Language preference is optional when browser storage is unavailable.
  }
};

const applyLanguage = (language) => {
  const useChinese = language === "zh";
  document.documentElement.lang = useChinese ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = useChinese ? (zh[key] ?? defaultText.get(key)) : defaultText.get(key);
  });
  document.title = useChinese ? "Ning Feng | 学术主页" : "Ning Feng | Academic Profile";
  languageLabel.textContent = useChinese ? "EN" : "中文";
  languageToggle.setAttribute("aria-label", useChinese ? "Switch to English" : "切换至中文");
  languageToggle.dataset.language = useChinese ? "zh" : "en";
  storeLanguage(useChinese ? "zh" : "en");
};

applyLanguage(readStoredLanguage() === "zh" ? "zh" : "en");

languageToggle?.addEventListener("click", () => {
  applyLanguage(languageToggle.dataset.language === "zh" ? "en" : "zh");
});

const publicationTabs = [...document.querySelectorAll("[data-publication-tab]")];
const publicationPanels = [...document.querySelectorAll("[data-publication-panel]")];

publicationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.publicationTab;
    publicationTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    publicationPanels.forEach((panel) => {
      const isActive = panel.dataset.publicationPanel === category;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px" },
  );

  revealItems.forEach((item, index) => {
    if (index < 6) item.style.transitionDelay = `${index * 70}ms`;
    revealObserver.observe(item);
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.toggleAttribute("aria-current", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -48%", threshold: 0 },
  );

  sections.forEach((section) => navObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
