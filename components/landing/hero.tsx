import Image from "next/image";
import { UsernameClaimForm } from "./username-claim-form";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { profileService } from "@/lib/services/profile.service";
import { getAvatarUrl } from "@/lib/utils";

export async function LandingHero() {
  const [profiles, totalCount] = await Promise.all([
    profileService.getPublishedProfiles(5),
    profileService.getPublishedProfileCount(),
  ]);

  const avatarData = profiles
    .map((user) => {
      const avatarUrl = getAvatarUrl(user);
      if (!avatarUrl || !user.username) return null;
      return {
        imageUrl: avatarUrl,
        profileUrl: `/${user.username}`,
      };
    })
    .filter((item): item is { imageUrl: string; profileUrl: string } => item !== null);

  const remainingCount = Math.max(0, totalCount - avatarData.length);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 pb-2">
            One URL for all your links
          </h1>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto">
            Create a beautiful profile page to share all your important links in one place. 
            The open-source alternative to Linktree.
          </p>
        </div>
        {avatarData.length > 0 && (
          <div className="flex flex-col items-center gap-3 pt-4">
            <div className="flex items-center gap-2">
              <AvatarCircles
                avatarUrls={avatarData}
                numPeople={remainingCount}
              />
              <span className="text-xs text-zinc-600">
                {totalCount.toLocaleString()} {totalCount === 1 ? "person" : "people"} have created their profile
              </span>
            </div>
          </div>
        )}
        <div className="pt-8 flex justify-center">
          <UsernameClaimForm />
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 flex justify-center">
        <div className="rounded-2xl bg-white/40 backdrop-blur-2xl ring-1 ring-inset ring-zinc-900/10 lg:rounded-[2rem] border border-white/50 w-full max-w-5xl shadow-2xl overflow-hidden hover:shadow-indigo-500/10 transition-all duration-500">
          <div className="flex items-center justify-between px-4 py-3 bg-white/60 backdrop-blur-md border-b border-zinc-200/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF605C]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD44]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#00CA4E]"></div>
            </div>
            <div className="text-xs text-zinc-500">tapin.live</div>
          </div>
          <div className="relative w-full">
            <Image
              alt="TapIn preview"
              src="/hero.png"
              width={1364}
              height={866}
              className="select-none bg-white w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

