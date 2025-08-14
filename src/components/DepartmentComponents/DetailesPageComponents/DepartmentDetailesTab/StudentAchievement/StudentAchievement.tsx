import React from 'react';
import Image from 'next/image';

type StudentAchievementItem = {
  title: string;
  imageUrl: string;
  desc?:string
};

type StudentAchievementProps = {
  data: StudentAchievementItem[];
};

const StudentAchievement: React.FC<StudentAchievementProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx} className='mb-10'>
          <h3 className='text-[#86868B] text-xl font-bold mb-3'>{item.title}</h3>
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={600}
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p className='mt-5'>{item.desc}</p>
        </div>

      ))}
    </div>
  );
};

export default StudentAchievement;
