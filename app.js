const issueTypes = [
  "客户需求识别不足",
  "产品价值转化不足",
  "版本价格推荐不清",
  "顾虑异议承接不足",
  "竞品对比引导不足",
  "下一步推进锁定不足",
];

const secondaryIssueMap = {
  客户需求识别不足:
    "主要集中在预算、购车用途和决策人没有问透，顾问较快进入报价或邀约，导致后续到店理由不够明确。",
  产品价值转化不足:
    "顾问讲了配置和参数，但没有结合客户通勤、家庭出行或用车成本，把卖点转成客户能感知的实际收益。",
  版本价格推荐不清:
    "客户问版本、落地价和金融方案时，顾问没有给出清晰推荐路径，客户难以判断哪个版本最适合自己。",
  顾虑异议承接不足:
    "客户表达价格、质量或对比顾虑后，顾问更多是简单回应，没有先接住担忧再给出解释和替代方案。",
  竞品对比引导不足:
    "客户提到竞品或网上评价时，顾问没有建立结构化对比，缺少围绕配置、空间、权益和使用成本的取舍说明。",
  下一步推进锁定不足:
    "沟通结束前没有锁定明确到店时间、复访动作或责任人，客户热度容易在下一步推进中流失。",
};

const scopeBaseline = {
  leads: 357,
  pflow: 71,
  trial: 41,
  order: 7,
  leadToVisitRate: 0.199,
  visitToTrialRate: 0.57,
  driveToOrderRate: 0.173,
  orderAchievement: 0.35,
  shortCallRate: 0.37,
};

const stores = [
  {
    id: "s01",
    name: "上海安吉荣威",
    area: "华东一区",
    district: "沪苏小区",
    stage: "邀约阶段",
    mainIssue: "线索到店不足",
    priority: "P1",
    priorityRank: 1,
    problemType: "双断点门店",
    abnormalMetrics: ["线索到店率低", "30s以下线索占比高", "试驾订单率低"],
    impactOrders: 18,
    impact: "预计影响 18 单",
    leads: 420,
    pflow: 64,
    trial: 36,
    order: 4,
    orderTarget: 24,
    shortCallRate: 0.46,
    leadToVisitRate: 0.152,
    driveToOrderRate: 0.111,
    baseline: scopeBaseline,
    channelShortCall: [
      {
        channel: "网销平台",
        rate: 0.54,
        leads: 168,
        children: [
          { channel: "懂车帝", rate: 0.58, leads: 72 },
          { channel: "汽车之家", rate: 0.52, leads: 61 },
          { channel: "易车", rate: 0.48, leads: 35 },
        ],
      },
      {
        channel: "经销商新媒体",
        rate: 0.47,
        leads: 126,
        children: [
          { channel: "门店抖音", rate: 0.51, leads: 54 },
          { channel: "门店直播", rate: 0.45, leads: 43 },
          { channel: "私域投放", rate: 0.4, leads: 29 },
        ],
      },
      {
        channel: "官方新媒体",
        rate: 0.39,
        leads: 82,
        children: [
          { channel: "品牌小程序", rate: 0.42, leads: 38 },
          { channel: "官方抖音", rate: 0.37, leads: 28 },
          { channel: "微信广告", rate: 0.31, leads: 16 },
        ],
      },
      {
        channel: "官网及电商",
        rate: 0.31,
        leads: 44,
        children: [
          { channel: "官网留资", rate: 0.34, leads: 20 },
          { channel: "电商活动", rate: 0.29, leads: 16 },
          { channel: "400线索", rate: 0.25, leads: 8 },
        ],
      },
    ],
  },
  {
    id: "s02",
    name: "广州白云荣威",
    area: "华南一区",
    district: "粤中小区",
    stage: "转化阶段",
    mainIssue: "试驾订单转化不足",
    priority: "P2",
    priorityRank: 2,
    problemType: "转化断点门店",
    abnormalMetrics: ["试驾订单率低"],
    impactOrders: 15,
    impact: "预计影响 15 单",
    leads: 366,
    pflow: 92,
    trial: 58,
    order: 7,
    orderTarget: 22,
    shortCallRate: 0.32,
    leadToVisitRate: 0.251,
    driveToOrderRate: 0.121,
    baseline: scopeBaseline,
    channelShortCall: [
      { channel: "网销平台", rate: 0.38, leads: 132 },
      { channel: "经销商新媒体", rate: 0.33, leads: 115 },
      { channel: "媒介投放", rate: 0.29, leads: 76 },
      { channel: "官网及电商", rate: 0.21, leads: 43 },
    ],
  },
  {
    id: "s03",
    name: "成都锦江荣威",
    area: "西南一区",
    district: "川渝小区",
    stage: "邀约阶段",
    mainIssue: "30s 以下通话偏高",
    priority: "P2",
    priorityRank: 2,
    problemType: "邀约断点门店",
    abnormalMetrics: ["线索到店率低", "30s以下线索占比高"],
    impactOrders: 13,
    impact: "预计影响 13 单",
    leads: 318,
    pflow: 49,
    trial: 31,
    order: 6,
    orderTarget: 18,
    shortCallRate: 0.51,
    leadToVisitRate: 0.154,
    driveToOrderRate: 0.194,
    baseline: scopeBaseline,
    channelShortCall: [
      { channel: "网销平台", rate: 0.58, leads: 118 },
      { channel: "官方新媒体", rate: 0.52, leads: 86 },
      { channel: "经销商新媒体", rate: 0.45, leads: 74 },
      { channel: "官网及电商", rate: 0.36, leads: 40 },
    ],
  },
  {
    id: "s04",
    name: "南京江宁荣威",
    area: "华东一区",
    district: "苏皖小区",
    stage: "转化阶段",
    mainIssue: "试驾后推进锁定不足",
    priority: "P2",
    priorityRank: 2,
    problemType: "转化断点门店",
    abnormalMetrics: ["试驾订单率低"],
    impactOrders: 11,
    impact: "预计影响 11 单",
    leads: 294,
    pflow: 78,
    trial: 45,
    order: 6,
    orderTarget: 16,
    shortCallRate: 0.28,
    leadToVisitRate: 0.265,
    driveToOrderRate: 0.133,
    baseline: scopeBaseline,
    channelShortCall: [
      { channel: "经销商新媒体", rate: 0.34, leads: 102 },
      { channel: "网销平台", rate: 0.29, leads: 96 },
      { channel: "官方新媒体", rate: 0.24, leads: 55 },
      { channel: "媒介投放", rate: 0.2, leads: 41 },
    ],
  },
  {
    id: "s05",
    name: "深圳龙岗荣威",
    area: "华南一区",
    district: "深莞小区",
    stage: "邀约阶段",
    mainIssue: "客户需求识别不足",
    priority: "P3",
    priorityRank: 3,
    problemType: "单项预警门店",
    abnormalMetrics: ["30s以下线索占比高"],
    impactOrders: 9,
    impact: "预计影响 9 单",
    leads: 286,
    pflow: 54,
    trial: 29,
    order: 7,
    orderTarget: 14,
    shortCallRate: 0.41,
    leadToVisitRate: 0.189,
    driveToOrderRate: 0.241,
    baseline: {
      ...scopeBaseline,
      leadToVisitRate: 0.18,
    },
    channelShortCall: [
      { channel: "网销平台", rate: 0.48, leads: 108 },
      { channel: "经销商新媒体", rate: 0.42, leads: 91 },
      { channel: "官方新媒体", rate: 0.35, leads: 52 },
      { channel: "官网及电商", rate: 0.27, leads: 35 },
    ],
  },
];

