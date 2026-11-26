import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceSectionTitle } from "@/components/resources/ResourceSectionTitle";
import { fetchSanity } from "@/sanity/lib/client";
import { RESOURCE_VIDEOS_QUERY } from "@/sanity/lib/queries";

type ResourceVideo = { _id: string; title: string; description: string; link: string; date?: string };

export default async function ResourcesVideos() {
  const videos = await fetchSanity<ResourceVideo[]>(RESOURCE_VIDEOS_QUERY, {}, ["resourceVideo"]);

  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
        <ResourceSectionTitle title="Videos" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {videos.map((video) => (
            <ResourceCard
              key={video._id}
              title={video.title}
              description={video.description}
              href={video.link}
              ctaLabel="Watch Video"
              kind="video"
              date={video.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
