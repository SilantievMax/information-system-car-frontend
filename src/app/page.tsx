import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link className="text-white" href={"/cars"}>
        cars
      </Link>
      <br />
      <Link className="text-white" href={"/auth"}>
        auth
      </Link>
      <br />
      <Link className="text-white " href={"/orders"}>
        orders
      </Link>
    </main>
  );
}
