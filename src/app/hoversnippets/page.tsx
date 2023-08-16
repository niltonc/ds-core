import '../../snippets/hover/hover.scss';
export default function HoverSnippets() {
  return (
    <div>
      <h1>Hover.css</h1>

      <p className="intro">
        A collection of CSS3 powered hover effects to be applied to links,
        buttons, logos, SVG, featured images and so on. Easily apply to your own
        elements, modify or just use for inspiration. Available in CSS, Sass,
        and LESS.
      </p>

      <div id="effects" className="effects">
        <div>
          <h2>2D Transitions</h2>

          <button className="hvr-grow">Grow</button>
          <button className="hvr-shrink">Shrink</button>
          <button className="hvr-pulse">Pulse</button>
          <button className="hvr-pulse-grow">Pulse Grow</button>
          <button className="hvr-pulse-shrink">Pulse Shrink</button>
          <button className="hvr-push">Push</button>
          <button className="hvr-pop">Pop</button>
          <button className="hvr-bounce-in">Bounce In</button>
          <button className="hvr-bounce-out">Bounce Out</button>
          <button className="hvr-rotate">Rotate</button>
          <button className="hvr-grow-rotate">Grow Rotate</button>
          <button className="hvr-float">Float</button>
          <button className="hvr-sink">Sink</button>
          <button className="hvr-bob">Bob</button>
          <button className="hvr-hang">Hang</button>
          <button className="hvr-skew">Skew</button>
          <button className="hvr-skew-forward">Skew Forward</button>
          <button className="hvr-skew-backward">Skew Backward</button>
          <button className="hvr-wobble-horizontal">Wobble Horizontal</button>
          <button className="hvr-wobble-vertical">Wobble Vertical</button>
          <button className="hvr-wobble-to-bottom-right">
            Wobble To Bottom Right
          </button>
          <button className="hvr-wobble-to-top-right">
            Wobble To Top Right
          </button>
          <button className="hvr-wobble-top">Wobble Top</button>
          <button className="hvr-wobble-bottom">Wobble Bottom</button>
          <button className="hvr-wobble-skew">Wobble Skew</button>
          <button className="hvr-buzz">Buzz</button>
          <button className="hvr-buzz-out">Buzz Out</button>
          <button className="hvr-forward">Forward</button>
          <button className="hvr-backward">Backward</button>
        </div>

        <div>
          <h2>Background Transitions</h2>

          <button className="hvr-fade">Fade</button>
          <button className="hvr-back-pulse">Back Pulse</button>
          <button className="hvr-sweep-to-right">Sweep To Right</button>
          <button className="hvr-sweep-to-left">Sweep To Left</button>
          <button className="hvr-sweep-to-bottom">Sweep To Bottom</button>
          <button className="hvr-sweep-to-top">Sweep To Top</button>
          <button className="hvr-bounce-to-right">Bounce To Right</button>
          <button className="hvr-bounce-to-left">Bounce To Left</button>
          <button className="hvr-bounce-to-bottom">Bounce To Bottom</button>
          <button className="hvr-bounce-to-top">Bounce To Top</button>
          <button className="hvr-radial-out">Radial Out</button>
          <button className="hvr-radial-in">Radial In</button>
          <button className="hvr-rectangle-in">Rectangle In</button>
          <button className="hvr-rectangle-out">Rectangle Out</button>
          <button className="hvr-shutter-in-horizontal">
            Shutter In Horizontal
          </button>
          <button className="hvr-shutter-out-horizontal">
            Shutter Out Horizontal
          </button>
          <button className="hvr-shutter-in-vertical">
            Shutter In Vertical
          </button>
          <button className="hvr-shutter-out-vertical">
            Shutter Out Vertical
          </button>
        </div>

        <div>
          <h2>Icons</h2>

          <button className="hvr-icon-back">
            <i className="fa fa-chevron-circle-left hvr-icon"></i> Icon Back
          </button>
          <button className="hvr-icon-forward">
            Icon Forward
            <i className="fa fa-chevron-circle-right hvr-icon"></i>
          </button>
          <button className="hvr-icon-down">
            Icon Down <i className="fa fa-arrow-circle-o-down hvr-icon"></i>
          </button>
          <button className="hvr-icon-up">
            Icon Up <i className="fa fa-arrow-circle-o-up hvr-icon"></i>
          </button>
          <button className="hvr-icon-spin">
            Icon Spin <i className="fa fa-refresh hvr-icon"></i>
          </button>
          <button className="hvr-icon-drop">
            Icon Drop <i className="fa fa-tint hvr-icon"></i>
          </button>
          <button className="hvr-icon-fade">
            Icon Fade <i className="fa fa-check hvr-icon"></i>
          </button>
          <button className="hvr-icon-float-away">
            Icon Float Away <i className="fa fa-plus-circle hvr-icon"></i>
          </button>
          <button className="hvr-icon-sink-away">
            Icon Sink Away <i className="fa fa-minus-circle hvr-icon"></i>
          </button>
          <button className="hvr-icon-grow">
            Icon Grow <i className="fa fa-smile-o hvr-icon"></i>
          </button>
          <button className="hvr-icon-shrink">
            Icon Shrink <i className="fa fa-frown-o hvr-icon"></i>
          </button>
          <button className="hvr-icon-pulse">
            Icon Pulse <i className="fa fa-home hvr-icon"></i>
          </button>
          <button className="hvr-icon-pulse-grow">
            Icon Pulse Grow <i className="fa fa-home hvr-icon"></i>
          </button>
          <button className="hvr-icon-pulse-shrink">
            Icon Pulse Shrink <i className="fa fa-home hvr-icon"></i>
          </button>
          <button className="hvr-icon-push">
            Icon Push <i className="fa fa-star-o hvr-icon"></i>
          </button>
          <button className="hvr-icon-pop">
            Icon Pop <i className="fa fa-star hvr-icon"></i>
          </button>
          <button className="hvr-icon-bounce">
            Icon Bounce <i className="fa fa-thumbs-o-up hvr-icon"></i>
          </button>
          <button className="hvr-icon-rotate">
            Icon Rotate <i className="fa fa-paperclip hvr-icon"></i>
          </button>
          <button className="hvr-icon-grow-rotate">
            Icon Grow Rotate <i className="fa fa-phone hvr-icon"></i>
          </button>
          <button className="hvr-icon-float">
            Icon Float <i className="fa fa-arrow-circle-o-up hvr-icon"></i>
          </button>
          <button className="hvr-icon-sink">
            Icon Sink <i className="fa fa-arrow-circle-o-down hvr-icon"></i>
          </button>
          <button className="hvr-icon-bob">
            Icon Bob <i className="fa fa-chevron-up hvr-icon"></i>
          </button>
          <button className="hvr-icon-hang">
            Icon Hang <i className="fa fa-chevron-down hvr-icon"></i>
          </button>
          <button className="hvr-icon-wobble-horizontal">
            Icon Wobble Horizontal{' '}
            <i className="fa fa-arrow-right hvr-icon"></i>
          </button>
          <button className="hvr-icon-wobble-vertical">
            Icon Wobble Vertical <i className="fa fa-arrow-up hvr-icon"></i>
          </button>
          <button className="hvr-icon-buzz">
            Icon Buzz <i className="fa fa-clock-o hvr-icon"></i>
          </button>
          <button className="hvr-icon-buzz-out">
            Icon Buzz Out <i className="fa fa-lock hvr-icon"></i>
          </button>
        </div>

        <div>
          <h2>Border Transitions</h2>

          <button className="hvr-border-fade">Border Fade</button>
          <button className="hvr-hollow">Hollow</button>
          <button className="hvr-trim">Trim</button>
          <button className="hvr-ripple-out">Ripple Out</button>
          <button className="hvr-ripple-in">Ripple In</button>
          <button className="hvr-outline-out">Outline Out</button>
          <button className="hvr-outline-in">Outline In</button>
          <button className="hvr-round-corners">Round Corners</button>
          <button className="hvr-underline-from-left">
            Underline From Left
          </button>
          <button className="hvr-underline-from-center">
            Underline From Center
          </button>
          <button className="hvr-underline-from-right">
            Underline From Right
          </button>
          <button className="hvr-reveal">Reveal</button>
          <button className="hvr-underline-reveal">Underline Reveal</button>
          <button className="hvr-overline-reveal">Overline Reveal</button>
          <button className="hvr-overline-from-left">Overline From Left</button>
          <button className="hvr-overline-from-center">
            Overline From Center
          </button>
          <button className="hvr-overline-from-right">
            Overline From Right
          </button>
        </div>

        <div>
          <h2>Shadow and Glow Transitions</h2>

          <button className="hvr-shadow">Shadow</button>
          <button className="hvr-grow-shadow">Grow Shadow</button>
          <button className="hvr-float-shadow">Float Shadow</button>
          <button className="hvr-glow">Glow</button>
          <button className="hvr-shadow-radial">Shadow Radial</button>
          <button className="hvr-box-shadow-outset">Box Shadow Outset</button>
          <button className="hvr-box-shadow-inset">Box Shadow Inset</button>
        </div>

        <div>
          <h2>Speech Bubbles</h2>

          <button className="hvr-bubble-top">Bubble Top</button>
          <button className="hvr-bubble-right">Bubble Right</button>
          <button className="hvr-bubble-bottom">Bubble Bottom</button>
          <button className="hvr-bubble-left">Bubble Left</button>
          <button className="hvr-bubble-float-top">Bubble Float Top</button>
          <button className="hvr-bubble-float-right">Bubble Float Right</button>
          <button className="hvr-bubble-float-bottom">
            Bubble Float Bottom
          </button>
          <button className="hvr-bubble-float-left">Bubble Float Left</button>
        </div>

        <div>
          <h2>Curls</h2>

          <button className="hvr-curl-top-left">Curl Top Left</button>
          <button className="hvr-curl-top-right">Curl Top Right</button>
          <button className="hvr-curl-bottom-right">Curl Bottom Right</button>
          <button className="hvr-curl-bottom-left">Curl Bottom Left</button>
        </div>
      </div>
    </div>
  );
}
