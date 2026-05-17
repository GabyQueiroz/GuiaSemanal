const DATA = {
  week: "18 a 24 de maio de 2026",
  days: [
    {
      id: "seg",
      label: "Segunda",
      date: "18/05",
      title: "Inferior A",
      focus: "Quadriceps, posterior e gluteo",
      duration: "50-60 min",
      cardio: "8 min de esteira ou bike leve",
      core: "Prancha + dead bug",
      meals: {
        cafe: "Aveia com leite/iogurte + banana + pasta de amendoim",
        lanche1: "Iogurte + granola",
        almoco: "Arroz + feijao + frango + salada + azeite",
        pre: "Banana ou pao com queijo",
        jantar: "Omelete 2 ovos + batata/mandioca + legumes",
        extra: "Leite ou iogurte"
      },
      exercises: [
        ex("Esteira ou bike leve", "1", "8 min", "Confortavel", "Aquecimento; conseguir conversar.", "cardio"),
        ex("Leg press ou agachamento goblet", "3", "10-12", "Placa 1-2 ou halter 4-8 kg", "Joelhos acompanham a ponta dos pes; descer controlando.", "banco-halteres"),
        ex("Cadeira extensora", "3", "12", "Placa 1-2", "Suba em 1s, segure curto, desca em 2s. Nao trave o joelho com forca.", "cadeira-extensora"),
        ex("Cadeira flexora sentada", "3", "12", "Placa 1-2", "Quadril apoiado; puxe sem impulso e volte devagar.", "flexora-sentada"),
        ex("Elevacao pelvica no banco", "3", "12", "Peso corporal ou halter 4-8 kg", "Contraia gluteo no topo sem jogar na lombar.", "banco-halteres"),
        ex("Panturrilha em pe", "3", "15", "Peso corporal ou halteres 2-4 kg", "Subida completa, pausa curta no topo e descida lenta.", "banco-halteres"),
        ex("Prancha", "3", "20-40s", "Peso corporal", "Costelas para baixo; pare antes de perder postura.", "core"),
        ex("Dead bug", "3", "10 cada lado", "Peso corporal", "Lombar encostada no chao; devagar.", "core")
      ]
    },
    {
      id: "ter",
      label: "Terca",
      date: "19/05",
      title: "Superior A",
      focus: "Peito, costas, ombro e bracos",
      duration: "45-55 min",
      cardio: "5-8 min leve",
      core: "Prancha lateral",
      meals: {
        cafe: "Pao integral + ovos mexidos + fruta",
        lanche1: "Castanhas + fruta",
        almoco: "Macarrao + carne moida/frango + legumes",
        pre: "Iogurte ou vitamina",
        jantar: "Arroz + feijao + peixe/frango + salada",
        extra: "Queijo/cottage ou leite"
      },
      exercises: [
        ex("Chest press", "3", "10-12", "Placa 1-2", "Banco na altura do peito; empurre e volte sem bater os pesos.", "chest-press"),
        ex("Puxada alta na polia", "3", "10-12", "Placa 1-2", "Peito aberto; puxe os cotovelos para baixo.", "polia-alta"),
        ex("Remada baixa/cabo ou unilateral", "3", "10-12", "Placa 1-2 ou halter 4-6 kg", "Puxe o cotovelo para tras, sem encolher ombros.", "polia-alta"),
        ex("Desenvolvimento com halteres", "2-3", "10", "Halteres 2-4 kg", "Punhos neutros; subir sem arquear lombar.", "banco-halteres"),
        ex("Rosca biceps", "2", "12", "Halteres 2-4 kg", "Cotovelo parado ao lado do corpo; sem balancar.", "banco-halteres"),
        ex("Triceps na polia", "2", "12", "Placa 1", "Cotovelo parado; empurre ate estender com controle.", "polia-alta"),
        ex("Prancha lateral", "2", "20-30s cada lado", "Peso corporal", "Quadril alto e corpo alinhado; pode apoiar joelho.", "core")
      ]
    },
    {
      id: "qua",
      label: "Quarta",
      date: "20/05",
      title: "Cardio leve + mobilidade",
      focus: "Recuperacao ativa",
      duration: "30-45 min",
      cardio: "Esteira ou bike 25-35 min",
      core: "Mobilidade",
      meals: {
        cafe: "Vitamina: leite + banana + aveia + pasta de amendoim",
        lanche1: "Sanduiche pequeno",
        almoco: "Arroz + lentilha/feijao + ovos/frango + legumes",
        pre: "Fruta",
        jantar: "Sopa reforcada com frango + pao/torrada",
        extra: "Iogurte"
      },
      exercises: [
        ex("Esteira ou bike", "1", "25-35 min", "Leve/moderado", "Respiracao acelerada mas controlada; sem HIIT.", "bike-spinning"),
        ex("Mobilidade", "1", "5-8 min", "Leve", "Quadril, posterior, peito e costas; sem forcar dor.", "core")
      ]
    },
    {
      id: "qui",
      label: "Quinta",
      date: "21/05",
      title: "Inferior B",
      focus: "Gluteo, posterior e unilateral",
      duration: "50-60 min",
      cardio: "8 min de aquecimento",
      core: "Abdominal infra",
      meals: {
        cafe: "Tapioca ou pao + queijo + ovo + fruta",
        lanche1: "Iogurte + mel",
        almoco: "Arroz + feijao + carne/frango + legumes",
        pre: "Banana + aveia",
        jantar: "Macarrao ou batata + frango/atum + salada",
        extra: "Leite"
      },
      exercises: [
        ex("Afundo parado com halteres", "3", "8-10 cada perna", "Peso corporal ou 2-4 kg cada", "Tronco alto; segure apoio se precisar.", "banco-halteres"),
        ex("Stiff com halteres", "3", "10-12", "Halteres 4-6 kg cada", "Quadril vai para tras; coluna neutra.", "banco-halteres"),
        ex("Cadeira flexora sentada", "3", "12", "Placa 1-2", "Mesmo ajuste de segunda; controle a volta.", "flexora-sentada"),
        ex("Cadeira extensora", "2", "12", "Placa 1-2", "Controle total; use mais leve se estiver cansada.", "cadeira-extensora"),
        ex("Abdutora/adutora", "2-3", "12-15 cada", "Placa 1-2", "Postura firme; movimento sem impulso.", "abdutora-adutora"),
        ex("Elevacao pelvica", "3", "10-12", "Peso corporal ou halter 4-8 kg", "Contraia gluteo no topo.", "banco-halteres"),
        ex("Abdominal infra", "3", "10", "Peso corporal", "Desca as pernas so ate onde a lombar nao arqueia.", "core")
      ]
    },
    {
      id: "sex",
      label: "Sexta",
      date: "22/05",
      title: "Superior B",
      focus: "Costas, peito, ombros e bracos",
      duration: "45-55 min",
      cardio: "5-8 min leve",
      core: "Prancha",
      meals: {
        cafe: "Aveia/iogurte + fruta + castanhas",
        lanche1: "Pao com pasta de amendoim",
        almoco: "Arroz + feijao + frango/carne + salada",
        pre: "Iogurte ou fruta",
        jantar: "Omelete + arroz/batata + legumes",
        extra: "Iogurte/leite"
      },
      exercises: [
        ex("Supino com halteres ou chest press", "3", "10", "Halteres 2-4 kg ou placa 1-2", "Escapulas apoiadas; sem dor no ombro.", "chest-press"),
        ex("Puxada alta", "3", "10", "Placa 1-2", "Peito aberto; cotovelos descem.", "polia-alta"),
        ex("Remada unilateral no banco", "3", "10 cada lado", "Halter 4-6 kg", "Apoie mao e joelho; puxe cotovelo para o quadril.", "banco-halteres"),
        ex("Crucifixo inverso leve", "2", "12", "Halteres 1-3 kg", "Bem leve; abra com cotovelos suaves.", "banco-halteres"),
        ex("Elevacao lateral", "2", "12", "Halteres 1-3 kg", "Subir ate altura do ombro, sem impulso.", "banco-halteres"),
        ex("Triceps na polia", "2", "12", "Placa 1", "Cotovelo parado; controle.", "polia-alta"),
        ex("Rosca biceps", "2", "12", "Halteres 2-4 kg", "Sem balanco; controle a descida.", "banco-halteres"),
        ex("Prancha", "3", "30s", "Peso corporal", "Postura neutra; pare se a lombar cair.", "core")
      ]
    },
    {
      id: "sab",
      label: "Sabado",
      date: "23/05",
      title: "Opcional",
      focus: "Cardio leve ou caminhada",
      duration: "20-30 min",
      cardio: "Esteira, bike ou caminhada",
      core: "Alongamento leve",
      meals: {
        cafe: "Pao + ovos + fruta",
        lanche1: "Vitamina ou iogurte",
        almoco: "Prato livre equilibrado: proteina + carbo + legumes",
        pre: "Fruta se fizer cardio",
        jantar: "Jantar social sem pular proteina",
        extra: "Opcional"
      },
      exercises: [
        ex("Cardio leve opcional", "1", "20-30 min", "Leve", "So se estiver com energia; descanso tambem conta.", "bike-spinning")
      ]
    },
    {
      id: "dom",
      label: "Domingo",
      date: "24/05",
      title: "Descanso",
      focus: "Recuperar e preparar a semana",
      duration: "-",
      cardio: "Livre",
      core: "Livre",
      meals: {
        cafe: "Cafe completo: ovos/queijo + pao + fruta",
        lanche1: "Castanhas/fruta",
        almoco: "Almoco completo",
        pre: "Opcional",
        jantar: "Jantar leve com proteina",
        extra: "Leite/iogurte"
      },
      exercises: []
    }
  ],
  equipment: [
    equip("banco-halteres", "Banco, halteres e barra", "assets/equipamentos/banco-halteres.png", ["Supino com halteres", "Remada unilateral", "Elevacao pelvica", "Stiff", "Goblet squat"], "Ajuste o banco firme. Para supino, costas apoiadas; para remada, uma mao e um joelho apoiados.", ["Comece com carga baixa.", "Mantenha coluna neutra e abdomen firme.", "Controle a descida por 2 segundos.", "Pare se sentir dor na lombar ou ombro."], "2-4 kg para bracos/ombros; 4-8 kg para pernas/gluteo."),
    equip("flexora-sentada", "Cadeira flexora sentada", "assets/equipamentos/flexora-sentada.png", ["Flexora sentada"], "O rolo fica perto do tornozelo, nao no meio da panturrilha. Quadril bem apoiado.", ["Prenda a perna com o apoio superior.", "Puxe os calcanhares para baixo e para tras.", "Segure 1 segundo no final.", "Volte devagar sem deixar o peso bater."], "Placa 1-2."),
    equip("cadeira-extensora", "Cadeira extensora", "assets/equipamentos/cadeira-extensora.png", ["Extensora"], "Sente com costas apoiadas. O rolo fica na frente da canela, logo acima do peito do pe.", ["Suba ate quase estender os joelhos.", "Contraia a coxa por um instante.", "Desca devagar.", "Nao chute o peso nem trave o joelho com forca."], "Placa 1-2."),
    equip("chest-press", "Chest press", "assets/equipamentos/chest-press.png", ["Chest press", "Supino guiado"], "Ajuste o banco para as pegadas ficarem na altura do meio do peito. Pes apoiados no chao.", ["Encoste as costas no banco.", "Empurre as alcas para frente.", "Pare antes de travar os cotovelos com forca.", "Volte controlando."], "Placa 1-2."),
    equip("polia-alta", "Polia alta", "assets/equipamentos/polia-alta.png", ["Puxada alta", "Triceps na polia", "Remada com cabo"], "Para puxada alta, sente de frente para a maquina e prenda as coxas sob o apoio.", ["Abra o peito e relaxe os ombros.", "Puxe os cotovelos para baixo.", "Leve a barra perto do alto do peito.", "Suba controlando."], "Placa 1-2 para puxada; placa 1 para triceps."),
    equip("abdutora-adutora", "Abdutora/adutora", "assets/equipamentos/abdutora-adutora.png", ["Abdutora", "Adutora"], "Sente com costas apoiadas e ajuste as almofadas nas laterais ou interno das pernas.", ["Use amplitude confortavel.", "Abra ou feche sem impulso.", "Segure curto no fim do movimento.", "Volte devagar."], "Placa 1-2."),
    equip("bike-spinning", "Bike spinning", "assets/equipamentos/bike-spinning.png", ["Aquecimento", "Cardio leve"], "Ajuste o banco na altura aproximada do quadril; joelho levemente dobrado no ponto mais baixo.", ["Comece com resistencia baixa.", "Use 5-8 min para aquecer.", "Use 25-35 min no cardio.", "Evite sprint por enquanto."], "Resistencia leve/moderada."),
    equip("maquinas-geral", "Esteira e visao geral", "assets/equipamentos/maquinas-geral.png", ["Esteira", "Aquecimento", "Cardio"], "Comece devagar e aumente aos poucos. Postura alta e passadas confortaveis.", ["Aquecimento: 5-8 min.", "Cardio: 25-35 min caminhando rapido.", "Segure no apoio so se precisar.", "Inclinacao 0-3% no inicio."], "Ritmo em que voce consegue falar frases curtas.")
  ]
};

