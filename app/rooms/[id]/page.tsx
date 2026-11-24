import { Suspense } from "react";
import { LoadingState } from "@/components/LoadingState";
import { RoomView } from "@/components/RoomView";
import { listings } from "@/data/listings";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const RoomContent = async ({ params }: RoomPageProps) => {
  const { id } = await params;
  const listing = listings.find((item) => item.id === id) ?? null;

  return <RoomView id={id} listing={listing} />;
};

const RoomPage = ({ params }: RoomPageProps) => (
  <Suspense fallback={<LoadingState label="Preparando alojamiento" />}>
    <RoomContent params={params} />
  </Suspense>
);

export default RoomPage;