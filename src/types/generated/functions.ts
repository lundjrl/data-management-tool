import type { cat, crew, duty, monster, Prisma } from '@prisma/client'
import type { BatchPayload } from '~/types/BatchPayload'

export interface FindFirstOverload {
  (key: 'crew', params: Prisma.crewFindFirstArgs): Promise<[crew | null, number] | [object | unknown, number]>
  (key: 'duty', params: Prisma.dutyFindFirstArgs): Promise<[duty | null, number] | [object | unknown, number]>
  (key: 'monster', params: Prisma.monsterFindFirstArgs): Promise<[monster | null, number] | [object | unknown, number]>
  (key: 'cat', params: Prisma.catFindFirstArgs): Promise<[cat | null, number] | [object | unknown, number]>
  (key: string, params: unknown): Promise<unknown>
}

export interface FindManyOverload {
  (key: 'crew', params: Prisma.crewFindManyArgs): Promise<[crew | null, number] | [object | unknown, number]>
  (key: 'duty', params: Prisma.dutyFindManyArgs): Promise<[duty | null, number] | [object | unknown, number]>
  (key: 'monster', params: Prisma.monsterFindManyArgs): Promise<[monster | null, number] | [object | unknown, number]>
  (key: 'cat', params: Prisma.catFindManyArgs): Promise<[cat | null, number] | [object | unknown, number]>
}

export interface CreateOverload {
  (key: 'crew', params: Prisma.crewCreateArgs['data']): Promise<[crew, number] | [object | unknown, number]>
  (key: 'duty', params: Prisma.dutyCreateArgs['data']): Promise<[duty, number] | [object | unknown, number]>
  (key: 'monster', params: Prisma.monsterCreateArgs['data']): Promise<[monster, number] | [object | unknown, number]>
  (key: 'cat', params: Prisma.catCreateArgs['data']): Promise<[cat, number] | [object | unknown, number]>
}

export interface CreateManyOverload {
  (key: 'crew', params: Prisma.crewCreateManyInput[]): Promise<[crew[], number] | [object | unknown, number]>
  (key: 'duty', params: Prisma.dutyCreateManyInput[]): Promise<[duty[], number] | [object | unknown, number]>
  (key: 'monster', params: Prisma.monsterCreateManyInput[]): Promise<[monster[], number] | [object | unknown, number]>
  (key: 'cat', params: Prisma.catCreateManyInput[]): Promise<[cat[], number] | [object | unknown, number]>
}

export interface UpdateOverload {
  (key: 'crew', id: number, params: Prisma.crewUpdateInput): Promise<[crew, number] | [object | unknown, number]>
  (key: 'duty', id: number, params: Prisma.dutyUpdateInput): Promise<[duty, number] | [object | unknown, number]>
  (key: 'monster', id: number, params: Prisma.monsterUpdateInput): Promise<[monster, number] | [object | unknown, number]>
  (key: 'cat', id: number, params: Prisma.catUpdateInput): Promise<[cat, number] | [object | unknown, number]>
}

export interface UpdateManyOverload {
  (key: 'crew', dataParams: Prisma.crewUpdateManyArgs['data'], whereParams: Prisma.crewUpdateManyArgs['where']): Promise<[crew[], number] | [object | unknown, number]>
  (key: 'duty', dataParams: Prisma.dutyUpdateManyArgs['data'], whereParams: Prisma.dutyUpdateManyArgs['where']): Promise<[duty[], number] | [object | unknown, number]>
  (key: 'monster', dataParams: Prisma.monsterUpdateManyArgs['data'], whereParams: Prisma.monsterUpdateManyArgs['where']): Promise<[monster[], number] | [object | unknown, number]>
  (key: 'cat', dataParams: Prisma.catUpdateManyArgs['data'], whereParams: Prisma.catUpdateManyArgs['where']): Promise<[cat[], number] | [object | unknown, number]>
}

export interface DeleteOverload {
  (key: 'crew', params: Prisma.crewDeleteArgs['where']): Promise<[crew, number] | [object | unknown, number]>
  (key: 'duty', params: Prisma.dutyDeleteArgs['where']): Promise<[duty, number] | [object | unknown, number]>
  (key: 'monster', params: Prisma.monsterDeleteArgs['where']): Promise<[monster, number] | [object | unknown, number]>
  (key: 'cat', params: Prisma.catDeleteArgs['where']): Promise<[cat, number] | [object | unknown, number]>
}

export interface DeleteManyOverload {
  (key: 'crew', params: Prisma.crewDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
  (key: 'duty', params: Prisma.dutyDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
  (key: 'monster', params: Prisma.monsterDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
  (key: 'cat', params: Prisma.catDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
}
