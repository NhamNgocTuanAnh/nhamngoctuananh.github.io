---
layout: post
title: 'Xây dựng trang web trao đổi thông tin toán học (Java Spring Boot + React JS). Phần 1. Mô tả bài toán'
author: sal
categories: [ Coding 💻 ]
tags: [ tips ]
image: assets/images/2023/lap-trinh/avts/dien-dan-toan-hoc-avt.webp
rating: 5
lazyimages: "enabled"
isGithubComments: false
excerpt: Trước đây mình khá hứng thú với Java và React. Đối với cá nhân mình, khi học công nghệ thì thay vì làm một thứ gì đó lớn lao, tại sao không thử tạo ra 1 ứng dụng quen thuộc, cơ bản. Đó là website cung cấp thông tin.
adsense: "enabled"
keywords:
  - Viết blog cho lập trình viên
  - chuyển từ wordpress sang jekyll
  - Tối ưu jekyll
date: 2022-10-15 15:10:10 +0700
permalink: lap-trinh/java/hoc-p1-phan-tich-yeu-cau-bai-toan-website-dien-dan-toan
---

**_Lưu ý_**: Trước đây mình khá hứng thú với Java và React. Đối với cá nhân mình, khi học công nghệ thì thay vì làm một thứ gì đó lớn lao, tại sao không thử tạo ra 1 ứng dụng quen thuộc, cơ bản. Đó là website cung cấp thông tin.


Khi tham gia vào diễn đàn người sử dụng sẽ lựa chọn một chủ đề trong loạt các chủ đề của diễn đàn, 

**Ví dụ** ta chọn chủ đề _“lập trình”_ → một danh sách các câu hỏi thuộc chủ đề đó sẽ xuất hiện. Người sử dụng sẽ chọn một trong các câu hỏi trong danh sách để xem nội dung, ví dụ chọn bài “_Nhiệt lượng mặt trời_" thì nội dung của bài này hiện ra, nếu người đọc thấy có thể trả lời được thì nhấn vào nút trả lời và nhập nội dung vào form trả lời và nhấn nút trả lời, bài trả lời sẽ nằm ngay dưới câu hỏi. Nếu người sử dụng muốn gửi một bài mới thì có thể nhấn vào nút “_đặt câu hỏi_”. 

Trên đây là phần sơ lược về hoạt động cơ bản của diễn đàn. Ngoài ra nó còn cho phép người dùng có nhiều thao tác khác khác nhau. Để minh hoạ cho chức năng chính của diễn đàn là gửi và trả lời một câu hỏi, ta đưa ra ví dụ để chúng ta có thể hình dung được khái quát diễn đàn dùng làm gì và nó có dáng dấp như thế nào. Đặt câu hỏi là chức năng nổi bật nhất của forum. Câu hỏi là mục cho phép người dùng soạn thảo câu hỏi. Câu hỏi gồm 3 mục:

*   Tiêu đề
*   Chủ đề
*   Nội Dung

> \* Lưu ý: Người dùng muốn đặt được câu hỏi trong forum thì phải đăng nhập vào hệ thống mới có quyền đặt câu hỏi.
>
> \* Câu hỏi đó có thể được sửa lại, xóa hoặc đóng phần trả lời tùy thuộc vào quyết định của người tạo ra nó.
>
> \* Đối với một câu hỏi được tạo ra, tất cả những người có quyền nhìn thấy nó trên trang chủ của mình đều có thể ấn viết câu trả lời. Đối với những câu hỏi công khai thì mọi người đều có thể ấn tham gia viết câu trả lời , trả lời đó có thể xóa hoặc sửa tùy theo mục đích của người tạo ra nó. Còn đối với những câu hỏi ở chế độ khóa trả lời thì chỉ có thể xem mà không nhập câu trả lời được.
>
> \* Để quản lý chủ đề có trong hệ thống hệ thống, trong forum có ít nhất một mod đóng người quản trị vai trò làm. Mod này có quyền quản lý thông tin chủ đề có trong hệ thống.

## Sơ đồ quy trình nghiệp vụ

<div class="content" style="text-align:center;display: block;margin-left: auto;margin-right: auto;width: 50%;">
<a href="https://imgur.com/Zu7mkvp"><img src="https://i.imgur.com/Zu7mkvp.png" title="source: imgur.com" /></a><p>Sơ đồ quy trình nghiệp vụ</p><br>
</div>

<div class="content" style="text-align:center;display: block;margin-left: auto;margin-right: auto;width: 50%;">
<a href="https://imgur.com/p0lBa93"><img src="https://i.imgur.com/p0lBa93.png" title="source: imgur.com" /></a><p>Từ các yêu cầu nghiệp vụ. Chúng ta có sơ đồ use-case</p><br>
</div>

