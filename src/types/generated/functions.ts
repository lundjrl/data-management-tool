import type { crew, duty, monster, cat, Prisma } from '@prisma/client'
import type { BatchPayload } from '~/types/BatchPayload'


export type FindFirstOverload = {
	(key: 'crew', params: Prisma.crewFindFirstArgs): Promise<crew | null>
	(key: 'duty', params: Prisma.dutyFindFirstArgs): Promise<duty | null>
	(key: 'monster', params: Prisma.monsterFindFirstArgs): Promise<monster | null>
	(key: 'cat', params: Prisma.catFindFirstArgs): Promise<cat | null>
}

export type FindManyOverload = {
	(key: 'crew', params: Prisma.crewFindManyArgs): Promise<crew | null>
	(key: 'duty', params: Prisma.dutyFindManyArgs): Promise<duty | null>
	(key: 'monster', params: Prisma.monsterFindManyArgs): Promise<monster | null>
	(key: 'cat', params: Prisma.catFindManyArgs): Promise<cat | null>
}

export type CreateOverload = {
	(key: 'crew', params: Prisma.crewCreateArgs['data']): Promise<crew>
	(key: 'duty', params: Prisma.dutyCreateArgs['data']): Promise<duty>
	(key: 'monster', params: Prisma.monsterCreateArgs['data']): Promise<monster>
	(key: 'cat', params: Prisma.catCreateArgs['data']): Promise<cat>
}

export type CreateManyOverload = {
	(key: 'crew', params: Prisma.crewCreateManyInput[]): Promise<crew[]>
	(key: 'duty', params: Prisma.dutyCreateManyInput[]): Promise<duty[]>
	(key: 'monster', params: Prisma.monsterCreateManyInput[]): Promise<monster[]>
	(key: 'cat', params: Prisma.catCreateManyInput[]): Promise<cat[]>
}

export type UpdateOverload = {
	(key: 'crew', id: number, params: Prisma.crewUpdateInput): Promise<crew>
	(key: 'duty', id: number, params: Prisma.dutyUpdateInput): Promise<duty>
	(key: 'monster', id: number, params: Prisma.monsterUpdateInput): Promise<monster>
	(key: 'cat', id: number, params: Prisma.catUpdateInput): Promise<cat>
}

export type UpdateManyOverload = {
	(key: 'crew', dataParams: Prisma.crewUpdateManyArgs['data'], whereParams: Prisma.crewUpdateManyArgs['where']): Promise<crew[]>
	(key: 'duty', dataParams: Prisma.dutyUpdateManyArgs['data'], whereParams: Prisma.dutyUpdateManyArgs['where']): Promise<duty[]>
	(key: 'monster', dataParams: Prisma.monsterUpdateManyArgs['data'], whereParams: Prisma.monsterUpdateManyArgs['where']): Promise<monster[]>
	(key: 'cat', dataParams: Prisma.catUpdateManyArgs['data'], whereParams: Prisma.catUpdateManyArgs['where']): Promise<cat[]>
}

export type DeleteOverload = {
	(key: 'crew', params: Prisma.crewDeleteArgs['where']): Promise<crew>
	(key: 'duty', params: Prisma.dutyDeleteArgs['where']): Promise<duty>
	(key: 'monster', params: Prisma.monsterDeleteArgs['where']): Promise<monster>
	(key: 'cat', params: Prisma.catDeleteArgs['where']): Promise<cat>
}

export type DeleteManyOverload = {
	(key: 'crew', params: Prisma.crewDeleteArgs['where']): Promise<BatchPayload>
	(key: 'duty', params: Prisma.dutyDeleteArgs['where']): Promise<BatchPayload>
	(key: 'monster', params: Prisma.monsterDeleteArgs['where']): Promise<BatchPayload>
	(key: 'cat', params: Prisma.catDeleteArgs['where']): Promise<BatchPayload>
}