'use client';

import React, { useState } from 'react';
import {
  Button,
  Card,
  DateField,
  Label,
} from '@heroui/react';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const BookingCard = ({ destination = {} }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;



  const [departureDate, setDepartureDate] = useState(null);

  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
  } = destination;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate,
    };
const res = await fetch ('http://localhost:5000/booking', {
  method: 'POST',
  headers: {'Content-Type': 'application/json',},
  body: JSON.stringify(bookingData),
}); 
const data = await res.json();
console.log(data);
    
  };

  return (
    <Card className="rounded-none border mt-5 p-5 space-y-3">
      <p className="text-sm text-muted">Starting from</p>

      <h2 className="text-3xl font-bold text-cyan-500">
        ${price}
      </h2>

      <p className="text-sm text-muted">per person</p>

      <DateField
        onChange={setDepartureDate}
        className="w-full"
        name="date"
      >
        <Label>Departure Date</Label>

        <DateField.Group>
          <DateField.Input>
            {(segment) => (
              <DateField.Segment segment={segment} />
            )}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-cyan-500 text-white"
      >
       <Link href='/my-bookings'>Book now</Link>
      </Button>
    </Card>
  );
};

export default BookingCard;