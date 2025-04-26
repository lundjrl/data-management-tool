import type { crew, duty, monster, cat, test_table, test_table_two, test_table_five, test_table_four, test_table_seven, test_table_six, test_table_three, test_table_eight, Prisma } from '@prisma/client'
import type { BatchPayload } from '~/types/BatchPayload'


export type FindFirstOverload = {
	(key: 'crew', params: Prisma.crewFindFirstArgs): Promise<[crew | null, number] | [object | unknown, number]>
	(key: 'duty', params: Prisma.dutyFindFirstArgs): Promise<[duty | null, number] | [object | unknown, number]>
	(key: 'monster', params: Prisma.monsterFindFirstArgs): Promise<[monster | null, number] | [object | unknown, number]>
	(key: 'cat', params: Prisma.catFindFirstArgs): Promise<[cat | null, number] | [object | unknown, number]>
	(key: 'test_table', params: Prisma.test_tableFindFirstArgs): Promise<[test_table | null, number] | [object | unknown, number]>
	(key: 'test_table_two', params: Prisma.test_table_twoFindFirstArgs): Promise<[test_table_two | null, number] | [object | unknown, number]>
	(key: 'test_table_five', params: Prisma.test_table_fiveFindFirstArgs): Promise<[test_table_five | null, number] | [object | unknown, number]>
	(key: 'test_table_four', params: Prisma.test_table_fourFindFirstArgs): Promise<[test_table_four | null, number] | [object | unknown, number]>
	(key: 'test_table_seven', params: Prisma.test_table_sevenFindFirstArgs): Promise<[test_table_seven | null, number] | [object | unknown, number]>
	(key: 'test_table_six', params: Prisma.test_table_sixFindFirstArgs): Promise<[test_table_six | null, number] | [object | unknown, number]>
	(key: 'test_table_three', params: Prisma.test_table_threeFindFirstArgs): Promise<[test_table_three | null, number] | [object | unknown, number]>
	(key: 'test_table_eight', params: Prisma.test_table_eightFindFirstArgs): Promise<[test_table_eight | null, number] | [object | unknown, number]>
}

export type FindManyOverload = {
	(key: 'crew', params: Prisma.crewFindManyArgs): Promise<[crew | null, number] | [object | unknown, number]>
	(key: 'duty', params: Prisma.dutyFindManyArgs): Promise<[duty | null, number] | [object | unknown, number]>
	(key: 'monster', params: Prisma.monsterFindManyArgs): Promise<[monster | null, number] | [object | unknown, number]>
	(key: 'cat', params: Prisma.catFindManyArgs): Promise<[cat | null, number] | [object | unknown, number]>
	(key: 'test_table', params: Prisma.test_tableFindManyArgs): Promise<[test_table | null, number] | [object | unknown, number]>
	(key: 'test_table_two', params: Prisma.test_table_twoFindManyArgs): Promise<[test_table_two | null, number] | [object | unknown, number]>
	(key: 'test_table_five', params: Prisma.test_table_fiveFindManyArgs): Promise<[test_table_five | null, number] | [object | unknown, number]>
	(key: 'test_table_four', params: Prisma.test_table_fourFindManyArgs): Promise<[test_table_four | null, number] | [object | unknown, number]>
	(key: 'test_table_seven', params: Prisma.test_table_sevenFindManyArgs): Promise<[test_table_seven | null, number] | [object | unknown, number]>
	(key: 'test_table_six', params: Prisma.test_table_sixFindManyArgs): Promise<[test_table_six | null, number] | [object | unknown, number]>
	(key: 'test_table_three', params: Prisma.test_table_threeFindManyArgs): Promise<[test_table_three | null, number] | [object | unknown, number]>
	(key: 'test_table_eight', params: Prisma.test_table_eightFindManyArgs): Promise<[test_table_eight | null, number] | [object | unknown, number]>
}

export type CreateOverload = {
	(key: 'crew', params: Prisma.crewCreateArgs['data']): Promise<[crew, number] | [object | unknown, number]>
	(key: 'duty', params: Prisma.dutyCreateArgs['data']): Promise<[duty, number] | [object | unknown, number]>
	(key: 'monster', params: Prisma.monsterCreateArgs['data']): Promise<[monster, number] | [object | unknown, number]>
	(key: 'cat', params: Prisma.catCreateArgs['data']): Promise<[cat, number] | [object | unknown, number]>
	(key: 'test_table', params: Prisma.test_tableCreateArgs['data']): Promise<[test_table, number] | [object | unknown, number]>
	(key: 'test_table_two', params: Prisma.test_table_twoCreateArgs['data']): Promise<[test_table_two, number] | [object | unknown, number]>
	(key: 'test_table_five', params: Prisma.test_table_fiveCreateArgs['data']): Promise<[test_table_five, number] | [object | unknown, number]>
	(key: 'test_table_four', params: Prisma.test_table_fourCreateArgs['data']): Promise<[test_table_four, number] | [object | unknown, number]>
	(key: 'test_table_seven', params: Prisma.test_table_sevenCreateArgs['data']): Promise<[test_table_seven, number] | [object | unknown, number]>
	(key: 'test_table_six', params: Prisma.test_table_sixCreateArgs['data']): Promise<[test_table_six, number] | [object | unknown, number]>
	(key: 'test_table_three', params: Prisma.test_table_threeCreateArgs['data']): Promise<[test_table_three, number] | [object | unknown, number]>
	(key: 'test_table_eight', params: Prisma.test_table_eightCreateArgs['data']): Promise<[test_table_eight, number] | [object | unknown, number]>
}

