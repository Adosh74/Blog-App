const mongoose = require('mongoose');
const Redis = require('ioredis');
const keys = require('../config/keys');
const client = new Redis(keys.redisUrl);

const exec = mongoose.Query.prototype.exec;
mongoose.Query.prototype.exec = async function () {
    const key = JSON.stringify(
        Object.assign({}, this.getQuery(), {
            collection: this.mongooseCollection.name,
        })
    );

    // +[1] see if we have a value for 'key' in redis
    const cacheValue = await client.get(key);

    // +[2] if we do, return that
    if (cacheValue) {
        const doc = JSON.parse(cacheValue);
        return Array.isArray(doc)
            ? doc.map(d => new this.model(d))
            : new this.model(doc);
    }
    // +[3] otherwise, issue the query and store the result in redis

    const result = await exec.apply(this, arguments);
    await client.set(key, JSON.stringify(result));

    return result;
};
