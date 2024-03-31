import { User } from './user';
/**
 * Report（ゼミレポ）のドメインモデル
 */
export class Report {
  private isSubmitted: boolean;
  private title: string;
  private seminarDate: Date;
  private readonly author: User;
  private reportNumber: number;
  private pageNumber: number;
  private totalPages: number;
  private content: string;

  constructor(isSubmitted: boolean, title: string, seminarDate: Date, author: User, reportNumber: number, pageNumber: number, totalPages: number, content: string) {
    this.isSubmitted = isSubmitted;
    this.title = title;
    this.seminarDate = seminarDate;
    this.author = author;
    this.reportNumber = reportNumber;
    this.pageNumber = pageNumber;
    this.totalPages = totalPages;
    this.content = content;
  }

  setTitle(title: string): void {
    this.title = title;
  }
  
  setSeminarDate(seminarDate: Date): void {
    this.seminarDate = seminarDate;
  }

  setReportNumber(reportNumber: number): void {
    this.reportNumber = reportNumber;
  }

  setPageNumber(pageNumber: number): void {
    this.pageNumber = pageNumber;
  }

  setTotalPages(totalPages: number): void {
    // TODO: 計算して出すよ
    this.totalPages = totalPages;
  }

  setcontent(content: string): void {
    this.content = content;
  }

  submit(): void {
    this.isSubmitted = true;
  }

  getTitle(): string {
    return this.title;
  }

  getReportNumber(): number {
    return this.reportNumber;
  }

  getSeminardate(): Date {
    return this.seminarDate;
  }
    
}