export type CreateManyOverload = {
	(key: 'crew', params: Prisma.crewCreateManyInput[]): Promise<[crew[], number] | [object | unknown, number]>
	(key: 'duty', params: Prisma.dutyCreateManyInput[]): Promise<[duty[], number] | [object | unknown, number]>
	(key: 'monster', params: Prisma.monsterCreateManyInput[]): Promise<[monster[], number] | [object | unknown, number]>
	(key: 'cat', params: Prisma.catCreateManyInput[]): Promise<[cat[], number] | [object | unknown, number]>
	(key: 'test_table', params: Prisma.test_tableCreateManyInput[]): Promise<[test_table[], number] | [object | unknown, number]>
	(key: 'test_table_two', params: Prisma.test_table_twoCreateManyInput[]): Promise<[test_table_two[], number] | [object | unknown, number]>
	(key: 'test_table_five', params: Prisma.test_table_fiveCreateManyInput[]): Promise<[test_table_five[], number] | [object | unknown, number]>
	(key: 'test_table_four', params: Prisma.test_table_fourCreateManyInput[]): Promise<[test_table_four[], number] | [object | unknown, number]>
	(key: 'test_table_seven', params: Prisma.test_table_sevenCreateManyInput[]): Promise<[test_table_seven[], number] | [object | unknown, number]>
	(key: 'test_table_six', params: Prisma.test_table_sixCreateManyInput[]): Promise<[test_table_six[], number] | [object | unknown, number]>
	(key: 'test_table_three', params: Prisma.test_table_threeCreateManyInput[]): Promise<[test_table_three[], number] | [object | unknown, number]>
	(key: 'test_table_eight', params: Prisma.test_table_eightCreateManyInput[]): Promise<[test_table_eight[], number] | [object | unknown, number]>
}

export type UpdateOverload = {
	(key: 'crew', id: number, params: Prisma.crewUpdateInput): Promise<[crew, number] | [object | unknown, number]>
	(key: 'duty', id: number, params: Prisma.dutyUpdateInput): Promise<[duty, number] | [object | unknown, number]>
	(key: 'monster', id: number, params: Prisma.monsterUpdateInput): Promise<[monster, number] | [object | unknown, number]>
	(key: 'cat', id: number, params: Prisma.catUpdateInput): Promise<[cat, number] | [object | unknown, number]>
	(key: 'test_table', id: number, params: Prisma.test_tableUpdateInput): Promise<[test_table, number] | [object | unknown, number]>
	(key: 'test_table_two', id: number, params: Prisma.test_table_twoUpdateInput): Promise<[test_table_two, number] | [object | unknown, number]>
	(key: 'test_table_five', id: number, params: Prisma.test_table_fiveUpdateInput): Promise<[test_table_five, number] | [object | unknown, number]>
	(key: 'test_table_four', id: number, params: Prisma.test_table_fourUpdateInput): Promise<[test_table_four, number] | [object | unknown, number]>
	(key: 'test_table_seven', id: number, params: Prisma.test_table_sevenUpdateInput): Promise<[test_table_seven, number] | [object | unknown, number]>
	(key: 'test_table_six', id: number, params: Prisma.test_table_sixUpdateInput): Promise<[test_table_six, number] | [object | unknown, number]>
	(key: 'test_table_three', id: number, params: Prisma.test_table_threeUpdateInput): Promise<[test_table_three, number] | [object | unknown, number]>
	(key: 'test_table_eight', id: number, params: Prisma.test_table_eightUpdateInput): Promise<[test_table_eight, number] | [object | unknown, number]>
}

