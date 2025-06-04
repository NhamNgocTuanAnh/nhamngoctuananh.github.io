---
layout: post
title: 'Jekyll - chân ái đời tôi. Nền tảng viết blog cơ động nhất, mệt nhất sever Việt Nam!!!'
author: sal
categories: [ Coding 💻 ]
tags: [ tips ]
image: assets/images/2023/lap-trinh/avts/jekyll-viet-blog-avt.webp
rating: 5
lazyimages: "enabled"
isGithubComments: false
excerpt: Jekyll thật tuyệt vời để tạo các website cá nhân, nhưng bông hồng nào mà chả có gai!. Bài viết này mình muốn hướng đến các bạn đã có hiểu biết về phát triển web. Các bạn beginer hay các bạn có nhu cầu làm một blog cá nhân có thể tham khảo để hiểu rõ ưu nhược điểm của Wordpress cũng như Jekyll
adsense: "enabled"
keywords:
  - Viết blog cho lập trình viên
  - chuyển từ wordpress sang jekyll
  - Tối ưu jekyll
date: 2023-02-15 10:01:10 +0700
permalink: lap-trinh/viet-blog-voi-jekyll
---
**_Lưu ý_**: Bài viết này mình muốn hướng đến các bạn đã có hiểu biết về phát triển web.
Các bạn beginer hay các bạn có nhu cầu làm một blog cá nhân có thể tham khảo để hiểu rõ ưu nhược điểm của Wordpress cũng như Jekyll.

>Jekyll thật tuyệt vời để tạo các website cá nhân, nhưng bông hồng nào mà chả có **gai**!.

<p style="margin-bottom: 0px; font-weight: 700;font-size: 1.75rem;">Mục lục</p>
* TOC
{:toc}

### Tuổi trẻ đau thương