function ex(name, sets, reps, weight, tip, equipment) {
  return { name, sets, reps, weight, tip, equipment };
}

function equip(id, title, image, tags, setup, steps, weight) {
  return { id, title, image, tags, setup, steps, weight };
}

const STORAGE_KEY = "guia-semanal-registros-v2";

const state = {
  day: "todos",
  equipment: "todos",
  records: loadRecords()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function init() {
  bindTabs();
  renderFilters();
  renderAll();
  bindRecordActions();
  $("#resetChecks").addEventListener("click", () => {
    if (!confirm("Limpar todos os registros salvos desta semana?")) return;
    state.records = blankRecords();
    saveRecords();
    renderAll();
  });
}

function bindTabs() {
  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".tab").forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");
      $$(".section").forEach((section) => section.classList.remove("is-active"));
      $(`#${button.dataset.section}`).classList.add("is-active");
    });
  });
}

function renderFilters() {
  const dayButtons = [{ id: "todos", label: "Todos" }, ...DATA.days.map(({ id, label }) => ({ id, label }))];
  ["weekFilter", "trainingFilter", "mealFilter", "logFilter"].forEach((target) => {
    if (!$(`#${target}`)) return;
    $(`#${target}`).innerHTML = dayButtons.map(dayChip).join("");
    $(`#${target}`).addEventListener("click", onDayFilter);
  });

  const tools = [{ id: "todos", label: "Todos" }, ...DATA.equipment.map(({ id, title }) => ({ id, label: shortEquipmentLabel(title) }))];
  $("#equipmentFilter").innerHTML = tools.map(toolChip).join("");
  $("#equipmentFilter").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    state.equipment = button.dataset.tool;
    renderEquipment();
    refreshChips();
  });
}

