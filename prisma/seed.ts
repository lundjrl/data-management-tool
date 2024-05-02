import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createCrew = (): Promise<unknown>[] => {
  const names = ['Bob', 'John', 'George', 'Susan', 'Jessica', 'Sigurd']

  return names.map(
    async (el, index) =>
      await prisma.crew.upsert({
        where: { id: index + 1 },
        update: {},
        create: {
          name: el,
        },
      }),
  )
}

const createDuty = (): Promise<unknown>[] => {
  const duties = [
    {
      name: 'Monitor',
      crewmate_id: 1,
    },
    {
      name: 'Loot',
      crewmate_id: 2,
    },
    {
      name: 'Protection',
      crewmate_id: 3,
    },
    {
      name: 'Distraction',
      crewmate_id: 4,
    },
    {
      name: 'Camel',
      crewmate_id: 5,
    },
  ]

  return duties.map(
    async (el, index) =>
      await prisma.duty.upsert({
        where: { id: index + 1 },
        update: {},
        create: el,
      }),
  )
}

const createMonster = (): Promise<unknown>[] => {
  const monsters = [
    {
      name: 'Snare Flea',
      is_skinwalker: false,
    },
    {
      name: 'Coil Head',
      is_skinwalker: true,
    },
    {
      name: 'Loot Bug',
      is_skinwalker: false,
    },
    {
      name: 'Bracken',
      is_skinwalker: true,
    },
    {
      name: 'Thumper',
      is_skinwalker: true,
    },
    {
      name: 'Ooze',
      is_skinwalker: false,
    },
    {
      name: 'Bunker Spider',
      is_skinwalker: true,
    },
    {
      name: 'Jester',
      is_skinwalker: true,
    },
    {
      name: 'Nutcracker',
      is_skinwalker: false,
    },
    {
      name: 'Ghost Girl',
      is_skinwalker: true,
    },
    {
      name: 'Mimic',
      is_skinwalker: true,
    },
    {
      name: 'Blind Dog',
      is_skinwalker: false,
    },
    {
      name: 'Baboon Hawk',
      is_skinwalker: false,
    },
    {
      name: 'Forest Guardian',
      is_skinwalker: false,
    },
  ]

  return monsters.map(
    async (el, index) =>
      await prisma.monster.upsert({
        where: { id: index + 1 },
        update: {},
        create: el,
      }),
  )
}

async function main() {
  console.log('Starting Seed Process')
  const proms = [...createCrew(), ...createDuty(), ...createMonster()]
  await Promise.all(proms)
  console.log('Process Complete')
}

await main()
  .then(prisma.$disconnect)
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
