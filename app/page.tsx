import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>トップページ</h1>
      <Link href="/about">Aboutへ行く</Link><br />
      <Link href="/photo">顔写真を見に行く</Link>
    </main>
  );
}