function dayChip(day) {
  return `<button class="chip ${day.id === state.day ? "is-active" : ""}" data-day="${day.id}">${day.label}</button>`;
}

function toolChip(tool) {
  return `<button class="chip ${tool.id === state.equipment ? "is-active" : ""}" data-tool="${tool.id}">${tool.label}</button>`;
}

function onDayFilter(event) {
  const button = event.target.closest("button");
  if (!button) return;
  state.day = button.dataset.day;
  renderAll();
}

function selectedDays() {
  return state.day === "todos" ? DATA.days : DATA.days.filter((day) => day.id === state.day);
}

function renderAll() {
  renderWeek();
  renderTraining();
  renderMeals();
  renderEquipment();
  renderBio();
  renderExerciseLog();
  renderMealNotes();
  renderProgress();
  refreshChips();
}

function refreshChips() {
  $$("[data-day]").forEach((button) => button.classList.toggle("is-active", button.dataset.day === state.day));
  $$("[data-tool]").forEach((button) => button.classList.toggle("is-active", button.dataset.tool === state.equipment));
}

function renderWeek() {
  $("#weekGrid").innerHTML = selectedDays().map((day) => `
    <article class="week-card">
      <header>
        <span class="date">${day.date} - ${day.label}</span>
        <span class="tag">${day.duration}</span>
      </header>
      <h3>${day.title}</h3>
      <p>${day.focus}</p>
      <p><strong>Cardio:</strong> ${day.cardio}</p>
      <p><strong>Core:</strong> ${day.core}</p>
    </article>
  `).join("");
}

