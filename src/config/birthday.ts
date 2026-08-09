export interface PhotoItem {
  src: string;
  caption: string;
  location?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface StoryMoment {
  tagline: string;
  title: string;
  description: string;
  date?: string;
  image: string;
}

export interface BirthdayConfig {
  name: string;
  birthdayDate: string; // ISO format or string parsing target e.g. "2026-08-10T00:00:00"
  openingSubtitle: string;
  openingTitle: string;
  heroGreeting: string;
  heroSubtext: string;

  birthdayMessageTitle: string;
  birthdayMessageBody: string[];

  storyMoments: StoryMoment[];
  photos: PhotoItem[];

  loveLetterTitle: string;
  loveLetterBody: string[];
  loveLetterSignoff: string;

  finalWishTitle: string;
  finalWishMessage: string[];
  finalSignoff: string;

  secretSurpriseTeaser: string;
  secretSurpriseContent: string[];

  reasonsWhyILoveYou: { id: number; title: string; reason: string }[];

  musicSrc: string;
  bgHeroImage: string;
}

export const birthday: BirthdayConfig = {
  name: "Ruhi",
  birthdayDate: "2026-08-10T00:00:00",

  openingSubtitle: "SOMETHING SPECIAL FOR YOU",
  openingTitle: "RUHI\nI MADE SOMETHING\nJUST FOR YOU.",

  heroGreeting: "Happy Birthday,\nRuhi.",
  heroSubtext: "Today is about you.",

  birthdayMessageTitle: "To the woman who makes ordinary days feel extraordinary.",
  birthdayMessageBody: [
    "Ruhi,",
    "Today is more than just your birthday.",
    "It's a reminder of how deeply grateful I am to have you in my life.",
    "Every little moment with you—every shared laugh, late-night conversation, and spontaneous adventure—means more to me than words could ever explain.",
    "I hope this year brings you everything your heart has been wishing for, and so much more.",
    "Happy Birthday, my love."
  ],

  storyMoments: [
    {
      tagline: "INSTAGRAM REQUEST",
      title: "Who Are You?",
      description: "It all started with a simple notification—a follow request from you on Instagram. Before accepting, I sent a message asking, 'Who are you?' Little did I know that single question would unlock the best chapter of my life.",
      date: "Chapter I • The Beginning",
      image: "/images/ruhi-ig.png"
    },
    {
      tagline: "LATE NIGHT TALKS",
      title: "From Strangers to Best Friends",
      description: "That curious first conversation turned into hours of endless talking, shared secrets, late-night laughs, and a bond that grew stronger with every passing day.",
      date: "Chapter II • The Spark",
      image: "/images/ruhi-01.jpg"
    },
    {
      tagline: "FOREVER & ALWAYS",
      title: "Sealed in Marriage",
      description: "What began as a random Instagram request led us to the sacred altar. Hand in hand, we turned our beautiful love story into a lifetime promise of marriage.",
      date: "Chapter III • Our Wedding Day",
      image: "/images/ruhi-wedding.png"
    }
  ],

  photos: [
    {
      src: "/images/ruhi-01.jpg",
      caption: "One of my favorite days with you.",
      location: "Warm Candlelight",
      aspect: "portrait"
    },
    {
      src: "/images/ruhi-02.jpg",
      caption: "That effortless, radiant smile.",
      location: "Sunset Walks",
      aspect: "landscape"
    },
    {
      src: "/images/ruhi-03.jpg",
      caption: "A moment I wish I could replay over and over.",
      location: "Quiet Evenings",
      aspect: "square"
    },
    {
      src: "/images/ruhi-hero.png",
      caption: "Just us, against the world.",
      location: "Golden Hour",
      aspect: "portrait"
    }
  ],

  loveLetterTitle: "A LETTER FOR YOU",
  loveLetterBody: [
    "Dear Ruhi,",
    "If I could give you one gift today, it would be the ability to see yourself through my eyes. Maybe then you would truly understand how deeply special and priceless you are to me.",
    "You have become the heart of my daily happiness, my calm in every storm, and the person I look forward to sharing everything with.",
    "I don't know what the future holds, but I know without a doubt that I want every chapter of it with you—the grand adventures and the peaceful, ordinary afternoons alike.",
    "On your birthday, I want to make sure you remember:",
    "I appreciate you. I admire you. I love you."
  ],
  loveLetterSignoff: "Happy Birthday, Ruhi. ❤️",

  finalWishTitle: "May this year bring you more happiness, more laughter, and everything you've been wishing for.",
  finalWishMessage: [
    "You deserve all the magic the universe has to offer.",
    "Thank you for being the most incredible partner and best friend."
  ],
  finalSignoff: "Always yours.",

  secretSurpriseTeaser: "WAIT...\nI HAVE ONE MORE THING FOR YOU.",
  secretSurpriseContent: [
    "If you're still reading this...",
    "then I guess I successfully stole a few quiet minutes of your birthday.",
    "But honestly...",
    "In every lifetime, in every story,",
    "I'd choose you again.",
    "And again.",
    "And again.",
    "Happy Birthday, Ruhi. ❤️"
  ],

  reasonsWhyILoveYou: [
    {
      id: 1,
      title: "Your Radiant Smile",
      reason: "The way your eyes light up whenever you laugh can instantly turn my worst days into pure sunshine."
    },
    {
      id: 2,
      title: "How You Care",
      reason: "Your kindness and gentle heart towards everyone around you make me admire you more every single day."
    },
    {
      id: 3,
      title: "Our Inside Jokes",
      reason: "No one makes me laugh quite like you do. We can share a look across a room and instantly know what the other is thinking."
    },
    {
      id: 4,
      title: "Your Strength & Grace",
      reason: "You handle every challenge with such elegance, patience, and poise. You inspire me to be a better person."
    },
    {
      id: 5,
      title: "Late Night Talks",
      reason: "From that first 'Who are you?' message on Instagram to endless midnight conversations, talking to you is my favorite pastime."
    },
    {
      id: 6,
      title: "My Safe Haven",
      reason: "In a chaotic world, being next to you feels like home. You are my calm, my peace, and my comfort zone."
    },
    {
      id: 7,
      title: "Your Endless Support",
      reason: "You believe in me even when I doubt myself. Knowing you are by my side gives me confidence for everything."
    },
    {
      id: 8,
      title: "Simply Being You",
      reason: "I love every single detail of who you are—your soft heart, your laugh, your voice, and your presence in my life."
    }
  ],

  musicSrc: "/music/song.mp3",
  bgHeroImage: "/images/ruhi-hero.png"
};
