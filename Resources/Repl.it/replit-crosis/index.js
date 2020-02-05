import { Client } from '@replit/crosis';

const client = new Client();

const token = await fetch(TOKEN_URL).then((r) => r.text());

await client.connect({ token });

const channel = client.openChannel({
  name: 'evaller',
  service: 'eval',
});

channel.on('cmd', (cmd) => {
  console.log(cmd);
});
channel.send({ eval: '1+1' });

