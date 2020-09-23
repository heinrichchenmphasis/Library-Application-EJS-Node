class CheckoutDatabase
{
    constructor(bookDatabase, memberDatabase) 
    {
        this.checkouts = [];
        this.currentId = 0;

        this.bookDatabase = bookDatabase;
        this.memberDatabase = memberDatabase;
    }

    create(bookId, memberId, period)
    {
        if(this.bookDatabase.readById(bookId) == undefined)
        {
            return;
        }
        if(this.memberDatabase.read(memberId) == undefined)
        {
            return;
        }

        if(this.checkouts.find(checkout => checkout.bookId == bookId) != undefined)
        {
            return;
        }
        
        this.checkouts.push(new Checkout(bookId, memberId, period, this.currentId ));
        this.currentId++;
    }

    read(checkoutId)
    {
        return this.checkouts.find(checkout => checkout.id == checkoutId);
    }

    
    update(bookId, memberId, period, checkoutId)
    {
        let index = this.checkouts.findIndex(checkout => checkout.id == checkoutId);
        if(index != -1)
        {
            this.checkouts[index] = new Checkout(bookId, memberId, period, checkoutId)
        }
    }

    delete(checkoutId)
    {
        let index = this.checkouts.findIndex(checkout => checkout.id == checkoutId);
        if(index != -1)
        {
            this.checkouts.splice(index,1);
        }
    }

}

class Checkout
{
    constructor (bookId, memberId, period, id)
    {
        this.bookId = bookId;
        this.memberId = memberId;
        this.period = period;
        this.id = id;
    }
}

module.exports = CheckoutDatabase