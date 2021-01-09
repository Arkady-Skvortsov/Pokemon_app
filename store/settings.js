export const state = () => ({
  settingsIndex: [
    {
      id: 1,
      name: 'По возрастанию',
    },
    {
      id: 2,
      name: 'По убыванию',
    },
  ],

  settingsName: [
    {
      id: 1,
      name: 'По возрастанию',
    },
    {
      id: 2,
      name: 'По убыванию',
    },
  ],

  settingsRace: [
    {
      id: 1,
      race: 'Нормальные',
      icon: 'normal.png',
    },
    {
      id: 2,
      race: 'Электрические',
      icon: 'electric.png',
    },
    {
      id: 3,
      race: 'Огненные',
      icon: 'fire.png',
    },
    {
      id: 4,
      race: 'Призрачные',
      icon: 'ghosts.png',
    },
    {
      id: 5,
      race: 'Волшебные',
      icon: 'fairy.png',
    },
    {
      id: 6,
      race: 'Каменные',
      icon: 'rock.png',
    },
    {
      id: 7,
      race: 'Психические',
      icon: 'psyhistic.png',
    },
    {
      id: 8,
      race: 'Боевые',
      icon: 'fighting.png',
    },
    {
      id: 9,
      race: 'Ледяные',
      icon: 'ice.png',
    },
    {
      id: 10,
      race: 'Стальные',
      icon: 'steel.png',
    },
    {
      id: 11,
      race: 'Водяные',
      icon: 'water.png',
    },
    {
      id: 12,
      race: 'Летающие',
      icon: 'flying.png',
    },
    {
      id: 13,
      race: 'Земляные',
      icon: 'ground.png',
    },
    {
      id: 14,
      race: 'Драконьи',
      icon: 'dragon.png',
    },
    {
      id: 15,
      race: 'Темные',
      icon: 'darkness.png',
    },
    {
      id: 16,
      race: 'Ядовитые',
      icon: 'poisonous.png',
    },
    {
      id: 17,
      race: 'Травяные',
      icon: 'grass.png',
    },
    {
      id: 18,
      race: 'Растения',
      icon: 'plants.png',
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {
  SETTINGSINDEX: (s) => s.settingsIndex,
  SETTINGSNAME: (s) => s.settingsName,
  SETTINGSRACE: (s) => s.settingsRace,
}
