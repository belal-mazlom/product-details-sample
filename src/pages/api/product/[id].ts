import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(200).json({
      title: 'CAPRI TRIPLE WHITE',
      price: 268,
      size: [7, 8, 9, 10, 11, 12, 13],
      images: [
        {
          alt: 'Capri Triple White side view',
          url: '/images/Capri-Triple-White-1.jpg',
        },
        {
          alt: 'Capri Triple White top view',
          url: '/images/Capri-Triple-White-2.jpg',
        },
        {
          alt: 'A Man Wearing Capri Triple White',
          url: '/images/Capri-Triple-White-3.jpg',
        },
      ],
      desc: `Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks  fresh or curiously banged up: your choice. Snag yourself a pair before you go out of style.`,
    });
  }, 900);
};
