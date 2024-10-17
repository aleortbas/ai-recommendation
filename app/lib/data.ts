import { formatCurrency } from './utils';
import getConnection from './db';

const conn = getConnection()

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a reponse for demo purposes.
    // Don't do this in real life :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

/*     const data = await sql<Revenue>`SELECT * FROM revenue`; */

    const res = await conn.query('SELECT * FROM users');


/*     const users = res.rows.map((user) => ({
      ...user,
      amount: formatCurrency(us)
    })) */

    // console.log('Data fetch complete after 3 seconds.');

    return console.log(res);
    ;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