function renderTraining() {
  $("#trainingList").innerHTML = selectedDays().map((day) => {
    const exercises = day.exercises.length
      ? day.exercises.map((exercise, index) => exerciseTemplate(day, exercise, index)).join("")
      : `<div class="exercise"><span></span><div><h4>Descanso</h4><p>Recupere, coma bem e prepare a proxima semana.</p></div></div>`;
    return `
      <article class="training-day">
        <header>
          <div>
            <span class="date">${day.date} - ${day.label}</span>
            <h3>${day.title}</h3>
          </div>
          <span class="tag">${day.duration}</span>
        </header>
        <div class="exercise-list">${exercises}</div>
      </article>
    `;
  }).join("");

  $$(".exercise-check").forEach((input) => {
    input.addEventListener("change", () => {
      const record = ensureExerciseRecord(input.dataset.day, input.dataset.exercise);
      record.done = input.checked;
      saveRecords();
      renderProgress();
      renderExerciseLog();
    });
  });
}

function exerciseTemplate(day, exercise, index) {
  const id = `${day.id}-${index}-${slug(exercise.name)}`;
  const record = ensureExerciseRecord(day.id, id);
  return `
    <div class="exercise">
      <input class="exercise-check" id="${id}" data-day="${day.id}" data-exercise="${id}" type="checkbox" ${record.done ? "checked" : ""} aria-label="Marcar ${exercise.name}">
      <div>
        <h4>${exercise.name}</h4>
        <p>${exercise.tip}</p>
        <div class="exercise-meta">
          <span class="mini">${exercise.sets} series</span>
          <span class="mini">${exercise.reps}</span>
        </div>
      </div>
      <div class="weight-box"><strong>Peso sugerido:</strong><br>${exercise.weight}</div>
    </div>
  `;
}

