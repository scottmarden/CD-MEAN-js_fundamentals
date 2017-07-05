//Challenge 1
//list of students
let students = [
	{name: 'Remy', cohort: 'Jan'},
	{name: 'Genevieve', cohort: 'March'},
	{name: 'Chuck', cohort: 'Jan'},
	{name: 'Osmund', cohort: 'June'},
	{name: 'Nikki', cohort: 'June'},
	{name: 'Boris', cohort: 'June'}
];
// for loop to print each students name and cohort, with formatting
for (let i = 0; i < students.length; i++){
	let str = "Name: " + students[i].name + ", Cohort: " + students[i].cohort;
	console.log(str);
}

//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
//for-in loop to go into each group within 'users'
for (let group in users){
	console.log(group.toUpperCase());
	//for loop to grab necessary information and create/print a string of that information.
	for (let i = 0; i < users[group].length; i++){
		let str = (i+1) + " - " + users[group][i].last_name.toUpperCase() + ", " + users[group][i].first_name.toUpperCase() + " - " + (users[group][i].first_name.length + users[group][i].last_name.length) ;
		console.log(str);
	}
}
