import { join } from "path";
import IPFS from "ipfs";
import IPFSFactory from "ipfsd-ctl";
import exitHook from "async-exit-hook";

export const startDaemon = async () => {
  try {
    const port = 9090;
    const repoPath = join(__dirname, "ipfs_data");
    const server = IPFSFactory.createServer(port);
    const f = IPFSFactory.create({ remote: true, port, type: "js" });

    await server.start();
    console.log(`IPFS Server started!`);

    const ipfsd = await f.spawn({ repoPath });
    console.log(`IPFS Node spawned!`);
    const id = await ipfsd.api.id();

    console.log(id);
    await ipfsd.api.swarm.connect(
      "/dns4/vn-hcm-m1.nodes.vgm.me/tcp/4001/ipfs/QmPJZT9FBQBGPLp5rMaYaubsTH6Jgt5tGVh1ATxrAXfnwk",
      (err: any) => {
        if (err) {
          console.log(`Swarm connect error: ${err}`);
        }
        console.log(`Swarm connect!`);
      }
    );

    const data = await ipfsd.api.get(
      "QmbVS1ooDETFgxFyVoXyVxcXFcF5Jc3PWZXf2cvVfUHerm/playlist.m3u8"
    );
    console.log(`ipfs get: ${JSON.stringify(data)}`);

    exitHook(async () => {
      console.log(`Exitting...`);
      await ipfsd.stop();
      await server.stop();
      console.log(`Stopped IPFS...`);
    });
  } catch (err) {
    console.log(`Error: ${err.message}`, err);
  }
};

export const startIPFS = async () => {
  const repo = join(__dirname, "ipfs_data");
  const node = await IPFS.create({
    repo,
    config: {
      Addresses: {
        Swarm: [
          "/ip4/0.0.0.0/tcp/4002",
          "/ip4/127.0.0.1/tcp/4003/ws",
          "/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star"
        ],
        Gateway: "/ip4/0.0.0.0/tcp/9090"
      },
      Bootstrap: [
        "/dns4/vn-hcm-m1.nodes.vgm.me/tcp/4001/ipfs/QmPJZT9FBQBGPLp5rMaYaubsTH6Jgt5tGVh1ATxrAXfnwk",
        "/ip4/104.236.176.52/tcp/4001/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z",
        "/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
        "/ip4/104.236.179.241/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
        "/ip4/162.243.248.213/tcp/4001/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm",
        "/ip4/128.199.219.111/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
        "/ip4/104.236.76.40/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
        "/ip4/178.62.158.247/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
        "/ip4/178.62.61.185/tcp/4001/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3",
        "/ip4/104.236.151.122/tcp/4001/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx",
        "/ip6/2604:a880:1:20::1f9:9001/tcp/4001/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z",
        "/ip6/2604:a880:1:20::203:d001/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
        "/ip6/2604:a880:0:1010::23:d001/tcp/4001/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm",
        "/ip6/2400:6180:0:d0::151:6001/tcp/4001/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
        "/ip6/2604:a880:800:10::4a:5001/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
        "/ip6/2a03:b0c0:0:1010::23:1001/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
        "/ip6/2a03:b0c0:1:d0::e7:1/tcp/4001/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3",
        "/ip6/2604:a880:1:20::1d9:6001/tcp/4001/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx",
        "/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic",
        "/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6"
      ]
    }
  });

  await node.swarm.connect(
    "/dns4/vn-hcm-m1.nodes.vgm.me/tcp/4001/ipfs/QmPJZT9FBQBGPLp5rMaYaubsTH6Jgt5tGVh1ATxrAXfnwk",
    (err: any) => {
      if (err) {
        console.log(`Swarm connect error: ${err}`);
      }
      console.log(`Swarm connect!`);
    }
  );
  return node;
};