function renderMeals() {
  $("#mealGrid").innerHTML = selectedDays().map((day) => `
    <article class="meal-card">
      <span class="date">${day.date} - ${day.label}</span>
      <h3>${day.title}</h3>
      ${mealBlock("Cafe da manha", day.meals.cafe)}
      ${mealBlock("Lanche", day.meals.lanche1)}
      ${mealBlock("Almoco", day.meals.almoco)}
      ${mealBlock("Pre treino", day.meals.pre)}
      ${mealBlock("Jantar", day.meals.jantar)}
      ${mealBlock("Extra", day.meals.extra)}
      <p><strong>Meta:</strong> 70-85 g de proteina/dia.</p>
    </article>
  `).join("");
}

function mealBlock(title, text) {
  return `<div class="meal-block"><strong>${title}</strong><span>${text}</span></div>`;
}

function renderEquipment() {
  const items = state.equipment === "todos"
    ? DATA.equipment
    : DATA.equipment.filter((item) => item.id === state.equipment);
  $("#equipmentGrid").innerHTML = items.map((item) => `
    <article class="equipment-card">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="equipment-content">
        <h3>${item.title}</h3>
        <div class="equipment-tags">${item.tags.map((tag) => `<span class="mini">${tag}</span>`).join("")}</div>
        <p>${item.setup}</p>
        <ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        <div class="weight-box"><strong>Inicial:</strong> ${item.weight}</div>
      </div>
    </article>
  `).join("");
}

