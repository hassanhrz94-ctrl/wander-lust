'use client'

import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { IoTrashBin } from 'react-icons/io5';

const BookingCancelAlert = ({ bookingId }) => {

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);
         window.location.reload();
  };

  return (
    <div>
      <AlertDialog>
        <Button
          className="rounded-none border-red-500 text-red-500"
          variant="outline"
        >
          <IoTrashBin /> Cancel
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Cancel Project permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                Are you sure you want to delete?
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Close
                </Button>

                <Button
                  onClick={handleDelete}
                  slot="close"
                  variant="danger"
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingCancelAlert;