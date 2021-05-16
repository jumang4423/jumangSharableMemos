# 所有権システムが存在する

独特だなあ・・・

- pythonの例

```python
def main():
    hoge = 114514
    hoge2 = hoge

    hoge() // 114514
    hoge2() // 114514

```

- rustの例

```rust
fn main {
    let hoge: i32 = 114514;
    let hoge2: i32 = hoge;

    hoge() // エラー、hoge2に所有権を奪われているため
    hoge2() // 114514
}
```

# エラーハンドリング


```rust

use std::num::ParseIntError;

fn parse_str(num_str: &str) -> Result<u32, ParseIntError> {
    num_str.parse::<u32>() 
}

```

&str（イテレータてはないString）をu32(数字)に変換する関数だが、関数から帰ってくる型に注目すると
```rust
Result<u32, ParseIntError>
```

となっている

ここのResultは失敗するかもしれない型を示す型であり、ResultにはOk(hoge) とErr(foo)を返す。

↓こんな感じらしい
```rust
enum Rusult<T, E> {
  Ok(T),
  Err(E)
```

なのでこの関数を読み出す際は以下のようにかく
```rust
match parse_str("3") {
        Ok(num) => println!("{}", num), // 3が表示される。
        Err(err) => eprintln!("{}", err), //今回、エラーは出ていないのでここは実行されない
    }
```

危ない方法としては、

```rust

println!("{}", parse_str("3").unwrap());

```

```unwrap```を利用することで、Ok(())のあたいだけをとってくる。
なお、Errが起きた際はrustがpanicを起こして死ぬ