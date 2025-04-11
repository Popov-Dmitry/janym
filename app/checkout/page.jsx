"use client";

import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import { useCart } from "@/providers/cart-provider";
import Button from "@/components/button/Button";
import { getProductsFromCart } from "@/utils/db-requests-client";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { cart } = useCart();
  const [cartDetails, setCartDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: cartDetails
        }),
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchCartDetails = async () => {
      const cartDetails = await getProductsFromCart(cart);
      setCartDetails(cartDetails);
      setIsLoading(false);
    };
    fetchCartDetails();
  }, [cart]);

  if (success) {
    return (
      <div className={styles.successContainer}>
        <h2>Thank you for your order!</h2>
        <p>We&apos;ve received your information and will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <form onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Your phone number"
            value={formData.number}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <Button 
          type="submit" 
          text={isSubmitting ? "Processing..." : "Complete Order"}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default Checkout;