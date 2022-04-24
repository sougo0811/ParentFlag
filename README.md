# 使い方

## 仮想環境構築
windows
```
python -m venv myvenv
```

Linux
```
python3 -m venv myvenv
```

仮想環境
windows
```
myvenv\Scripts\activate
```
Linux
```
source myvenv/bin/activate
```

ライブラリインストール
windows
```
pip install -r requirements.txt
```
Linux
```
python -m pip install -U --force-reinstall pip
```

myvenv/Lib/site-packages/flask-login/mixins.pyの25行目のself.idをself.user_idに変更