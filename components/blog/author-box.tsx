import Avatar from "./avatar";

interface Author {
  node?: {
    name: string;
  };
  name: string;
  description?: string;
  avatar: {
    url: string;
  };
}

interface Options {
  excludeMetadata?: string[];
}

interface AuthorBoxProps {
  author: Author;
  options?: Options;
}

export default function AuthorBox({ author, options = {} }: AuthorBoxProps) {
  const { excludeMetadata = [] } = options;
  const metadata: { author?: Author } = {};
  if (!excludeMetadata.includes("author")) {
    metadata.author = author;
  }

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="mt-6 flex items-start">
          <div className="flex-shrink-0">
            <div
            // href={authorPathByName(author?.node?.name ?? author.name)}
            >
              <span className="sr-only">{author?.name}</span>
              <Avatar author={author} />
            </div>
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-base font-normal text-slate-900">
              <span
                // href={authorPathByName(author.name)}
                className="font-semibold"
              >
                {author?.name}
              </span>
            </p>
            <div className="mt-2 text-base text-slate-500 leading-6 ">
              {author?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
