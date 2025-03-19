"use client";

import React, { useState } from "react";
import styles from "./checkout.module.scss";
import { useCart } from "@/providers/cart-provider";
import Button from "@/components/button/Button";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const { cart } = useCart();

  const sendEmail = async (e) => {
    e.preventDefault();

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message: cart.toString() }),
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={sendEmail}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default Checkout;