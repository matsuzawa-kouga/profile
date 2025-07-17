import Image from "next/image";
import Link from "next/link";

export default function Photo() {
  return (
    <main>
      <h1>範馬勇次郎</h1>
      <Image src="/yujiro.jpg" alt="yujiro" width={300} height={200}></Image>
      <Link href="/">TOP</Link>
    </main>
  );
}