/**
 * Mongoose debug module
 *
 * Print all query to console log.
 *
 * @email {jasonrust89@gmail.com}
 * @authod {wickd}
 * @dependency {mongoose} http://mongoosejs.com/
 * @param  {Mongoose} mongoose Mongoose object
 * @version {1.0}
 * @return {null}
 */
module.exports = mongoose => {
	mongoose
        .set('debug', (collectionName, method, query, doc) => 
        {
            let queryfy = typeof query == 'object' ? JSON.stringify(query) : query;
            let docfy = typeof doc == 'object' ? JSON.stringify(doc) : doc;

            console.log(`select ${docfy} from ${collectionName}.${method}(${queryfy})`);
        })
}