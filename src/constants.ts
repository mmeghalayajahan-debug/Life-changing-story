import { Post, TeamMember } from './types';

export const BLOG_POSTS: Post[] = [
  {
    id: '1',
    title: 'পল্লি বাংলার সাহায্যকারী হাত',
    excerpt: 'কীভাবে একটি ছোট গ্রামীণ লাইব্রেরি একটি প্রত্যন্ত গ্রামের ২০০ শিশুর জীবন বদলে দিয়েছে।',
    content: 'বিস্তারিত কন্টেন্ট এখানে...',
    author: 'প্রতিষ্ঠাতা',
    date: '১০ মে, ২০২৪',
    image: 'https://picsum.photos/seed/community/800/600',
    category: 'Humanitarian',
    tags: ['শিক্ষা', 'সমাজ', 'প্রভাব'],
  },
  {
    id: '2',
    title: 'সিলেটের চা বাগানের কুয়াশা',
    excerpt: 'সিলেটের পান্না সবুজ পাহাড়ের মধ্য দিয়ে একটি যাত্রা, যেখানে প্রতিটি কাপ চায়ের সাথে গল্প তৈরি হয়।',
    content: 'বিস্তারিত কন্টেন্ট এখানে...',
    author: 'ভ্রমণ গাইড',
    date: '১২ মে, ২০২৪',
    image: 'https://picsum.photos/seed/tea/800/600',
    category: 'Travel',
    tags: ['বাংলাদেশ', 'প্রকৃতি', 'ভ্রমণ'],
  },
  {
    id: '3',
    title: 'সবার জন্য পানি: একটি টেকসই প্রকল্প',
    excerpt: 'বিশুদ্ধ পানীয় জল নিশ্চিত করার জন্য খরাপ্রবণ এলাকায় গভীর নলকূপ স্থাপন।',
    content: 'বিস্তারিত কন্টেন্ট এখানে...',
    author: 'লিড কন্টেন্ট ক্রিয়েটর',
    date: '১৫ মে, ২০২৪',
    image: 'https://picsum.photos/seed/water/800/600',
    category: 'Humanitarian',
    tags: ['স্বাস্থ্য', 'টেকসই'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'সারা আহমেদ',
    role: 'প্রতিষ্ঠাতা',
    bio: 'গল্প বলার মাধ্যমে তৃণমূল পর্যায়ে মানুষের জীবন পরিবর্তনে নিবেদিত।',
    image: 'https://picsum.photos/seed/sarah/400/400',
  },
  {
    id: '2',
    name: 'রাহাত খান',
    role: 'লিড কন্টেন্ট ক্রিয়েটর',
    bio: 'শব্দ এবং ফটোগ্রাফির মাধ্যমে মানুষের স্থিতিস্থাপকতার সারমর্ম তুলে ধরছেন।',
    image: 'https://picsum.photos/seed/rahat/400/400',
  },
];
