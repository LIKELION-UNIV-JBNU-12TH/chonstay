type MarkerColor = 'RED' | 'YELLOW' | 'GREEN' | 'BLUE' | 'PURPLE';

type Category = {
  [key in MarkerColor]: string;
};

type Gender = 'Male' | 'Female';

interface ImageUri {
  id?: number;
  uri: string;
}

interface Marker {
  id: number;
  latitude: number;
  longitude: number;
  color: MarkerColor;
  score: number;
}

interface Post extends Marker {
  title: string;
  address: string;
  date: Date | string;
  description: string;
}

interface Profile {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  residence: string;
  birth: string;
  age: number;
  gender: Gender;
}

export type {MarkerColor, Category, Gender, ImageUri, Marker, Post, Profile};
