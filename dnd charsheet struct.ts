type PCClass = {
  className: string;
  level: number;
};

type PCID = {
  name: string;
  race: string;
  class: PCClass[];
  background: string;
  xp: number;
  inpiration: number;
};

type hitDice = {
  diceType: string;
  diceCount: number;
  maxDice: number;
};

type PCAS = {
  str: {
    score: number;
    modOverride: boolean;
    modOverrideNum: number;

    saveProf: boolean;
    saveOverride: boolean;
    saveOverrideNum: number;

    athleticsProf1: boolean;
    athleticsProf2: boolean;
    athleticsOverride: boolean;
    athleticsOverrideNum: number;
  };

  dex: {
    score: number;
    modOverride: boolean;
    modOverrideNum: number;

    saveProf: boolean;
    saveOverride: boolean;
    saveOverrideNum: number;

    acrobaticsProf1: boolean;
    acrobaticsProf2: boolean;
    acrobaticsOverride: boolean;
    acrobaticsOverrideNum: number;

    SoHProf1: boolean;
    SoHProf2: boolean;
    SoHOverride: boolean;
    SoHOverrideNum: number;

    stealthProf1: boolean;
    stealthProf2: boolean;
    stealthOverride: boolean;
    stealthOverrideNum: number;
  };

  con: {
    score: number;
    modOverride: boolean;
    modOverrideNum: number;

    saveProf: boolean;
    saveOverride: boolean;
    saveOverrideNum: number;

    hitDice: hitDice[];
  };

  int: {
    score: number;
    modOverride: boolean;
    modOverrideNum: number;

    saveProf: boolean;
    saveOverride: boolean;
    saveOverrideNum: number;

    arcanaProf1: boolean;
    arcanaProf2: boolean;
    arcanaOverride: boolean;
    arcanaOverrideNum: number;

    historyProf1: boolean;
    historyProf2: boolean;
    historyOverride: boolean;
    historyOverrideNum: number;

    investigationProf1: boolean;
    investigationProf2: boolean;
    investigationOverride: boolean;
    investigationOverrideNum: number;

    natureProf1: boolean;
    natureProf2: boolean;
    natureOverride: boolean;
    natureOverrideNum: number;

    religionProf1: boolean;
    religionProf2: boolean;
    religionOverride: boolean;
    religionOverrideNum: number;
  };

  wis: {
    score: number;
    modOverride: boolean;
    modOverrideNum: number;

    saveProf: boolean;
    saveOverride: boolean;
    saveOverrideNum: number;

    animalHandlingProf1: boolean;
    animalHandlingProf2: boolean;
    animalHandlingOverride: boolean;
    animalHandlingOverrideNum: number;

    insightProf1: boolean;
    insightProf2: boolean;
    insightOverride: boolean;
    insightOverrideNum: number;

    medicineProf1: boolean;
    medicineProf2: boolean;
    medicineOverride: boolean;
    medicineOverrideNum: number;

    perceptionProf1: boolean;
    perceptionProf2: boolean;
    perceptionOverride: boolean;
    perceptionOverrideNum: number;

    survivalProf1: boolean;
    survivalProf2: boolean;
    survivalOverride: boolean;
    survivalOverrideNum: number;
  };

  cha: {
    score: number;
    modOverride: boolean;
    modOverrideNum: number;

    saveProf: boolean;
    saveOverride: boolean;
    saveOverrideNum: number;

    deceptionProf1: boolean;
    deceptionProf2: boolean;
    deceptionOverride: boolean;
    deceptionOverrideNum: number;

    intimidationProf1: boolean;
    intimidationProf2: boolean;
    intimidationOverride: boolean;
    intimidationOverrideNum: number;

    performanceProf1: boolean;
    performanceProf2: boolean;
    performanceOverride: boolean;
    performanceOverrideNum: number;

    persuasionProf1: boolean;
    persuasionProf2: boolean;
    persuasionOverride: boolean;
    persuasionOverrideNum: number;
  };
};

type PCSheet = {
  ID: PCID;
  AS: PCAS;
	stats: {
		HP: {
			tempHP: number;
			currHP: number;
			maxHP: number;
		};
		deathSaves: {
			success: number;
			fail: number;
		};
		speed: {
			walk: number;
			climb: number;
			swim: number;
		};
		AC: number;
		ACBonus: number;
		profBonusOverride: boolean;
		profBonusOverrideNum: number;
		initiativeBonusOverride: boolean;
		initiativeBonusOverrideNum: number;
		spellAttackOverride: boolean;
		spellAttackOverrideNum: number;
		spellSaveOverride: boolean;
		spellSaveOverrideNum: number;
	}
	inventory: {
		coins: {
			copper: number;
			silver: number;
			gold: number;
			platinum: number;
		};
	}
};