const detailRecords = [
  {
    storeId: "s01",
    scenario: "ip_call",
    advisor: "顾问A",
    customer: "客户 1048",
    time: "2026-05-18 10:24",
    primaryIssue: "客户需求识别不足",
    issueTags: ["客户需求识别不足", "下一步推进锁定不足"],
    evidence:
      "客户提到预算和家用需求后，顾问直接介绍优惠和现车，没有追问用途、周期和决策人，也没有锁定到店时间。",
    suggestion: "先确认预算、用途、购车周期和决策人，再给到店理由和明确时间选项。",
  },
  {
    storeId: "s01",
    scenario: "ip_call",
    advisor: "顾问B",
    customer: "客户 1182",
    time: "2026-05-19 14:08",
    primaryIssue: "顾虑异议承接不足",
    issueTags: ["顾虑异议承接不足", "竞品对比引导不足"],
    evidence:
      "客户说正在看同级竞品并担心价格，顾问只回复可以到店谈，没有解释差异点，也没有承接价格顾虑。",
    suggestion: "先接住价格顾虑，再用空间、配置和用车成本建立对比逻辑。",
  },
  {
    storeId: "s01",
    scenario: "ip_call",
    advisor: "顾问A",
    customer: "客户 1275",
    time: "2026-05-20 16:42",
    primaryIssue: "产品价值转化不足",
    issueTags: ["产品价值转化不足", "版本价格推荐不清"],
    evidence:
      "顾问连续讲参数和配置，但没有结合客户通勤、家庭出行场景解释实际好处。",
    suggestion: "把参数翻译成客户收益，例如通勤成本、乘坐舒适性和家庭使用便利性。",
  },
  {
    storeId: "s02",
    scenario: "test_drive",
    advisor: "顾问C",
    customer: "客户 2091",
    time: "2026-05-17 11:30",
    primaryIssue: "下一步推进锁定不足",
    issueTags: ["下一步推进锁定不足", "版本价格推荐不清"],
    evidence:
      "试驾结束后客户询问落地价，顾问只说后面再发方案，没有现场推进配置选择和订车动作。",
    suggestion: "试驾后立即确认意向版本，给出两套价格方案，并锁定下一步订车或复访时间。",
  },
  {
    storeId: "s02",
    scenario: "test_drive",
    advisor: "顾问D",
    customer: "客户 2140",
    time: "2026-05-21 15:12",
    primaryIssue: "产品价值转化不足",
    issueTags: ["产品价值转化不足", "顾虑异议承接不足"],
    evidence:
      "客户反馈试驾动力还可以但担心油耗，顾问没有结合试驾体验解释能耗和使用成本。",
    suggestion: "把试驾感受和日常用车成本连起来讲，降低客户对后续使用成本的担心。",
  },
  {
    storeId: "s03",
    scenario: "ip_call",
    advisor: "顾问E",
    customer: "客户 3016",
    time: "2026-05-16 09:18",
    primaryIssue: "版本价格推荐不清",
    issueTags: ["版本价格推荐不清"],
    evidence:
      "客户问低配和中配差异，顾问只说配置不一样，没有结合客户预算给出推荐版本。",
    suggestion: "用客户预算和核心需求判断推荐版本，并解释多花的钱换来什么价值。",
  },
  {
    storeId: "s04",
    scenario: "test_drive",
    advisor: "顾问F",
    customer: "客户 4019",
    time: "2026-05-22 13:35",
    primaryIssue: "竞品对比引导不足",
    issueTags: ["竞品对比引导不足", "下一步推进锁定不足"],
    evidence:
      "客户提到另一品牌优惠更大，顾问没有建立清晰对比，只强调本店可以再申请价格。",
    suggestion: "围绕配置、空间、售后和金融方案做结构化对比，再推进客户确认取舍。",
  },
  {
    storeId: "s05",
    scenario: "ip_call",
    advisor: "顾问G",
    customer: "客户 5093",
    time: "2026-05-23 17:20",
    primaryIssue: "客户需求识别不足",
    issueTags: ["客户需求识别不足", "产品价值转化不足"],
    evidence:
      "顾问没有询问客户是否置换和家庭成员用车情况，直接介绍活动和车型卖点。",
    suggestion: "先用 3 个问题识别客户画像，再选择对应卖点和邀约理由。",
  },
];

