import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <Pagination itemCount={100} currentPage={2} pageSize={50}/>
  )
}
