"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/Context/cart-provider";
import Link from "next/link";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Checkout = () => {
  // TODO: Add payment gateway and integrate with backend
  const router = useRouter();
  const { cart, subTotal, clearCart, addToCart, removeFromCart } =
    useContext(CartContext);

  const getPincode = async (pincode) => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinsJson = await pins.json();
    if (pinsJson[pincode]) {
      setCity(pinsJson[pincode][0]);
      setState(pinsJson[pincode][1]);
    } else {
      setCity("");
      setState("");
    }
  };

  const fetchUser = async (token) => {
    try {
      let data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      let res = await data.json();
      setName(res.name);
      setAddress(res.address);
      setPhone(res.phone);
      setPincode(res.pincode);
      getPincode(res.pincode);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (
      localStorage.getItem("email") === null ||
      localStorage.getItem("token") === null
    ) {
      router.push("/login");
    } else {
      setEmail(localStorage.getItem("email"));
      fetchUser(token);
    }

    //eslint-disable-next-line
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "pincode":
        setPincode(value);
        if (value.length === 6) {
          getPincode(value);
        }
        break;
      default:
        break;
    }
  };

  const invokePaymentPage = async () => {
    // Check if phone number is valid
    setPhone(parseInt(phone));
    let phoneRegex = /^[0-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number is invalid", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    let orderId = Math.floor(Math.random() * Date.now());
    let data = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/initiatePayment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          cart,
          subTotal,
          orderId,
          name,
          address,
          pincode,
          phone,
          city,
          state,
        }),
      }
    );
    let txnRes = await data.json();
    if (txnRes.success) {
      toast.success("Congratulations on your purchase! Explore our website for more exciting products. Happy shopping!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push(`/order?id=${txnRes.orderId}`);
      // let txnToken = txnRes.txnToken;
      // console.log(txnToken);
      // var config = {
      //   root: "",
      //   flow: "DEFAULT",
      //   data: {
      //     orderId: orderId,
      //     token: txnToken,
      //     tokenType: "TXN_TOKEN",
      //     amount: subTotal,
      //   },
      //   handler: {
      //     notifyMerchant: function (eventName, data) {
      //       console.log("notifyMerchant handler function called");
      //       console.log("eventName => ", eventName);
      //       console.log("data => ", data);
      //     },
      //   },
      // };
      // // initialze configuration using init method
      // window.Paytm.CheckoutJS.init(config)
      //   .then(function onSuccess() {
      //     // after successfully updating configuration, invoke JS Checkout
      //     window.Paytm.CheckoutJS.invoke();
      //   })
      //   .catch(function onError(error) {
      //     console.log("error => ", error);
      //   });
    } else {
      // If cart is tampered, clear cart
      if (txnRes.cartClear) {
        clearCart();
      }
      toast.error(txnRes.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="container m-auto px-6 md:px-24 min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="font-bold text-4xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              readOnly
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">
          Address
        </label>

        <textarea
          name="address"
          id="address"
          cols="30"
          rows="3"
          value={address}
          onChange={handleChange}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              maxLength="10"
              placeholder="Enter 10 digit phone number"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="text"
              value={pincode}
              onChange={handleChange}
              id="pincode"
              maxLength="6"
              name="pincode"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleChange}
              name="city"
              readOnly={true}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              readOnly={true}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-xl">2. Review Cart Items & Pay</h2>
      <div className="px-8 ">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="text-blue-500 my-4">
              Your cart is empty. Add items to cart.
            </div>
          )}
          {Object.keys(cart).map((item) => {
            return (
              <li key={item}>
                <div className="item flex my-5">
                  <div className="font-semibold">
                    {cart[item].name} ({cart[item].variant})
                  </div>
                  <div className="w-1/3 flex items-center justify-center font-semibold text-lg">
                    <HiOutlineMinusCircle
                      className="cursor-pointer text-blue-500"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    />
                    <span className="mx-2">{cart[item].quantity}</span>
                    <HiOutlinePlusCircle
                      className="cursor-pointer text-blue-500"
                      onClick={() => {
                        addToCart(
                          item,
                          1,
                          item.price,
                          item.size,
                          item.variant,
                          item.name
                        );
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="total font-bold  ">Subtotal: ₹{subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href="/checkout">
          <button
            disabled={
              name === "" ||
              email === "" ||
              address === "" ||
              phone === "" ||
              pincode === "" ||
              Object.keys(cart).length === 0 ||
              city === "" ||
              state === "" ||
              subTotal === 0 ||
              phone.length !== 10
            }
            className="disabled:bg-blue-400 flex mr-2 mt-8 text-white bg-blue-600 border-0 py-2 px-2 focus:outline-none hover:bg-blue-700 rounded text-sm"
            onClick={invokePaymentPage}
          >
            <BsFillBagCheckFill className="m-1" />
            Pay ₹{subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
