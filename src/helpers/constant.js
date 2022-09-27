import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const APARTMENT_DIRECTION = {
  NORTH: "NORTH",
  NORTHEAST: "NORTHEAST",
  EAST: "EAST",
  SOUTHEAST: "SOUTHEAST",
  SOUTH: "SOUTH",
  SOUTHWEST: "SOUTHWEST",
  WEST: "WEST",
  NORTHWEST: "NORTHWEST",
};

export const APARTMENT_STATUS = {
  AVAILABLE: "AVAILABLE",
  RENTED: "RENTED",
  SOLD: "SOLD",
  UNAVAILABLE: "UNAVAILABLE",
};

export const APARTMENT_RENT_SCHEMA = {
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
};

export const MARITAL_STATUS = {
  SINGLE: "SINGLE",
  TAKEN: "TAKEN",
  MARRIED: "MARRIED",
  DIVORCED: "DIVORCED",
  JONES: "JONES",
};

export const DUMMY_LIST = [
  {
    id: 1,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 2,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 3,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 4,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 5,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
];

export const URL_PREFIX = "http://localhost:3344/final/";
