# ERD - Website Cau Long Vietnam

Vi dung website static (HTML + CSS + JS), khong co database.

Tuy nhien, neu trong tuong lai can mo rong them tinh nang (chung chi, dang ky lop, thanh toan), co the su dung schema sau:

```mermaid
erDiagram
  USERS ||--o{ CLASSES : "ghi-danh"
  USERS {
    int user_id PK
    string email UK
    string password
    string full_name
    string phone
    date birth_date
    string role
    datetime created_at
  }
  
  CLASSES ||--o{ SCHEDULES : "co"
  CLASSES {
    int class_id PK
    string class_name
    int max_students
    string level
    string coach_name
    text description
    datetime created_at
  }
  
  SCHEDULES {
    int schedule_id PK
    int class_id FK
    string day_of_week
    time start_time
    time end_time
    string location
  }
  
  POSTS ||--|{ CATEGORIES : "thuoc-danh-muc"
  POSTS {
    int post_id PK
    int category_id FK
    string title
    text content
    string author
    datetime published_at
    int views
  }
  
  CATEGORIES {
    int category_id PK
    string name
    string slug
  }
```

## Chu y

- Website hien tai chi dung frontend static, khong co backend DB.
- Cac bang tren chi la tham khao cho tuong lai phat trien.
- Dung cho hoc sinh: tuy co structure database, nhung khong can deploy, chi dung de bieu dien kien thuc.
