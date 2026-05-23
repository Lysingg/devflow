import Link from "next/link";
import Image from "next/image";
interface Props {
  imgUrl: string;
  title: string;
  alt: string;
  value: number | string;
  href?: string;
  textStyle?: string;
  imgStyles?: string;
  isAuthor?: boolean;
}
const Metric = ({ imgUrl, title, alt, value, href, textStyle, imgStyles, isAuthor }: Props) => {
  const metricContent = (
    <>
      <Image src={imgUrl} width={16} height={16} alt={alt} className={`rounded-full object-contain ${imgStyles}`} />
      <p className={`${textStyle} flex items-center gap-1`}>
        {value}
        <span className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}>{title}</span>
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="flex items-center gap-2">
      {metricContent}
    </Link>
  ) : (
    <div className="flex items-center gap-2">{metricContent}</div>
  );
};

export default Metric;
