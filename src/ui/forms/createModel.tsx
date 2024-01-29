//  Super basic form that submits to create new table endpoint.




// Example request body to our API



const n = {
	name: "newTableName",
	[columnName]: {
		name: columnName,
		relationship: ["what should go here?"],
		primaryKey?: true,
		type: "string, number, NVARCHAR, etc",
		length: "optional number value",
		nullable?: false,
		unique?: true,
		required?: false,
		readonly?: false,
		hidden?: false,
		note?: '',
		validation?: 'I think it would be really cool to pass a validation object here so we can infer it?',
		validationMessage?: 'some message if validation bad'
	},
	[columnName]: {
		...
	}
}
