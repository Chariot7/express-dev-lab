module.exports = {
    getAll,
    createOne,
    getOne,
    deleteSkill,
    update,
}

const devSkills = [
{skill: 'javaScript', learned: true},
{skill: 'HTML', learned: true},
{skill: 'CSS', learned: true},
{skill: 'jQuery', learned: true},
{skill: 'nodeJS', learned: false},
{skill: 'ExpressJS', learned: false},
{skill: 'MongoDB', learned: false},
{skill: 'React', learned: false},

];

function update(id, skill){
devSkills.splice(id, 1, skill)
}

function deleteSkill(id){
    devSkills.splice(id, 1);
};

function createOne(skill){
devSkills.push(skill)
}

function getAll() {
    return devSkills;
}

function getOne(id){
    return devSkills[id]
}