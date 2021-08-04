{
	db.test.remove({});
	// premier bloc
	for (let i = 0; i < 1000000; i++) { // db.test.insertMany()
	  db.test.insertOne({i});
	} // can change by a native function
	// second bloc
	db.test.find().forEach(d => {
	  if (d.i % 2) { // use a $mod to find odd value
	    d.odd = true; // not a best practices to update an object porperty with assignement
	    db.test.save(d); // the object already exists
	  }
	}); // You can update the test collection with update
	// troisième bloc
	const docs = db.test.aggregate([{$match:{odd:true}}]).toArray(); // you can group to return an array of documents
	print(docs.length); // you can use count to display the count of documents
}


db.test.remove();
const END = 10000000;
const arr = Array.from({length: END}, (_, index) => index + 1);
db.test.insertMany(arr);
db.test.updateMany(
   { "i": { $mod: [2, 1] } },
   {
     $set: { odd: true },
   }
)
db.test.aggregate( [
    { $match: { odd : true } },
    {
      $count: "countValue"
    }
] )
