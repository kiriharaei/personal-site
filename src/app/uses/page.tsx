import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: '赤木英司のスキル・開発環境',
  description: '赤木英司の保持しているITスキル・開発環境をご紹介します。',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="赤木英司の保持しているITスキル・開発環境をご紹介します。"
      intro="アプリケーションを構築したり、生産性を維持・向上させるために何を使っているのかご紹介していきます。さらなる開発効率を向上させていけるよう日々アップデートしています。それに合わせて本ページも順次更新していきます。"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="デスクトップPC raytrek XV 11700搭載モデル SSD:">
            私の愛機です。高パフォーマンスを実現でき、大抵の開発時には不便なく利用することができています。
            まだHDDの増設等余力があるため今後さらにスペックを上げていく予定です。
          </Tool>
          <Tool title="グリーンハウス 23.8型ワイドゲーミング液晶ディスプレイ 165Hz 1ms ホワイト GH-ELCG238B-WH">
            白デスク環境にするため、かつ私個人として一番使いやすい23.8型のディスプレイで開発するため導入しました。
            目にも優しく長時間ディスプレイを見ていても苦になりません。
          </Tool>
          <Tool title="CORSAIR K60 PRO TKL RGB ゲーミングキーボード -ホワイト- CH-911D11A-JP">
            こちらも白デスク環境への一歩のため導入しました。
            打感も気持ちよく無駄な力なく素早くタイピングをすることができます。
            華やかなキーボードです。
          </Tool>
          <Tool title="Logicool G(ロジクール G) G502 X PLUS LIGHTSPEED ワイヤレス RGB ゲーミングマウス">
            手首の疲れを感じにくい使い勝手の良いマウスです。
            ボタン数も13個用意されており、それぞれにキーを割り当て、より早い効率的な開発に貢献してくれています。
          </Tool>
          <Tool title="ODK l字デスク パソコンデスク L字型 ゲーミングデスク">
            これまでご紹介したアイテムをセッティングしているデスクになります。
            マルチディスプレイを簡単に組むことができ、小物類の置き場にも困らないつくりになっています。
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            メインで利用しているエディターです。
            ほぼすべての開発で利用しています。たまにサクラエディタに浮気しますが
            使い勝手ナンバーワンです。
          </Tool>
          <Tool title="GitHub">
            git管理にはやはりGitHubを利用しています。
            様々なサービスと連携することができるため、とても重宝しています。
          </Tool>
          <Tool title="Slack">
            自身のメモ書きなどで利用したり、コミュニティへの参加の際に利用しています。
            遊びはDiscord、開発はSlackの利用で使い分けています。
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            デザインと言ったらこのFigmaですよね。
            多くの場面で利用させてもらっています。
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development">
          <Tool title="Ruby - Ruby on Rails">
            現在メインで使っているフレームワークです。
            本業でも利用しており、使い慣れています。
          </Tool>
          <Tool title="Python - Django">
            個人開発メインで利用しているフレームワークです。
            現在はレシピ投稿サイト作成で利用しています。
          </Tool>
          <Tool title="JavaScript - Next.js">
            フロントエンドはNext.jsをメインで利用しています。
            Rails、Djangoと併せて利用することが多くこのプロフィールサイトもNext.jsで構築しています。            
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
