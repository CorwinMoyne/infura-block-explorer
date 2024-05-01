export function durationFromDate(date: string) {
  const fromDate = new Date(Number(date) * 1000);
  const currentDate = new Date();

  const diffInSeconds = (currentDate.getTime() - fromDate.getTime()) / 1000;

  switch (true) {
    case diffInSeconds < 60:
      return `${Math.round(diffInSeconds)}s`;
    case diffInSeconds < 3600:
      return `${Math.round(diffInSeconds / 60)}m`;
    case diffInSeconds < 86400:
      return `${Math.round(diffInSeconds / 3600)}h`;
    case diffInSeconds < 2620800:
      return `${Math.round(diffInSeconds / 86400)}d`;
    case diffInSeconds < 31449600:
      return `${Math.round(diffInSeconds / 2620800)}mths`;
    default:
      return `${Math.round(diffInSeconds / 31449600)}y`;
  }
}
