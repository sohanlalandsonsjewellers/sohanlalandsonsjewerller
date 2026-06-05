import React, { useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useCart } from "../../../contexts/CartProvider";
import { useAuth } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../../api/orderService";

export default function CheckoutPage() {

  const { items: contextItems, total: contextTotal, clear } = useCart();

  const { user, token } = useAuth() as any;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const getCartData = () => {

    if (contextItems.length > 0)
      return {
        items: contextItems,
        total: contextTotal
      };

    const cart =
      JSON.parse(
        localStorage.getItem("sl_cart") || "[]"
      );

    const total =
      cart.reduce(
        (sum: number, item: any) =>
          sum +
          item.price *
          item.qty,
        0
      );

    return {
      items: cart,
      total
    };

  };

  const { items, total } =
    getCartData();

  /*
  same calculation
  bill / whatsapp / checkout
  */

  const subtotal =
    Number(total || 0);

  const gst =
    Number(
      subtotal * 0.03
    );

  const shipping =
    subtotal > 0
      ? 100
      : 0;

  const finalTotal =
    subtotal +
    gst +
    shipping;

  const handlePlaceOrder = async () => {

    if (!token) {

      alert(
        "Session expired! Please login again."
      );

      navigate("/login");

      return;

    }

    if (items.length === 0) {

      alert(
        "Your cart is empty!"
      );

      return;

    }

    setLoading(true);

    try {

      const orderData = {

        items,

        adminPrice: total,

        discount: 0,

        customerName:
          user?.name ||
          "Guest",

        customerPhone:
          user?.phoneNumber ||
          "0000000000",

        address:
          user?.address ||
          "Not provided",

        pincode:
          user?.pincode ||
          "N/A"

      };

      const res =
        await placeOrder(
          orderData,
          token
        );

      const order =
        res.order;

      const itemsList =
        order.items.map(
          (it: any) =>

            `* ${it.name} (SKU: ${it.sku}) | Qty: ${it.qty} | Price: ₹${it.price}`

        ).join("\n");

      const finalNet =

        Number(order.adminPrice)

        +

        Number(order.gstAmount)

        +

        Number(order.shippingCharge)

        -

        Number(order.discount);

      const msg =
        encodeURIComponent(

          `New Order Received!

Order ID: #${order.id.slice(-6).toUpperCase()}

Customer: ${order.customerName}

Phone: ${order.customerPhone}

Address: ${order.address}

Pincode: ${order.pincode}

Items:

${itemsList}

Subtotal: ₹${order.adminPrice}

GST: ₹${order.gstAmount}

Shipping: ₹${order.shippingCharge}

Net Amount: ₹${finalNet}

Date: ${new Date(order.createdAt).toLocaleString()}`

        );

      window.location.href =

        `whatsapp://send?phone=916306748500&text=${msg}`;

      clear?.();

      localStorage.removeItem(
        "sl_cart"
      );

      navigate("/");

    }

    catch (err: any) {

      console.error(
        "Checkout Error:",
        err
      );

      alert(

        "Order failed! " +

        (
          err.response?.data?.message ||

          err.message

        )

      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <Box

      sx={{

        minHeight: "80vh",

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        justifyContent: "center",

        gap: 3,

        px: 2

      }}

    >

      <Typography

        variant="h4"

        sx={{

          fontWeight: "bold",

          color: "#4A0E17"

        }}

      >

        Checkout

      </Typography>


      <Box

        sx={{

          width: "100%",

          maxWidth: "420px",

          background: "#fff",

          border: "1px solid #e5d7c1",

          borderRadius: "14px",

          padding: "24px",

          boxShadow:

            "0 4px 18px rgba(0,0,0,.06)"

        }}

      >

        <Box
          display="flex"
          justifyContent="space-between"
          mb={1}
        >

          <Typography>

            Subtotal

          </Typography>

          <Typography
            fontWeight={600}
          >

            ₹{subtotal.toLocaleString()}

          </Typography>

        </Box>


        <Box
          display="flex"
          justifyContent="space-between"
          mb={1}
        >

          <Typography>

            GST

          </Typography>

          <Typography
            fontWeight={600}
          >

            ₹{gst.toLocaleString()}

          </Typography>

        </Box>


        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >

          <Typography>

            Shipping

          </Typography>

          <Typography
            fontWeight={600}
          >

            ₹{shipping.toLocaleString()}

          </Typography>

        </Box>


        <Box

          sx={{

            borderTop:

              "1px solid #eee",

            paddingTop: "16px"

          }}

          display="flex"

          justifyContent="space-between"

        >

          <Typography
            fontWeight={700}
          >

            Total Payable

          </Typography>

          <Typography

            fontWeight={700}

            color="#4A0E17"

            fontSize="22px"

          >

            ₹{finalTotal.toLocaleString()}

          </Typography>

        </Box>

      </Box>


      <Button

        variant="contained"

        size="large"

        disabled={loading}

        onClick={handlePlaceOrder}

        sx={{

          bgcolor: "#4A0E17",

          py: 2,

          px: 5,

          borderRadius: 2,

          fontSize: "1.1rem",

          "&:hover": {

            bgcolor: "#6e1e2b"

          }

        }}

      >

        {

          loading

            ?

            <CircularProgress

              size={24}

              color="inherit"

            />

            :

            "PLACE ORDER VIA WHATSAPP"

        }

      </Button>

    </Box>

  );

}