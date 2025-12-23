export interface ApiEvent {
  id: string;
  title: string;
  description: string;
  date: string | null;
  videoUrl: string | null;
  image: {
    type: string;
    data: number[];
  };
}

export interface AlumniEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  isVideo: boolean;
}

// Safe Buffer to Base64 conversion (Chunked)
export const bufferToBase64 = (buffer: number[]): string => {
  if (!buffer || buffer.length === 0) return "";
  const CHUNK_SIZE = 0x8000; // 32 KB per chunk
  let binary = "";
  for (let i = 0; i < buffer.length; i += CHUNK_SIZE) {
    binary += String.fromCharCode.apply(null, buffer.slice(i, i + CHUNK_SIZE));
  }
  return `data:image/jpeg;base64,${btoa(binary)}`;
};
