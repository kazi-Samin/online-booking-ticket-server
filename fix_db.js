const { MongoClient } = require('mongodb');

async function run() {
  const uri = 'mongodb+srv://kazisamin0173_db_user:samin123@cluster0.kelsqz5.mongodb.net/online-ticket-booking-platform?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('online-ticket-booking-platform');
    const vId = '6a42aae34d90d837b2843c0d'; // vendor's user id

    // Update tickets
    const r1 = await db.collection('tickets').updateMany(
      { $or: [{ vendorId: { $exists: false } }, { vendorId: null }, { vendorId: undefined } ] },
      { $set: { vendorId: vId } }
    );
    console.log('Updated tickets:', r1.modifiedCount);

    // Update existing bookings
    const r2 = await db.collection('bookings').updateMany(
      { $or: [{ vendorId: { $exists: false } }, { vendorId: null }, { vendorId: undefined } ] },
      { $set: { vendorId: vId } }
    );
    console.log('Updated bookings:', r2.modifiedCount);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