const state = {
  selectedStoreId: stores[0].id,
  selectedStage: "线索",
  selectedMetric: "30s 以下线索占比",
  globalIssueFilter: "all",
  detailIssue: "all",
  advisorFilter: "all",
  expandedChannel: null,
};

const formatter = new Intl.NumberFormat("zh-CN");
const percent = (value) => `${(value * 100).toFixed(1)}%`;
const timeProgress = 0.42;
const impactFormulaText =
  "预计影响订单 = 异常环节补齐到均值后的理论订单差额，Demo 阶段为样例测算，仅用于排序和优先级判断，不作为销量承诺。";
const stageMetricMap = {
  线索: "30s 以下线索占比",
  到店: "线索到店率",
  试驾: "试驾订单率",
  订单: "试驾订单率",
};

function storeMatchesGlobalIssue(store) {
  if (state.globalIssueFilter === "all") return true;
  return detailRecords.some(
    (record) => record.storeId === store.id && record.issueTags.includes(state.globalIssueFilter),
  );
}

function visibleStores() {
  const area = document.querySelector("#areaFilter")?.value || "all";
  return stores.filter((store) => (area === "all" || store.area === area) && storeMatchesGlobalIssue(store));
}

function sortedStores(sourceStores = visibleStores()) {
  return sourceStores.slice().sort((a, b) => {
    if (a.priorityRank !== b.priorityRank) return a.priorityRank - b.priorityRank;
    if (a.abnormalMetrics.length !== b.abnormalMetrics.length) {
      return b.abnormalMetrics.length - a.abnormalMetrics.length;
    }
    return b.impactOrders - a.impactOrders;
  });
}

function ensureSelectedStoreVisible() {
  const scopedStores = sortedStores();
  if (!scopedStores.length) return;
  if (!scopedStores.some((store) => store.id === state.selectedStoreId)) {
    state.selectedStoreId = scopedStores[0].id;
    state.detailIssue = "all";
    state.advisorFilter = "all";
    state.expandedChannel = null;
  }
}

