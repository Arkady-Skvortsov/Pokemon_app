export const state = () => ({
  settingsIndex: [
    {
      id: 1,
      name: 'По возраст..',
    },
    {
      id: 2,
      name: 'По убыванию',
    },
  ],

  settingsName: [
    {
      id: 1,
      name: 'По возраст..',
    },
    {
      id: 2,
      name: 'По убыванию',
    },
  ],

  settingsRace: [
    {
      id: 1,
      race: 'Все',
      icon: 'normal.png',
    },
    {
      id: 2,
      race: 'Нормальные',
      icon: 'normal.png',
    },
    {
      id: 3,
      race: 'Электрические',
      icon: 'electric.png',
    },
    {
      id: 4,
      race: 'Огненные',
      icon: 'fire.png',
    },
    {
      id: 5,
      race: 'Призрачные',
      icon: 'ghosts.png',
    },
    {
      id: 6,
      race: 'Волшебные',
      icon: 'fairy.png',
    },
    {
      id: 7,
      race: 'Каменные',
      icon: 'rock.png',
    },
    {
      id: 8,
      race: 'Психические',
      icon: 'psyhistic.png',
    },
    {
      id: 9,
      race: 'Боевые',
      icon: 'fighting.png',
    },
    {
      id: 10,
      race: 'Ледяные',
      icon: 'ice.png',
    },
    {
      id: 11,
      race: 'Стальные',
      icon: 'steel.png',
    },
    {
      id: 12,
      race: 'Водяные',
      icon: 'water.png',
    },
    {
      id: 13,
      race: 'Летающие',
      icon: 'flying.png',
    },
    {
      id: 14,
      race: 'Земляные',
      icon: 'ground.png',
    },
    {
      id: 15,
      race: 'Драконьи',
      icon: 'dragon.png',
    },
    {
      id: 16,
      race: 'Темные',
      icon: 'darkness.png',
    },
    {
      id: 17,
      race: 'Ядовитые',
      icon: 'poison.png',
    },
    {
      id: 18,
      race: 'Травяные',
      icon: 'plants.png',
    },
    {
      id: 19,
      race: 'Багнутые',
      icon: 'bug.png',
    },
  ],

  settingsGeneration: [
    {
      id: 1,
      name: 'Первое',
    },
    {
      id: 2,
      name: 'Второе',
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {
  SETTINGSINDEX: (s) => s.settingsIndex,
  SETTINGSNAME: (s) => s.settingsName,
  SETTINGSRACE: (s) => s.settingsRace,
  SETTINGSGENERATION: (s) => s.settingsGeneration,
}
