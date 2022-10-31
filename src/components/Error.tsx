interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return <p className="text-center text-red-600">{message}</p>;
}