function summaryMetrics() {
  const scopedStores = visibleStores();
  const total = scopedStores.reduce(
    (acc, store) => {
      acc.leads += store.leads;
      acc.pflow += store.pflow;
      acc.trial += store.trial;
      acc.order += store.order;
      acc.orderTarget += store.orderTarget;
      acc.impactOrders += store.impactOrders;
      acc.problemStores += store.priorityRank <= 2 ? 1 : 0;
      store.abnormalMetrics.forEach((metric) => {
        acc.metricCounts.set(metric, (acc.metricCounts.get(metric) || 0) + 1);
      });
      return acc;
    },
    {
      leads: 0,
      pflow: 0,
      trial: 0,
      order: 0,
      orderTarget: 0,
      impactOrders: 0,
      problemStores: 0,
      metricCounts: new Map(),
    },
  );
  const topMetric = Array.from(total.metricCounts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || "暂无明显异常";
  const topStore = sortedStores(scopedStores)[0] || null;
  return { ...total, storeCount: scopedStores.length, topMetric, topStore };
}

function areaAverages(store = currentStore()) {
  return store.baseline || scopeBaseline;
}

function currentStore() {
  return stores.find((store) => store.id === state.selectedStoreId) || stores[0];
}

function currentScenario() {
  return state.selectedMetric === "试驾订单率" ? "test_drive" : "ip_call";
}

function currentDiagnosisType() {
  if (state.selectedMetric === "30s 以下线索占比") return "channel_short_call";
  if (state.selectedMetric === "试驾订单率") return "test_drive";
  return "ip_call";
}

function filteredDetails() {
  const scenario = currentScenario();
  return detailRecords.filter((record) => {
    const matchesStore = record.storeId === state.selectedStoreId;
    const matchesScenario = record.scenario === scenario;
    const matchesIssue =
      state.detailIssue === "all" || record.issueTags.includes(state.detailIssue);
    const matchesAdvisor =
      state.advisorFilter === "all" || record.advisor === state.advisorFilter;
    return matchesStore && matchesScenario && matchesIssue && matchesAdvisor;
  });
}

function allScenarioDetails() {
  const scenario = currentScenario();
  return detailRecords.filter(
    (record) => record.storeId === state.selectedStoreId && record.scenario === scenario,
  );
}

function renderIssueOptions() {
  const issueFilter = document.querySelector("#issueFilter");
  issueFilter.innerHTML = `<option value="all">全部问题</option>`;
  issueTypes.forEach((issue) => {
    const option = document.createElement("option");
    option.value = issue;
    option.textContent = issue;
    issueFilter.appendChild(option);
  });
  issueFilter.value = state.globalIssueFilter;
}

function renderFunnel() {
  const summary = summaryMetrics();
  const selectedAreaAverage = scopeBaseline;
  const leadToVisitRate = summary.leads ? summary.pflow / summary.leads : 0;
  const visitToTrialRate = summary.pflow ? summary.trial / summary.pflow : 0;
  const driveToOrderRate = summary.trial ? summary.order / summary.trial : 0;
  const orderAchievement = summary.orderTarget ? summary.order / summary.orderTarget : 0;
  const steps = [
    {
      label: "下发线索",
      value: summary.leads,
      rate: `单店线索 ${formatter.format(Math.round(summary.leads / Math.max(summary.storeCount, 1)))}`,
      avg: `均值/店 ${formatter.format(Math.round(selectedAreaAverage.leads))}`,
    },
    {
      label: "首触到店",
      value: summary.pflow,
      rate: `线索到店率 ${percent(leadToVisitRate)}`,
      avg: `均值 ${percent(selectedAreaAverage.leadToVisitRate)}`,
      warn: leadToVisitRate < selectedAreaAverage.leadToVisitRate,
    },
    {
      label: "首触试驾",
      value: summary.trial,
      rate: `到店试驾率 ${percent(visitToTrialRate)}`,
      avg: `均值 ${percent(selectedAreaAverage.visitToTrialRate)}`,
      warn: visitToTrialRate < selectedAreaAverage.visitToTrialRate,
    },
    {
      label: "首触订单",
      value: summary.order,
      rate: `试驾订单率 ${percent(driveToOrderRate)}`,
      target: `目标达成率 ${percent(orderAchievement)}`,
      avg: `均值达成 ${percent(selectedAreaAverage.orderAchievement)}`,
      danger: orderAchievement < timeProgress,
    },
  ];

  document.querySelector("#funnel").innerHTML = steps
    .map(
      (step, index) => `
        <div class="funnel-step ${step.warn ? "warning" : ""}">
          <div class="step-title-line"><span>${step.label}</span><strong>${formatter.format(step.value)}</strong></div>
          ${step.target ? `<div class="step-target ${step.danger ? "danger" : ""}">${step.target}</div>` : ""}
          <div class="step-rate">${step.rate}</div>
          <div class="step-avg">${step.avg}</div>
        </div>
      `,
    )
    .join("");
}

function renderStoreRows() {
  const rows = sortedStores()
    .map((store) => {
      return `
        <tr class="${store.id === state.selectedStoreId ? "active" : ""}" data-store-id="${store.id}">
          <td><strong>${store.name}</strong><span class="muted">${store.area} / ${store.district}</span></td>
          <td><span class="priority ${store.priority.toLowerCase()}">${store.priority}</span></td>
          <td>${store.problemType}</td>
          <td><div class="metric-tags">${store.abnormalMetrics.map((metric) => `<span>${metric}</span>`).join("")}</div></td>
          <td>${percent(store.leadToVisitRate)}</td>
          <td>${percent(store.shortCallRate)}</td>
          <td>${percent(store.driveToOrderRate)}</td>
          <td><span class="impact-cell" title="${impactFormulaText}">${store.impact}</span></td>
          <td><button class="primary-button" data-store-id="${store.id}" type="button">查看诊断</button></td>
        </tr>
      `;
    })
    .join("");

  document.querySelector("#storeRows").innerHTML =
    rows || `<tr><td colspan="9" class="empty-row">当前筛选下暂无命中门店，请调整区域或问题类型。</td></tr>`;
}

function renderGlobalConclusion() {
  const summary = summaryMetrics();
  const issueScope = state.globalIssueFilter === "all" ? "全部问题" : state.globalIssueFilter;
  if (!summary.storeCount || !summary.topStore) {
    document.querySelector("#headlineConclusion").textContent = `当前范围暂无${issueScope}命中门店`;
    document.querySelector("#headlineAction").textContent = "调整筛选后查看优先门店";
    document.querySelector("#headlineText").textContent =
      "当前筛选范围没有可展示的样例门店，建议切换区域或问题类型后继续诊断。";
    return;
  }
  document.querySelector("#headlineConclusion").textContent = `当前最严重问题：${summary.topMetric}`;
  document.querySelector("#headlineAction").textContent = `${summary.topStore.name}：优先查看${summary.topStore.stage}`;
  document.querySelector("#headlineText").textContent =
    `当前范围为${issueScope}，共 ${summary.storeCount} 家门店，P1/P2 问题门店 ${summary.problemStores} 家，预计影响 ${summary.impactOrders} 单。最突出问题是${summary.topMetric}，优先处理 ${summary.topStore.name}。`;
}

function impactBasis(store) {
  const metrics = store.abnormalMetrics.join(" + ");
  return `${metrics}，按均值补齐估算影响 ${store.impactOrders} 单`;
}

function renderStoreDigest() {
  const store = currentStore();
  document.querySelector("#selectedStoreName").textContent = store.name;

  document.querySelector("#storeDigest").innerHTML = `
    <div class="digest-item"><span>问题优先级</span><strong>${store.priority}</strong></div>
    <div class="digest-item"><span>门店问题类型</span><strong>${store.problemType}</strong></div>
    <div class="digest-item"><span>影响规模</span><strong>${store.impact}</strong></div>
    <div class="digest-item digest-wide"><span>测算依据</span><strong>${impactBasis(store)}</strong></div>
  `;
}

function renderStageTabs() {
  const store = currentStore();
  const avg = areaAverages(store);
  const stages = [
    { label: "线索", value: formatter.format(store.leads), helper: "下发线索", avg: `均值/店 ${formatter.format(Math.round(avg.leads))}` },
    { label: "到店", value: formatter.format(store.pflow), helper: "首触到店", avg: `均值/店 ${formatter.format(Math.round(avg.pflow))}` },
    { label: "试驾", value: formatter.format(store.trial), helper: "首触试驾", avg: `均值/店 ${formatter.format(Math.round(avg.trial))}` },
    { label: "订单", value: formatter.format(store.order), helper: "首触订单", avg: `均值/店 ${formatter.format(Math.round(avg.order))}` },
  ];

  document.querySelector("#stageTabs").innerHTML = stages
    .map(
      (stage) => `
        <button class="tab-button ${stage.label === state.selectedStage ? "active" : ""}"
          data-stage="${stage.label}" type="button">
          <div class="tab-title-line"><span>${stage.helper}</span><strong>${stage.value}</strong></div>
          <span>${stage.avg}</span>
        </button>
      `,
    )
    .join("");
}

function renderMetricTabs() {
  const store = currentStore();
  const avg = areaAverages(store);
  const metrics = [
    {
      label: "30s 以下线索占比",
      value: percent(store.shortCallRate),
      helper: "点击查看分渠道短通话",
      avg: `均值 ${percent(avg.shortCallRate)}`,
    },
    {
      label: "线索到店率",
      value: percent(store.leadToVisitRate),
      helper: "点击查看 IP 电话问题",
      avg: `均值 ${percent(avg.leadToVisitRate)}`,
    },
    {
      label: "试驾订单率",
      value: percent(store.driveToOrderRate),
      helper: "点击查看试驾接待问题",
      avg: `均值 ${percent(avg.driveToOrderRate)}`,
    },
  ];

  document.querySelector("#metricTabs").innerHTML = metrics
    .map(
      (metric) => `
        <button class="tab-button ${metric.label === state.selectedMetric ? "active" : ""}"
          data-metric="${metric.label}" type="button">
          <span>${metric.helper}</span>
          <div class="tab-title-line"><strong>${metric.label}</strong><em>${metric.value}</em></div>
          <span>${metric.avg}</span>
        </button>
      `,
    )
    .join("");
}

function issueStats(records) {
  const counts = Object.fromEntries(issueTypes.map((issue) => [issue, 0]));
  records.forEach((record) => {
    record.issueTags.forEach((issue) => {
      counts[issue] += 1;
    });
  });
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0) || 1;
  return issueTypes.map((issue) => ({
    issue,
    count: counts[issue],
    pct: counts[issue] / total,
  }));
}

