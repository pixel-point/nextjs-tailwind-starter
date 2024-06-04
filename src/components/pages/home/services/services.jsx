import Image from 'next/image';

import AutTestImg from './images/automating-testing.webp';
import CloudImg from './images/cloud-solutions.webp';
import IntegrationImg from './images/integration-and-deployment.webp';

const services = [
  {
    title: 'Continuous Integration & Deployment',
    description:
      'Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.',
    img: IntegrationImg,
  },
  {
    title: 'Cloud Solutions & Infrastructure Management',
    description:
      'Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.',
    img: CloudImg,
  },
  {
    title: 'Automated Testing & Quality Assurance',
    description:
      'Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.',
    img: AutTestImg,
  },
];

const Services = () => (
  <section id="services" className="container mb-8">
    <div className="max-w-[1220px] mx-auto flex flex-col space-y-14">
      <div className="max-w-[569px] mx-auto text-center flex flex-col space-y-5">
        <h2>Innovative solutions for&nbsp;operational excellence</h2>
        <p className="description">
          Tailored DevOps expertise driving your business momentum. <br />
          Personalized solutions for growth and evolution.
        </p>
      </div>

      <ul className="grid grid-cols-3 gap-x-10">
        {services.map((item, index) => (
          <li key={`service-item-${index}`}>
            <article className="rounded-2xl bg-gradient-to-b from-[#749FF6]/50 to-[#153984]/50 p-px">
              <div className="bg-black rounded-[15px] overflow-hidden">
                <div className="min-h-[459px] flex flex-col bg-gradient-to-b from-[#214288]/50 to-[#08142b]/50">
                  <header className="px-8 pb-8 flex flex-col space-y-3">
                    <h3>{item.title}</h3>
                    <p className="tracking-normal">{item.description}</p>
                  </header>
                  <Image
                    src={item.img}
                    alt={`${item.title} image`}
                    width={380}
                    height={277}
                    className="order-first"
                  />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
