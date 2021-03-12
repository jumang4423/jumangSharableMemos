import random

# 和食洋食の夕食リスト
yoDinner = ["ハンバーガー", "ステーキ", "パスタ"]
waDinner = ["天ぷら", "寿司", "カツ丼"]

# 出力
print("今日の夕食なあに？ バージョン1.0")
print("和食？洋食？（和食: 1, 洋食: 2）")

# 入力
userInput = input(">>>")

# 条件分岐 && 表示
if userInput == "1":
  print("今日の夕食は" + random.choice(yoDinner) + "わよ、楽しんで！")
if userInput == "2":
  print("今日の夕食は" + random.choice(waDinner) + "わよ、楽しんで！")