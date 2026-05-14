# h1-sawayaka

見出しタグに「さわやか」なアニメーション付きグラデーション効果を表示するシンプルなWebコンポーネントです。

## デモ

- https://code4fukui.github.io/h1-sawayaka/

デモでは、青、ピンク、オレンジの間で滑らかに変化するグラデーションアニメーションが適用された見出しテキストを確認できます。

## 特徴

- **依存関係のないWebコンポーネント:** どのようなプロジェクトにも簡単に組み込めます。
- **`<h1-sawayaka>` と `<h2-sawayaka>` を提供:** 見出し用のカスタム要素です。
- **アニメーション付きグラデーション:** テキストに滑らかにループするグラデーションアニメーションを適用します。
- **CSSでカスタマイズ可能:** 標準のCSSを使用して要素のスタイルを変更できます。

## 使い方

JavaScriptモジュールをインポートし、HTMLでカスタムタグを使用するだけです。

```html
<script type="module" src="https://code4fukui.github.io/h1-sawayaka/h1-sawayaka.js"></script>

<h1-sawayaka>Sawayaka H1</h1-sawayaka>
<h2-sawayaka>Sawayaka H2</h2-sawayaka>
```

## カスタマイズ

`font-size`などのデフォルトスタイルをCSSで上書きできます。

```css
h1-sawayaka {
  font-size: 300%;
}

h2-sawayaka {
  font-weight: normal;
}
```

## クレジット

CSSのグラデーションとアニメーション効果は、[jigintern/SAWAYAKA-COMMUNICATION](https://github.com/jigintern/SAWAYAKA-COMMUNICATION) の成果物をベースにしています。

## ライセンス

MIT License
