import createUsersTable from './user';
import { seedUsers, seedCarAds } from '../seeders';
import createCarsTable from './car';
import createOrdersTable from './order';
import createFlagsTable from './flag';

(async () => {
  try {
    await createUsersTable();
    await seedUsers();
    await createCarsTable();
    await seedCarAds();
    await createOrdersTable();
    await createFlagsTable();
  } catch (error) {
    
    console.log(error);
  }
})();