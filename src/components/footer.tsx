import { GitFork, Star } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-gradient to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/tranhoandz/"
              className="text-info"
            >
              Tran Van Hoan
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/tranhoandz98/portfolio-dev"
              className="flex items-center gap-2 uppercase hover:text-info"
            >
              <Star />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/tranhoandz98/portfolio-dev/fork"
              className="flex items-center gap-2 uppercase hover:text-info"
            >
              <GitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
