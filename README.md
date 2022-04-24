# ParentFlag

「技育CAMPハッカソン  vol.1」で制作

## 目次
* [アプリ概要](#アプリ概要)
* [使い方](#使い方)
* [まとめ](#まとめ)

## アプリ概要
ミーティングやライブ配信時の親フラを事前に防止するためのアプリ<br>
自分の現在の状況をWebアプリから入力し、親の目の届くところにあるM5Stackにその状況が映し出されることによって、親はすぐに子供の現在の状況を理解できる<br>

## 使い方

### 仮想環境構築
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

## まとめ
今回はWebアプリの処理しか完成できなかったのでM5Stackの機能も作っていきたい！

[発表資料](https://docs.google.com/presentation/d/1E4ItL2iGTtd-Y8K2nOZsHiNJor13YKeFAR5RRWW9Rc8/edit#slide=id.g1223c2d683e_0_147)
