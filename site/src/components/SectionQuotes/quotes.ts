import type { QuoteProps } from './Quote'

export const quotes: QuoteProps[] = [
  {
    authorName: 'Tim Griesser',
    authorTitle: 'Knex.js creator, Cypress Staff Eng',
    avatar: '/img/avatars/tgriesser.jpeg',
    link: 'https://github.com/kysely-org/kysely/issues/352#issue-1612115150',
    text: "👋 First just wanted to say this project looks awesome! Pretty close to what I wish Knex was if I started it now, with the affordances of modern TypeScript instead of 10 years ago when we were stuck in ES5 and Promises weren't even really an official language construct yet.",
  },
  {
    authorName: 'Orta Therox',
    authorTitle: 'Ex-TypeScript team',
    avatar: '/img/avatars/orta.jpeg',
    link: 'https://discord.com/channels/890118421587578920/890118421587578925/1037692748825903114',
    text: "👋 been using Kysely for a few days in Deno and Node, just wanted to say it's been going really well and it feels like a nice abstraction - kudos!",
  },
  {
    authorName: 'Niels Sandholt Busch',
    authorTitle: 'Maersk SWE',
    avatar: '/img/avatars/niels.png',
    link: 'https://github.com/kysely-org/kysely/issues/320#issuecomment-2183966432',
    text: 'We are using Kysely in production at Maersk inventory control!',
  },
  {
    authorName: 'Guðmundur Bjarni Olafsson',
    authorTitle: 'Vercel Principal SWE',
    avatar: '/img/avatars/gudmundur.png',
    link: 'https://x.com/gudmundur/status/1740075197179605250',
    text: "I made a strong recommendation internally for using Kysely for a greenfield service that's in the works. Looks very solid. 👌🏻",
  },
  {
    authorName: 'Catalin Pit',
    authorTitle: 'Documenso SWE',
    avatar: '/img/avatars/catalin.png',
    link: 'https://x.com/catalinmpit/status/1837850745242104318',
    text: 'Kysely is fantastic! We use it at @documenso with Prisma.',
  },
  {
    authorName: 'Dax "thdxr" Raad',
    authorTitle: 'SST core team, Terminal co-founder',
    avatar: '/img/avatars/daxraad.jpeg',
    link: 'https://x.com/thdxr/status/1566512393500463104',
    text: "really excited to see Kysely get more attention - been banging this drum for a while and we've integrated pretty deeply with it at SST incidentally its codebase remains the best Typescript codebase I have ever seen - worth poking around",
  },
  {
    authorName: 'Julius Marminge',
    authorTitle: 'tRPC & create-t3-app core team',
    avatar: '/img/avatars/julius.jpeg',
    link: 'https://x.com/jullerino/status/1676687249998598148',
    text: 'Utterly astounded by how Kysely manages to make all of this typesafe. Seems like no matter how complex you get, it can infer it correctly.',
  },
  {
    authorName: 'Gal Schlezinger',
    authorTitle: 'fnm creator, Vercel SWE',
    avatar: '/img/avatars/gal.jpeg',
    link: 'https://x.com/galstar/status/1740049724810695135',
    text: 'I love SQL, and I love migrations, most tools don’t provide good migration tools and fine grained control like Kysely which is why it’s my favorite.',
  },
  {
    authorName: 'Yusuke "yusukebe" Wada',
    authorTitle: 'Hono creator, Cloudflare DevRel',
    avatar: '/img/avatars/yusuke.jpeg',
    link: 'https://x.com/yusukebe/status/1581775103167066112',
    text: 'Kysely is great. D1 will be great. This is great.',
  },
  {
    authorName: 'Harminder Virk',
    authorTitle: 'AdonisJS creator, Medusa SWE',
    avatar: '/img/avatars/harminder.png',
    link: 'https://x.com/AmanVirk1/status/1753348028139024628',
    text: 'If not Lucid, Kysely is what I would recommend everyone use. It presents itself as a type-safe SQL query builder and delivers 100% on that promise.',
  },
  {
    authorName: '"pilcrow"',
    authorTitle: 'Lucia creator',
    avatar: '/img/avatars/pilcrowonpaper.jpeg',
    link: 'https://x.com/pilcrowonpaper/status/1675135710981165057',
    text: "Ok, so I'm not a big fan of Drizzle. I don't like how I have to import everything when declaring schemas and queries, and I just prefer the simplicity and the overall API of Kysely.",
  },
  {
    authorName: 'Ben Holmes',
    authorTitle: 'Astro SWE',
    avatar: '/img/avatars/benholmes.jpeg',
    link: 'https://x.com/BHolmesDev/status/1683505989465645056',
    text: 'I really like Prisma for schemas and Kysely for querying. Drizzle feels... younger for schemas, but also quite nice',
  },
  {
    authorName: 'Theo "t3dotgg" Browne',
    authorTitle: 'Uploadthing creator, Ping.gg CEO',
    avatar: '/img/avatars/theo.jpeg',
    link: 'https://x.com/t3dotgg/status/1649539910037311495',
    text: 'kysely is dope too. Drizzle and kysely are the frontrunners for "new db tools that really understand JS needs" atm',
  },
  {
    authorName: 'Shoubhit "nexxel" Dash',
    authorTitle: 'create-t3-app author, Leapflow CTO',
    avatar: '/img/avatars/nexxel.jpeg',
    link: 'https://x.com/nexxeln/status/1676975946606452737',
    text: 'kysely is great btw',
  },
  {
    authorName: 'Lee "leerob" Robinson',
    authorTitle: 'Vercel VP Product',
    avatar: '/img/avatars/leerob.jpeg',
    link: 'https://x.com/leeerob/status/1576929372811849730',
    text: 'Type-safe SQL queries with PlanetScale and Kysely 😍',
  },
  {
    authorName: 'Nicholas Griffin',
    authorTitle: 'sqs-consumer maintainer, BBC SWE',
    avatar: '/img/avatars/nicholas.jpeg',
    link: 'https://x.com/ngriffin_uk/status/1599891725404676096',
    text: "I don't actually like prisma that much, I prefer Kysely, not an ORM though.",
  },
  {
    authorName: 'Alberto "gimenete" Gimeno',
    authorTitle: 'Railway SWE',
    avatar: '/img/avatars/alberto.jpeg',
    link: 'https://x.com/gimenete/status/1653121152854765569',
    text: "I'm a happy Kysely user. It's great to see that the code I'm writing now can work with serverless PostgreSQL now!",
  },
  {
    authorName: 'Guga Guichard',
    authorTitle: 'string-ts creator, Seasoned Partner',
    avatar: '/img/avatars/guga.png',
    link: 'https://x.com/gugaguichard/status/1844896761468551457',
    text: "I've been seeing a lot of discussions about ORMs vs raw SQL. What about strongly typed SQL query builders? Kysely is in the sweet spot! Best DX with total freedom I've seen in decades.",
  },
  {
    authorName: 'Bereket "Bek Cru" Engida',
    authorTitle: 'better-auth creator',
    avatar: '/img/avatars/bekacru.png',
    link: 'https://x.com/imbereket/status/1691066440294481920',
    text: 'I don’t think they have similar goals from what I see. Drizzle is more dedicated into marketing and having every user possible like prisma but kysely kinda just don’t care about that for most part. And in my experience prisma + kysley is better than drizzle.',
  },
  {
    authorName: 'Ross Coundon',
    authorTitle: 'leadent digital CTO',
    avatar: '/img/avatars/ross.jpeg',
    link: 'https://x.com/rcoundon/status/1676244054109978624',
    text: "I particularly like Kysely here, it's a type-safe query builder and as such doesn't enforce the specifics of an ORM on you, therefore I feel, in the medium-to-long term, it'll save you the time and effort of working around ORM-specific and enforced structures/approaches",
  },
  {
    authorName: 'Johan Eliasson',
    authorTitle: 'OneLab CTO',
    avatar: '/img/avatars/johan.jpeg',
    link: 'https://x.com/elitasson/status/1642090379066449920',
    text: "Instead of Prisma, I'm testing Kysely, Kysely Codegen, and Atlas. Works great.",
  },
  {
    authorName: 'R. Alex Anderson',
    authorTitle: 'Thorium Nova creator',
    avatar: '/img/avatars/alexanderson.jpeg',
    link: 'https://x.com/ralex1993/status/1677632989260390403',
    text: 'Shout out to Kysely for adding extensive JSDoc comments above the methods. It makes it much easier to figure out how to use it the way I want without having to dig into the docs. (though the docs are vv good too)',
  },
  {
    authorName: 'Mehul Mohan',
    authorTitle: 'Codedamn Founder',
    avatar: '/img/avatars/mehul.jpeg',
    text: 'We went with query builder because we did not have more time to waste on ORMs. ORMs might be great but we have the technical capability to pull off just using a query builder. However, we type safety and sanitization for DX and security was a must - hence Kysely.',
    link: 'https://x.com/mehulmpt/status/1650480912759685120',
  },
  {
    authorName: 'Sam Cook',
    authorTitle: 'Gamma.io SWE',
    avatar: '/img/avatars/samcook.jpeg',
    link: 'https://x.com/sjc5_/status/1623210443874639873',
    text: 'Kysely is amazing.',
  },
  {
    authorName: 'Gannon Hall',
    authorTitle: 'Astro Labs Founder',
    avatar: '/img/avatars/gannon.jpeg',
    link: 'https://x.com/gannonh/status/1653109305368018944',
    text: 'Vercel just announced native Postgres support and published Prisma and Kysely templates. I like the DX of Prisma and the type safety of Kysely so I use both via prisma-kysely.',
  },
  {
    authorName: 'Alisson "thelinuxlich" C.Agiani',
    authorTitle: 'Opensourcerer',
    avatar: '/img/avatars/sommelier.jpeg',
    link: 'https://x.com/solinvictvs/status/1615549659115655169',
    text: 'Kysely is superior and with each release gets even more awesome',
  },
  {
    authorName: 'Marvin',
    authorTitle: 'Indie Hacker',
    avatar: '/img/avatars/marvin.png',
    link: 'https://x.com/marvr_/status/1833070144064479434',
    text: "I've been saying it many times already, but it's probably one of the best additions to my tech stack. I enjoy writing SQL since I know Kysely 😆",
  },
  {
    authorName: 'Jiří "Capaj" Špác',
    authorTitle: 'Langtail SWE',
    avatar: '/img/avatars/capaj.png',
    link: 'https://x.com/capajj/status/1824003221397885343',
    text: 'Kysely is awesome',
  },
]