function renderProgress() {
  const ids = DATA.days.flatMap((day) => day.exercises.map((exercise, index) => ({ dayId: day.id, id: `${day.id}-${index}-${slug(exercise.name)}` })));
  const done = ids.filter(({ dayId, id }) => ensureExerciseRecord(dayId, id).done).length;
  const total = ids.length || 1;
  const pct = Math.round((done / total) * 100);
  $("#progressText").textContent = `${pct}%`;
  $("#progressBar").style.width = `${pct}%`;

  const summary = DATA.days.map((day) => {
    const dayIds = day.exercises.map((exercise, index) => `${day.id}-${index}-${slug(exercise.name)}`);
    const dayDone = dayIds.filter((id) => ensureExerciseRecord(day.id, id).done).length;
    return `<div class="summary-row"><span>${day.label}</span><strong>${dayDone}/${dayIds.length}</strong></div>`;
  }).join("");
  $("#checkSummary").innerHTML = summary;
}

function renderBio() {
  $$("[data-bio]").forEach((input) => {
    const key = input.dataset.bio;
    input.value = state.records.bio[key] || "";
  });
}

function renderExerciseLog() {
  const target = $("#exerciseLog");
  if (!target) return;
  target.innerHTML = selectedDays().map((day) => {
    if (!day.exercises.length) {
      return `<div class="log-day"><h4>${day.date} - ${day.label}</h4><p>Descanso. Use o campo de alimentacao para anotar como foi o dia.</p></div>`;
    }
    const rows = day.exercises.map((exercise, index) => {
      const exerciseId = `${day.id}-${index}-${slug(exercise.name)}`;
      const record = ensureExerciseRecord(day.id, exerciseId);
      return `
        <div class="log-row">
          <label class="check-cell">
            <input type="checkbox" data-log="done" data-day-id="${day.id}" data-exercise-id="${exerciseId}" ${record.done ? "checked" : ""}>
            <span>${escapeHtml(exercise.name)}</span>
          </label>
          <label>Carga feita<input data-log="actualWeight" data-day-id="${day.id}" data-exercise-id="${exerciseId}" value="${escapeAttr(record.actualWeight)}" placeholder="${escapeAttr(exercise.weight)}"></label>
          <label>Series<input data-log="actualSets" data-day-id="${day.id}" data-exercise-id="${exerciseId}" value="${escapeAttr(record.actualSets)}" placeholder="${escapeAttr(exercise.sets)}"></label>
          <label>Reps/tempo<input data-log="actualReps" data-day-id="${day.id}" data-exercise-id="${exerciseId}" value="${escapeAttr(record.actualReps)}" placeholder="${escapeAttr(exercise.reps)}"></label>
          <label>Esforco<input data-log="effort" data-day-id="${day.id}" data-exercise-id="${exerciseId}" value="${escapeAttr(record.effort)}" placeholder="1-10"></label>
          <label class="notes-cell">Notas<textarea data-log="notes" data-day-id="${day.id}" data-exercise-id="${exerciseId}" rows="2" placeholder="Dor, ajuste, facilidade...">${escapeHtml(record.notes)}</textarea></label>
        </div>
      `;
    }).join("");
    return `<div class="log-day"><h4>${day.date} - ${day.label}: ${day.title}</h4>${rows}</div>`;
  }).join("");
}

function renderMealNotes() {
  const target = $("#mealNotes");
  if (!target) return;
  target.innerHTML = selectedDays().map((day) => {
    const meal = ensureMealRecord(day.id);
    return `
      <div class="meal-note">
        <h4>${day.date} - ${day.label}</h4>
        <p><strong>Plano:</strong> ${escapeHtml(day.meals.cafe)} | ${escapeHtml(day.meals.almoco)} | ${escapeHtml(day.meals.jantar)}</p>
        <label>O que eu comi de verdade<textarea data-meal="actual" data-day-id="${day.id}" rows="4" placeholder="Cafe, almoco, jantar, beliscos, agua...">${escapeHtml(meal.actual)}</textarea></label>
        <label>Como me senti<textarea data-meal="notes" data-day-id="${day.id}" rows="2" placeholder="Fome, energia, inchaco, sono...">${escapeHtml(meal.notes)}</textarea></label>
      </div>
    `;
  }).join("");
}

