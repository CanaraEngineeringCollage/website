import React from "react";
import ProfileCardClient from "./CardComponentClient";

interface CouncilMember {
  name: string;
  department: string;
  avatar: { type: string; data: number[] };
  roles?: { title: string; organization: string }[];
}

const getFacultyData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const [keyRes, hodRes] = await Promise.all([
      fetch(`${baseUrl}/faculty?keyFunctionary=true`, { next: { revalidate: 300 } }),
      fetch(`${baseUrl}/faculty?hod=true`, { next: { revalidate: 300 } }),
    ]);

    const keyJson = await keyRes.json();
    const hodJson = await hodRes.json();

    return {
      keyFunctionaries: keyJson.data || [],
      hodData: hodJson.data || [],
    };
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    return { keyFunctionaries: [], hodData: [] };
  }
};

const ProfileCard = async ({ title }: { title: string }) => {
  const { keyFunctionaries, hodData } = await getFacultyData();

  return <ProfileCardClient title={title} keyFunctionaries={keyFunctionaries} datam={hodData} />;
};

export default ProfileCard;
