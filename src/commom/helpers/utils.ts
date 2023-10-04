export class UtilsHelper {
  formatDateReview(dateOrigin: string): Date {
    const dateReview = dateOrigin.split(' ')[0].split('/');
    const hourReview = dateOrigin.split(' ')[1].split(':');
    const formatedDate = new Date(
      parseInt(dateReview[2]),
      parseInt(dateReview[1]) - 1,
      parseInt(dateReview[0]),
      parseInt(hourReview[0]),
      parseInt(hourReview[1]),
    );
    return formatedDate;
  }
}
