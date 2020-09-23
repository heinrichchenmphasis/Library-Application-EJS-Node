class MemberDatabase
{
    constructor() 
    {
        this.members = [];
        this.currentId = 0;
    }

    create(firstName, lastName)
    {
        this.members.push(new Member(firstName, lastName, this.currentId ));
        this.currentId++;
    }

    read(memberId)
    {
        return this.members.find(member => member.id == memberId);
    }

    update(firstName, lastName, memberId)
    {
        let index = this.members.findIndex(member => member.id == memberId);
        if(index != -1)
        {
            this.members[index] = new Member(firstName, lastName, memberId)
        }
    }

    delete(memberId)
    {
        let index = this.members.findIndex(member => member.id == memberId);
        if(index != -1)
        {
            this.members.splice(index,1);
        }
    }

}

class Member
{
    constructor (firstName, lastName, id)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

module.exports = MemberDatabase