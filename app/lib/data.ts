import { formatCurrency } from './utils';
import getConnection from './db';

const conn = getConnection()

export async function fetchRevenue() {

  try {

    const res = await conn.query('SELECT * FROM users');
    return console.log(res);
    ;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
