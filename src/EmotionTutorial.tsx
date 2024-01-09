import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import facepaint from "facepaint";

const Button = styled.button`
  color: ${(props: { primary?: boolean }) =>
    props.primary ? "hotpink" : "turquoise"};
`;
const Container = styled.div<{ column?: boolean }>((props) => ({
  display: "flex",
  flexDirection: props.column && "column",
}));

const Basic = ({ className }) => <div className={className}>Some text</div>;
const Fancy = styled(Basic)`
  color: hotpink;
`;

const Section = styled.section`
  background: #333;
  color: #fff;
`;
const Aside = Section.withComponent("aside");

const Child = styled.div`
  color: red;
`;
const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

const Child2 = styled.div({
  color: "red",
});
const Parent2 = styled.div({
  [Child2]: {
    color: "green",
  },
});

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color }),
);

const dynamicStyle = (props) => css`
  color: ${props.color};
`;

const Container2 = styled.div`
  ${dynamicStyle}
`;

const Button2 = styled.button`
  color: hotpink;
`;

const Example = styled("span")`
  color: lightgreen;

  & > strong {
    color: hotpink;
  }
`;

const base = css`
  color: hotpink;
`;

const danger = css`
  color: red;
`;
const base2 = css`
  background-color: darkgreen;
  color: turquoise;
`;

const Button3 = styled.button(
  {
    color: "darkorchid",
  },
  (props: { fontSize: number }) => ({
    fontSize: props.fontSize,
  }),
);

const hotpink = css({
  color: "hotpink",
});

const hotpinkHoverOrFocus = css({
  "&:hover, &:focus": hotpink,
});
const hotpinkWithBlackBackground = css(
  {
    backgroundColor: "black",
    color: "green",
  },
  hotpink,
);

const paragraph = css`
  color: turquoise;

  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`;

const paragraph2 = css`
  color: turquoise;

  header & {
    color: green;
  }
`;

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq2 = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default function EmotionTutorial() {
  return (
    <>
      <Container column>
        <Button>This is a regular button.</Button>
        <Button primary>This is a primary button.</Button>
      </Container>
      <Fancy />
      <Section>This is a section.</Section>
      <Aside>This is an aside.</Aside>
      <Parent>
        <Child>Green because I am inside a Parent</Child>
      </Parent>
      <Child>Red because I am not inside a Parent</Child>
      <Parent2>
        <Child2>green</Child2>
      </Parent2>
      <Child2>red</Child2>
      <H1 color="lightgreen">This is lightgreen.</H1>
      <Container2 color="lightgreen">This is lightgreen.</Container2>
      <Button as="a" href="https://github.com/andhl204">
        andhl204 on Github
      </Button>
      <Example>
        This is <strong>nested</strong>.
      </Example>
      <div
        css={css`
          ${base};
          background-color: #eee;
        `}
      >
        This is hotpink.
      </div>
      <div>
        <div css={base2}>This will be turquoise</div>
        <div css={[danger, base2]}>
          This will also be turquoise since the base styles overwrite the danger
          styles.
        </div>
        <div css={[base2, danger]}>This will be red</div>
      </div>
      <div
        css={{
          color: "darkorchid",
          backgroundColor: "lightgray",
        }}
      >
        This is darkorchid.
      </div>
      <Button3 fontSize={16}>This is a darkorchid button.</Button3>
      <div
        css={{
          color: "darkorchid",
          "& .name": {
            color: "orange",
          },
        }}
      >
        This is a darkorchid.
        <div className="name">This is orange.</div>
      </div>
      <div
        css={{
          color: "darkorchid",
          "@media(min-width: 420px)": {
            color: "orange",
          },
        }}
      >
        This is orange on a big screen and darkorchid on a small screen.
      </div>
      <div css={{ padding: 8, zIndex: 200 }}>
        This has 8px of padding and a z-index of 200.
      </div>
      <div
        css={[
          { color: "darkorchid" },
          { backgroundColor: "hotpink" },
          { padding: 8 },
        ]}
      >
        This is darkorchid with a hotpink background and 8px of padding.
      </div>
      <div
        css={{
          background: ["red", "linear-gradient(#e66465, #9198e5)"],
          height: 100,
        }}
      >
        This has a gradient background in browsers that support gradients and is
        red in browsers that don&apos;t support gradients
      </div>
      <div>
        <p css={hotpink}>This is hotpink.</p>
      </div>
      <div>
        <p css={hotpink}>This is hotpink</p>
        <button css={hotpinkHoverOrFocus}>
          This is hotpink on hover or focus
        </button>
        <p css={hotpinkWithBlackBackground}>
          This has a black background and is hotpink. Try moving where hotpink
          is in the css call and see if the color changes.
        </p>
      </div>
      <p css={paragraph}>
        Some text. <a>A link with a bottom border.</a>
      </p>
      <header>
        <p css={paragraph2}>This is green since it&apos;s inside a header</p>
      </header>
      <p css={paragraph2}>
        This is turquoise since it&apos;s not insede a header.
      </p>
      <p
        css={css`
          font-size: 30px;
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        Some text!
      </p>
      <div>
        <div
          css={{
            color: "green",
            [mq[0]]: { color: "gray" },
            [mq[0]]: { color: "hotpink" },
          }}
        >
          Some text!
        </div>
        <p
          css={css`
            color: green;
            ${mq[0]} {
              color: gray;
            }
            ${mq[1]} {
              color: hotpink;
            }
          `}
        >
          Some other text!
        </p>
      </div>
      <div css={mq2({ color: ["green", "gray", "hotpink"] })}>Some text.</div>
      <div>
        <Global
          styles={css`
            .some-class {
              color: hotpink !important;
            }
          `}
        />
        <Global
          styles={{
            ".some-class": {
              fontSize: 50,
              textAlign: "center",
            },
          }}
        />
        <div className="some-class">This is hotpink now!</div>
      </div>
    </>
  );
}
