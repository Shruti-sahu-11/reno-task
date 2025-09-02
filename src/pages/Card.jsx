import React from "react";

const schools = [
  { 
    id: 1, 
    title: "Green Valley School", 
    description: "Located in Bhopal, known for its eco-friendly campus.", 
    image: "https://cdn.pixabay.com/photo/2020/01/09/03/43/mansion-4751778_1280.jpg" 
  },
  { 
    id: 2, 
    title: "Sunrise Public School", 
    description: "A top CBSE school focusing on holistic development.", 
    image: "https://cdn.pixabay.com/photo/2020/06/11/18/25/nc-state-5287789_1280.jpg" 
  },
  { 
    id: 3, 
    title: "Mount Carmel Convent", 
    description: "Renowned for academic excellence and discipline.", 
    image: "https://media.istockphoto.com/id/171271182/photo/delhi-university-building-and-corridor.webp?b=1&s=612x612&w=0&k=20&c=kXcXe2zJA2LfeHpgf0l4WdaS5cqThspTOTXG9EREchU=" 
  },
  { 
    id: 4, 
    title: "Delhi Public School", 
    description: "International curriculum with modern infrastructure.", 
    image: "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg" 
  },
  { 
    id: 5, 
    title: "St. Joseph’s School", 
    description: "Heritage institution offering quality education since 1975.", 
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754" 
  },
  { 
    id: 6, 
    title: "Little Angels Academy", 
    description: "Primary school with a focus on creativity and innovation.", 
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238" 
  },
  { 
    id: 1, 
    title: "Green Valley School", 
    description: "Located in Bhopal, known for its eco-friendly campus.", 
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" 
  },
  { 
    id: 2, 
    title: "Sunrise Public School", 
    description: "A top CBSE school focusing on holistic development.", 
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b" 
  },
  { 
    id: 3, 
    title: "Mount Carmel Convent", 
    description: "Renowned for academic excellence and discipline.", 
    image: "https://cdn.pixabay.com/photo/2020/01/09/03/43/mansion-4751778_1280.jpg" 
  },
  { 
    id: 4, 
    title: "Delhi Public School", 
    description: "International curriculum with modern infrastructure.", 
    image: "https://cdn.pixabay.com/photo/2020/11/19/08/03/college-5757815_1280.jpg" 
  },
  { 
    id: 5, 
    title: "St. Joseph’s School", 
    description: "Heritage institution offering quality education since 1975.", 
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754" 
  },
  { 
    id: 6, 
    title: "Little Angels Academy", 
    description: "Primary school with a focus on creativity and innovation.", 
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238" 
  },
  { 
    id: 7, 
    title: "Blue Ridge International", 
    description: "Offers IB curriculum with focus on global exposure.", 
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc" 
  },
  { 
    id: 8, 
    title: "Heritage World School", 
    description: "Blending modern teaching methods with traditional values.", 
    image: "https://images.unsplash.com/photo-1562774053-701939374585" 
  },
  { 
    id: 9, 
    title: "Riverdale High School", 
    description: "Known for sports and extracurricular activities.", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
  },
  { 
    id: 10, 
    title: "Oxford Public Academy", 
    description: "Affordable yet high-quality education for all students.", 
    image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72" 
  },
  { 
    id: 11, 
    title: "Cambridge Kids School", 
    description: "Pre-primary & primary level with fun-based learning.", 
    image: "https://cdn.pixabay.com/photo/2023/06/11/14/11/flowers-8056102_1280.jpg" 
  },
  { 
    id: 12, 
    title: "National Model School", 
    description: "Strong academic track record and competitive exam prep.", 
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f" 
  },
  { 
    id: 1, 
    title: "Green Valley School", 
    description: "Located in Bhopal, known for its eco-friendly campus.", 
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" 
  },
  { 
    id: 2, 
    title: "Sunrise Public School", 
    description: "A top CBSE school focusing on holistic development.", 
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b" 
  },
  { 
    id: 3, 
    title: "Mount Carmel Convent", 
    description: "Renowned for academic excellence and discipline.", 
    image: "https://cdn.pixabay.com/photo/2018/10/27/15/41/zhejiang-university-3776784_1280.jpg" 
  },
  { 
    id: 4, 
    title: "Delhi Public School", 
    description: "International curriculum with modern infrastructure.", 
    image: "https://cdn.pixabay.com/photo/2017/08/06/12/18/grassland-2591977_1280.jpg" 
  },
  { 
    id: 5, 
    title: "St. Joseph’s School", 
    description: "Heritage institution offering quality education since 1975.", 
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754" 
  },
  { 
    id: 6, 
    title: "Little Angels Academy", 
    description: "Primary school with a focus on creativity and innovation.", 
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238" 
  },
  { 
    id: 7, 
    title: "Blue Ridge International", 
    description: "Offers IB curriculum with focus on global exposure.", 
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc" 
  },
  { 
    id: 8, 
    title: "Heritage World School", 
    description: "Blending modern teaching methods with traditional values.", 
    image: "https://images.unsplash.com/photo-1562774053-701939374585" 
  },
  { 
    id: 9, 
    title: "Riverdale High School", 
    description: "Known for sports and extracurricular activities.", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
  },
  { 
    id: 10, 
    title: "Oxford Public Academy", 
    description: "Affordable yet high-quality education for all students.", 
    image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72" 
  },
  { 
    id: 11, 
    title: "Cambridge Kids School", 
    description: "Pre-primary & primary level with fun-based learning.", 
    image: "https://cdn.pixabay.com/photo/2019/01/02/06/00/campus-3908138_1280.jpg" 
  },
  { 
    id: 12, 
    title: "National Model School", 
    description: "Strong academic track record and competitive exam prep.", 
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f" 
  },
  { 
    id: 13, 
    title: "Springfield Public School", 
    description: "Focuses on arts, culture, and creativity.", 
    image: "https://cdn.pixabay.com/photo/2018/05/13/15/06/road-3396764_1280.jpg" 
  },
  { 
    id: 14, 
    title: "Bright Future Academy", 
    description: "Modern facilities with STEM-focused curriculum.", 
    image: "https://cdn.pixabay.com/photo/2015/07/02/10/42/at-dusk-828928_1280.jpg" 
  },
  { 
    id: 15, 
    title: "Global Knowledge School", 
    description: "Promotes international exposure through exchange programs.", 
    image: "https://cdn.pixabay.com/photo/2021/08/11/02/30/university-6537164_1280.jpg" 
  },
  { 
    id: 16, 
    title: "Silver Oaks Academy", 
    description: "Best-in-class teaching staff and modern labs.", 
    image: "https://cdn.pixabay.com/photo/2021/10/14/08/01/library-6708399_1280.jpg" 
  },
  { 
    id: 17, 
    title: "Happy Kids International", 
    description: "A nurturing preschool environment with play-based learning.", 
    image: "https://cdn.pixabay.com/photo/2017/04/06/15/03/girls-2208501_1280.jpg" 
  },
  { 
    id: 18, 
    title: "Knowledge Tree School", 
    description: "Hands-on experiential learning methodology.", 
    image: "https://cdn.pixabay.com/photo/2015/10/18/04/55/winter-993869_1280.jpg" 
  },
  { 
    id: 19, 
    title: "Harmony High School", 
    description: "Focuses on inclusivity, diversity, and community.", 
    image: "https://cdn.pixabay.com/photo/2021/10/11/06/57/campus-6699610_1280.jpg" 
  },
  { 
    id: 20, 
    title: "Future Leaders Academy", 
    description: "Trains students in leadership and problem-solving skills.", 
    image: "https://cdn.pixabay.com/photo/2017/08/16/10/57/lunar-eclipse-2647295_1280.jpg" 
  }



];


const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mx-3 my-4 p-5 ">
      {schools.map((school) => (
        <div key={school.id} className="bg-white shadow-md rounded-xl overflow-hidden">
          <img 
            src={school.image} 
            alt={school.title} 
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h2 className="text-lg font-semibold">{school.title}</h2>
            <p className="text-gray-600 text-sm">{school.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;