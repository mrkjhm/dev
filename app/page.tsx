import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";

export default function Home() {
  return (
    <Container>
      <h1 className="text-center mt-20">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <div key={event.title}>
              <EventCard {...event} />
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
}
