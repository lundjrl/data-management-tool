import type { crew, duty, monster, Prisma } from '@prisma/client'


export type FindFirstOverload = {
	(key: 'crew', params: Prisma.crewFindFirstArgs): Promise<crew | null>
	(key: 'duty', params: Prisma.dutyFindFirstArgs): Promise<duty | null>
	(key: 'monster', params: Prisma.monsterFindFirstArgs): Promise<monster | null>
}

export type FindManyOverload = {
	(key: 'crew', params: Prisma.crewFindManyArgs): Promise<crew | null>
	(key: 'duty', params: Prisma.dutyFindManyArgs): Promise<duty | null>
	(key: 'monster', params: Prisma.monsterFindManyArgs): Promise<monster | null>
}

export type CreateOverload = {
	(key: 'crew', params: Prisma.crewCreateArgs['data']): Promise<crew>
	(key: 'duty', params: Prisma.dutyCreateArgs['data']): Promise<duty>
	(key: 'monster', params: Prisma.monsterCreateArgs['data']): Promise<monster>
}

export type CreateManyOverload = {
	(key: 'crew', params: Prisma.crewCreateManyInput[]): Promise<crew[]>
	(key: 'duty', params: Prisma.dutyCreateManyInput[]): Promise<duty[]>
	(key: 'monster', params: Prisma.monsterCreateManyInput[]): Promise<monster[]>
}

export type UpdateOverload = {
	(key: 'crew', id: number, params: Prisma.crewUpdateInput): Promise<crew>
	(key: 'duty', id: number, params: Prisma.dutyUpdateInput): Promise<duty>
	(key: 'monster', id: number, params: Prisma.monsterUpdateInput): Promise<monster>
}

export type UpdateManyOverload = {
	(key: 'crew', dataParams: Prisma.crewUpdateManyArgs['data'], whereParams: Prisma.crewUpdateManyArgs['where']): Promise<crew[]>
	(key: 'duty', dataParams: Prisma.dutyUpdateManyArgs['data'], whereParams: Prisma.dutyUpdateManyArgs['where']): Promise<duty[]>
	(key: 'monster', dataParams: Prisma.monsterUpdateManyArgs['data'], whereParams: Prisma.monsterUpdateManyArgs['where']): Promise<monster[]>
}