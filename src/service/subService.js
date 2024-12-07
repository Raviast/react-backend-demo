
const subscriptionDB = require('../db/subscription/mongo.db.subscription');

class subService {
    constructor() {
        this.subscriptionDB = new subscriptionDB();
    }

    async subscription(subData) {
        try {

            const subDBData = await this.subscriptionDB.getByquery({
                email: subData.email
            })
            if (subDBData.length) return ({ message: 'user already subscribed' })

            // Check if subscription data exists, then update or create accordingly
            await this.subscriptionDB.create({ email: subData.email });


            const dbData = await this.subscriptionDB.getByquery({
                email: subData.email
            })

            if (dbData.length) return ({ message: 'user have been subscribed' });
            else return ({ message: 'user have not been subscribed' });

        } catch (error) {
            console.error(error);
            throw error;
        }
    }


}

module.exports = subService;