function secondarySummary(issue, count) {
  if (!count) return "当前样例明细中暂未发现该类问题，后续接入真实文本后自动生成概括。";
  return secondaryIssueMap[issue] || "后续接入真实文本后，将按二级标签自动总结该类问题的主要表现。";
}

function renderChannelChart() {
  const store = currentStore();
  const channels = store.channelShortCall.slice().sort((a, b) => b.rate - a.rate);
  document.querySelector(".issue-layout").classList.add("single-column");
  document.querySelector("#advisorCard").hidden = true;
  document.querySelector("#diagnosisTitle").textContent = "分渠道 30s 以下线索占比";
  document.querySelector("#diagnosisSub").textContent =
    "该指标用于定位短通话主要来自哪些渠道，不直接联动 IP 电话邀约问题。";
  document.querySelector("#issueChart").innerHTML = channels
    .map(
      (item) => `
        <div class="issue-row channel-row">
          <div class="issue-name channel-name" title="${item.channel}">
            <button class="expand-button ${state.expandedChannel === item.channel ? "open" : ""}" data-channel="${item.channel}" type="button">▸</button>
            <span>${item.channel}</span>
          </div>
          <div>
            <div class="bar-track"><div class="bar" style="width: ${Math.max(item.rate * 100, 8)}%"></div></div>
            <div class="issue-subtags">线索 ${item.leads} 条 / 短通话占比 ${percent(item.rate)}</div>
            ${
              state.expandedChannel === item.channel
                ? `<div class="subchannel-list">${item.children
                    .map(
                      (child) => `
                        <div class="subchannel-row">
                          <span>${child.channel}</span>
                          <div class="subchannel-track"><div style="width: ${Math.max(child.rate * 100, 8)}%"></div></div>
                          <strong>${percent(child.rate)}</strong>
                          <em>${child.leads}条</em>
                        </div>
                      `,
                    )
                    .join("")}</div>`
                : ""
            }
          </div>
          <div class="issue-pct"><strong>${percent(item.rate)}</strong><span>${item.leads}条</span></div>
        </div>
      `,
    )
    .join("");

  document.querySelector("#advisorList").innerHTML = "";
}

