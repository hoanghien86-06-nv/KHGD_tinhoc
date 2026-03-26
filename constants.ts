
import { WeeklyCurriculum, Lesson } from './types';

const createLesson = (topic: string, lesson: string, title: string): Lesson => ({
  id: `${topic}-${lesson}-${title}`,
  topicCode: topic,
  lessonNumber: lesson,
  title: title
});

export const CURRICULUM_DATA: WeeklyCurriculum[] = [
  {
    week: 1,
    grade3: createLesson("A1", "Bài 1", "Các thành phần của máy tính"),
    grade4: createLesson("A1", "Bài 1", "Phần cứng máy tính"),
    grade5: createLesson("A", "Bài 1", "Lợi ích của máy tính")
  },
  {
    week: 2,
    grade3: createLesson("A1", "Bài 2", "Những máy tính thông dụng"),
    grade4: createLesson("A1", "Bài 2", "Phần mềm máy tính"),
    grade5: createLesson("A", "Bài 2", "Thực hành tạo sản phẩm số")
  },
  {
    week: 3,
    grade3: createLesson("A1", "Bài 3", "Em tập sử dụng chuột"),
    grade4: createLesson("A2", "Bài 1", "Em tập gõ bàn phím số"),
    grade5: createLesson("A", "Bài 3", "Lợi ích của việc sử dụng máy tính thành thạo")
  },
  {
    week: 4,
    grade3: createLesson("A1", "Bài 4", "Em bắt đầu sử dụng máy tính"),
    grade4: createLesson("A2", "Bài 2", "Thực hành gõ bàn phím đúng cách"),
    grade5: createLesson("B", "Bài 1", "Tìm thông tin trên website")
  },
  {
    week: 5,
    grade3: createLesson("A1", "Bài 5", "Bảo vệ sức khoẻ khi dùng máy tính"),
    grade4: createLesson("B", "Bài 1", "Các loại thông tin chính trên trang web"),
    grade5: createLesson("B", "Bài 2", "Hợp tác, tìm kiếm và chia sẻ thông tin")
  },
  {
    week: 6,
    grade3: createLesson("A2", "Bài 1", "Thông tin và quyết định"),
    grade4: createLesson("B", "Bài 2", "Tác hại của việc xem những trang web không phù hợp lứa tuổi"),
    grade5: createLesson("C1", "Bài 1", "Thu thập và tìm kiếm thông tin trong giải quyết vấn đề")
  },
  {
    week: 7,
    grade3: createLesson("A2", "Bài 2", "Các dạng thông tin thường gặp"),
    grade4: createLesson("C1", "Bài 1", "Tìm kiếm thông tin trên Internet"),
    grade5: createLesson("C1", "Bài 2", "Thực hành tìm kiếm và chọn thông tin trong giải quyết vấn đề")
  },
  {
    week: 8,
    grade3: createLesson("A2", "Bài 3", "Xử lí thông tin"),
    grade4: createLesson("C1", "Bài 2", "Em tập tìm thông tin trên Internet"),
    grade5: createLesson("C2", "Bài 1", "Thực hành tạo thư mục")
  },
  {
    week: 9,
    grade3: createLesson("A2", "Bài 4", "Ô tập về thông tin và xử lí thông tin"),
    grade4: createLesson("C2", "Bài 1", "Tạo và xoá thư mục, đổi tên và xoá tệp"),
    grade5: createLesson("C2", "Bài 2", "Tìm kiếm tệp và thư mục")
  },
  {
    week: 10,
    grade3: createLesson("A3", "Bài 1", "Em làm quen với bàn phím"),
    grade4: createLesson("C2", "Bài 2", "Di chuyển, sao chép thư mục và tệp"),
    grade5: createLesson("E", "Bài 1", "Thực hành chọn và sao chép khối văn bản")
  },
  {
    week: 11,
    grade3: createLesson("A3", "Bài 2", "Em tập gõ hàng phím cơ sở"),
    grade4: createLesson("C2", "Bài 3", "Thực hành tạo, sao chép, xóa thư mục và đổi tên tệp, di chuyển tệp"),
    grade5: createLesson("E", "Bài 2", "Thực hành xoá và di chuyển khối văn bản")
  },
  {
    week: 12,
    grade3: createLesson("A3", "Bài 3", "Em tập gõ hàng phím trên và dưới"),
    grade4: createLesson("D", "Bài học", "Tôn trọng quyền tác giả của phần mềm"),
    grade5: createLesson("E", "Bài 3", "Thực hành chèn ảnh vào văn bản")
  },
  {
    week: 13,
    grade3: createLesson("A3", "Bài 4", "Cùng thi đua gõ phím"),
    grade4: createLesson("E1", "Bài 1", "Bố cục của trang chiếu"),
    grade5: createLesson("E", "Bài 4", "Định dạng kí tự")
  },
  {
    week: 14,
    grade3: createLesson("B", "Bài 1", "Thông tin trên Internet"),
    grade4: createLesson("E1", "Bài 2", "Định dạng văn bản trên trang chiếu"),
    grade5: createLesson("E", "Bài 5", "Thực hành tổng hợp soạn thảo văn bản")
  },
  {
    week: 15,
    grade3: createLesson("B", "Bài 2", "Nhận biết những thông tin trên Internet không phù hợp với em"),
    grade4: createLesson("E1", "Bài 3", "Hiệu ứng chuyển trang chiếu"),
    grade5: "Lựa chọn 1: Bài 1. Sử dụng phần mềm Paint / Lựa chọn 2: Bài 1. YouTube Kids"
  },
  {
    week: 16,
    grade3: "ÔN TẬP",
    grade4: "ÔN TẬP",
    grade5: "Lựa chọn 1: Bài 2. Vẽ tranh / Lựa chọn 2: Bài 2. Thủ công qua video"
  },
  {
    week: 17,
    grade3: "KIỂM TRA CUỐI HK I",
    grade4: "KIỂM TRA CUỐI HK I",
    grade5: "ÔN TẬP"
  },
  {
    week: 18,
    grade3: createLesson("C1", "Bài 1", "Sự cần thiết của sắp xếp"),
    grade4: createLesson("E2", "Bài 1", "Làm quen với phần mềm soạn thảo văn bản"),
    grade5: "KIỂM TRA CUỐI HK I"
  },
  {
    week: 19,
    grade3: createLesson("C1", "Bài 2", "Sơ đồ hình cây"),
    grade4: createLesson("E2", "Bài 2", "Soạn thảo văn bản tiếng Việt và lưu tệp với tên mới"),
    grade5: createLesson("D", "Bài học", "Tôn trọng quyền tác giả khi sử dụng nội dung thông tin")
  },
  {
    week: 20,
    grade3: createLesson("C2", "Bài 1", "Sắp xếp phân loại các tệp trong máy tính"),
    grade4: createLesson("E2", "Bài 3", "Thực hành mở tệp, soạn thảo và lưu tệp văn bản"),
    grade5: createLesson("F", "Bài 1", "Nhóm lệnh bút vẽ")
  },
  {
    week: 21,
    grade3: createLesson("C2", "Bài 2", "Cây thư mục"),
    grade4: createLesson("E2", "Bài 4", "Chèn ảnh vào văn bản"),
    grade5: createLesson("F", "Bài 2", "Thực hành tạo chương trình vẽ hình đơn giản")
  },
  {
    week: 22,
    grade3: createLesson("C2", "Bài 3", "Em tập thao tác với thư mục"),
    grade4: createLesson("E2", "Bài 5", "Thực hành soạn thảo văn bản có ảnh minh hoạ"),
    grade5: createLesson("F", "Bài 3", "Trang phục của nhân vật")
  },
  {
    week: 23,
    grade3: createLesson("D", "Bài học", "Bảo vệ thông tin cá nhân"),
    grade4: createLesson("E2", "Bài 6", "Các thao tác cơ bản với khối văn bản"),
    grade5: createLesson("F", "Bài 4", "Thực hành tạo chương trình hoạt hình cho nhân vật")
  },
  {
    week: 24,
    grade3: createLesson("E1", "Bài 1", "Em làm quen với phần mềm trình chiếu"),
    grade4: createLesson("E2", "Bài 7", "Thực hành tổng hợp chủ đề “Tập soạn thảo văn bản”"),
    grade5: createLesson("F", "Bài 5", "Cấu trúc tuần tự")
  },
  {
    week: 25,
    grade3: createLesson("E1", "Bài 2", "Thêm ảnh vào trang trình chiếu"),
    grade4: createLesson("LC1", "Bài 1", "Máy tính giúp em tìm hiểu lịch sử Việt Nam"),
    grade5: createLesson("F", "Bài 6", "Cấu trúc lặp với số lần biết trước")
  },
  {
    week: 26,
    grade3: createLesson("E1", "Bài 3", "Bài trình chiếu của em"),
    grade4: createLesson("LC1", "Bài 2", "Máy tính giúp em tìm hiểu về các Quốc gia"),
    grade5: createLesson("F", "Bài 7", "Cấu trúc lặp có điều kiện")
  },
  {
    week: 27,
    grade3: createLesson("E2", "Bài 1", "Làm quen với phần mềm Mouse Skills"),
    grade4: createLesson("F", "Bài 1", "Làm quen với lập trình trực quan"),
    grade5: createLesson("F", "Bài 8", "Cấu trúc lặp liên tục")
  },
  {
    week: 28,
    grade3: createLesson("E2", "Bài 2", "Em luyện tập sử dụng chuột"),
    grade4: createLesson("F", "Bài 2", "Tạo chương trình Scratch đầu tiên"),
    grade5: createLesson("F", "Bài 9", "Biến và cách dùng biến")
  },
  {
    week: 29,
    grade3: createLesson("E3", "Bài 1", "Máy tính giúp em quan sát hạt đậu nảy mầm"),
    grade4: createLesson("F", "Bài 3", "Tạo chương trình có phông nền thay đổi"),
    grade5: createLesson("F", "Bài 10", "Các phép toán số học cơ bản và phép kết hợp")
  },
  {
    week: 30,
    grade3: createLesson("E3", "Bài 2", "Máy tính giúp em quan sát nhiều điều kì thú"),
    grade4: createLesson("F", "Bài 4", "Tạo chương trình có nhiều nhân vật"),
    grade5: createLesson("F", "Bài 11", "Các phép so sánh")
  },
  {
    week: 31,
    grade3: createLesson("F1", "Bài 1", "Làm việc theo từng bước"),
    grade4: createLesson("F", "Bài 5", "Tạo chương trình có nhân vật chuyển động"),
    grade5: createLesson("F", "Bài 12", "Cấu trúc rẽ nhánh")
  },
  {
    week: 32,
    grade3: createLesson("F1", "Bài 2", "Thực hiện một việc tùy thuộc vào điều kiện"),
    grade4: createLesson("F", "Bài 6", "Tạo chương trình có nhân vật thay đổi kích thước, màu sắc"),
    grade5: createLesson("F", "Bài 13", "Chạy thử, phát hiện và sửa lỗi chương trình")
  },
  {
    week: 33,
    grade3: createLesson("F1", "Bài 3", "Em tập làm người chỉ huy giỏi"),
    grade4: createLesson("F", "Bài 7", "Thực hành tạo chương trình của em"),
    grade5: createLesson("F", "Bài 14", "Thực hành viết kịch bản và tạo chương trình")
  },
  {
    week: 34,
    grade3: "ÔN TẬP",
    grade4: "ÔN TẬP",
    grade5: "ÔN TẬP"
  },
  {
    week: 35,
    grade3: "KIỂM TRA CUỐI NĂM",
    grade4: "KIỂM TRA CUỐI NĂM",
    grade5: "KIỂM TRA CUỐI NĂM"
  }
];
