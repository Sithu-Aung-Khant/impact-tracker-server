// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create townships
  const townships = [
    {
      name: 'Yangon',
      region: 'Yangon Region',
      latitude: 16.8661,
      longitude: 96.1951,
    },
    {
      name: 'Mandalay',
      region: 'Mandalay Region',
      latitude: 21.9588,
      longitude: 96.0891,
    },
    {
      name: 'Naypyidaw',
      region: 'Naypyidaw Union Territory',
      latitude: 19.7633,
      longitude: 96.0785,
    },
    {
      name: 'Bago',
      region: 'Bago Region',
      latitude: 17.335,
      longitude: 96.4815,
    },
    {
      name: 'Mawlamyine',
      region: 'Mon State',
      latitude: 16.491,
      longitude: 97.626,
    },
    {
      name: 'Taunggyi',
      region: 'Shan State',
      latitude: 20.7895,
      longitude: 97.0376,
    },
    {
      name: 'Pathein',
      region: 'Ayeyarwady Region',
      latitude: 16.7792,
      longitude: 94.7321,
    },
    {
      name: 'Monywa',
      region: 'Sagaing Region',
      latitude: 22.1086,
      longitude: 95.1358,
    },
  ];

  for (const township of townships) {
    await prisma.township.upsert({
      where: { name: township.name },
      update: {},
      create: township,
    });
  }

  // Create aid types
  const aidTypes = [
    {
      name: 'Food Kits',
      description: 'Basic food supplies including rice, oil, and canned goods',
    },
    {
      name: 'Educational Materials',
      description: 'Books, stationery, and learning resources',
    },
    {
      name: 'Medical Supplies',
      description: 'First aid kits, medicines, and medical equipment',
    },
    {
      name: 'Hygiene Kits',
      description: 'Soap, sanitizer, toothpaste, and other hygiene products',
    },
    {
      name: 'Shelter Materials',
      description: 'Tarpaulins, ropes, and basic construction materials',
    },
  ];

  for (const aidType of aidTypes) {
    await prisma.aidType.upsert({
      where: { name: aidType.name },
      update: {},
      create: aidType,
    });
  }

  // Create field workers
  const fieldWorkers = [
    { name: 'Aung Min', email: 'aungmin@example.com', phone: '+95912345678' },
    { name: 'Thiri Aung', email: 'thiri@example.com', phone: '+95923456789' },
    { name: 'Kyaw Zaw', email: 'kyawzaw@example.com', phone: '+95934567890' },
    { name: 'Su Su', email: 'susu@example.com', phone: '+95945678901' },
    { name: 'Tun Tun', email: 'tuntun@example.com', phone: '+95956789012' },
  ];

  for (const worker of fieldWorkers) {
    await prisma.fieldWorker.upsert({
      where: { email: worker.email },
      update: {},
      create: worker,
    });
  }

  // Get created records for reference
  const createdTownships = await prisma.township.findMany();
  const createdAidTypes = await prisma.aidType.findMany();
  const createdFieldWorkers = await prisma.fieldWorker.findMany();

  // Create sample distributions
  const distributions = [
    {
      date: new Date('2023-04-15'),
      townshipId:
        createdTownships.find(
          (t: { name: string; id: number }) => t.name === 'Yangon'
        )?.id ?? 0,
      aidTypeId:
        createdAidTypes.find(
          (a: { name: string; id: number }) => a.name === 'Food Kits'
        )?.id ?? 0,
      fieldWorkerId:
        createdFieldWorkers.find(
          (f: { name: string; id: number }) => f.name === 'Aung Min'
        )?.id ?? 0,
      quantity: 50,
      notes: 'Distributed in eastern district',
    },
    {
      date: new Date('2023-04-14'),
      townshipId:
        createdTownships.find(
          (t: { name: string; id: number }) => t.name === 'Mandalay'
        )?.id ?? 0,
      aidTypeId:
        createdAidTypes.find(
          (a: { name: string; id: number }) =>
            a.name === 'Educational Materials'
        )?.id ?? 0,
      fieldWorkerId:
        createdFieldWorkers.find(
          (f: { name: string; id: number }) => f.name === 'Thiri Aung'
        )?.id ?? 0,
      quantity: 30,
      notes: 'School supplies for three local schools',
    },
    {
      date: new Date('2023-04-13'),
      townshipId:
        createdTownships.find(
          (t: { name: string; id: number }) => t.name === 'Bago'
        )?.id ?? 0,
      aidTypeId:
        createdAidTypes.find(
          (a: { name: string; id: number }) => a.name === 'Medical Supplies'
        )?.id ?? 0,
      fieldWorkerId:
        createdFieldWorkers.find(
          (f: { name: string; id: number }) => f.name === 'Kyaw Zaw'
        )?.id ?? 0,
      quantity: 25,
      notes: 'First aid kits for community health workers',
    },
    {
      date: new Date('2023-04-12'),
      townshipId:
        createdTownships.find(
          (t: { name: string; id: number }) => t.name === 'Naypyidaw'
        )?.id ?? 0,
      aidTypeId:
        createdAidTypes.find(
          (a: { name: string; id: number }) => a.name === 'Food Kits'
        )?.id ?? 0,
      fieldWorkerId:
        createdFieldWorkers.find(
          (f: { name: string; id: number }) => f.name === 'Su Su'
        )?.id ?? 0,
      quantity: 40,
      notes: 'Emergency food supplies',
    },
    {
      date: new Date('2023-04-11'),
      townshipId:
        createdTownships.find(
          (t: { name: string; id: number }) => t.name === 'Mawlamyine'
        )?.id ?? 0,
      aidTypeId:
        createdAidTypes.find(
          (a: { name: string; id: number }) => a.name === 'Hygiene Kits'
        )?.id ?? 0,
      fieldWorkerId:
        createdFieldWorkers.find(
          (f: { name: string; id: number }) => f.name === 'Tun Tun'
        )?.id ?? 0,
      quantity: 35,
      notes: 'COVID-19 prevention supplies',
    },
  ];

  // Create many more sample distributions to have realistic data
  // Generate distributions for each township and aid type
  for (const township of createdTownships) {
    for (const aidType of createdAidTypes) {
      // Skip if we already have this combination in our sample data
      if (
        distributions.some(
          (d) => d.townshipId === township.id && d.aidTypeId === aidType.id
        )
      ) {
        continue;
      }

      // Create between 1-5 distributions for this township/aid type combination
      const count = Math.floor(Math.random() * 5) + 1;

      for (let i = 0; i < count; i++) {
        const randomWorker =
          createdFieldWorkers[
            Math.floor(Math.random() * createdFieldWorkers.length)
          ];
        const randomQuantity = Math.floor(Math.random() * 50) + 10; // 10-60 items
        const randomDate = new Date();
        randomDate.setDate(
          randomDate.getDate() - Math.floor(Math.random() * 30)
        ); // Last 30 days

        distributions.push({
          date: randomDate,
          townshipId: township.id,
          aidTypeId: aidType.id,
          fieldWorkerId: randomWorker.id,
          quantity: randomQuantity,
          notes: `Regular distribution of ${aidType.name}`,
        });
      }
    }
  }

  // Insert all distributions
  await prisma.distribution.createMany({
    data: distributions,
    skipDuplicates: true,
  });

  console.log(`Database has been seeded.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