function renderIssueChart() {
  if (currentDiagnosisType() === "channel_short_call") {
    renderChannelChart();
    return;
  }
  document.querySelector(".issue-layout").classList.remove("single-column");
  document.querySelector("#advisorCard").hidden = false;
  const scenario = currentScenario();
  const scenarioName = scenario === "ip_call" ? "IP 电话邀约问题" : "试驾接待问题";
  document.querySelector("#diagnosisTitle").textContent = scenarioName;
  document.querySelector("#diagnosisSub").textContent =
    scenario === "ip_call"
      ? "来源为 IP 电话文本，按 6 类问题展示分布、顾问和证据。"
      : "来源为试驾录音文本，按同一套 6 类问题展示分布、顾问和证据。";

  const stats = issueStats(allScenarioDetails());
  document.querySelector("#issueChart").innerHTML = stats
    .map(
      (item) => `
        <div class="issue-row ${item.issue === state.detailIssue ? "active" : ""}" data-issue="${item.issue}">
          <div class="issue-name" title="${item.issue}">${item.issue}</div>
          <div>
            <div class="bar-track"><div class="bar" style="width: ${Math.max(item.pct * 100, item.count ? 8 : 0)}%"></div></div>
            <div class="issue-subtags">${secondarySummary(item.issue, item.count)}</div>
          </div>
          <div class="issue-pct"><strong>${item.count}</strong><span>${item.count ? percent(item.pct) : "0"}</span></div>
        </div>
      `,
    )
    .join("");
}

