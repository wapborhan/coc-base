import Image from "next/image";
import Link from "next/link";

const Card = ({ map }) => {
  const { image, title, _id, level, views } = map;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="box">
          <div className="imgBox">
            <Image width={500} height={500} src={image} alt={title} />
          </div>
          <div className="icon">
            <Link href={`${level}/details/${_id}`} className="iconBox">
              <span className="material-symbols-outlined">
                <div className="ico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </div>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="content flex justify-between text-center">
        <h3>{title}</h3>
        <span>Views: {views}</span>
      </div>
    </div>
  );
};

export default Card;