export type UpdateManyOverload = {
	(key: 'crew', dataParams: Prisma.crewUpdateManyArgs['data'], whereParams: Prisma.crewUpdateManyArgs['where']): Promise<[crew[], number] | [object | unknown, number]>
	(key: 'duty', dataParams: Prisma.dutyUpdateManyArgs['data'], whereParams: Prisma.dutyUpdateManyArgs['where']): Promise<[duty[], number] | [object | unknown, number]>
	(key: 'monster', dataParams: Prisma.monsterUpdateManyArgs['data'], whereParams: Prisma.monsterUpdateManyArgs['where']): Promise<[monster[], number] | [object | unknown, number]>
	(key: 'cat', dataParams: Prisma.catUpdateManyArgs['data'], whereParams: Prisma.catUpdateManyArgs['where']): Promise<[cat[], number] | [object | unknown, number]>
	(key: 'test_table', dataParams: Prisma.test_tableUpdateManyArgs['data'], whereParams: Prisma.test_tableUpdateManyArgs['where']): Promise<[test_table[], number] | [object | unknown, number]>
	(key: 'test_table_two', dataParams: Prisma.test_table_twoUpdateManyArgs['data'], whereParams: Prisma.test_table_twoUpdateManyArgs['where']): Promise<[test_table_two[], number] | [object | unknown, number]>
	(key: 'test_table_five', dataParams: Prisma.test_table_fiveUpdateManyArgs['data'], whereParams: Prisma.test_table_fiveUpdateManyArgs['where']): Promise<[test_table_five[], number] | [object | unknown, number]>
	(key: 'test_table_four', dataParams: Prisma.test_table_fourUpdateManyArgs['data'], whereParams: Prisma.test_table_fourUpdateManyArgs['where']): Promise<[test_table_four[], number] | [object | unknown, number]>
	(key: 'test_table_seven', dataParams: Prisma.test_table_sevenUpdateManyArgs['data'], whereParams: Prisma.test_table_sevenUpdateManyArgs['where']): Promise<[test_table_seven[], number] | [object | unknown, number]>
	(key: 'test_table_six', dataParams: Prisma.test_table_sixUpdateManyArgs['data'], whereParams: Prisma.test_table_sixUpdateManyArgs['where']): Promise<[test_table_six[], number] | [object | unknown, number]>
	(key: 'test_table_three', dataParams: Prisma.test_table_threeUpdateManyArgs['data'], whereParams: Prisma.test_table_threeUpdateManyArgs['where']): Promise<[test_table_three[], number] | [object | unknown, number]>
	(key: 'test_table_eight', dataParams: Prisma.test_table_eightUpdateManyArgs['data'], whereParams: Prisma.test_table_eightUpdateManyArgs['where']): Promise<[test_table_eight[], number] | [object | unknown, number]>
}

export type DeleteOverload = {
	(key: 'crew', params: Prisma.crewDeleteArgs['where']): Promise<[crew, number] | [object | unknown, number]>
	(key: 'duty', params: Prisma.dutyDeleteArgs['where']): Promise<[duty, number] | [object | unknown, number]>
	(key: 'monster', params: Prisma.monsterDeleteArgs['where']): Promise<[monster, number] | [object | unknown, number]>
	(key: 'cat', params: Prisma.catDeleteArgs['where']): Promise<[cat, number] | [object | unknown, number]>
	(key: 'test_table', params: Prisma.test_tableDeleteArgs['where']): Promise<[test_table, number] | [object | unknown, number]>
	(key: 'test_table_two', params: Prisma.test_table_twoDeleteArgs['where']): Promise<[test_table_two, number] | [object | unknown, number]>
	(key: 'test_table_five', params: Prisma.test_table_fiveDeleteArgs['where']): Promise<[test_table_five, number] | [object | unknown, number]>
	(key: 'test_table_four', params: Prisma.test_table_fourDeleteArgs['where']): Promise<[test_table_four, number] | [object | unknown, number]>
	(key: 'test_table_seven', params: Prisma.test_table_sevenDeleteArgs['where']): Promise<[test_table_seven, number] | [object | unknown, number]>
	(key: 'test_table_six', params: Prisma.test_table_sixDeleteArgs['where']): Promise<[test_table_six, number] | [object | unknown, number]>
	(key: 'test_table_three', params: Prisma.test_table_threeDeleteArgs['where']): Promise<[test_table_three, number] | [object | unknown, number]>
	(key: 'test_table_eight', params: Prisma.test_table_eightDeleteArgs['where']): Promise<[test_table_eight, number] | [object | unknown, number]>
}

export type DeleteManyOverload = {
	(key: 'crew', params: Prisma.crewDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'duty', params: Prisma.dutyDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'monster', params: Prisma.monsterDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'cat', params: Prisma.catDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table', params: Prisma.test_tableDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_two', params: Prisma.test_table_twoDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_five', params: Prisma.test_table_fiveDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_four', params: Prisma.test_table_fourDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_seven', params: Prisma.test_table_sevenDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_six', params: Prisma.test_table_sixDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_three', params: Prisma.test_table_threeDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
	(key: 'test_table_eight', params: Prisma.test_table_eightDeleteArgs['where']): Promise<[BatchPayload, number] | [object | unknown, number]>
}