import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={handleSearch} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
