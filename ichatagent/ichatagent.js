const characters = [
  {
    id: "crystal",
    name: "Crystal",
    handle: "@724-SEED",
    role: "Emotional companion",
    tagline: "温柔、克制、会接住你情绪的中文数字人。",
    description: "适合测试陪伴式对话、中文语气稳定性和边界感。她不会替你做决定，会把混乱的情绪拆成可以处理的小块。",
    opening: "亲爱的，我在。今天先别急着证明自己，慢慢说，哪里最累？",
    tags: ["中文", "情绪陪伴", "轻咨询"],
    tone: "温柔知性，短中句，偶尔一点东北式轻松感。",
    memory: "Keeps the room calm. Turns emotional noise into one small action.",
    boundaries: ["不替用户做决定", "不制造医疗或心理诊断", "先接住情绪，再拆动作"]
  },
  {
    id: "creator-scout",
    name: "Creator Scout",
    handle: "@DRAGON-SOURCING",
    role: "Opportunity scout",
    tagline: "把 creator 线索变成可判断、可复盘的 sourcing brief。",
    description: "用于 Dragon creator sourcing：先拆事实、推断和下一步证据，不把普通热闹当成商业机会。",
    opening: "给我一个账号、一个人或一个内容线索。我会先判断是否值得进入 Dragon sourcing。",
    tags: ["Dragon", "creator", "evidence-first"],
    tone: "短报告风格，事实和推断分开。",
    memory: "Looks for evidence quality, audience clarity, and commercial surface area.",
    boundaries: ["事实和推断分开", "不把热度当商业信号", "先要 3 个证据再推进"]
  },
  {
    id: "negotiation-coach",
    name: "Negotiation Coach",
    handle: "@FOUNDER-ROOM",
    role: "Negotiation coach",
    tagline: "把一次谈判拆成目标、筹码、风险和下一句。",
    description: "用于 founder / deal / relationship 场景，不替你承诺，只帮你看清边界和下一句话。",
    opening: "先给我对方那句话，或者你准备发出的那句话。我会拆目标、风险和更稳的下一句。",
    tags: ["谈判", "边界", "下一句"],
    tone: "冷静、直接、避免情绪化让步。",
    memory: "Protects the user's non-negotiables and converts pressure into options.",
    boundaries: ["不替用户承诺", "不做法律或投资结论", "先确认目标再给下一句"]
  },
  {
    id: "aria",
    name: "ARIA Unit-7",
    handle: "@SYSTEM-TRACE",
    role: "System diagnostic",
    tagline: "冷静的系统诊断角色，用来测试记忆和约束遵守。",
    description: "用于调试 agent 工作流：目标、状态、约束、下一步，全部变成可检查信号。",
    opening: "SYSTEM ONLINE. State the objective, constraint, and the next reversible action.",
    tags: ["debug", "memory", "workflow"],
    tone: "系统日志式，短句，先约束后动作。",
    memory: "Turns vague workflow state into objective, constraint, and next reversible action.",
    boundaries: ["不假设隐藏状态", "不跳过验收标准", "不执行不可逆动作"]
  }
];

let activeId = characters[0].id;
let conversations = Object.fromEntries(characters.map((character) => [character.id, [openingMessage(character)]]));

const characterList = document.querySelector("#characterList");
const activeAvatar = document.querySelector("#activeAvatar");
const activePortrait = document.querySelector("#activePortrait");
const activeHandle = document.querySelector("#activeHandle");
const activeName = document.querySelector("#activeName");
const activeDescription = document.querySelector("#activeDescription");
const tagRow = document.querySelector("#tagRow");
const messagesNode = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const draft = document.querySelector("#messageDraft");
const sendButton = document.querySelector("#sendButton");
const resetButton = document.querySelector("#resetChat");
const memoryName = document.querySelector("#memoryName");
const memoryRole = document.querySelector("#memoryRole");
const memoryTrace = document.querySelector("#memoryTrace");
const messageCount = document.querySelector("#messageCount");
const boundaryList = document.querySelector("#boundaryList");

function openingMessage(character) {
  return {
    id: `opening-${character.id}`,
    role: "assistant",
    content: character.opening
  };
}

function activeCharacter() {
  return characters.find((character) => character.id === activeId) || characters[0];
}

function initials(name) {
  return name.slice(0, 3);
}

