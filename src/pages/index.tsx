import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { UseSelector, useDispatch, useSelector } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const count = useSelector(selectValue)
  // const dispatch = useDispatch();
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}
