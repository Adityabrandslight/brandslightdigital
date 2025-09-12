import { Linkedin, Mail } from "lucide-react"; // Use Link for LinkedIn and Mail for the mail icon
import Link from "next/link";

const Page = () => {
  const team = [
    {
      name: "Priyanka",
      linkedin: "#",
      image: "path/to/image3.jpg", // Replace with the actual image path
      designation: "Co-Fonders",
    },
    {
      name: "Lakshay",
      linkedin: "#",
      image: "path/to/image2.jpg", // Replace with the actual image path
      designation: "Co-Founders",
    },
    {
      name: "Aditya",
      linkedin: "#",
      image: "/team/3.png", // Replace with the actual image path
      designation: "Digital Marketing Manager",
    },
    {
      name: "Namra Fatima",
      linkedin: "#",
      image: "/team/4.png", // Replace with the actual image path
      designation: "HR",
    },
    {
      name: "Banmeet Kaur",
      linkedin: "#",
      image: "/team/5.png", // Replace with the actual image path
      designation: "Social Media Manager",
    },
    {
      name: "Nikhil Parmar",
      linkedin: "#",
      image: "/team/6.png", // Replace with the actual image path
      designation: "SEO Manager",
    },
    {
      name: "Lakshy Sharma",
      linkedin: "#",
      image: "/team/7.png", // Replace with the actual image path
      designation: "SEO Executive",
    },
    {
      name: "Rishabh Pratap",
      linkedin: "#",
      image: "path/to/image7.jpg", // Replace with the actual image path
      designation: "Sr. Software Developer",
    },
    {
      name: "Himashu Tiwari",
      linkedin: "#",
      image: "path/to/image7.jpg", // Replace with the actual image path
      designation: "Full-Stack Developer",
    },
    {
      name: "Faizan",
      linkedin: "#",
      image: "/team/8.png", // Replace with the actual image path
      designation: "Graphic Designer",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-5 py-16">
      <div className="text-center mb-12">
        <span className="px-4 py-2 rounded-xl bg-yellow-100 text-yellow-950 text-sm ">
          OUR TEAM
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
          Meet The{" "}
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mt-2">
          Minds Behind BrandsLight
        </h2>

        <p className="text-md md:text-lg text-gray-600 mt-2">
          A team of passionate digital marketing experts dedicated to delivering
          exceptional results for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-8">
        {team.map((member, index) => (
          <div key={index} className="rounded-2xl shadow-lg ">
            <div>
              <img
                src={member.image}
                alt={member.name}
                className="w-[450px] h-[320px] rounded-t-xl object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg ">{member.name}</h3>
              <p className="text-sm  text-orange-500">{member.designation}</p>
              <div className="flex  gap-4 mt-2">
                <a
                  href={member.linkedin}
                  className="text-gray-600 hover:text-orange-500"
                >
                  <Linkedin size={20} /> {/* LinkedIn Icon */}
                </a>
                <a
                  href={`mailto:${member.name}@example.com`}
                  className="text-gray-600 hover:text-orange-500"
                >
                  <Mail size={20} /> {/* Mail Icon */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add the section below the team */}
      <div className="text-center mt-16">
        <div className="flex justify-center gap-12 mb-8">
          <div className="text-center">
            <span className="block text-4xl font-bold text-orange-500">150+</span>
            <span className="block text-sm text-gray-600">Happy Clients</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold text-orange-500">95%</span>
            <span className="block text-sm text-gray-600">Client Retention</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-bold text-orange-500">24/7</span>
            <span className="block text-sm text-gray-600">Dedicated Support</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-4">Ready to Work With Our Team?</h3>
          <p className="mb-6">Get in touch today to discuss how we can help grow your business.</p>
          <Link href="/contact" className="bg-white text-orange-500 py-2 px-6 rounded-lg font-semibold">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
