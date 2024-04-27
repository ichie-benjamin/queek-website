import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href: string;
}

const LinkButton = ({ type, title, icon, href, variant, full }: ButtonProps) => {
  return (
    <Link href={href}
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </Link>
  )
}

export default LinkButton