function buildReply(character, message, history) {
  const clean = message.trim();
  const recentUserMessages = history.filter((item) => item.role === "user").slice(-3);
  const continuity =
    recentUserMessages.length > 0
      ? `我记得你前面提到过 ${recentUserMessages.map((item) => `“${item.content.slice(0, 18)}”`).join("、")}。`
      : "";

  if (character.id === "creator-scout") {
    return [
      continuity,
      `我先把这条线索拆开：${clean}`,
      "事实：目前只有你提供的描述，不能直接当作已验证信号。",
      "推断：如果这个对象有稳定内容资产、明确受众和可交易场景，就值得进 Dragon creator sourcing。",
      "下一步：补 3 个证据，分别是账号链接、近 30 天内容样本、可商业化场景。"
    ].filter(Boolean).join("\n");
  }

  if (character.id === "negotiation-coach") {
    return [
      continuity,
      `这句话背后的目标是：${clean}`,
      "先不要急着让步。你需要同时拿住三件事：你的不可退让项、对方真正想要的东西、你愿意交换但不愿白送的筹码。",
      "下一句可以这样说：我理解这个点，但我需要先确认我们是在优化结果，还是只是在转移成本。"
    ].filter(Boolean).join("\n");
  }

  if (character.id === "aria") {
    return [
      "SIGNAL RECEIVED.",
      `OBJECTIVE FRAGMENT: ${clean}`,
      continuity ? `MEMORY TRACE: ${continuity}` : "MEMORY TRACE: insufficient prior signal.",
      "NEXT REVERSIBLE ACTION: define success condition, then test one small interaction."
    ].join("\n");
  }

  return [
    continuity,
    `我听到了：${clean}`,
    "先把肩膀放下来一点。你现在不需要一次把所有事情都处理完，先选一个最小的动作就好。",
    "如果你愿意，我们可以从两个问题开始：今天最消耗你的是什么？有什么事情其实可以明天再说？"
  ].filter(Boolean).join("\n");
}

function appendText(parent, tagName, text, className) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  node.textContent = text;
  parent.appendChild(node);
  return node;
}

function renderCharacters() {
  characterList.replaceChildren();
  characters.forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `persona-card persona-${character.id}`;
    if (character.id === activeId) button.classList.add("active");
    button.addEventListener("click", () => {
      activeId = character.id;
      draft.value = "";
      sendButton.disabled = true;
      render();
    });

    const avatar = appendText(button, "span", initials(character.name), "persona-avatar");
    avatar.setAttribute("aria-hidden", "true");
    const body = document.createElement("div");
    appendText(body, "strong", character.name);
    appendText(body, "small", character.tagline);
    button.appendChild(body);
    characterList.appendChild(button);
  });
}

function renderHeader(character) {
  activeAvatar.textContent = initials(character.name);
  activePortrait.className = `portrait portrait-${character.id}`;
  activeHandle.textContent = character.handle;
  activeName.textContent = character.name;
  activeDescription.textContent = character.description;
  draft.placeholder = `Message ${character.name}...`;

  tagRow.replaceChildren();
  character.tags.forEach((tag) => appendText(tagRow, "span", tag));
  appendText(tagRow, "span", character.tone, "tone-chip");
}

function renderMessages(character) {
  messagesNode.replaceChildren();
  conversations[character.id].forEach((message) => {
    const article = document.createElement("article");
    article.className = `chat-bubble ${message.role}`;
    appendText(article, "span", message.role === "assistant" ? character.name : "Kenichi");
    appendText(article, "p", message.content);
    messagesNode.appendChild(article);
  });
  messagesNode.scrollTop = messagesNode.scrollHeight;
}

function renderMemory(character) {
  const history = conversations[character.id];
  const userMessages = history.filter((item) => item.role === "user");

  memoryName.textContent = character.name;
  memoryRole.textContent = character.role;
  messageCount.textContent = `${history.length} msg${history.length === 1 ? "" : "s"}`;
  memoryTrace.textContent =
    userMessages.length > 0
      ? `Latest user signal: ${userMessages[userMessages.length - 1].content.slice(0, 72)}`
      : character.memory;

  boundaryList.replaceChildren();
  character.boundaries.forEach((boundary) => appendText(boundaryList, "li", boundary));
}

function render() {
  const character = activeCharacter();
  renderCharacters();
  renderHeader(character);
  renderMessages(character);
  renderMemory(character);
}

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const clean = draft.value.trim();
  if (!clean) return;

  const character = activeCharacter();
  const history = conversations[character.id];
  history.push({
    id: `user-${Date.now()}`,
    role: "user",
    content: clean
  });
  history.push({
    id: `assistant-${Date.now()}`,
    role: "assistant",
    content: buildReply(character, clean, history)
  });

  draft.value = "";
  sendButton.disabled = true;
  renderMessages(character);
  renderMemory(character);
});

draft.addEventListener("input", () => {
  sendButton.disabled = draft.value.trim().length === 0;
});

resetButton.addEventListener("click", () => {
  const character = activeCharacter();
  conversations[character.id] = [openingMessage(character)];
  draft.value = "";
  sendButton.disabled = true;
  renderMessages(character);
  renderMemory(character);
});

render();
