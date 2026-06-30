---
layout: post
title: 'Phần 5. Tìm hiểu về Đặc tả hệ thông - Xây dựng trang web trao đổi thông tin toán học (Java Spring Boot + React JS).'
author: sal
categories: [ Coding 💻 ]
tags: [ tips ]
image: assets/images/2023/lap-trinh/avts/dien-dan-toan-hoc-avt.webp
rating: 5
lazyimages: "enabled"
isGithubComments: false
excerpt: Jekyll thật tuyệt vời để tạo các website cá nhân, nhưng bông hồng nào mà chả có gai!. Bài viết này mình muốn hướng đến các bạn đã có hiểu biết về phát triển web. Các bạn beginer hay các bạn có nhu cầu làm một blog cá nhân có thể tham khảo để hiểu rõ ưu nhược điểm của Wordpress cũng như Jekyll
adsense: "enabled"
keywords:
  - Viết blog cho lập trình viên
  - chuyển từ wordpress sang jekyll
  - Tối ưu jekyll
date: 2022-11-15 15:11:10 +0700
permalink: lap-trinh/java/website-dien-dan-toan-hoc-p5-thie-ke-database-api
---

**_Lưu ý_**: Trước đây mình khá hứng thú với Java và React. Đối với cá nhân mình, khi học công nghệ thì thay vì làm một thứ gì đó lớn lao, tại sao không thử tạo ra 1 ứng dụng quen thuộc, cơ bản. Đó là website cung cấp thông tin.

Thông qua chương 3, ta có thể hình dung được chi tiết cách các
chức năng hoạt động. Từ đó sang chương 4, ta có thể dễ dàng thiết kế được Database,
và API.

### Mô tả cơ sở dữ liệu

Các thực thể chính:
* Người dùng
* Câu hỏi
* v.v

Ví dụ mối quan hệ giữa các thực thể với nhau:
* Một người dùng có một hoặc nhiều câu hỏi.
* Một câu hỏi chỉ có thể đến từ một người.
* v.v

<div class="content" style="text-align:center;display: block;margin-left: auto;margin-right: auto;width: 80%;">
<a href="https://imgur.com/QENBQeX"><img src="https://i.imgur.com/QENBQeX.png" title="source: imgur.com" /></a><p>Lược đồ cơ sở dữ liệu</p><br>
<a href="https://imgur.com/3iYAUMK"><img src="https://i.imgur.com/3iYAUMK.png" title="source: imgur.com" /></a><p>Các bảng trong cơ sở dữ liệu</p><br><a href="https://imgur.com/eV7X4DC"><img src="https://i.imgur.com/eV7X4DC.png" title="source: imgur.com" /></a><p>Ví dụ về mô tả Bảng Users</p><br>
</div>

### Giải thích về API

 **API** là viết tắt của **Application Programming Interface**, tạm dịch là **Giao diện lập trình ứng dụng**. API là một tập hợp các phương thức, giao thức, định dạng dữ liệu và tài liệu mô tả cách thức một ứng dụng có thể giao tiếp với một ứng dụng khác.

**Các thành phần chính của API** bao gồm:

*   \*\***URL:** URL là địa chỉ của API. URL xác định vị trí của API trên máy chủ.
*   \*\***Phương thức HTTP:** Phương thức HTTP xác định hành động mà ứng dụng đang yêu cầu API thực hiện. Các phương thức HTTP phổ biến bao gồm GET, POST, PUT và DELETE.
*   \*\***Đầu đề:** Đầu đề là thông tin bổ sung được gửi cùng với yêu cầu API. Đầu đề có thể được sử dụng để xác thực người dùng, cung cấp thông tin về yêu cầu hoặc định dạng dữ liệu trả về.
*   \*\***Thân yêu cầu:** Thân yêu cầu là dữ liệu được gửi cho API. Thân yêu cầu có thể là một chuỗi văn bản, một đối tượng JSON hoặc một đối tượng XML.
...

Bạn có thể tìm hiểu thêm về API ở đây:


#### Ví dụ về API:

<div class="content" style="text-align:center;display: block;margin-left: auto;margin-right: auto;width: 80%;">
<a href="https://imgur.com/zhv9YYE"><img src="https://i.imgur.com/zhv9YYE.png" title="source: imgur.com" /></a><p>API cho quản lý người dùng</p><br>
</div>

Các API này sẽ xử lý luồng request, response mà bên phía Client
gọi yêu cầu. Bảng cơ sở dữ liệu quan hệ cộng thêm mô tả bên phía data của Forum.