Từ một bài viết blogs [Xây dựng websever chỉ với 700k](https://blogkinhnghiem.net/xay-dung-webserver-tu-a-z-su-dung-may-tinh-nhung/) - **phong vũ**, đã nuôi dưỡng trong mình một ước mơ hồi nhỏ là viết, viết những gì mình thích và chia sẽ cho mọi người. Hồi đó mình đã từng tìm hiểu về Wix, bloger hay wordpress.org. Đặc điểm chung của chúng là trả phí hoặc không đc custom giao diện, ít plugin và không đổi được tên miền.

Mình mua 1 orangepi zero + 1 thẻ nhớ + 1 vỏ tầm 700k, nguồn điện thoại có sẵn. Do đã biết về linux từ đâu. Việc setup không khó khăn với mình. Lamp - _**My first love**_.

{% include lazyload.html image_src="../../assets/images/2023/lap-trinh/orage-pi-zero-by-sever.webp" image_alt="websever với orange pi zero" image_title="sever đầu đời - orangepi zero" %}

```javascript
sudo apt-get install apache2 -y # cài apache

sudo apt-get install php libapache2-mod-php -y # cài php

sudo apt-get install mysql-server php-mysql -y
 # cài mysql

...
```

Mọi chuyện thật nhanh dễ dàng. http://localhost - _**Dễ**_

Mình tải và custom theme basic. mình thấy mình chưa làm gì nhưng thấy giao diện admin có vẻ hơi chậm. Rồi mình mất 2 ngày để nối tên miền. và bùm anhangxom.xyz đã lên. Mình vẫn chưa tin vào mắt mình - một cậu sinh viên nhỏ.

> **Ơ nhưng sao mất tới 10s để load trang chủ nhở??**

Chiếc web chạy trang chủ động - lúc nào nó cũng query để tìm ra những bài viết mới nhất, bình luận mới nhất và bài viết mới hất theo chủ đề được ghim.

Vậy là bắt đầu tối ưu: từ index con mysql, cài bài viết tĩnh cho trang chủ, lazzy load bình luận. **Vẫn chậm**

Hồi đó, còn một vấn đề nữa là mình cứ để web 2 ngày là thảo nào hosting và tên miền cũng chia tay nhau. Chả biết tại sao. Mình không cho chiến lược backup database. Ngồi làm lại hết từ đâu luôn🦾😎.

Con OrangePi tàu rất hay lỗi. Mình setup tự khởi động lại cho mượt, nó chạy bản linux gì ấy, hồi đó lỗi restart là ngỏm lun. Con này chạy arm nên cài docker khó, cài môi trường rất cực, gõ từng lệnh ಥ\_ಥ. Sau này mình cũng học **viết scripts** cho nhanh. Nhưng cửa ải tiếp theo là mất điện, mỗi lần mất điện, router sẽ được cấp một địa chỉ ipv4 mới, thế là tên miền không trỏ được về sever. SOS, cloudflare đã có api để tự động update, nhưng bản docker mình không cài được, nên setup tay cũng rất cực ಥ\_ಥ.

Rồi, mình đã trưởng thành, mình tìm hiểu sang Lemp, Mình ‘CẤU HÌNH NGINX LÀM REVERSE PROXY KẾT HỢP VỚI WEB SERVER APACHE’ - dành hàng giờ để cấu hình. Mình thêm Redis để caching, Cache trên cloudfare, **Opcode** PHP, **FastCGI với Nginx, Browser Cache(**như css, js) và cache ngay trên db.

Nhưng rồi mình vẫn thấy Con web nhanh chết, chậm load(xuống 5s)-**hmm.**  Mệt mỏi, chán nản. và…

### Ánh sáng chân lý

*   Tốc độ:
    *   **WordPress:** Không cần thời gian để query từ database lên, việc load dữ liệu từ host lên phía client tiết kiệm rất nhiều xử lý.
    *   **Jekyll:** Tốc độ hiển thị nội dung của trang sẽ rất nhanh, nếu không muốn nói là nhanh nhất trong tất cả các “thể loại” website. User có thể chấp nhận một website giao diện ko cần pixel perfect (designer có thể không), nhưng sẽ không tha thứ cho một website load lâu hơn rùa bò.
*   Lưu trữ:
    *   **WordPress:** Hosting nào php, maria db, caching đủ kiểu
    *   **Jekyll:** một website chỉ bao gồm html/css/javascript không có database
*   Bảo mật:
    *   **WordPress:** PHP free, database cũng Free, website 80% là Wordpress - miếng nồi ngon của Hacker
    *   **Jekyll:** Không có quản lý user, không có database. Những static site chỉ  hiển thị thông tin lên bằng file html, trừ khi nó cướp được host và tên miền. Còn đâu chả hiểu hack gì?
*   Chi phí duy trì:
    *   **WordPress:** Dữ liệu càng lớn phí duy trì càng cao. Chi phí cho bộ nhớ, cpu, ram băng thông lớn.
    *   **Jekyll:** Github pages free, thân thiện lập trình viên, có CI/CD cho jekyll. Bạn chỉ cần lo money cho tên miền

> Có vẻ Jekyll đang thắng tuyệt đối!!!

### Tuổi trung niên đau thương
**Danh sách các chức năng cơ bản của một blog:**

<hr>

✔ Hiển thị bài viết (post) theo ngày mới nhất.\\
❌ Lọc được theo ngày tháng.\\
✔ Hiển thị nhóm bài viết theo thẻ (tags), hoặc một danh mục (category) để gom được các bài viết liên quan lại với nhau.\\
✔ Tìm kiếm được bài viết theo tiêu đề hoặc nội dung bên trong của toàn bộ Blog. - dùng google search custom nhanh, hiệu quả.\\
✔ Hỗ trợ hiển thị các embeded (nội dung của bên thứ ba, vd Youtube, Slideshare, Draw.io...) trực tiếp trong bài viết. - cái viết không khó.\\
✔ Bình luận dưới mỗi bài viết. - lười nên nhúng facebook comment😎.\\
✔ Hiển thị các bài viết liên quan đến bài đang đọc. - chưa hoàn thiện, đang để bài viết cùng chủ đề.\\
✔ Hỗ trợ SEO mạnh để làm tăng view, cái này 1 website chuẩn cần phải có, site không chỉ là làm cho vui mà nó thực sự hoạt động hiệu quả. Ví dụ: sitemap, robot, meta tags, có url chuẩn SEO google. - Tìm hiểu google nhá bạn!!!\\
✔ Cần có Google Analytic để xem người xem đến từ đâu và làm SEO cho chuẩn.\\
❌ Có RSS (kiểu feedly, google news) để với các trình đọc tin tức. \\ - chưa biết tích hợp kiểu gì😫.
✔ Chia sẻ được bài viết sang mạng xã hội(facebook,linked,...).

<hr>

Một người dùng luôn muốn có một trang web với giao diện admin chuyên nghiệp: biểu đồ cpu, ram chạy nhanh chuyên nghiệp, notify nhảy loạn xạ khi có người comment hay thống kê nhanh lượng người dùng trong vòng một ngày, giao diện kéo thả, viết ở mọi nơi chỉ cần có Internet, và cũng có khi - đó chỉ đơn giản là một editor tính năng tràn trề như chỉnh màu chữ, chèn hình, xử lý hình, font chữ to nhỏ, đổi kiểu chữ bay bướm loạn xạ. Static site sẽ không có những thứ đó cho bạn. Mình đã phát triển một công cụ để bạn soạn thảo markdown nhanh. Bạn có thể tham khảo ở [đây](https://anhhangxomfoto.github.io/them-bai-viet)!.

Hơn nữa có rất ít plugin Jekyll hỗ trợ chính thức trên Github pages. Những tính năng căn bản như contact form, bình luận sẽ phải nhùng từ một bên thứ 3. Tính năng comment mình đã từng dùng diqus - một thời gian trược bị chặn ở VN (khá cay, mình tưởng mình setting nhầm ở đâu), và giờ mình dùng của fb, dù khá hạn chế, và không có thông báo khi có một người nào đó bình luận.

Hồi đó, mình còn gõ nhầm code Ruby, đẩy deploy không biết check action github pages, nó dừng tự bao giờ rồi mà cứ ngồi đợi nó chạy. Mỗi lần code, vừa code vừa dò, vừa đi tìm repo của mấy anh nước ngoài copy các tính năng về test bên mình. Mỗi lần commit, đợi code và web thay đổi mất 4-5p. Sau này mò được cách cài Jekyll trên Wsl làm sever test.

Đến Jekyll bạn sẽ được tự do, tự lo =)) . Tối ưu sao cho [web nhanh](https://anhhangxomfoto.github.io/lap-trinh/nen-website-minify). Nối tên miền vào github pages, cloudflare. caching, xóa cache. Ban đầu sẽ rất nhức đầu, không sao, khổ tận cam lai, nhưng sau này nhức đầu hơn vì bạn muốn làm những thứ xịn sò tiếp theo thì bạn phải code tay😌.\\
Cộng đồng sử dụng ở VN không nhiều. Mình phải search từ thuật toán phân trang, pin bài viết, cho đến dùng công cụ tìm kiếm gì - giờ mình dùng google cho nhẹ đầu😌. Cao nhân nào có giải pháp tốt hơn thì có thể gợi ý cho mình ở phần bình luận hoặc gửi vào mail cho mình. \\
Công ty làm static site rất khó kiếm, bạn sẽ phải học rất nhiều-ít người hỗ trợ. Không sao, bạn có mình!😚

> Vậy nên hãy chú ý theo dõi các bài viết tại Blog nhé!

### Bài viết tham khảo

*   [**Kinh nghiệm tạo website cá nhân với Jekyll**](https://aicurious.io/blog/2016-09-16-xay-dung-website-voi-jekyll)
*   [**Kinh nghiệm tạo website cá nhân với Jekyll (tiếp)**](https://aicurious.io/blog/2016-09-26-xay-dung-website-voi-jekyll-lv2)
*   [**Chuyển soạn thảo blog từ WordPress sang Markdown Github**](https://dothanhlong.org/chuyen-soan-thao-blog-tu-wordpress-sang-markdown-github/)
*   [**Cách Tạo 1 Blog Nhỏ Với Jekyll**](https://caodem.com/cach-tao-1-blog-nho-voi-jekyll/)
*   [**GIÃ TỪ ... WORDPRESS**](http://acegik.net/blog/jekyll/migration/gia-tu-wordpress.html)
*   [**So sánh lợi hại giữa WordPress vs Static site**](https://topdev.vn/blog/so-sanh-loi-hai-giua-wordpress-vs-static-site/)
