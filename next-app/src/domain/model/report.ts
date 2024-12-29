import { User } from '@/domain/model/user'

interface IReport {
  id: number
  title: string
  author: User
  seminarDate: Date
  reportNumber: number
  pageNumber: number
  totalPages: number
  content: string
  isSubmitted?: boolean
}

/**
 * Report（ゼミレポ）のドメインモデル
 */
export class Report {
  private id: number
  private title: string
  private readonly author: User
  private seminarDate: Date
  private reportNumber: number
  private pageNumber: number
  private totalPages: number
  private content: string
  private isSubmitted: boolean

  constructor(report: IReport) {
    this.id = report.id
    this.title = report.title
    this.author = report.author
    this.seminarDate = report.seminarDate
    this.reportNumber = report.reportNumber
    this.pageNumber = report.pageNumber
    this.totalPages = report.totalPages
    this.content = report.content
    this.isSubmitted = report.isSubmitted || false
  }

  setTitle(title: string): void {
    this.title = title
  }

  setSeminarDate(seminarDate: Date): void {
    this.seminarDate = seminarDate
  }

  setReportNumber(reportNumber: number): void {
    this.reportNumber = reportNumber
  }

  setPageNumber(pageNumber: number): void {
    this.pageNumber = pageNumber
  }

  setTotalPages(totalPages: number): void {
    // TODO: 計算して出すよ
    this.totalPages = totalPages
  }

  setContent(content: string): void {
    this.content = content
  }

  submit(): void {
    this.isSubmitted = true
  }

  getId(): number {
    return this.id
  }

  getTitle(): string {
    return this.title
  }

  getReportNumber(): number {
    return this.reportNumber
  }

  getSeminarDate(): Date {
    return this.seminarDate
  }

  getPageNumber(): number {
    return this.pageNumber
  }

  getTotalPages(): number {
    return this.totalPages
  }

  getContent(): string {
    return this.content
  }

  getIsSubmitted(): boolean {
    return this.isSubmitted
  }

  getAuthor(): User {
    return this.author
  }
}