function renderAdvisorList() {
  if (currentDiagnosisType() === "channel_short_call") {
    return;
  }
  const records = filteredDetails();
  const advisorMap = new Map();
  records.forEach((record) => {
    const current = advisorMap.get(record.advisor) || {
      advisor: record.advisor,
      count: 0,
      customers: new Set(),
      issues: new Map(),
    };
    current.count += 1;
    current.customers.add(record.customer);
    current.issues.set(record.primaryIssue, (current.issues.get(record.primaryIssue) || 0) + 1);
    advisorMap.set(record.advisor, current);
  });

  const advisors = Array.from(advisorMap.values()).sort((a, b) => b.count - a.count);
  const maxCount = Math.max(...advisors.map((advisor) => advisor.count), 1);
  document.querySelector("#advisorList").innerHTML =
    advisors
      .map((advisor) => {
        const topIssue = Array.from(advisor.issues.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
        const width = Math.max((advisor.count / maxCount) * 100, 8);
        return `
          <div class="advisor-item">
            <div class="advisor-main">
              <div class="advisor-name">${advisor.advisor}</div>
              <div class="advisor-meta">主要问题：${topIssue}｜涉及客户：${advisor.customers.size}</div>
              <div class="advisor-bar-track"><div class="advisor-bar" style="width: ${width}%"></div></div>
            </div>
            <button class="advisor-count" data-advisor="${advisor.advisor}" type="button">${advisor.count} 条</button>
          </div>
        `;
      })
      .join("") || `<div class="muted">当前筛选下暂无顾问明细</div>`;
}

function channelActions(store) {
  return store.channelShortCall
    .slice()
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 3)
    .map((channel) => ({
      issue: `${channel.channel}短通话偏高`,
      owner: "门店经理 / 网销主管",
      suggestion: `优先抽查${channel.channel}短通话线索话术，确认线索承接是否过快结束、需求是否未展开、邀约理由是否不足。`,
      evidenceCount: channel.leads,
      evidenceLabel: `${channel.leads} 条线索`,
    }));
}

