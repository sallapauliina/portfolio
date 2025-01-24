import { LessonType } from "@prisma/client";

export const lessons = [
  {
    name: "Yoga Basics Morning",
    type: LessonType.Normal,
    startDate: new Date("2024-07-21"),
    startTime: "09:00",
    endTime: "10:00",
    description:
      "A session to start your day with energy and calmness. Experience a relaxing start to your day.",
    price: 20,
    joinedUsers: ["nipa.ojala@gmail.com", "skat3.homo@gmail.com"],
  },
  {
    name: "Yoga Basics Afternoon",
    type: LessonType.Normal,
    startDate: new Date("2024-07-21"),
    startTime: "13:00",
    endTime: "15:00",
    description: "An afternoon session to rejuvenate your body and mind.",
    price: 30,
    joinedUsers: [],
  },
  {
    name: "Yoga Basics Morning",
    type: LessonType.Retrite,
    startDate: new Date("2024-07-21"),
    endDate: new Date("2024-07-24"),
    startTime: "09:00",
    endTime: "10:00",
    description:
      "A session to start your day with energy and calmness. Experience a relaxing start to your day.",
    price: 20,
    joinedUsers: [],
  },
];

export const users = [
  {
    email: "nipa.ojala@gmail.com",
  },
  {
    email: "skat3.homo@gmail.com",
  },
];
