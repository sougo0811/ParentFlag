from app import db, User
from werkzeug.security import generate_password_hash

#データベース作成
from app import db
db.create_all()

#スーパーアドミンの作成
super_account_name = "master"
super_account_id = 0
super_account_password = str(123456)
super_account_password=generate_password_hash(super_account_password, method='sha256')
super_account = User(user_id=super_account_id, user_name=super_account_name, user_password=super_account_password, permissionlevel="super")
db.session.add(super_account)
db.session.commit()