function diagnosisActions() {
  const store = currentStore();
  if (currentDiagnosisType() === "channel_short_call") {
    return channelActions(store);
  }
  const records = allScenarioDetails().filter(
    (record) => state.detailIssue === "all" || record.issueTags.includes(state.detailIssue),
  );
  const issueMap = new Map();
  records.forEach((record) => {
    const key = record.primaryIssue;
    const current = issueMap.get(key) || {
      issue: key,
      owner: currentDiagnosisType() === "test_drive" ? "销售经理 / 试驾顾问" : "门店经理 / 邀约顾问",
      suggestions: new Map(),
      evidenceCount: 0,
    };
    current.evidenceCount += 1;
    current.suggestions.set(record.suggestion, (current.suggestions.get(record.suggestion) || 0) + 1);
    issueMap.set(key, current);
  });
  return Array.from(issueMap.values())
    .sort((a, b) => b.evidenceCount - a.evidenceCount)
    .slice(0, 4)
    .map((item) => {
      const suggestion = Array.from(item.suggestions.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || "复盘相关明细证据并统一顾问动作。";
      return {
        issue: item.issue,
        owner: item.owner,
        suggestion,
        evidenceCount: item.evidenceCount,
        evidenceLabel: `${item.evidenceCount} 条证据`,
      };
    });
}

function renderActionList() {
  const actions = diagnosisActions();
  const typeName =
    currentDiagnosisType() === "channel_short_call"
      ? "渠道短通话"
      : currentDiagnosisType() === "test_drive"
        ? "试驾接待"
        : "IP 电话邀约";
  document.querySelector("#actionSummary").textContent = `${currentStore().name}｜${typeName}整改动作归纳`;
  document.querySelector("#actionCount").textContent = `${actions.length} 条动作`;
  document.querySelector("#actionList").innerHTML =
    actions
      .map(
        (action) => `
          <article class="action-item">
            <div>
              <span class="action-issue">${action.issue}</span>
              <strong>${action.owner}</strong>
            </div>
            <p>${action.suggestion}</p>
            <em>${action.evidenceLabel}</em>
          </article>
        `,
      )
      .join("") || `<div class="empty-action">当前筛选下暂无可汇总动作。</div>`;
}

function renderEmptyDiagnosis() {
  document.querySelector("#selectedStoreName").textContent = "暂无命中门店";
  document.querySelector("#storeDigest").innerHTML = `
    <div class="digest-item digest-wide"><span>当前状态</span><strong>当前区域和问题类型筛选下暂无门店命中，请调整筛选条件。</strong></div>
  `;
  document.querySelector("#stageTabs").innerHTML = "";
  document.querySelector("#metricTabs").innerHTML = "";
  document.querySelector("#diagnosisTitle").textContent = "暂无问题诊断";
  document.querySelector("#diagnosisSub").textContent = "当前筛选下没有可展示的诊断对象。";
  document.querySelector("#issueChart").innerHTML = "";
  document.querySelector("#advisorCard").hidden = true;
  document.querySelector("#actionSummary").textContent = "当前筛选下暂无门店级整改动作。";
  document.querySelector("#actionCount").textContent = "0 条动作";
  document.querySelector("#actionList").innerHTML = `<div class="empty-action">调整筛选后查看整改清单。</div>`;
  document.querySelector(".detail-panel").hidden = true;
}

function renderDetails() {
  if (currentDiagnosisType() === "channel_short_call") {
    document.querySelector(".detail-panel").hidden = true;
    return;
  }
  document.querySelector(".detail-panel").hidden = false;
  const records = filteredDetails();
  document.querySelector("#detailCount").textContent = `${records.length} 条明细`;
  document.querySelector("#detailList").innerHTML =
    records
      .map(
        (record) => `
          <article class="detail-card">
            <div>
              <h3>${record.advisor}</h3>
              <div class="detail-meta">${record.customer}<br />${record.time}<br />${record.scenario === "ip_call" ? "IP 电话" : "试驾接待"}</div>
            </div>
            <div>
              <p class="evidence">${record.evidence}</p>
              <div class="tag-list">
                ${record.issueTags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </div>
            <div class="detail-suggestion">
              <strong>建议动作</strong><br />
              ${record.suggestion}
            </div>
          </article>
        `,
      )
      .join("") || `<div class="detail-card"><div class="muted">当前筛选下暂无明细证据</div></div>`;
}

function renderAll() {
  validateDemoData();
  ensureSelectedStoreVisible();
  renderIssueOptions();
  renderStoreRows();
  renderFunnel();
  renderGlobalConclusion();
  if (!visibleStores().length) {
    renderEmptyDiagnosis();
    return;
  }
  renderStoreDigest();
  renderStageTabs();
  renderMetricTabs();
  renderIssueChart();
  renderAdvisorList();
  renderActionList();
  renderDetails();
}

function validateDemoData() {
  const rules = [
    { tag: "线索到店率低", field: "leadToVisitRate", baseline: "leadToVisitRate", direction: "below" },
    { tag: "30s以下线索占比高", field: "shortCallRate", baseline: "shortCallRate", direction: "above" },
    { tag: "试驾订单率低", field: "driveToOrderRate", baseline: "driveToOrderRate", direction: "below" },
  ];
  const conflicts = stores.flatMap((store) => {
    const baseline = areaAverages(store);
    return rules
      .filter((rule) => store.abnormalMetrics.includes(rule.tag))
      .filter((rule) =>
        rule.direction === "below"
          ? store[rule.field] >= baseline[rule.baseline]
          : store[rule.field] <= baseline[rule.baseline],
      )
      .map((rule) => `${store.name} 的「${rule.tag}」与均值对比不一致`);
  });
  if (conflicts.length) {
    console.warn("Demo 数据存在业务逻辑冲突：", conflicts);
  }
}

document.addEventListener("click", (event) => {
  const storeTarget = event.target.closest("[data-store-id]");
  if (storeTarget) {
    state.selectedStoreId = storeTarget.dataset.storeId;
    state.detailIssue = "all";
    state.advisorFilter = "all";
    state.expandedChannel = null;
    renderAll();
    return;
  }

  const stageTarget = event.target.closest("[data-stage]");
  if (stageTarget) {
    state.selectedStage = stageTarget.dataset.stage;
    state.selectedMetric = stageMetricMap[state.selectedStage] || state.selectedMetric;
    state.detailIssue = "all";
    state.advisorFilter = "all";
    state.expandedChannel = null;
    renderAll();
    return;
  }

  const metricTarget = event.target.closest("[data-metric]");
  if (metricTarget) {
    state.selectedMetric = metricTarget.dataset.metric;
    state.detailIssue = "all";
    state.advisorFilter = "all";
    state.expandedChannel = null;
    renderAll();
    return;
  }

  const channelTarget = event.target.closest("[data-channel]");
  if (channelTarget) {
    const channel = channelTarget.dataset.channel;
    state.expandedChannel = state.expandedChannel === channel ? null : channel;
    renderIssueChart();
    renderActionList();
    renderDetails();
    return;
  }

  const issueTarget = event.target.closest("[data-issue]");
  if (issueTarget) {
    state.detailIssue = issueTarget.dataset.issue;
    state.advisorFilter = "all";
    renderIssueChart();
    renderAdvisorList();
    renderActionList();
    renderDetails();
    return;
  }

  const advisorTarget = event.target.closest("[data-advisor]");
  if (advisorTarget) {
    state.advisorFilter = advisorTarget.dataset.advisor;
    renderAdvisorList();
    renderDetails();
  }
});

document.querySelector("#issueFilter").addEventListener("change", (event) => {
  state.globalIssueFilter = event.target.value;
  ensureSelectedStoreVisible();
  state.detailIssue = "all";
  state.advisorFilter = "all";
  state.expandedChannel = null;
  renderAll();
});

document.querySelector("#areaFilter").addEventListener("change", (event) => {
  const area = event.target.value;
  const candidate = stores.find((store) => area === "all" || store.area === area);
  if (candidate) {
    state.selectedStoreId = candidate.id;
    ensureSelectedStoreVisible();
    state.detailIssue = "all";
    state.advisorFilter = "all";
    renderAll();
  }
});

document.querySelector("#resetIssueButton").addEventListener("click", () => {
  state.detailIssue = "all";
  state.advisorFilter = "all";
  renderIssueChart();
  renderAdvisorList();
  renderActionList();
  renderDetails();
});

renderAll();