function bindRecordActions() {
  const onRecordChange = (event) => {
    const bioField = event.target.dataset.bio;
    if (bioField) {
      state.records.bio[bioField] = event.target.value;
      saveRecords();
      return;
    }

    const logField = event.target.dataset.log;
    if (logField) {
      const record = ensureExerciseRecord(event.target.dataset.dayId, event.target.dataset.exerciseId);
      record[logField] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      saveRecords();
      if (logField === "done") {
        syncTrainingCheckbox(event.target.dataset.exerciseId, event.target.checked);
        renderProgress();
      }
      return;
    }

    const mealField = event.target.dataset.meal;
    if (mealField) {
      const meal = ensureMealRecord(event.target.dataset.dayId);
      meal[mealField] = event.target.value;
      saveRecords();
    }
  };

  document.addEventListener("input", onRecordChange);
  document.addEventListener("change", onRecordChange);

  $("#exportJson").addEventListener("click", exportRecords);
  $("#importJson").addEventListener("change", importRecords);
}

function syncTrainingCheckbox(exerciseId, checked) {
  const input = document.getElementById(exerciseId);
  if (input) input.checked = checked;
}

function ensureExerciseRecord(dayId, exerciseId) {
  if (!state.records.exercises[dayId]) state.records.exercises[dayId] = {};
  if (!state.records.exercises[dayId][exerciseId]) {
    state.records.exercises[dayId][exerciseId] = {
      done: false,
      actualWeight: "",
      actualSets: "",
      actualReps: "",
      effort: "",
      notes: ""
    };
  }
  return state.records.exercises[dayId][exerciseId];
}

function ensureMealRecord(dayId) {
  if (!state.records.meals[dayId]) state.records.meals[dayId] = { actual: "", notes: "" };
  return state.records.meals[dayId];
}

function blankRecords() {
  return {
    version: 2,
    week: DATA.week,
    updatedAt: new Date().toISOString(),
    bio: { date: "", weight: "", fat: "", muscle: "", water: "", bmr: "", notes: "" },
    exercises: {},
    meals: {}
  };
}

function loadRecords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return normalizeRecords(saved);
  } catch {
    return blankRecords();
  }
}

function normalizeRecords(records) {
  const base = blankRecords();
  if (!records || typeof records !== "object") return base;
  return {
    ...base,
    ...records,
    bio: { ...base.bio, ...(records.bio || {}) },
    exercises: records.exercises || {},
    meals: records.meals || {}
  };
}

function saveRecords() {
  state.records.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

async function exportRecords() {
  saveRecords();
  const payload = {
    exportedAt: new Date().toISOString(),
    plan: {
      title: "Guia Semanal",
      week: DATA.week,
      days: DATA.days.map((day) => ({
        id: day.id,
        label: day.label,
        date: day.date,
        title: day.title,
        exercises: day.exercises.map((exercise, index) => ({
          id: `${day.id}-${index}-${slug(exercise.name)}`,
          name: exercise.name,
          plannedSets: exercise.sets,
          plannedReps: exercise.reps,
          suggestedWeight: exercise.weight
        }))
      }))
    },
    records: state.records
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const filename = `registro-guia-semanal-${DATA.week.replace(/\s+/g, "-").replace(/\//g, "-")}.json`;

  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{ description: "JSON", accept: { "application/json": [".json"] } }]
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

async function importRecords(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    state.records = normalizeRecords(parsed.records || parsed);
    saveRecords();
    renderAll();
  } catch {
    alert("Nao consegui importar esse JSON. Confira se e o arquivo exportado pelo site.");
  } finally {
    event.target.value = "";
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function slug(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function shortEquipmentLabel(title) {
  return title
    .replace("Banco, halteres e barra", "Banco")
    .replace("Cadeira flexora sentada", "Flexora")
    .replace("Cadeira extensora", "Extensora")
    .replace("Abdutora/adutora", "Abdutora")
    .replace("Bike spinning", "Bike")
    .replace("Esteira e visao geral", "Esteira");
}

init();
